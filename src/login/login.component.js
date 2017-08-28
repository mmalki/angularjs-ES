class loginController {
    /*@ngInject*/
    constructor($location, UserService) {
        Object.assign(this, { $location, UserService })
    }

    login() {
        const vm = this;
        vm.loading = true;
        vm.UserService.login(vm.username, vm.password)
            .then((result) => {
                console.log(result);
                vm.$location.path('/');
            })
            .catch((error) => {
                console.log(error);
                vm.error = error.text;
                vm.loading = false;
            });
    }
}

export default loginController;