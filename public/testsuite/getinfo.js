QUnit.module("get");
QUnit.test("getAppVersion", function () { 
	var result = OcbAndroidJS.getAppVersion();
	QUnit.ok(result, "returns app version : " + result);
});

QUnit.test("getAuthInfo", function () { 
	var result = OcbAndroidJS.getAuthInfo();
	QUnit.ok(result, "returns auth info : " + result);
});

QUnit.test("getOSInfo", function () { 
	var result = OcbAndroidJS.getOSInfo();
	QUnit.ok(result, "returns os info : " + result);
});

QUnit.test("getLockerInfo", function() {
	var result = OcbAndroidJS.getLockerInfo();
	QUnit.ok(result, "returns locker info : " + result);
})

QUnit.test("getMdn", function() {
	var result = OcbAndroidJS.getMdn();
	QUnit.ok(result, "returns phone number : " + result);
})

QUnit.test("getSyrupAdDeviceId", function() {
	var result = OcbAndroidJS.getSyrupAdDeviceId();
	QUnit.ok(result, "returns syrupAdId : " + result);
})

QUnit.test("getPaymentAppUrl", function() {
	var result = OcbAndroidJS.getPaymentAppUrl();
	QUnit.ok(result == "ocbtpay", "returns payment scheme : " + result);
})

QUnit.module("is");
QUnit.test("isAgreedGisClause", function (assert) { 
	var result = OcbAndroidJS.isAgreedGisClause();
	assert.ok(true, "returns whether gis agrees : " + result);
});

QUnit.test("isAgreedOemClause(bttong, fashionsave)", function (assert) { 
	assert.expect(3);
	
	var result = OcbAndroidJS.isAgreedOemClause('');
	assert.ok(result == false, "empty type, returns false : " + result);
	
	result = OcbAndroidJS.isAgreedOemClause('bdtong');
	assert.ok(true, "bttong type, result : " + result);
	
	result = OcbAndroidJS.isAgreedOemClause('fashionsave');
	assert.ok(true, "fashionsave type, result : " + result);
	
});

QUnit.test("isBluetoothUseAgreed", function (assert) { 
	var result = OcbAndroidJS.isBluetoothUseAgreed();
	assert.ok(true, "returns using bt flag : " + result);
});

QUnit.test("isEnabledLocker", function (assert) { 
	var result = OcbAndroidJS.isEnabledLocker();
	assert.ok(true, "returns whether locker on : " + result);
});

QUnit.test("isInstalledPackage", function (assert) { 
	assert.expect(3);
	
	var result = OcbAndroidJS.isInstalledPackage('');
	assert.ok(result == false, "empty pkg name, returns false : " + result);
	
	result = OcbAndroidJS.isInstalledPackage('com.skmc.okcashbag.home_google');
	assert.ok(result == true, "ocb app installed, restuns true : " + result);
	
	result = OcbAndroidJS.isInstalledPackage('com.skmc.okcashbag.fake');
	assert.ok(result == false, "installed, returns false : " + result);
});

