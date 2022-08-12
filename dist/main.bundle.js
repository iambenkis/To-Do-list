"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkto_do_list"] = self["webpackChunkto_do_list"] || []).push([["main"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_todo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/todo.js */ \"./src/modules/todo.js\");\n// import './style.css';\n\n\nconst taskContainer = document.querySelector('.task-container');\nconst taskEntered = document.querySelector('.in-task');\nconst submitTask = document.querySelector('.fa-left-long');\nconst form = document.querySelector('form');\nconst deleteTaskes = document.querySelector('.delete');\nconst todoList = new _modules_todo_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\ntodoList.displayTasks();\n\nconst confirmInput = () => {\n  if (taskEntered.value.trim()) {\n    todoList.addTask(taskEntered.value);\n    taskEntered.value = '';\n    taskContainer.innerHTML = '';\n    todoList.displayTasks();\n  }\n};\nsubmitTask.addEventListener('click', (e) => {\n  e.preventDefault();\n  confirmInput();\n});\n\nform.addEventListener('submit', (e) => {\n  e.preventDefault();\n  confirmInput();\n});\n\ndeleteTaskes.addEventListener('click', () => {\n   todoList.cleanCompleted();  \n   todoList.displayTasks();\n})\n\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ }),

/***/ "./src/modules/todo.js":
/*!*****************************!*\
  !*** ./src/modules/todo.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MyTodo)\n/* harmony export */ });\nconst taskContainer = document.querySelector('.task-container');\n\nclass MyTodo {\n  constructor() {\n    this.tasks = [];\n  }\n\n    addTask = (description) => {\n      const myTask = {\n        description,\n        completed: false,\n        index: this.tasks.length + 1,\n      };\n      this.tasks.push(myTask);\n      this.setStorage();\n    }\n\n    remove = (id) => {\n      this.resetIndex();\n      this.tasks.forEach((task) => {\n        if (task.index === Number(id)) {\n          this.tasks\n            .splice(task.index - 1, 1);\n        }\n      });\n    }\n\n    resetIndex = () => {\n      let initialIndex = 1;\n      this.tasks.forEach((task) => {\n        task.index = initialIndex;\n        initialIndex += 1;\n      });\n    }\n\n    cleanCompleted = () => {\n      this.tasks = this.tasks.filter((task) => task.completed === false);\n      this.setStorage(); \n    }\n\n    taskTemplate = (task) => `\n        <div class=\"task\">\n            <div class=\"t-left\" id=${task.index}>\n                <input type=\"checkbox\" name=\"Drag\" class='checkbox' ${task.completed ? 'checked' : ''} id=${task.index}> \n                <label for=\"\" class=${task.completed ? 'line task-label' : 'task-label'}>${task.description}</label>\n            </div>\n            <p class=\"deleteTask\" id=${task.index}>Delete</p> \n        </div>`;\n\n    displayTasks = () => {\n      this.getStorage();\n      taskContainer.innerHTML = '';\n      this.tasks\n        .forEach((task) => taskContainer.insertAdjacentHTML('beforeend', this.taskTemplate(task)));\n      const checkboxes = document.querySelectorAll('.checkbox');\n      const taskLabel = taskContainer.querySelectorAll('.task-label');\n      checkboxes.forEach((checkbox, id) => {\n        checkbox.addEventListener('change', () => {\n          if (checkbox.checked) {\n            taskLabel[id]?.classList.add('line');\n            this.tasks = this.tasks.map((task) => {\n              if (task.index === parseInt(checkbox.parentElement.id, 10)) {\n                task.completed = true;\n              }\n              return task;\n            });\n          } else {\n            taskLabel[id]?.classList.remove('line');\n            this.tasks = this.tasks.map((task) => {\n              if (task.index === parseInt(checkbox.parentElement.id, 10)) {\n                task.completed = false;\n              }\n              return task;\n            });\n          }\n        });\n      });\n\n      const deleteBtn = document.querySelectorAll('.deleteTask');\n      deleteBtn.forEach((btn) => {\n        btn.addEventListener('click', (e) => {\n          e.preventDefault();\n          const { id } = e.currentTarget;\n          this.remove(id);\n          this.setStorage();\n          taskContainer.innerHTML = '';\n          this.displayTasks(this.tasks);\n        });\n      });\n    }\n\n    setStorage = () => {\n      const formData = JSON.stringify(this.tasks);\n      localStorage.setItem('tasks', formData);\n    };\n\n    getStorage = () => {\n      if (localStorage.getItem('tasks')) {\n        this.tasks = JSON.parse(localStorage.getItem('tasks'));\n      }\n    };\n}\n\n//# sourceURL=webpack://to-do-list/./src/modules/todo.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);