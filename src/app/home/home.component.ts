import { Component, Input } from "@angular/core";

@Component({
    selector: "app-home",
    template: `
        <h1>{{ title }}</h1>
    `
})
export class HomeComponent {

    @Input() title: string;

}


