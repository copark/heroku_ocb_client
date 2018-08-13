var currAssert;
var currDone;

var testBelow;
var testAmount;

function cbAutoChargeSetting(rcode, rmsg) {
	if (!currAssert || !currDone) {
		return;
	}
	
	var result = OcbCashbeeJS.isEnabledAutoChargeSetting();
	var below = OcbCashbeeJS.getAutoChargeAmountBelow();
	var amount = OcbCashbeeJS.getAutoChargeAmount();
	
	currAssert.ok(rcode == 0 && result == testEnabled && testBelow == below && testAmount == amount, "rcode returns: " + rcode + ", " + below + ", " + amount);
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

QUnit.module("casbhee settings");
QUnit.test("setBalanceNotification - setting on", function(assert) {		
	OcbCashbeeJS.setBalanceNotification(true, 5000);
	var result = OcbCashbeeJS.isEnabledBalanceNotification();
	var below = OcbCashbeeJS.getBalanceNotificationAmountBelow();
	assert.ok(result == true && below == 5000, "setting on, 5000 " + result);
});

QUnit.test("setBalanceNotification - setting off", function(assert) {		
	OcbCashbeeJS.setBalanceNotification(false, 0);
	var result = OcbCashbeeJS.isEnabledBalanceNotification();
	var below = OcbCashbeeJS.getBalanceNotificationAmountBelow();
	assert.ok(result == false, "setting off" + result);
});

QUnit.test("setBalanceNotification - setting below", function(assert) {		
	assert.expect(3);
	
	OcbCashbeeJS.setBalanceNotification(true, 1000);
	var result = OcbCashbeeJS.isEnabledBalanceNotification();
	var below = OcbCashbeeJS.getBalanceNotificationAmountBelow();
	assert.ok(result == true && below == 1000, "setting on, 1000 " + result);
	
	OcbCashbeeJS.setBalanceNotification(true, 7000);
  result = OcbCashbeeJS.isEnabledBalanceNotification();
	below = OcbCashbeeJS.getBalanceNotificationAmountBelow();
	assert.ok(result == true && below == 7000, "setting on, 7000 " + result);
	
	OcbCashbeeJS.setBalanceNotification(true, 5000);
  result = OcbCashbeeJS.isEnabledBalanceNotification();
	below = OcbCashbeeJS.getBalanceNotificationAmountBelow();
	assert.ok(result == true && below == 5000, "setting on, 5000 " + result);
});


QUnit.test("setAutoChargeNotification - setting on", function(assert) {		
	OcbCashbeeJS.setAutoChargeNotification(true);
	var result = OcbCashbeeJS.isEnabledAutoChargeNotification();
	assert.equal(result, true, "setting on " + result);
});

QUnit.test("setAutoChargeNotification - setting off", function(assert) {		
	OcbCashbeeJS.setAutoChargeNotification(false);
	var result = OcbCashbeeJS.isEnabledAutoChargeNotification();
	assert.equal(result, false, "setting off " + result);
});

QUnit.test("setAutoChargeSetting - setting on(5000,10000)", function(assert) {
	currAssert = assert;
	currDone = assert.async();
	
	testEnabled = true;
	testBelow = 5000;
	testAmount = 10000;
	
	OcbCashbeeJS.setAutoChargeSetting('cbAutoChargeSetting', true, testBelow, testAmount);
});


QUnit.test("setAutoChargeSetting - setting below(10000, 50000)", function(assert) {
	currAssert = assert;
	currDone = assert.async();
	
	testEnabled = true;
	testBelow = 10000;
	testAmount = 50000;
	
	OcbCashbeeJS.setAutoChargeSetting('cbAutoChargeSetting', testEnabled, testBelow, testAmount);
});

QUnit.test("setAutoChargeSetting - setting below(7000, 30000)", function(assert) {
	currAssert = assert;
	currDone = assert.async();
	
	testEnabled = true;
	testBelow = 7000;
	testAmount = 30000;
	
	OcbCashbeeJS.setAutoChargeSetting('cbAutoChargeSetting', testEnabled, testBelow, testAmount);
});

QUnit.test("setAutoChargeSetting - setting off", function(assert) {
	currAssert = assert;
	currDone = assert.async();
	
	testEnabled = false;
	testBelow = 7000;
	testAmount = 30000;
	
	OcbCashbeeJS.setAutoChargeSetting('cbAutoChargeSetting', testEnabled, testBelow, testAmount);
});


QUnit.test("deleteCashbeeService", function(assert) {		
	OcbCashbeeJS.deleteCashbeeService();
	var result = OcbCashbeeJS.isRegisterdCashbeeService();
	assert.equal(result, false, "deleteCashbeeService is " + result);
});
