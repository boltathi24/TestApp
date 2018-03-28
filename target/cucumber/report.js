$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 2,
  "name": "Add new todos",
  "description": "Users need to be able to quickly add tasks as fast as they can think of them.",
  "id": "add-new-todos",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Run"
    }
  ]
});
formatter.scenario({
  "line": 5,
  "name": "Add a new todo",
  "description": "",
  "id": "add-new-todos;add-a-new-todo",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "the todo application",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "the todo action \u0027Digitize Supreme Power Collection\u0027 is added",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "\u0027Digitize Supreme Power Collection\u0027 should appear in the todo list",
  "keyword": "Then "
});
formatter.match({
  "location": "ste.the_todo_application()"
});
formatter.result({
  "duration": 17395743986,
  "status": "passed"
});
formatter.match({
  "location": "ste.the_todo_action_Digitize_Supreme_Power_Collection_is_added()"
});
formatter.result({
  "duration": 6502175128,
  "status": "passed"
});
formatter.match({
  "location": "ste.digitize_Supreme_Power_Collection_should_appear_in_the_todo_list()"
});
formatter.result({
  "duration": 38821,
  "status": "passed"
});
});