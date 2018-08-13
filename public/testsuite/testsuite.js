(function () {
	var testcase = getUrlParameter('case');
	if (!testcase || testcase === 'undefined') {
		alert("a testcase is empty");
		return;
	}
	
	console.log("testcase: " + testcase);
	
	$.ajax({
    type: "GET",
    url: "testsuite/" + testcase,
    dataType: "script",
    cache: false,
		success: function() {
		 QUnit.load();
     QUnit.start();
		}
		});

}());

