var currAssert;
var currDone;

function cbPlusAuthWindow(rcode, rmsg) {
	if (!currAssert || !currDone) {
		return;
	}
	
	currAssert.ok(rcode == 1, "rcode returns 1 : " + rcode);
	currDone();
}

function cbPlusAuthWindow2(rcode, rmsg) {
	if (!currAssert || !currDone) {
		return;
	}
	
	currAssert.ok(rcode == 0 &&
								rmsg, "rcode returns 0 : " + rcode + ", token : " + rmsg);
	currDone();
}

QUnit.testStart(function (details) {
	var name = details.name;
	console.log("name : " + name);
	if (name == 'requestPlusAuthWindow - cancel') {
			OcbAndroidJS.showToast("화면에서 취소 버튼을 선택하세요.");
	}
});

QUnit.test("requestPlusAuthWindow - cancel", function(assert) {	
	currAssert = assert;
	currDone = assert.async();
	
	OcbAndroidJS.requestPlusAuthWindow('', 'cbPlusAuthWindow');

});

QUnit.test("requestPlusAuthWindow - close", function(assert) {
	currAssert = assert;
	currDone = assert.async();
	
	OcbAndroidJS.requestPlusAuthWindow('', 'cbPlusAuthWindow');
	OcbAndroidJS.showToast("화면에서 종료 버튼을 선택하세요.");
});

QUnit.test("requestPlusAuthWindow - backkey", function(assert) {
	currAssert = assert;
	currDone = assert.async();
	
	OcbAndroidJS.requestPlusAuthWindow('', 'cbPlusAuthWindow');
	OcbAndroidJS.showToast("화면에서 backkey 버튼을 선택하세요.");
});


QUnit.test("requestPlusAuthWindow - success", function(assert) {
	currAssert = assert;
	currDone = assert.async();
	
	OcbAndroidJS.requestPlusAuthWindow('', 'cbPlusAuthWindow2');
	OcbAndroidJS.showToast("본인인증 과정을 성공적으로 마치세요.");
});