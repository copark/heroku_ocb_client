$(function(){

    console.log("loaded");
    
    test();
   // getinfo();
});

function test() {
    var params = {
      cmd: "sendPush",
    }
    $.ajax({
      url: "request",
      data: params,
      type: "get",
      dataType: "json",
      success: function(data){
        console.log(data);        
      }
    });
}



function getinfo() {
    var params = {
     mbr_id: "",
     mdn: "01052623311",
     crypted: "0",
     is_real: "0",
     gpb_yn: "1",
     _session_id: ""
    }
    
    $.ajax({
      url: "http://msg-al.okcashbag.com/sugar/internal/push/device",
      data: params,
      type: "get",
      dataType: "json",
        crossDomain: true,
      success: function(data){
        console.log(data);
      }
    });
}