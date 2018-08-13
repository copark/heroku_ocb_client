var currAssert;
var currDone;

function cbVungleWindow(rcode, jsonMessage) {
	if (!currAssert || !currDone) {
		return;
	}

	currAssert.ok(rcode == 0 &&
								rmsg, "rcode returns 0 : " + rcode + ", msg : " + jsonMessage);
	currDone();
}

QUnit.testStart(function (details) {
	var name = details.name;
	console.log("name : " + name);
});

QUnit.test("requestVungleAdWindow call", function(assert) {
	currAssert = assert;
	currDone = assert.async();

	OcbAndroidJS.requestVungleAdWindow('', 'cbVungleWindow');
	OcbAndroidJS.showToast("Vungle 동영상을 요청 합니다.");
});
