$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Navigation.feature");
formatter.feature({
  "line": 2,
  "name": "As a User, the Navigation inbetween the Application should work as expected",
  "description": "",
  "id": "as-a-user,-the-navigation-inbetween-the-application-should-work-as-expected",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Navigation"
    }
  ]
});
formatter.scenarioOutline({
  "line": 4,
  "name": "To verify the the navigation is working as expected",
  "description": "",
  "id": "as-a-user,-the-navigation-inbetween-the-application-should-work-as-expected;to-verify-the-the-navigation-is-working-as-expected",
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
  "id": "as-a-user,-the-navigation-inbetween-the-application-should-work-as-expected;to-verify-the-the-navigation-is-working-as-expected;",
  "rows": [
    {
      "cells": [
        "Link",
        "pageTitile"
      ],
      "line": 10,
      "id": "as-a-user,-the-navigation-inbetween-the-application-should-work-as-expected;to-verify-the-the-navigation-is-working-as-expected;;1"
    },
    {
      "cells": [
        "Start Demo",
        "KOBIL Trusted Sign"
      ],
      "line": 11,
      "id": "as-a-user,-the-navigation-inbetween-the-application-should-work-as-expected;to-verify-the-the-navigation-is-working-as-expected;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 82367514,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "To verify the the navigation is working as expected",
  "description": "",
  "id": "as-a-user,-the-navigation-inbetween-the-application-should-work-as-expected;to-verify-the-the-navigation-is-working-as-expected;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Navigation"
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
  "location": "NavigationSteps.i_navigate_to_Kobil_Application()"
});
formatter.result({
  "duration": 7987316919,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Start Demo",
      "offset": 16
    }
  ],
  "location": "NavigationSteps.i_click_on_the(String)"
});
formatter.result({
  "duration": 283323152,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "KOBIL Trusted Sign",
      "offset": 26
    }
  ],
  "location": "NavigationSteps.i_should_be_Navigated_to(String)"
});
formatter.write("Current Page Title is KOBIL Trusted Sign");
formatter.embedding("image/png", "embedded0.png");
formatter.result({
  "duration": 377314853,
  "status": "passed"
});
});