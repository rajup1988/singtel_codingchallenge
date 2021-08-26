$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("./Features/ToDoList.feature");
formatter.feature({
  "line": 1,
  "name": "Verify ToDo Functionality",
  "description": "",
  "id": "verify-todo-functionality",
  "keyword": "Feature"
});
formatter.before({
  "duration": 11103968400,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Create ToDoList",
  "description": "",
  "id": "verify-todo-functionality;create-todolist",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "user opens the url",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user creates the todo list",
  "rows": [
    {
      "cells": [
        "ToDoList1"
      ],
      "line": 7
    },
    {
      "cells": [
        "ToDoList2"
      ],
      "line": 8
    },
    {
      "cells": [
        "ToDoList3"
      ],
      "line": 9
    },
    {
      "cells": [
        "ToDoList4"
      ],
      "line": 10
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "verify the todo list count \"4\"",
  "keyword": "And "
});
formatter.match({
  "location": "ToDoStepDef.user_opens_the_url()"
});
formatter.result({
  "duration": 414471500,
  "status": "passed"
});
formatter.match({
  "location": "ToDoStepDef.user_enters_the_todo_text(DataTable)"
});
formatter.result({
  "duration": 9129878900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 28
    }
  ],
  "location": "ToDoStepDef.verfiy_todo_list_count(String)"
});
formatter.result({
  "duration": 75853900,
  "status": "passed"
});
formatter.before({
  "duration": 256400,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Verify ToDoList Active Button",
  "description": "",
  "id": "verify-todo-functionality;verify-todolist-active-button",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 14,
  "name": "user selects the todo list item",
  "rows": [
    {
      "cells": [
        "ToDoList3"
      ],
      "line": 15
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "verify the todo list count \"3\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user clicks on the Active button",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "verify the todo list item",
  "rows": [
    {
      "cells": [
        "ToDoList1"
      ],
      "line": 19
    },
    {
      "cells": [
        "ToDoList2"
      ],
      "line": 20
    },
    {
      "cells": [
        "ToDoList4"
      ],
      "line": 21
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "verify the todo list item not present",
  "rows": [
    {
      "cells": [
        "ToDoList3"
      ],
      "line": 23
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "ToDoStepDef.user_selects_the_todo_text(DataTable)"
});
formatter.result({
  "duration": 1300504900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 28
    }
  ],
  "location": "ToDoStepDef.verfiy_todo_list_count(String)"
});
formatter.result({
  "duration": 86591700,
  "status": "passed"
});
formatter.match({
  "location": "ToDoStepDef.user_clicks_active_button()"
});
formatter.result({
  "duration": 105446700,
  "status": "passed"
});
formatter.match({
  "location": "ToDoStepDef.verify_the_todo_text(DataTable)"
});
formatter.result({
  "duration": 318616200,
  "status": "passed"
});
formatter.match({
  "location": "ToDoStepDef.verify_the_todo_text_not_present(DataTable)"
});
formatter.result({
  "duration": 99390200,
  "status": "passed"
});
formatter.before({
  "duration": 698800,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Verify ToDoList All Button",
  "description": "",
  "id": "verify-todo-functionality;verify-todolist-all-button",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 26,
  "name": "user clicks on the All button",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "verify the todo list item",
  "rows": [
    {
      "cells": [
        "ToDoList1"
      ],
      "line": 28
    },
    {
      "cells": [
        "ToDoList2"
      ],
      "line": 29
    },
    {
      "cells": [
        "ToDoList3"
      ],
      "line": 30
    },
    {
      "cells": [
        "ToDoList4"
      ],
      "line": 31
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "ToDoStepDef.user_clicks_all_button()"
});
formatter.result({
  "duration": 91792000,
  "status": "passed"
});
formatter.match({
  "location": "ToDoStepDef.verify_the_todo_text(DataTable)"
});
formatter.result({
  "duration": 403054400,
  "status": "passed"
});
formatter.before({
  "duration": 249000,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "Verify ToDoList Completed Button",
  "description": "",
  "id": "verify-todo-functionality;verify-todolist-completed-button",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 34,
  "name": "user clicks on the Completed button",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "verify the todo list item",
  "rows": [
    {
      "cells": [
        "ToDoList3"
      ],
      "line": 36
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "verify the todo list item not present",
  "rows": [
    {
      "cells": [
        "ToDoList1"
      ],
      "line": 38
    },
    {
      "cells": [
        "ToDoList2"
      ],
      "line": 39
    },
    {
      "cells": [
        "ToDoList4"
      ],
      "line": 40
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "ToDoStepDef.user_clicks_completed_button()"
});
formatter.result({
  "duration": 88495700,
  "status": "passed"
});
formatter.match({
  "location": "ToDoStepDef.verify_the_todo_text(DataTable)"
});
formatter.result({
  "duration": 74298800,
  "status": "passed"
});
formatter.match({
  "location": "ToDoStepDef.verify_the_todo_text_not_present(DataTable)"
});
formatter.result({
  "duration": 146156200,
  "status": "passed"
});
formatter.before({
  "duration": 395000,
  "status": "passed"
});
formatter.scenario({
  "line": 43,
  "name": "Verify ToDoList Clear Completed Button",
  "description": "",
  "id": "verify-todo-functionality;verify-todolist-clear-completed-button",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 44,
  "name": "user clicks on the Clear Completed button",
  "keyword": "Then "
});
formatter.step({
  "line": 45,
  "name": "user clicks on the All button",
  "keyword": "Then "
});
formatter.step({
  "line": 46,
  "name": "verify the todo list item",
  "rows": [
    {
      "cells": [
        "ToDoList1"
      ],
      "line": 47
    },
    {
      "cells": [
        "ToDoList2"
      ],
      "line": 48
    },
    {
      "cells": [
        "ToDoList4"
      ],
      "line": 49
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "user clicks on the Completed button",
  "keyword": "Then "
});
formatter.step({
  "line": 51,
  "name": "verify the todo list item not present",
  "rows": [
    {
      "cells": [
        "ToDoList3"
      ],
      "line": 52
    },
    {
      "cells": [
        "ToDoList1"
      ],
      "line": 53
    },
    {
      "cells": [
        "ToDoList2"
      ],
      "line": 54
    },
    {
      "cells": [
        "ToDoList4"
      ],
      "line": 55
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "user clicks on the Active button",
  "keyword": "Then "
});
formatter.step({
  "line": 57,
  "name": "verify the todo list item",
  "rows": [
    {
      "cells": [
        "ToDoList1"
      ],
      "line": 58
    },
    {
      "cells": [
        "ToDoList2"
      ],
      "line": 59
    },
    {
      "cells": [
        "ToDoList4"
      ],
      "line": 60
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "ToDoStepDef.user_clicks_clear_completed_button()"
});
formatter.result({
  "duration": 70897100,
  "status": "passed"
});
formatter.match({
  "location": "ToDoStepDef.user_clicks_all_button()"
});
formatter.result({
  "duration": 50579100,
  "status": "passed"
});
formatter.match({
  "location": "ToDoStepDef.verify_the_todo_text(DataTable)"
});
formatter.result({
  "duration": 293089100,
  "status": "passed"
});
formatter.match({
  "location": "ToDoStepDef.user_clicks_completed_button()"
});
formatter.result({
  "duration": 68144500,
  "status": "passed"
});
formatter.match({
  "location": "ToDoStepDef.verify_the_todo_text_not_present(DataTable)"
});
formatter.result({
  "duration": 79032700,
  "status": "passed"
});
formatter.match({
  "location": "ToDoStepDef.user_clicks_active_button()"
});
formatter.result({
  "duration": 52198200,
  "status": "passed"
});
formatter.match({
  "location": "ToDoStepDef.verify_the_todo_text(DataTable)"
});
formatter.result({
  "duration": 297774800,
  "status": "passed"
});
formatter.before({
  "duration": 340600,
  "status": "passed"
});
formatter.scenario({
  "line": 63,
  "name": "Verify ToDoList clear by using destroy",
  "description": "",
  "id": "verify-todo-functionality;verify-todolist-clear-by-using-destroy",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 62,
      "name": "@CloseAllBrowsers"
    }
  ]
});
formatter.step({
  "line": 64,
  "name": "user removes the todo list item",
  "rows": [
    {
      "cells": [
        "ToDoList1"
      ],
      "line": 65
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 66,
  "name": "user clicks on the All button",
  "keyword": "Then "
});
formatter.step({
  "line": 67,
  "name": "verify the todo list count \"2\"",
  "keyword": "And "
});
formatter.step({
  "line": 68,
  "name": "verify the todo list item",
  "rows": [
    {
      "cells": [
        "ToDoList2"
      ],
      "line": 69
    },
    {
      "cells": [
        "ToDoList4"
      ],
      "line": 70
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 71,
  "name": "user clicks on the Completed button",
  "keyword": "Then "
});
formatter.step({
  "line": 72,
  "name": "verify the todo list item not present",
  "rows": [
    {
      "cells": [
        "ToDoList3"
      ],
      "line": 73
    },
    {
      "cells": [
        "ToDoList1"
      ],
      "line": 74
    },
    {
      "cells": [
        "ToDoList2"
      ],
      "line": 75
    },
    {
      "cells": [
        "ToDoList4"
      ],
      "line": 76
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 77,
  "name": "user clicks on the Active button",
  "keyword": "Then "
});
formatter.step({
  "line": 78,
  "name": "verify the todo list item",
  "rows": [
    {
      "cells": [
        "ToDoList2"
      ],
      "line": 79
    },
    {
      "cells": [
        "ToDoList4"
      ],
      "line": 80
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "ToDoStepDef.user_removes_the_todo_text(DataTable)"
});
formatter.result({
  "duration": 1811548100,
  "status": "passed"
});
formatter.match({
  "location": "ToDoStepDef.user_clicks_all_button()"
});
formatter.result({
  "duration": 118481400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 28
    }
  ],
  "location": "ToDoStepDef.verfiy_todo_list_count(String)"
});
formatter.result({
  "duration": 31410200,
  "status": "passed"
});
formatter.match({
  "location": "ToDoStepDef.verify_the_todo_text(DataTable)"
});
formatter.result({
  "duration": 127461900,
  "status": "passed"
});
formatter.match({
  "location": "ToDoStepDef.user_clicks_completed_button()"
});
formatter.result({
  "duration": 57270200,
  "status": "passed"
});
formatter.match({
  "location": "ToDoStepDef.verify_the_todo_text_not_present(DataTable)"
});
formatter.result({
  "duration": 77910100,
  "status": "passed"
});
formatter.match({
  "location": "ToDoStepDef.user_clicks_active_button()"
});
formatter.result({
  "duration": 48930700,
  "status": "passed"
});
formatter.match({
  "location": "ToDoStepDef.verify_the_todo_text(DataTable)"
});
formatter.result({
  "duration": 162554700,
  "status": "passed"
});
formatter.after({
  "duration": 5707730000,
  "status": "passed"
});
});