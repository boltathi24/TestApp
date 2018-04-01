$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("SignUp.feature");
formatter.feature({
  "line": 2,
  "name": "To Test the Sign Up Feature",
  "description": "",
  "id": "to-test-the-sign-up-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@SignUp"
    }
  ]
});
formatter.scenarioOutline({
  "line": 4,
  "name": "To verify the the Sign is working as expected",
  "description": "",
  "id": "to-test-the-sign-up-feature;to-verify-the-the-sign-is-working-as-expected",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I navigate to Kobil Application Sign Up Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I Sign up with \"\u003cemailId\u003e\" and condition as \"\u003cCondition\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I should get the Message as \"\u003cexpected\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "to-test-the-sign-up-feature;to-verify-the-the-sign-is-working-as-expected;",
  "rows": [
    {
      "cells": [
        "Condition",
        "expected",
        "emailID"
      ],
      "line": 10,
      "id": "to-test-the-sign-up-feature;to-verify-the-the-sign-is-working-as-expected;;1"
    },
    {
      "comments": [
        {
          "line": 11,
          "value": "#|Captcha Not Checked|Please verify your identity with captcha|athithya24@gmail.com|"
        },
        {
          "line": 12,
          "value": "#|Invalid Email Trusted Sign|You\u0027re account doesn\u0027t exists, please check your Email|ab@gmail.com|"
        },
        {
          "line": 13,
          "value": "#|Invalid Email Trusted OTP|Getting user certificates failed.|ab@gmail.com|"
        }
      ],
      "cells": [
        "Captacha Not checked Activate",
        "Please verify your identity with captcha",
        "athithya24@gmail.com"
      ],
      "line": 14,
      "id": "to-test-the-sign-up-feature;to-verify-the-the-sign-is-working-as-expected;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 94160820,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 11,
      "value": "#|Captcha Not Checked|Please verify your identity with captcha|athithya24@gmail.com|"
    },
    {
      "line": 12,
      "value": "#|Invalid Email Trusted Sign|You\u0027re account doesn\u0027t exists, please check your Email|ab@gmail.com|"
    },
    {
      "line": 13,
      "value": "#|Invalid Email Trusted OTP|Getting user certificates failed.|ab@gmail.com|"
    }
  ],
  "line": 14,
  "name": "To verify the the Sign is working as expected",
  "description": "",
  "id": "to-test-the-sign-up-feature;to-verify-the-the-sign-is-working-as-expected;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@SignUp"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I navigate to Kobil Application Sign Up Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I Sign up with \"\u003cemailId\u003e\" and condition as \"Captacha Not checked Activate\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I should get the Message as \"Please verify your identity with captcha\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SignupSteps.i_navigate_to_Kobil_Application_Sign_Up_Page()"
});
formatter.result({
  "duration": 14806232170,
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
  "location": "SignupSteps.i_Sign_up_with_and_condition_as(String,String)"
});
formatter.result({
  "duration": 707049969,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Please verify your identity with captcha",
      "offset": 29
    }
  ],
  "location": "SignupSteps.i_should_get_the_Message_as(String)"
});
formatter.result({
  "duration": 16448000618,
  "status": "passed"
});
});