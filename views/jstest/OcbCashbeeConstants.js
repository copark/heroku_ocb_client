// CASHBEE CONSTANTS
const CASHBEE_CONST  = {
     M_CODE_INTERNAL_USIMCHECK  : 1000,
     M_CODE_INIT_STATUS  : 4000,
     S_CODE_USIM_MANAGER_INSTALLED  : 4001,
     S_CODE_USIM_MANAGER_NOT_INSTALL  : 4002,
     S_CODE_USIM_MANAGER_UPGRADE  : 4003,
     S_CODE_USIM_MANAGER_UNKNOWN  : 4004,
     S_CODE_NETWORK_SUCCESS  : 4005,
     S_CODE_NETWORK_FAIL  : 4006,
     S_CODE_PROPERTIES_FAIL  : 4007,
     M_CODE_USIM_ISSUE_STATUS  : 4100,
     S_CODE_USIM_ISSUE_STATUS_1ST  : 4101,
     S_CODE_USIM_ISSUE_STATUS_2ST  : 4102,
     S_CODE_USIM_ISSUE_STATUS_NONE  : 4103,
     S_CODE_USIM_ISSUE_STATUS_DISABLE  : 4104,
     M_CODE_USIM_ISSUE_DELETE_RESULT  : 4200,
     M_CODE_USIM_ISSUE_1ST_RESULT  : 4300,
     M_CODE_USIM_ISSUE_2ST_RESULT  : 4400,
     M_CODE_ENABLE_RESULT  : 4500,
     M_CODE_ISSUE_ENABLE_RESULT  : 4600,
     M_CODE_PROVISION_RESULT  : 4700,
     M_CODE_RECENT_USING_RESULT  : 4800,
     M_CODE_RECENT_USING_TRANSPORTATION_RESULT  : 4801,
     M_CODE_CARD_INFO_RESULT  : 4900,
     M_CODE_USER_INFO_LOOKUP_RESULT  : 5000,
     M_CODE_OWNER_SHIP_REGISTER_RESULT  : 5100,
     M_CODE_OWNER_SHIP_RELEASE_RESULT  : 5300,
     M_CODE_AUTO_CHARGE_RELEASE_RESULT  : 5200,
     M_CODE_PAY_COMPANY_FEE_RESULT  : 5400,
     M_CODE_PAY_COMPANY_FEE_CALCULATOR_RESULT  : 5401,
     M_CODE_MONTHLY_USING_LIST_RESULT  : 5500,
     M_CODE_CARD_TYPE_CHANGE_RESULT  : 5600,
     M_CODE_RSA_KEY_RESULT  : 5700,
     M_CODE_SERVICE_CENTER_RESULT  : 5800,
     M_CODE_RECEIVED_GIFTBOX_RESULT  : 5900,
     M_CODE_RECEIVED_GIFT_ITEM_INFO_RESULT  : 5901,
     M_CODE_CHARGE_BALANCE_BY_GIFT_ITEM  : 5902,
     M_CODE_INFO_PLACE_RESULT  : 6000,
     M_CODE_PAY_MOBILIANS_URL_RESULT  : 7000,
     M_CODE_PAY_MOBILIANS_CHARGE_RESULT  : 7001,
     M_CODE_PAY_LOTTECARD_URL_RESULT  : 7002,
     M_CODE_PAY_LOTTECARD_CHARGE_RESULT  : 7003,
     M_CODE_PAY_BCCARD_CHARGE_RESULT  : 7004,
     M_CODE_PAY_ETC_CARD_URL_RESULT  : 7005,
     M_CODE_PAY_ETC_CARD_CHARGE_RESULT  : 7006,
     M_CODE_PAY_MENTE_TYPE  : 7007,
     M_CODE_PAY_BCCARD_AUTO_CHARGE_SET_RESULT  : 7008,
     M_CODE_PAY_AUTO_CHARGE_RESULT  : 7009,
     M_CODE_PAY_LOTTECARD_AUTO_CHARGE_SET_RESULT  : 7010,
     M_CODE_PAY_OCB_POINT_CHARGE_RESULT : 7011,
     M_CODE_GIFT_SEND_RESULT  : 9000,
     M_CODE_REGISTER_AUTOFILL_CREDITCARD  : 10000,
     M_CODE_CHARGE_AUTOFILL  : 10001,
     M_CODE_POST_PAID_RELEASE  : 10002,
     M_CODE_CHARGE_AUTOFILL_MANUAL  : 10003,
     M_CODE_LPOINT_JOIN  : 11000,
     M_CODE_LPOINT_STATUS  : 11001,
     M_CODE_LPOINT_INFO  : 11002,
     M_CODE_NFILTER_KEY_RESULT  : 12000,
     M_CODE_ETC_LOGO_RESULT  : 8000,
     M_CODE_TERMS_URL_RESULT  : 8001,
     M_CODE_DEDUCTION  : 8002,
     M_CODE_BANK_CODE  : 8003,
     M_CODE_REFUND  : 8004,
     M_CODE_USIM_CHECK  : 8005,
     M_CODE_OKCASHBAG_TO_CASHBEE_URL  : 8006,
     M_CODE_CASHBEE_TO_OKCASHBAG_URL  : 8007,
     M_CODE_CASHBEE_CARD_LOST_STEP1  : 8008,
     M_CODE_CASHBEE_CARD_LOST_STEP2  : 8009,
     M_CODE_CASHBEE_CARD_LOST_STEP3  : 8010,
     M_CODE_CASHBEE_NOTICE  : 8011,
     S_SUCCESS  : 1,
     S_CODE_PROVISION_AGREE  : 1,
     S_FAIL  : -1,
     S_FAIL_AUTOCHARGE  : -40004,
     S_FAIL_POSTPAID  : -40005,
     S_API_INIT_SUCCESS_CHECK  : -2,
     S_CODE_PROVISION_DISAGREE  : -444,
     S_CODE_INTERNAL_SOI_CHARGE_FAIL : -990,
     S_CODE_INTERNAL_SOI_CHARGE_NETERROR : -991,
     M_CODE_RECOVERY_LIST_RESULT : 8015,
     M_CODE_RECOVERY_DETAIL_RESULT : 8016,
     M_CODE_RECOVERY_CHARGE_RESULT : 8017
};

const CASHBEE_PARAM = {
    PAYMENT_TYPE_POSTPAID : "Y",
    PAYMENT_TYPE_PREPAY : "N"
};

const CASHBEE_GRADE = {
    GRADE_ELEMANTRY_1 : "11",
    GRADE_ELEMANTRY_2 : "12",
    GRADE_ELEMANTRY_3 : "13",
    GRADE_ELEMANTRY_4 : "14",
    GRADE_ELEMANTRY_5 : "15",
    GRADE_ELEMANTRY_6 : "16",
    GRADE_MIDDLE_SCHOOL_1 : "21",
    GRADE_MIDDLE_SCHOOL_2 : "22",
    GRADE_MIDDLE_SCHOOL_3 : "23",
    GRADE_HIGH_SCHOOL_1 : "31",
    GRADE_HIGH_SCHOOL_2 : "32",
    GRADE_HIGH_SCHOOL_3 : "33"
};
