import {Component} from "@angular/core";
import {TaskService} from "../app.service";
import {Tasks} from "../tasks";
import {Router} from "@angular/router";

@Component({
    selector: 'create',
    templateUrl: `./app/create/create.component.html`,
    providers:[TaskService]
})

export class CreateComponent {

    task:Tasks;

    constructor(private tsk: TaskService) {}

    createTask(){
        this.tsk.createTask(this.task);
    }
}