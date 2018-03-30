$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 2,
  "name": "To Test the Kobil Applications",
  "description": "",
  "id": "to-test-the-kobil-applications",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Run"
    }
  ]
});
formatter.scenarioOutline({
  "line": 4,
  "name": "To verify the the navigation is working as expected",
  "description": "",
  "id": "to-test-the-kobil-applications;to-verify-the-the-navigation-is-working-as-expected",
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
  "name": "I click on \"\u003cApplication\u003e\" start Demo Button",
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
  "id": "to-test-the-kobil-applications;to-verify-the-the-navigation-is-working-as-expected;",
  "rows": [
    {
      "cells": [
        "Application",
        "pageTitile"
      ],
      "line": 10,
      "id": "to-test-the-kobil-applications;to-verify-the-the-navigation-is-working-as-expected;;1"
    },
    {
      "cells": [
        "TRUSTED SIGN",
        "KOBIL Trusted Sign"
      ],
      "line": 11,
      "id": "to-test-the-kobil-applications;to-verify-the-the-navigation-is-working-as-expected;;2"
    },
    {
      "cells": [
        "TRUSTED LOGIN",
        "KOBIL Trusted Login"
      ],
      "line": 12,
      "id": "to-test-the-kobil-applications;to-verify-the-the-navigation-is-working-as-expected;;3"
    },
    {
      "cells": [
        "TRUSTED WEB",
        "KOBIL mAST - Designed, developed and made in Germany"
      ],
      "line": 13,
      "id": "to-test-the-kobil-applications;to-verify-the-the-navigation-is-working-as-expected;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 11,
  "name": "To verify the the navigation is working as expected",
  "description": "",
  "id": "to-test-the-kobil-applications;to-verify-the-the-navigation-is-working-as-expected;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Run"
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
  "name": "I click on \"TRUSTED SIGN\" start Demo Button",
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
  "location": "steps.i_navigate_to_Kobil_Application()"
});
formatter.result({
  "duration": 9713604136,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TRUSTED SIGN",
      "offset": 12
    }
  ],
  "location": "steps.i_click_on_start_Demo_Button(String)"
});
formatter.result({
  "duration": 277967101,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "KOBIL Trusted Sign",
      "offset": 26
    }
  ],
  "location": "steps.i_should_be_Navigated_to(String)"
});
formatter.result({
  "duration": 733240310,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "To verify the the navigation is working as expected",
  "description": "",
  "id": "to-test-the-kobil-applications;to-verify-the-the-navigation-is-working-as-expected;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Run"
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
  "name": "I click on \"TRUSTED LOGIN\" start Demo Button",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I should be Navigated to \"KOBIL Trusted Login\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "steps.i_navigate_to_Kobil_Application()"
});
formatter.result({
  "duration": 7830913822,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TRUSTED LOGIN",
      "offset": 12
    }
  ],
  "location": "steps.i_click_on_start_Demo_Button(String)"
});
formatter.result({
  "duration": 310856633,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "KOBIL Trusted Login",
      "offset": 26
    }
  ],
  "location": "steps.i_should_be_Navigated_to(String)"
});
formatter.result({
  "duration": 862930982,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "To verify the the navigation is working as expected",
  "description": "",
  "id": "to-test-the-kobil-applications;to-verify-the-the-navigation-is-working-as-expected;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Run"
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
  "name": "I click on \"TRUSTED WEB\" start Demo Button",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I should be Navigated to \"KOBIL mAST - Designed, developed and made in Germany\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "steps.i_navigate_to_Kobil_Application()"
});
formatter.result({
  "duration": 8586272215,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TRUSTED WEB",
      "offset": 12
    }
  ],
  "location": "steps.i_click_on_start_Demo_Button(String)"
});
formatter.result({
  "duration": 211181799,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "KOBIL mAST - Designed, developed and made in Germany",
      "offset": 26
    }
  ],
  "location": "steps.i_should_be_Navigated_to(String)"
});
formatter.result({
  "duration": 757801034,
  "status": "passed"
});
});