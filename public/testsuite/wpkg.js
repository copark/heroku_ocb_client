var currAssert;
var currDone;

function cbWelcomePkg(rcode, rmsg) {
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
});

QUnit.test("requestWelcomePackage call", function(assert) {
	currAssert = assert;
	currDone = assert.async();

	OcbAndroidJS.requestWelcomePackage('cbWelcomePkg');
	OcbAndroidJS.showToast("App 웰컴 패키지 프로모션 대상자인지 조회중입니다");
});