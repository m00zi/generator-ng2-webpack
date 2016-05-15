/* beautify ignore:start */
import {it, injectAsync, beforeEachProviders} from '@angular/core/testing';
import {TestComponentBuilder} from '@angular/compiler/testing';
import {<%=componentnameClass %>} from './<%=componentname%>';
/* beautify ignore:end */

describe('Component: <%=componentnameClass%>', () => {

    beforeEachProviders(() => []);

    it('should be defined', injectAsync([TestComponentBuilder], (tcb) => {
        return tcb.createAsync(<%=componentnameClass %>)
            .then((fixture) => {
                let element = fixture.debugElement.nativeElement;
                let cmpInstance = <<%=componentnameClass %>>fixture.debugElement.componentInstance;
                fixture.detectChanges();
                expect(cmpInstance).toBeDefined();
                expect(element).toBeDefined();
            });
    }));

});