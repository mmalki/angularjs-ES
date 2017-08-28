import HelloModule from './hello';
import HelloController from './hello.controller';
import HelloComponent from './hello.component';
import HelloTemplate from './hello-component.tpl.html';

describe('Hello', () => {
    let $rootScope, $componentController;

    beforeEach(window.module(HelloModule));
    beforeEach(
        inject(($injector) => {
            $rootScope = $injector.get('$rootScope');
            $componentController = $injector.get('$componentController');

        }));

    describe('Module', () => {
        // top-level specs: i.e., routes, injection, naming
    });

    describe('Controller', () => {
        // controller specs
        let controller;
        beforeEach(() => {
            controller = $componentController('hello', {
                $scope: $rootScope.$new()
            });
        });

        it('has a name property', () => { // erase if removing this.name from the controller
            expect(controller).to.have.property('name');
        });
    });

    describe('Template', () => {
        // template specs
        // tip: use regex to ensure correct bindings are used e.g., {{  }}
        it('has name in template [REMOVE]', () => {
            expect(HelloTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
        });
    });

    describe('Component', () => {
        // component/directive specs
        let component = HelloComponent;

        it('includes the intended template', () => {
            expect(component.template).to.equal(HelloTemplate);
        });

        it('invokes the right controller', () => {
            expect(component.controller).to.equal(HelloController);
        });
    });
});