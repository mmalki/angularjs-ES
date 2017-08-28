const [isLoggedIn, userInfo] = [Symbol(), Symbol()];

class UserService {

    /*@ngInject*/
    constructor($http, $q, $localStorage, $rootScope, AjaxError, Event) {
        Object.assign(this, { $http, $q, $localStorage, AjaxError, $rootScope, Event });
        // private variable
        this[isLoggedIn] = false;
        this[userInfo] = null;
    }

    login(username, password) {
        const self = this;
        let req = {
            username,
            password
        }

        return self.$http.post('/api/authenticate', req)
            .then(_success)
            .catch(_error);

        function _success(response) {
            console.log(response);
            const data = response.data;
            if ((response.status === 200 || response.status === 201) && data.code === 0) {
                self._storageUser(data, self);
                self._setUser(data.user);
                self.$rootScope.$broadcast(self.Event.AUTH_SESSION_VALID, data.user);

                return data.user;

            }
            req = {};
            return self.AjaxError.catcher(data);


        }

        function _error(reason) {
            self._clearUser();
            return self.AjaxError.catcher(reason);
        }

    }
    logout() {

    }
    _setUser(userData) {
        this[isLoggedIn] = true;
        this[userInfo] = userData;
    }

    _clearUser() {
        this[isLoggedIn] = false;
        this[userInfo] = null;
    }

    _storageUser(data, self) {
        self.$localStorage.currentUser = { user: data.user, token: data.token };
    }
    _clearStrageUser(self) {
        delete self.$localStorage.currentUser;
        self.$http.defaults.headers.common.Authorization = '';
    }
}




export default UserService;