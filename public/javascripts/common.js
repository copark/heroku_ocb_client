$(function(){
		setupController();
});

function unitTest() {
//	QUnit.load();
	QUnit.start();
}

function setupController() {
		$("#form_device").submit(queryAppPushId);
		$("#form_gcm").submit(sendPush);
		$("#form_pushid").submit(getDeviceInfo);
		$("#form_deviceinfo").submit(queryDeviceInfo);
	
	  $("#form_schemeinfo").submit(moveToScheme);
	
		$("#form_urlutil").find("#url_encode").click(encodeUrl);
		$("#form_urlutil").find("#url_decode").click(decodeUrl);
	
		$("#form_adbscheme").submit(executeAdbScheme);
	  $("#form_deviceinfo_dev").submit(queryDeviceInfo);
	
	  $("#form_passpush").submit(searchOcbPass)
}

function executeAdbScheme() {
	console.log("executeAdbScheme");
	$.ajax({
				url: "request",
				data:  $(this).serialize(),
				type: "post",
				dataType: "json",
				success: function(res) {
					console.log("response to executeAdb = " + res);
			 }
		});	
		
	return false;
}

function encodeUrl() {
	var data = 	$("#form_urlutil #url_data").val();
	var encData = encodeURIComponent(data);
	$("#form_urlutil #url_data").val(encData);
	
	console.log("encodeUrl " + encData);
}

function decodeUrl() {
	var data = 	$("#form_urlutil #url_data").val();
	var decData = decodeURIComponent(data);
	$("#form_urlutil #url_data").val(decData);
	
	console.log("decodeUrl " + decData);
}

function moveToScheme() {		
	if ( this.browser == "android+chrome/25+" ) {
			console.log("android+chrome/25+");
	}
	var val = $(this).find("#scheme_val").val();
	var fullscheme = val; 
	
	//var fullscheme = "intent://scan/#Intent;scheme=zxing;package=com.google.zxing.client.android;end";
	//var fullscheme = "intent://searchPostCode/#Intent;scheme=ocbt;package=com.skmc.okcashbag.home_google;end";
	
	$("#scheme_golink").attr("href", fullscheme);	
	console.log("moveToScheme val " + fullscheme);

	$("#scheme_golink")[0].click();
	
	return false;
}

function queryDeviceInfo() {
	  console.log("queryDeviceInfo");
		
		$("#form_response #response").text("");
		
		$.ajax({
				url: "request",
				data:  $(this).serialize(),
				type: "post",
				dataType: "json",
				success: function(res) {
					console.log("response to getDeviceInfo = " + res);		
					// var data = JSON.parse(res);	
				  $("#form_response #response").text(res);
			 }
		});	
		
		return false;
}

function queryAppPushId() {		
	  console.log("queryAppPushId");
		
		$.ajax({
				url: "request",
				data:  $(this).serialize(),
				type: "post",
				dataType: "json",
				success: function(res) {
					console.log("response to getDeviceInfo = " + res);		
					var data = JSON.parse(res);	
					registerPushId(data.appPushId);
			 }
		});	
		
		return false;
}

function getDeviceInfo() {
		var pushId = $("#form_pushid #push_id").val();
		registerPushId(pushId);
		return false;
}


function registerPushId(appPushId) {
		console.log("push id = " + appPushId);
	$("#form_gcm #pushId").val(appPushId);
	$("#form_gcm #appPushId").val(appPushId);		
}

function sendPush() {
		console.log("sendPush");
		
		$.ajax({
				url: "request",
				data:  $(this).serialize(),
				type: "post",
				dataType: "json",
				success: function(res) {
					console.log("response to sendPush = " + res);
			 }
		});	
		
		return false;
}

function getUrlParameter(param) {
	var purl = window.location.search.substring(1);
	var vars = purl.split('&');
	for (var i = 0; i < vars.length; i++) {
		var pname = vars[i].split('=');
		if (pname[0] == param) 
		{
			return pname[1];
		}
	}
}

function searchOcbPass() {
	console.log("searchOcbPass");
	
	$("#form_response #response").text("");
		
		$.ajax({
				url: "request",
				data:  $(this).serialize(),
				type: "post",
				dataType: "json",
				success: function(res) {
					console.log("response to searchOcbPass = " + res);			
					var data = JSON.stringify(res, null, 2)
				  $("#form_response #response").text(data);
			 },
			error: function(error) { 
				 console.log("response to searchOcbPass = " + res);		
				 var data = JSON.stringify(res, null, 2)
				 $("#form_response #response").text(data);
			}
		});	
		
		return false;
}