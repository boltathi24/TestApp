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
        "Link",
        "pageTitile"
      ],
      "line": 10,
      "id": "as-a-product-owner-i-want-to-make-sure-navigation,sign-up,login,activate-new-device-features-are-working-as-expected;to-verify-the-the-navigation-is-working-as-expected;;1"
    },
    {
      "cells": [
        "Start Demo",
        "KOBIL Trusted Sign"
      ],
      "line": 11,
      "id": "as-a-product-owner-i-want-to-make-sure-navigation,sign-up,login,activate-new-device-features-are-working-as-expected;to-verify-the-the-navigation-is-working-as-expected;;2"
    },
    {
      "cells": [
        "Login Help",
        "KOBIL mAST - Help"
      ],
      "line": 12,
      "id": "as-a-product-owner-i-want-to-make-sure-navigation,sign-up,login,activate-new-device-features-are-working-as-expected;to-verify-the-the-navigation-is-working-as-expected;;3"
    },
    {
      "cells": [
        "Activate Create",
        "KOBIL Trusted Sign"
      ],
      "line": 13,
      "id": "as-a-product-owner-i-want-to-make-sure-navigation,sign-up,login,activate-new-device-features-are-working-as-expected;to-verify-the-the-navigation-is-working-as-expected;;4"
    },
    {
      "cells": [
        "Login switch OTP",
        "OTP Login"
      ],
      "line": 14,
      "id": "as-a-product-owner-i-want-to-make-sure-navigation,sign-up,login,activate-new-device-features-are-working-as-expected;to-verify-the-the-navigation-is-working-as-expected;;5"
    },
    {
      "cells": [
        "Login switch Sign",
        "KOBIL Trusted Sign"
      ],
      "line": 15,
      "id": "as-a-product-owner-i-want-to-make-sure-navigation,sign-up,login,activate-new-device-features-are-working-as-expected;to-verify-the-the-navigation-is-working-as-expected;;6"
    },
    {
      "cells": [
        "Help in Trusted OTP",
        "KOBIL mAST - Help"
      ],
      "line": 16,
      "id": "as-a-product-owner-i-want-to-make-sure-navigation,sign-up,login,activate-new-device-features-are-working-as-expected;to-verify-the-the-navigation-is-working-as-expected;;7"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 53402094,
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
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I should be Navigated to \"KOBIL Trusted Sign\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.i_navigate_to_Kobil_Application()"
});
formatter.write("Current Page Title is KOBIL mAST - Designed, developed and made in Germany");
formatter.embedding("image/png", "embedded0.png");
formatter.result({
  "duration": 9630952376,
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
  "duration": 432174768,
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
  "duration": 1055861692,
  "status": "passed"
});
formatter.before({
  "duration": 4733565,
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
  "name": "I click on the \"Login Help\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I should be Navigated to \"KOBIL mAST - Help\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.i_navigate_to_Kobil_Application()"
});
formatter.write("Current Page Title is KOBIL mAST - Designed, developed and made in Germany");
formatter.embedding("image/png", "embedded3.png");
formatter.result({
  "duration": 8058073633,
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
formatter.embedding("image/png", "embedded4.png");
formatter.result({
  "duration": 585994216,
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
  "duration": 989573037,
  "status": "passed"
});
formatter.before({
  "duration": 10142270,
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
  "name": "I click on the \"Activate Create\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I should be Navigated to \"KOBIL Trusted Sign\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.i_navigate_to_Kobil_Application()"
});
formatter.write("Current Page Title is KOBIL mAST - Designed, developed and made in Germany");
formatter.embedding("image/png", "embedded6.png");
formatter.result({
  "duration": 7687915352,
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
formatter.embedding("image/png", "embedded7.png");
formatter.result({
  "duration": 690258932,
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
formatter.embedding("image/png", "embedded8.png");
formatter.result({
  "duration": 998838920,
  "status": "passed"
});
formatter.before({
  "duration": 6505975,
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
  "name": "I click on the \"Login switch OTP\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I should be Navigated to \"OTP Login\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.i_navigate_to_Kobil_Application()"
});
formatter.write("Current Page Title is KOBIL mAST - Designed, developed and made in Germany");
formatter.embedding("image/png", "embedded9.png");
formatter.result({
  "duration": 7331501725,
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
formatter.embedding("image/png", "embedded10.png");
formatter.result({
  "duration": 555084142,
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
formatter.embedding("image/png", "embedded11.png");
formatter.result({
  "duration": 1009634465,
  "status": "passed"
});
formatter.before({
  "duration": 6172197,
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
  "name": "I click on the \"Login switch Sign\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I should be Navigated to \"KOBIL Trusted Sign\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.i_navigate_to_Kobil_Application()"
});
formatter.write("Current Page Title is KOBIL mAST - Designed, developed and made in Germany");
formatter.embedding("image/png", "embedded12.png");
formatter.result({
  "duration": 8501654829,
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
formatter.embedding("image/png", "embedded13.png");
formatter.result({
  "duration": 677782007,
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
formatter.embedding("image/png", "embedded14.png");
formatter.result({
  "duration": 1147259927,
  "status": "passed"
});
formatter.before({
  "duration": 5468500,
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
  "name": "I click on the \"Help in Trusted OTP\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I should be Navigated to \"KOBIL mAST - Help\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.i_navigate_to_Kobil_Application()"
});
formatter.write("Current Page Title is KOBIL mAST - Designed, developed and made in Germany");
formatter.embedding("image/png", "embedded15.png");
formatter.result({
  "duration": 20061362319,
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
formatter.embedding("image/png", "embedded16.png");
formatter.result({
  "duration": 631726132,
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
formatter.embedding("image/png", "embedded17.png");
formatter.result({
  "duration": 1038419164,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 18,
  "name": "To verify the the Sign is working as expected",
  "description": "",
  "id": "as-a-product-owner-i-want-to-make-sure-navigation,sign-up,login,activate-new-device-features-are-working-as-expected;to-verify-the-the-sign-is-working-as-expected",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 19,
  "name": "I navigate to Kobil Application Sign Up Page",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I Sign up with \"\u003cemailId\u003e\" and condition as \"\u003cCondition\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I should get the Message as \"\u003cexpected\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 23,
  "name": "",
  "description": "",
  "id": "as-a-product-owner-i-want-to-make-sure-navigation,sign-up,login,activate-new-device-features-are-working-as-expected;to-verify-the-the-sign-is-working-as-expected;",
  "rows": [
    {
      "cells": [
        "Condition",
        "expected",
        "emailID"
      ],
      "line": 24,
      "id": "as-a-product-owner-i-want-to-make-sure-navigation,sign-up,login,activate-new-device-features-are-working-as-expected;to-verify-the-the-sign-is-working-as-expected;;1"
    },
    {
      "cells": [
        "Captcha Not Checked",
        "Please verify your identity with captcha",
        "athithya24@gmail.com"
      ],
      "line": 25,
      "id": "as-a-product-owner-i-want-to-make-sure-navigation,sign-up,login,activate-new-device-features-are-working-as-expected;to-verify-the-the-sign-is-working-as-expected;;2"
    },
    {
      "cells": [
        "Invalid Email Trusted Sign",
        "You\u0027re account doesn\u0027t exists, please check your Email",
        "ab@gmail.com"
      ],
      "line": 26,
      "id": "as-a-product-owner-i-want-to-make-sure-navigation,sign-up,login,activate-new-device-features-are-working-as-expected;to-verify-the-the-sign-is-working-as-expected;;3"
    },
    {
      "cells": [
        "Invalid Email Trusted OTP",
        "Getting user certificates failed.",
        "ab@gmail.com"
      ],
      "line": 27,
      "id": "as-a-product-owner-i-want-to-make-sure-navigation,sign-up,login,activate-new-device-features-are-working-as-expected;to-verify-the-the-sign-is-working-as-expected;;4"
    },
    {
      "cells": [
        "Captacha Not checked Activate",
        "Please verify your identity with captcha",
        "athithya24@gmail.com"
      ],
      "line": 28,
      "id": "as-a-product-owner-i-want-to-make-sure-navigation,sign-up,login,activate-new-device-features-are-working-as-expected;to-verify-the-the-sign-is-working-as-expected;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2887528,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
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
  "line": 19,
  "name": "I navigate to Kobil Application Sign Up Page",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I Sign up with \"\u003cemailId\u003e\" and condition as \"Captcha Not Checked\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I should get the Message as \"Please verify your identity with captcha\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.i_navigate_to_Kobil_Application_Sign_Up_Page()"
});
formatter.write("Current Page Title is KOBIL Trusted Sign");
formatter.embedding("image/png", "embedded18.png");
formatter.result({
  "duration": 18463353914,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cemailId\u003e",
      "offset": 16
    },
    {
      "val": "Captcha Not Checked",
      "offset": 45
    }
  ],
  "location": "StepDefinitions.i_Sign_up_with_and_condition_as(String,String)"
});
formatter.write("Current Page Title is KOBIL Trusted Sign");
formatter.embedding("image/png", "embedded19.png");
formatter.result({
  "duration": 539654541,
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
  "duration": 11123948190,
  "status": "passed"
});
formatter.before({
  "duration": 7503736,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
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
  "line": 19,
  "name": "I navigate to Kobil Application Sign Up Page",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I Sign up with \"\u003cemailId\u003e\" and condition as \"Invalid Email Trusted Sign\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I should get the Message as \"You\u0027re account doesn\u0027t exists, please check your Email\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.i_navigate_to_Kobil_Application_Sign_Up_Page()"
});
formatter.write("Current Page Title is KOBIL Trusted Sign");
formatter.embedding("image/png", "embedded21.png");
formatter.result({
  "duration": 20066843759,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cemailId\u003e",
      "offset": 16
    },
    {
      "val": "Invalid Email Trusted Sign",
      "offset": 45
    }
  ],
  "location": "StepDefinitions.i_Sign_up_with_and_condition_as(String,String)"
});
formatter.write("Current Page Title is KOBIL Trusted Sign");
formatter.embedding("image/png", "embedded22.png");
formatter.result({
  "duration": 607691508,
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
formatter.write("Current Page Title is KOBIL Trusted Sign");
formatter.embedding("image/png", "embedded23.png");
formatter.result({
  "duration": 11123823693,
  "status": "passed"
});
formatter.before({
  "duration": 3332862,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
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
  "line": 19,
  "name": "I navigate to Kobil Application Sign Up Page",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I Sign up with \"\u003cemailId\u003e\" and condition as \"Invalid Email Trusted OTP\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I should get the Message as \"Getting user certificates failed.\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.i_navigate_to_Kobil_Application_Sign_Up_Page()"
});
formatter.write("Current Page Title is KOBIL Trusted Sign");
formatter.embedding("image/png", "embedded24.png");
formatter.result({
  "duration": 34907214448,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cemailId\u003e",
      "offset": 16
    },
    {
      "val": "Invalid Email Trusted OTP",
      "offset": 45
    }
  ],
  "location": "StepDefinitions.i_Sign_up_with_and_condition_as(String,String)"
});
formatter.write("Current Page Title is OTP Login");
formatter.embedding("image/png", "embedded25.png");
formatter.result({
  "duration": 636193300,
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
formatter.embedding("image/png", "embedded26.png");
formatter.result({
  "duration": 11127381006,
  "status": "passed"
});
formatter.before({
  "duration": 4008894,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
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
  "line": 19,
  "name": "I navigate to Kobil Application Sign Up Page",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I Sign up with \"\u003cemailId\u003e\" and condition as \"Captacha Not checked Activate\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I should get the Message as \"Please verify your identity with captcha\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.i_navigate_to_Kobil_Application_Sign_Up_Page()"
});
formatter.write("Current Page Title is KOBIL Trusted Sign");
formatter.embedding("image/png", "embedded27.png");
formatter.result({
  "duration": 12808913989,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cemailId\u003e",
      "offset": 16
    },
    {
      "val": "Captacha Not checked Activate",
      "offset": 45
    }
  ],
  "location": "StepDefinitions.i_Sign_up_with_and_condition_as(String,String)"
});
formatter.write("Current Page Title is KOBIL mAST - Help");
formatter.embedding("image/png", "embedded28.png");
formatter.result({
  "duration": 560993067,
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
formatter.embedding("image/png", "embedded29.png");
formatter.result({
  "duration": 11214665931,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 30,
  "name": "To verify the presence of UI elements",
  "description": "",
  "id": "as-a-product-owner-i-want-to-make-sure-navigation,sign-up,login,activate-new-device-features-are-working-as-expected;to-verify-the-presence-of-ui-elements",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 31,
  "name": "I navigate to Kobil web Application",
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "I check the in \"\u003cfeature\u003e\" of the Application",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "It should have \"\u003cHyperLink\u003e\",\"\u003ctextBox\u003e\" and \"\u003cbutton\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 35,
  "name": "",
  "description": "",
  "id": "as-a-product-owner-i-want-to-make-sure-navigation,sign-up,login,activate-new-device-features-are-working-as-expected;to-verify-the-presence-of-ui-elements;",
  "rows": [
    {
      "cells": [
        "feature",
        "HyperLink",
        "textBox",
        "button"
      ],
      "line": 36,
      "id": "as-a-product-owner-i-want-to-make-sure-navigation,sign-up,login,activate-new-device-features-are-working-as-expected;to-verify-the-presence-of-ui-elements;;1"
    },
    {
      "cells": [
        "Sign Up",
        "Go to Help Center",
        "Email Address",
        "Sign up"
      ],
      "line": 37,
      "id": "as-a-product-owner-i-want-to-make-sure-navigation,sign-up,login,activate-new-device-features-are-working-as-expected;to-verify-the-presence-of-ui-elements;;2"
    },
    {
      "cells": [
        "Login Trusted Sign",
        "Switch to Trusted OTP",
        "Email Address",
        "Log in"
      ],
      "line": 38,
      "id": "as-a-product-owner-i-want-to-make-sure-navigation,sign-up,login,activate-new-device-features-are-working-as-expected;to-verify-the-presence-of-ui-elements;;3"
    },
    {
      "cells": [
        "Login Trusted OTP",
        "Switch to Trusted Sign",
        "Email Address",
        "Log in"
      ],
      "line": 39,
      "id": "as-a-product-owner-i-want-to-make-sure-navigation,sign-up,login,activate-new-device-features-are-working-as-expected;to-verify-the-presence-of-ui-elements;;4"
    },
    {
      "cells": [
        "Activate",
        "Create an account",
        "Email Address",
        "Activate New Device"
      ],
      "line": 40,
      "id": "as-a-product-owner-i-want-to-make-sure-navigation,sign-up,login,activate-new-device-features-are-working-as-expected;to-verify-the-presence-of-ui-elements;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1343586,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
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
  "line": 31,
  "name": "I navigate to Kobil web Application",
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "I check the in \"Sign Up\" of the Application",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "It should have \"Go to Help Center\",\"Email Address\" and \"Sign up\"",
  "matchedColumns": [
    1,
    2,
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.i_navigate_to_Kobil_web_Application()"
});
formatter.write("Current Page Title is KOBIL Trusted Sign");
formatter.embedding("image/png", "embedded30.png");
formatter.result({
  "duration": 16550777616,
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
formatter.embedding("image/png", "embedded31.png");
formatter.result({
  "duration": 310314915,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Go to Help Center",
      "offset": 16
    },
    {
      "val": "Email Address",
      "offset": 36
    },
    {
      "val": "Sign up",
      "offset": 56
    }
  ],
  "location": "StepDefinitions.it_should_have_and(String,String,String)"
});
formatter.write("Current Page Title is KOBIL Trusted Sign");
formatter.embedding("image/png", "embedded32.png");
formatter.result({
  "duration": 1436357689,
  "status": "passed"
});
formatter.before({
  "duration": 4310543,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
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
  "line": 31,
  "name": "I navigate to Kobil web Application",
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "I check the in \"Login Trusted Sign\" of the Application",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "It should have \"Switch to Trusted OTP\",\"Email Address\" and \"Log in\"",
  "matchedColumns": [
    1,
    2,
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.i_navigate_to_Kobil_web_Application()"
});
formatter.write("Current Page Title is KOBIL Trusted Sign");
formatter.embedding("image/png", "embedded33.png");
formatter.result({
  "duration": 12389679328,
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
formatter.embedding("image/png", "embedded34.png");
formatter.result({
  "duration": 266144790,
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
formatter.embedding("image/png", "embedded35.png");
formatter.result({
  "duration": 1391205422,
  "status": "passed"
});
formatter.before({
  "duration": 4440840,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
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
  "line": 31,
  "name": "I navigate to Kobil web Application",
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "I check the in \"Login Trusted OTP\" of the Application",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "It should have \"Switch to Trusted Sign\",\"Email Address\" and \"Log in\"",
  "matchedColumns": [
    1,
    2,
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.i_navigate_to_Kobil_web_Application()"
});
formatter.write("Current Page Title is KOBIL Trusted Sign");
formatter.embedding("image/png", "embedded36.png");
formatter.result({
  "duration": 9108836747,
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
formatter.embedding("image/png", "embedded37.png");
formatter.result({
  "duration": 396292397,
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
formatter.embedding("image/png", "embedded38.png");
formatter.result({
  "duration": 1281796167,
  "status": "passed"
});
formatter.before({
  "duration": 3411398,
  "status": "passed"
});
formatter.scenario({
  "line": 40,
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
  "line": 31,
  "name": "I navigate to Kobil web Application",
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "I check the in \"Activate\" of the Application",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "It should have \"Create an account\",\"Email Address\" and \"Activate New Device\"",
  "matchedColumns": [
    1,
    2,
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.i_navigate_to_Kobil_web_Application()"
});
formatter.write("Current Page Title is KOBIL Trusted Sign");
formatter.embedding("image/png", "embedded39.png");
formatter.result({
  "duration": 9485671460,
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
formatter.embedding("image/png", "embedded40.png");
formatter.result({
  "duration": 421534955,
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
formatter.embedding("image/png", "embedded41.png");
formatter.result({
  "duration": 1184019577,
  "status": "passed"
});
});