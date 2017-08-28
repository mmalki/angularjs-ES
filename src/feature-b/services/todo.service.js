import angular from 'angular';
import * as _ from 'lodash';

export default class TodoService {
    /*@ngInject*/
    constructor(initialTodos, $http) {
        this.todos = initialTodos;
        this.$http = $http;
        // this.$localStorage = $localStorage;
    }

    addTodo(label) {
        let todo = {
            label,
            done: false
        };
        this.todos.push(todo);
        this.todos = _.uniq(this.todos, 'label');
        console.log(this.todos);



    }

    getAuthentication() {
        return this.$http.post('/api/authenticate', { username: 'test', password: 'password' })
            .success(function(response) {

                // login successful if there's a token in the response
                if (response.token) {
                    // store username and token in local storage to keep user logged in between page refreshes
                    //this.$localStorage.currentUser = { username: 'test', token: response.token };

                    // add jwt token to auth header for all requests made by the $http service

                    //$http.defaults.headers.common.Authorization = 'Bearer ' + response.token;

                    console.log(response);
                    // execute callback with true to indicate successful login

                } else {
                    // execute callback with false to indicate failed login
                    console.error("probleme de connexion");
                }
                return response;
            });
    }

    toggleTodo(label) {
        let toggledTodo = _.find(this.todos, function(todo) {
            return todo.label === label;
        });
        toggledTodo.done = !toggledTodo.done;
    }

    removeDoneTodos() {
        _.remove(this.todos, function(todo) {
            return todo.done;
        });
    }

}