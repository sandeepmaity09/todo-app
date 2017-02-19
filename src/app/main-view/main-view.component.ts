import {Component} from "@angular/core";
import {Router} from "@angular/router";

@Component({

    moduleId: module.id,
    selector: 'main-view',
    templateUrl: `../../../app/main-view/main-view.component.html`,
    styleUrls: ['../../../app/main-view/main-view.component.css']
})

export class ViewComponent {
    appName = "ToDoLister";

    constructor(private router: Router) {
    }

    goToCreate() {
        this.router.navigate(['create'])
    }

    goToShow(){
        this.router.navigate(['show'])
    }
}