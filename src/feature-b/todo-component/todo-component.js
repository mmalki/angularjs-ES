export default class TodoComponent {
    /*@ngInject*/
    constructor(TodoService, $http, $localStorage) {
        this.TodoService = TodoService;
        this.todos = TodoService.todos;
        this.label = '';
        this.$http = $http;
        this.$localStorage = $localStorage;

        this.collapse = [true, true, true];
    }

    addTodo() {
        this.TodoService.addTodo(this.label);
        this.label = '';
    }

    toggleTodo(todo) {
        this.TodoService.toggleTodo(todo.label);
    }

    removeDoneTodos() {
        this.TodoService.removeDoneTodos();
    }

    toggleCollapse(index) {
        let originalValue = this.collapse[index];
        this.collapse.forEach((item, i) => {
            this.collapse[i] = true;
        });
        this.collapse[index] = !originalValue;
    }
    getAuthentication() {

        this.TodoService.getAuthentication().then((response) => {
            console.log(response);
            this.$localStorage.currentUser = { username: 'response', token: response.data.token };
        });
    }

}