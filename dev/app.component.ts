import {Component} from 'angular2/core';
// import {TemplateDrivenFormComponent} from './template-driven-form.component';
import {DataDrivenFormComponent} from './data-driven-form.component';

@Component({
    selector: 'app',
    template: `
        <my-data-driven></my-data-driven>

    `,
    directives: [DataDrivenFormComponent]
})
export class AppComponent {

}
