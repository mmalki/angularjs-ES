class AjaxErrorHandlerService {
    /*@ngInject*/
    constructor(Error, $q) {
        Object.assign(this, { Error, $q });
    }

    catcher(reason) {

        const type = typeof reason;
        console.log('message', reason);

        let code = '$UNEXPECTED';

        if (reason) {
            if (type === 'object') {
                code = reason.data.message;
            } else if (type === 'string') {
                code = reason;
            }
        }

        return this.$q.reject({
            code,
            text: this.Error.getErrorMessage(code)
        });


    }


}

export default AjaxErrorHandlerService;