$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Kobil.feature");
formatter.feature({
  "line": 2,
  "name": "As a product owner I want to make sure navigation,Sign up,Login,Activate new Device Features are working as expected",
  "description": "",
  "id": "as-a-product-owner-i-want-to-make-sure-navigation,sign-up,login,activate-new-device-features-are-working-as-expected",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Test_Kobil"
    }
  ]
});
formatter.scenarioOutline({
  "line": 4,
  "name": "To verify the the navigation is working as expected",
  "description": "",
  "id": "as-a-product-owner-i-want-to-make-sure-navigation,sign-up,login,activate-new-device-features-are-working-as-expected;to-verify-the-the-navigation-is-working-as-expected",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I navigate to Kobil Application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on the \"\u003cLink\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I should be Navigated to \"\u003cpageTitile\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "as-a-product-owner-i-want-to-make-sure-navigation,sign-up,login,activate-new-device-features-are-working-as-expected;to-verify-the-the-navigation-is-working-as-expected;",
  "rows": [
    {
      "cells": [
        "TestCase ID",
        "Link",
        "pageTitile"
      ],
      "line": 10,
      "id": "as-a-product-owner-i-want-to-make-sure-navigation,sign-up,login,activate-new-device-features-are-working-as-expected;to-verify-the-the-navigation-is-working-as-expected;;1"
    },
    {
      "cells": [
        "TC_TrustedSign_015",
        "Start Demo",
        "KOBIL Trusted Sign"
      ],
      "line": 11,
      "id": "as-a-product-owner-i-want-to-make-sure-navigation,sign-up,login,activate-new-device-features-are-working-as-expected;to-verify-the-the-navigation-is-working-as-expected;;2"
    },
    {
      "cells": [
        "TC_TrustedSign_016",
        "Help in Trusted OTP",
        "KOBIL mAST - Help"
      ],
      "line": 12,
      "id": "as-a-product-owner-i-want-to-make-sure-navigation,sign-up,login,activate-new-device-features-are-working-as-expected;to-verify-the-the-navigation-is-working-as-expected;;3"
    },
    {
      "cells": [
        "TC_TrustedSign_021",
        "Login Help",
        "KOBIL mAST - Help"
      ],
      "line": 13,
      "id": "as-a-product-owner-i-want-to-make-sure-navigation,sign-up,login,activate-new-device-features-are-working-as-expected;to-verify-the-the-navigation-is-working-as-expected;;4"
    },
    {
      "cells": [
        "TC_TrustedSign_022",
        "Activate Create",
        "KOBIL Trusted Sign"
      ],
      "line": 14,
      "id": "as-a-product-owner-i-want-to-make-sure-navigation,sign-up,login,activate-new-device-features-are-working-as-expected;to-verify-the-the-navigation-is-working-as-expected;;5"
    },
    {
      "cells": [
        "TC_TrustedSign_023",
        "Login switch OTP",
        "OTP Login"
      ],
      "line": 15,
      "id": "as-a-product-owner-i-want-to-make-sure-navigation,sign-up,login,activate-new-device-features-are-working-as-expected;to-verify-the-the-navigation-is-working-as-expected;;6"
    },
    {
      "cells": [
        "TC_TrustedSign_024",
        "Login switch Sign",
        "KOBIL Trusted Sign"
      ],
      "line": 16,
      "id": "as-a-product-owner-i-want-to-make-sure-navigation,sign-up,login,activate-new-device-features-are-working-as-expected;to-verify-the-the-navigation-is-working-as-expected;;7"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 68065526,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "To verify the the navigation is working as expected",
  "description": "",
  "id": "as-a-product-owner-i-want-to-make-sure-navigation,sign-up,login,activate-new-device-features-are-working-as-expected;to-verify-the-the-navigation-is-working-as-expected;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Test_Kobil"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I navigate to Kobil Application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on the \"Start Demo\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I should be Navigated to \"KOBIL Trusted Sign\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.i_navigate_to_Kobil_Application()"
});
formatter.write("Current Page Title is KOBIL mAST - Designed, developed and made in Germany");
formatter.embedding("image/png", "embedded0.png");
formatter.result({
  "duration": 10563445525,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Start Demo",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.i_click_on_the(String)"
});
formatter.write("Current Page Title is KOBIL Trusted Sign");
formatter.embedding("image/png", "embedded1.png");
formatter.result({
  "duration": 470592147,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "KOBIL Trusted Sign",
      "offset": 26
    }
  ],
  "location": "StepDefinitions.i_should_be_Navigated_to(String)"
});
formatter.write("Current Page Title is KOBIL Trusted Sign");
formatter.embedding("image/png", "embedded2.png");
formatter.result({
  "duration": 1124727746,
  "status": "passed"
});
formatter.before({
  "duration": 5974073,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "To verify the the navigation is working as expected",
  "description": "",
  "id": "as-a-product-owner-i-want-to-make-sure-navigation,sign-up,login,activate-new-device-features-are-working-as-expected;to-verify-the-the-navigation-is-working-as-expected;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Test_Kobil"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I navigate to Kobil Application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on the \"Help in Trusted OTP\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I should be Navigated to \"KOBIL mAST - Help\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.i_navigate_to_Kobil_Application()"
});
formatter.write("Current Page Title is KOBIL mAST - Designed, developed and made in Germany");
formatter.embedding("image/png", "embedded3.png");
formatter.result({
  "duration": 8764736724,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Help in Trusted OTP",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.i_click_on_the(String)"
});
formatter.write("Current Page Title is KOBIL mAST - Help");
formatter.embedding("image/png", "embedded4.png");
formatter.result({
  "duration": 668119876,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "KOBIL mAST - Help",
      "offset": 26
    }
  ],
  "location": "StepDefinitions.i_should_be_Navigated_to(String)"
});
formatter.write("Current Page Title is KOBIL mAST - Help");
formatter.embedding("image/png", "embedded5.png");
formatter.result({
  "duration": 995817524,
  "status": "passed"
});
formatter.before({
  "duration": 6690712,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "To verify the the navigation is working as expected",
  "description": "",
  "id": "as-a-product-owner-i-want-to-make-sure-navigation,sign-up,login,activate-new-device-features-are-working-as-expected;to-verify-the-the-navigation-is-working-as-expected;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Test_Kobil"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I navigate to Kobil Application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on the \"Login Help\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I should be Navigated to \"KOBIL mAST - Help\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.i_navigate_to_Kobil_Application()"
});
formatter.write("Current Page Title is KOBIL mAST - Designed, developed and made in Germany");
formatter.embedding("image/png", "embedded6.png");
formatter.result({
  "duration": 8154570447,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login Help",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.i_click_on_the(String)"
});
formatter.write("Current Page Title is KOBIL mAST - Help");
formatter.embedding("image/png", "embedded7.png");
formatter.result({
  "duration": 569815847,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "KOBIL mAST - Help",
      "offset": 26
    }
  ],
  "location": "StepDefinitions.i_should_be_Navigated_to(String)"
});
formatter.write("Current Page Title is KOBIL mAST - Help");
formatter.embedding("image/png", "embedded8.png");
formatter.result({
  "duration": 1130921809,
  "status": "passed"
});
formatter.before({
  "duration": 5600136,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "To verify the the navigation is working as expected",
  "description": "",
  "id": "as-a-product-owner-i-want-to-make-sure-navigation,sign-up,login,activate-new-device-features-are-working-as-expected;to-verify-the-the-navigation-is-working-as-expected;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Test_Kobil"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I navigate to Kobil Application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on the \"Activate Create\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I should be Navigated to \"KOBIL Trusted Sign\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.i_navigate_to_Kobil_Application()"
});
formatter.write("Current Page Title is KOBIL mAST - Designed, developed and made in Germany");
formatter.embedding("image/png", "embedded9.png");
formatter.result({
  "duration": 7601959735,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Activate Create",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.i_click_on_the(String)"
});
formatter.write("Current Page Title is KOBIL Trusted Sign");
formatter.embedding("image/png", "embedded10.png");
formatter.result({
  "duration": 692020186,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "KOBIL Trusted Sign",
      "offset": 26
    }
  ],
  "location": "StepDefinitions.i_should_be_Navigated_to(String)"
});
formatter.write("Current Page Title is KOBIL Trusted Sign");
formatter.embedding("image/png", "embedded11.png");
formatter.result({
  "duration": 1004509559,
  "status": "passed"
});
formatter.before({
  "duration": 6380139,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "To verify the the navigation is working as expected",
  "description": "",
  "id": "as-a-product-owner-i-want-to-make-sure-navigation,sign-up,login,activate-new-device-features-are-working-as-expected;to-verify-the-the-navigation-is-working-as-expected;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Test_Kobil"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I navigate to Kobil Application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on the \"Login switch OTP\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I should be Navigated to \"OTP Login\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.i_navigate_to_Kobil_Application()"
});
formatter.write("Current Page Title is KOBIL mAST - Designed, developed and made in Germany");
formatter.embedding("image/png", "embedded12.png");
formatter.result({
  "duration": 9765817037,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login switch OTP",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.i_click_on_the(String)"
});
formatter.write("Current Page Title is OTP Login");
formatter.embedding("image/png", "embedded13.png");
formatter.result({
  "duration": 565049707,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "OTP Login",
      "offset": 26
    }
  ],
  "location": "StepDefinitions.i_should_be_Navigated_to(String)"
});
formatter.write("Current Page Title is OTP Login");
formatter.embedding("image/png", "embedded14.png");
formatter.result({
  "duration": 1048907706,
  "status": "passed"
});
formatter.before({
  "duration": 5286885,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "To verify the the navigation is working as expected",
  "description": "",
  "id": "as-a-product-owner-i-want-to-make-sure-navigation,sign-up,login,activate-new-device-features-are-working-as-expected;to-verify-the-the-navigation-is-working-as-expected;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Test_Kobil"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I navigate to Kobil Application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on the \"Login switch Sign\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I should be Navigated to \"KOBIL Trusted Sign\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.i_navigate_to_Kobil_Application()"
});
formatter.write("Current Page Title is KOBIL mAST - Designed, developed and made in Germany");
formatter.embedding("image/png", "embedded15.png");
formatter.result({
  "duration": 9665791915,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login switch Sign",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.i_click_on_the(String)"
});
formatter.write("Current Page Title is KOBIL Trusted Sign");
formatter.embedding("image/png", "embedded16.png");
formatter.result({
  "duration": 719384102,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "KOBIL Trusted Sign",
      "offset": 26
    }
  ],
  "location": "StepDefinitions.i_should_be_Navigated_to(String)"
});
formatter.write("Current Page Title is KOBIL Trusted Sign");
formatter.embedding("image/png", "embedded17.png");
formatter.result({
  "duration": 1035956889,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 19,
  "name": "To verify the the Sign is working as expected",
  "description": "",
  "id": "as-a-product-owner-i-want-to-make-sure-navigation,sign-up,login,activate-new-device-features-are-working-as-expected;to-verify-the-the-sign-is-working-as-expected",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 20,
  "name": "I navigate to Kobil Application Sign Up Page",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "I Sign up with \"\u003cemailId\u003e\" and condition as \"\u003cCondition\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I should get the Message as \"\u003cexpected\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 24,
  "name": "",
  "description": "",
  "id": "as-a-product-owner-i-want-to-make-sure-navigation,sign-up,login,activate-new-device-features-are-working-as-expected;to-verify-the-the-sign-is-working-as-expected;",
  "rows": [
    {
      "cells": [
        "Test Case ID",
        "Condition",
        "expected",
        "emailId"
      ],
      "line": 25,
      "id": "as-a-product-owner-i-want-to-make-sure-navigation,sign-up,login,activate-new-device-features-are-working-as-expected;to-verify-the-the-sign-is-working-as-expected;;1"
    },
    {
      "cells": [
        "TC_TrustedSign_001",
        "Captcha Not Checked",
        "Please verify your identity with captcha",
        "athithya24@gmail.com"
      ],
      "line": 26,
      "id": "as-a-product-owner-i-want-to-make-sure-navigation,sign-up,login,activate-new-device-features-are-working-as-expected;to-verify-the-the-sign-is-working-as-expected;;2"
    },
    {
      "cells": [
        "TC_TrustedSign_006",
        "Invalid Email Trusted Sign",
        "You\u0027re account doesn\u0027t exists, please check your Email",
        "ab@gmail.com"
      ],
      "line": 27,
      "id": "as-a-product-owner-i-want-to-make-sure-navigation,sign-up,login,activate-new-device-features-are-working-as-expected;to-verify-the-the-sign-is-working-as-expected;;3"
    },
    {
      "cells": [
        "TC_TrustedSign_008",
        "Invalid Email Trusted OTP",
        "Getting user certificates failed.",
        "ab@gmail.com"
      ],
      "line": 28,
      "id": "as-a-product-owner-i-want-to-make-sure-navigation,sign-up,login,activate-new-device-features-are-working-as-expected;to-verify-the-the-sign-is-working-as-expected;;4"
    },
    {
      "cells": [
        "TC_TrustedSign_010",
        "Captacha Not checked Activate",
        "Please verify your identity with captcha",
        "athithya24@gmail.com"
      ],
      "line": 29,
      "id": "as-a-product-owner-i-want-to-make-sure-navigation,sign-up,login,activate-new-device-features-are-working-as-expected;to-verify-the-the-sign-is-working-as-expected;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1687181,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "To verify the the Sign is working as expected",
  "description": "",
  "id": "as-a-product-owner-i-want-to-make-sure-navigation,sign-up,login,activate-new-device-features-are-working-as-expected;to-verify-the-the-sign-is-working-as-expected;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Test_Kobil"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "I navigate to Kobil Application Sign Up Page",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "I Sign up with \"athithya24@gmail.com\" and condition as \"Captcha Not Checked\"",
  "matchedColumns": [
    1,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I should get the Message as \"Please verify your identity with captcha\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.i_navigate_to_Kobil_Application_Sign_Up_Page()"
});
formatter.write("Current Page Title is KOBIL Trusted Sign");
formatter.embedding("image/png", "embedded18.png");
formatter.result({
  "duration": 9448874328,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "athithya24@gmail.com",
      "offset": 16
    },
    {
      "val": "Captcha Not Checked",
      "offset": 56
    }
  ],
  "location": "StepDefinitions.i_Sign_up_with_and_condition_as(String,String)"
});
formatter.write("Current Page Title is KOBIL Trusted Sign");
formatter.embedding("image/png", "embedded19.png");
formatter.result({
  "duration": 638874672,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Please verify your identity with captcha",
      "offset": 29
    }
  ],
  "location": "StepDefinitions.i_should_get_the_Message_as(String)"
});
formatter.write("Current Page Title is KOBIL Trusted Sign");
formatter.embedding("image/png", "embedded20.png");
formatter.result({
  "duration": 11296783559,
  "status": "passed"
});
formatter.before({
  "duration": 4394434,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "To verify the the Sign is working as expected",
  "description": "",
  "id": "as-a-product-owner-i-want-to-make-sure-navigation,sign-up,login,activate-new-device-features-are-working-as-expected;to-verify-the-the-sign-is-working-as-expected;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Test_Kobil"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "I navigate to Kobil Application Sign Up Page",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "I Sign up with \"ab@gmail.com\" and condition as \"Invalid Email Trusted Sign\"",
  "matchedColumns": [
    1,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I should get the Message as \"You\u0027re account doesn\u0027t exists, please check your Email\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.i_navigate_to_Kobil_Application_Sign_Up_Page()"
});
formatter.write("Current Page Title is KOBIL Trusted Sign");
formatter.embedding("image/png", "embedded21.png");
formatter.result({
  "duration": 8335716329,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ab@gmail.com",
      "offset": 16
    },
    {
      "val": "Invalid Email Trusted Sign",
      "offset": 48
    }
  ],
  "location": "StepDefinitions.i_Sign_up_with_and_condition_as(String,String)"
});
formatter.write("Current Page Title is KOBIL Trusted Sign");
formatter.embedding("image/png", "embedded22.png");
formatter.result({
  "duration": 583517216,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "You\u0027re account doesn\u0027t exists, please check your Email",
      "offset": 29
    }
  ],
  "location": "StepDefinitions.i_should_get_the_Message_as(String)"
});
formatter.result({
  "duration": 10055062054,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//p[@class\u003d\u0027form-error-message\u0027]\"}\n  (Session info: chrome\u003d65.0.3325.181)\n  (Driver info: chromedriver\u003d2.36.540470 (e522d04694c7ebea4ba8821272dbef4f9b818c91),platform\u003dWindows NT 6.3.9600 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027BOLT\u0027, ip: \u0027192.168.43.228\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_144\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.36.540470 (e522d04694c7eb..., userDataDir: C:\\Users\\BoltAthi\\AppData\\L...}, cssSelectorsEnabled: true, databaseEnabled: false, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 65.0.3325.181, webStorageEnabled: true}\nSession ID: 2e62903de159427956c121316e8b73c0\n*** Element info: {Using\u003dxpath, value\u003d//p[@class\u003d\u0027form-error-message\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:319)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:421)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:311)\r\n\tat page.Login_SignUP_Page.errorMessage(Login_SignUP_Page.java:49)\r\n\tat page.Login_SignUP_Page.validateError(Login_SignUP_Page.java:101)\r\n\tat steps.StepDefinitions.i_should_get_the_Message_as(StepDefinitions.java:90)\r\n\tat ✽.Then I should get the Message as \"You\u0027re account doesn\u0027t exists, please check your Email\"(Kobil.feature:22)\r\n",
  "status": "failed"
});
formatter.before({
  "duration": 1820602,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "To verify the the Sign is working as expected",
  "description": "",
  "id": "as-a-product-owner-i-want-to-make-sure-navigation,sign-up,login,activate-new-device-features-are-working-as-expected;to-verify-the-the-sign-is-working-as-expected;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Test_Kobil"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "I navigate to Kobil Application Sign Up Page",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "I Sign up with \"ab@gmail.com\" and condition as \"Invalid Email Trusted OTP\"",
  "matchedColumns": [
    1,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I should get the Message as \"Getting user certificates failed.\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.i_navigate_to_Kobil_Application_Sign_Up_Page()"
});
formatter.write("Current Page Title is KOBIL Trusted Sign");
formatter.embedding("image/png", "embedded23.png");
formatter.result({
  "duration": 10962219385,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ab@gmail.com",
      "offset": 16
    },
    {
      "val": "Invalid Email Trusted OTP",
      "offset": 48
    }
  ],
  "location": "StepDefinitions.i_Sign_up_with_and_condition_as(String,String)"
});
formatter.write("Current Page Title is OTP Login");
formatter.embedding("image/png", "embedded24.png");
formatter.result({
  "duration": 676845379,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Getting user certificates failed.",
      "offset": 29
    }
  ],
  "location": "StepDefinitions.i_should_get_the_Message_as(String)"
});
formatter.write("Current Page Title is OTP Login");
formatter.embedding("image/png", "embedded25.png");
formatter.result({
  "duration": 11099208529,
  "status": "passed"
});
formatter.before({
  "duration": 5758100,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "To verify the the Sign is working as expected",
  "description": "",
  "id": "as-a-product-owner-i-want-to-make-sure-navigation,sign-up,login,activate-new-device-features-are-working-as-expected;to-verify-the-the-sign-is-working-as-expected;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Test_Kobil"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "I navigate to Kobil Application Sign Up Page",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "I Sign up with \"athithya24@gmail.com\" and condition as \"Captacha Not checked Activate\"",
  "matchedColumns": [
    1,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I should get the Message as \"Please verify your identity with captcha\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.i_navigate_to_Kobil_Application_Sign_Up_Page()"
});
formatter.write("Current Page Title is KOBIL Trusted Sign");
formatter.embedding("image/png", "embedded26.png");
formatter.result({
  "duration": 15297442188,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "athithya24@gmail.com",
      "offset": 16
    },
    {
      "val": "Captacha Not checked Activate",
      "offset": 56
    }
  ],
  "location": "StepDefinitions.i_Sign_up_with_and_condition_as(String,String)"
});
formatter.write("Current Page Title is KOBIL mAST - Help");
formatter.embedding("image/png", "embedded27.png");
formatter.result({
  "duration": 557273774,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Please verify your identity with captcha",
      "offset": 29
    }
  ],
  "location": "StepDefinitions.i_should_get_the_Message_as(String)"
});
formatter.write("Current Page Title is KOBIL mAST - Help");
formatter.embedding("image/png", "embedded28.png");
formatter.result({
  "duration": 11054057600,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 31,
  "name": "To verify the presence of UI elements",
  "description": "",
  "id": "as-a-product-owner-i-want-to-make-sure-navigation,sign-up,login,activate-new-device-features-are-working-as-expected;to-verify-the-presence-of-ui-elements",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 32,
  "name": "I navigate to Kobil web Application",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "I check the in \"\u003cfeature\u003e\" of the Application",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "It should have \"\u003cHyperLink\u003e\",\"\u003ctextBox\u003e\" and \"\u003cbutton\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 36,
  "name": "",
  "description": "",
  "id": "as-a-product-owner-i-want-to-make-sure-navigation,sign-up,login,activate-new-device-features-are-working-as-expected;to-verify-the-presence-of-ui-elements;",
  "rows": [
    {
      "cells": [
        "TestCase ID",
        "feature",
        "HyperLink",
        "textBox",
        "button"
      ],
      "line": 37,
      "id": "as-a-product-owner-i-want-to-make-sure-navigation,sign-up,login,activate-new-device-features-are-working-as-expected;to-verify-the-presence-of-ui-elements;;1"
    },
    {
      "cells": [
        "TC_TrustedSign_025",
        "Home Page",
        "NA",
        "NA",
        "Start Demo"
      ],
      "line": 38,
      "id": "as-a-product-owner-i-want-to-make-sure-navigation,sign-up,login,activate-new-device-features-are-working-as-expected;to-verify-the-presence-of-ui-elements;;2"
    },
    {
      "cells": [
        "TC_TrustedSign_026",
        "Sign Up",
        "Go to He Center",
        "Email Address",
        "Sign up"
      ],
      "line": 39,
      "id": "as-a-product-owner-i-want-to-make-sure-navigation,sign-up,login,activate-new-device-features-are-working-as-expected;to-verify-the-presence-of-ui-elements;;3"
    },
    {
      "cells": [
        "TC_TrustedSign_027",
        "Login Trusted Sign",
        "Switch to Trusted OTP",
        "Email Address",
        "Log in"
      ],
      "line": 40,
      "id": "as-a-product-owner-i-want-to-make-sure-navigation,sign-up,login,activate-new-device-features-are-working-as-expected;to-verify-the-presence-of-ui-elements;;4"
    },
    {
      "cells": [
        "TC_TrustedSign_028",
        "Login Trusted OTP",
        "Switch to Trusted Sign",
        "Email Address",
        "Log in"
      ],
      "line": 41,
      "id": "as-a-product-owner-i-want-to-make-sure-navigation,sign-up,login,activate-new-device-features-are-working-as-expected;to-verify-the-presence-of-ui-elements;;5"
    },
    {
      "cells": [
        "TC_TrustedSign_029",
        "Activate",
        "Create an account",
        "Email Address",
        "Activate New Device"
      ],
      "line": 42,
      "id": "as-a-product-owner-i-want-to-make-sure-navigation,sign-up,login,activate-new-device-features-are-working-as-expected;to-verify-the-presence-of-ui-elements;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3046385,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "To verify the presence of UI elements",
  "description": "",
  "id": "as-a-product-owner-i-want-to-make-sure-navigation,sign-up,login,activate-new-device-features-are-working-as-expected;to-verify-the-presence-of-ui-elements;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Test_Kobil"
    }
  ]
});
formatter.step({
  "line": 32,
  "name": "I navigate to Kobil web Application",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "I check the in \"Home Page\" of the Application",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "It should have \"NA\",\"NA\" and \"Start Demo\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.i_navigate_to_Kobil_web_Application()"
});
formatter.write("Current Page Title is KOBIL Trusted Sign");
formatter.embedding("image/png", "embedded29.png");
formatter.result({
  "duration": 15491631255,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Home Page",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.i_check_the_in_of_the_Application(String)"
});
formatter.write("Current Page Title is KOBIL mAST - Designed, developed and made in Germany");
formatter.embedding("image/png", "embedded30.png");
formatter.result({
  "duration": 462196405,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NA",
      "offset": 16
    },
    {
      "val": "NA",
      "offset": 21
    },
    {
      "val": "Start Demo",
      "offset": 30
    }
  ],
  "location": "StepDefinitions.it_should_have_and(String,String,String)"
});
formatter.write("Current Page Title is KOBIL mAST - Designed, developed and made in Germany");
formatter.embedding("image/png", "embedded31.png");
formatter.result({
  "duration": 1276985404,
  "status": "passed"
});
formatter.before({
  "duration": 3494842,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "To verify the presence of UI elements",
  "description": "",
  "id": "as-a-product-owner-i-want-to-make-sure-navigation,sign-up,login,activate-new-device-features-are-working-as-expected;to-verify-the-presence-of-ui-elements;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Test_Kobil"
    }
  ]
});
formatter.step({
  "line": 32,
  "name": "I navigate to Kobil web Application",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "I check the in \"Sign Up\" of the Application",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "It should have \"Go to He Center\",\"Email Address\" and \"Sign up\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.i_navigate_to_Kobil_web_Application()"
});
formatter.write("Current Page Title is KOBIL Trusted Sign");
formatter.embedding("image/png", "embedded32.png");
formatter.result({
  "duration": 13172809042,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sign Up",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.i_check_the_in_of_the_Application(String)"
});
formatter.write("Current Page Title is KOBIL Trusted Sign");
formatter.embedding("image/png", "embedded33.png");
formatter.result({
  "duration": 296606853,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Go to He Center",
      "offset": 16
    },
    {
      "val": "Email Address",
      "offset": 34
    },
    {
      "val": "Sign up",
      "offset": 54
    }
  ],
  "location": "StepDefinitions.it_should_have_and(String,String,String)"
});
formatter.result({
  "duration": 208864100,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[Y]\u003e but was:\u003c[N]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat page.ValidateUI.validateUI(ValidateUI.java:70)\r\n\tat steps.StepDefinitions.it_should_have_and(StepDefinitions.java:115)\r\n\tat ✽.Then It should have \"Go to He Center\",\"Email Address\" and \"Sign up\"(Kobil.feature:34)\r\n",
  "status": "failed"
});
formatter.before({
  "duration": 3292701,
  "status": "passed"
});
formatter.scenario({
  "line": 40,
  "name": "To verify the presence of UI elements",
  "description": "",
  "id": "as-a-product-owner-i-want-to-make-sure-navigation,sign-up,login,activate-new-device-features-are-working-as-expected;to-verify-the-presence-of-ui-elements;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Test_Kobil"
    }
  ]
});
formatter.step({
  "line": 32,
  "name": "I navigate to Kobil web Application",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "I check the in \"Login Trusted Sign\" of the Application",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "It should have \"Switch to Trusted OTP\",\"Email Address\" and \"Log in\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.i_navigate_to_Kobil_web_Application()"
});
formatter.write("Current Page Title is KOBIL Trusted Sign");
formatter.embedding("image/png", "embedded34.png");
formatter.result({
  "duration": 17423430969,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login Trusted Sign",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.i_check_the_in_of_the_Application(String)"
});
formatter.write("Current Page Title is KOBIL Trusted Sign");
formatter.embedding("image/png", "embedded35.png");
formatter.result({
  "duration": 275080020,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Switch to Trusted OTP",
      "offset": 16
    },
    {
      "val": "Email Address",
      "offset": 40
    },
    {
      "val": "Log in",
      "offset": 60
    }
  ],
  "location": "StepDefinitions.it_should_have_and(String,String,String)"
});
formatter.write("Current Page Title is KOBIL Trusted Sign");
formatter.embedding("image/png", "embedded36.png");
formatter.result({
  "duration": 1524958535,
  "status": "passed"
});
formatter.before({
  "duration": 3450219,
  "status": "passed"
});
formatter.scenario({
  "line": 41,
  "name": "To verify the presence of UI elements",
  "description": "",
  "id": "as-a-product-owner-i-want-to-make-sure-navigation,sign-up,login,activate-new-device-features-are-working-as-expected;to-verify-the-presence-of-ui-elements;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Test_Kobil"
    }
  ]
});
formatter.step({
  "line": 32,
  "name": "I navigate to Kobil web Application",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "I check the in \"Login Trusted OTP\" of the Application",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "It should have \"Switch to Trusted Sign\",\"Email Address\" and \"Log in\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.i_navigate_to_Kobil_web_Application()"
});
formatter.write("Current Page Title is KOBIL Trusted Sign");
formatter.embedding("image/png", "embedded37.png");
formatter.result({
  "duration": 17195317126,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login Trusted OTP",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.i_check_the_in_of_the_Application(String)"
});
formatter.write("Current Page Title is OTP Login");
formatter.embedding("image/png", "embedded38.png");
formatter.result({
  "duration": 427602289,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Switch to Trusted Sign",
      "offset": 16
    },
    {
      "val": "Email Address",
      "offset": 41
    },
    {
      "val": "Log in",
      "offset": 61
    }
  ],
  "location": "StepDefinitions.it_should_have_and(String,String,String)"
});
formatter.write("Current Page Title is OTP Login");
formatter.embedding("image/png", "embedded39.png");
formatter.result({
  "duration": 1323503570,
  "status": "passed"
});
formatter.before({
  "duration": 3141431,
  "status": "passed"
});
formatter.scenario({
  "line": 42,
  "name": "To verify the presence of UI elements",
  "description": "",
  "id": "as-a-product-owner-i-want-to-make-sure-navigation,sign-up,login,activate-new-device-features-are-working-as-expected;to-verify-the-presence-of-ui-elements;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Test_Kobil"
    }
  ]
});
formatter.step({
  "line": 32,
  "name": "I navigate to Kobil web Application",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "I check the in \"Activate\" of the Application",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "It should have \"Create an account\",\"Email Address\" and \"Activate New Device\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.i_navigate_to_Kobil_web_Application()"
});
formatter.write("Current Page Title is KOBIL Trusted Sign");
formatter.embedding("image/png", "embedded40.png");
formatter.result({
  "duration": 9477787541,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Activate",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.i_check_the_in_of_the_Application(String)"
});
formatter.write("Current Page Title is KOBIL mAST - Help");
formatter.embedding("image/png", "embedded41.png");
formatter.result({
  "duration": 401835417,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Create an account",
      "offset": 16
    },
    {
      "val": "Email Address",
      "offset": 36
    },
    {
      "val": "Activate New Device",
      "offset": 56
    }
  ],
  "location": "StepDefinitions.it_should_have_and(String,String,String)"
});
formatter.write("Current Page Title is KOBIL mAST - Help");
formatter.embedding("image/png", "embedded42.png");
formatter.result({
  "duration": 1170188356,
  "status": "passed"
});
});