import {Component} from 'angular2/core';
import {TemplateDrivenFormComponent} from './template-driven-form.component';

@Component({
    selector: 'app',
    template: `
        <my-template-drive></my-template-drive>

    `,
    directives: [TemplateDrivenFormComponent]
})
export class AppComponent {

}
