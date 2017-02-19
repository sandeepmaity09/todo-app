import {Component} from "@angular/core";
import {TaskService} from "../app.service";

@Component({
    selector: 'show',
    templateUrl: './app/show/show.component.html',
    providers: [TaskService]
})

export class ShowComponent{

    constructor(private tasks:TaskService){}

}