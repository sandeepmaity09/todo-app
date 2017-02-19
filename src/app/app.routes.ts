import {Routes} from "@angular/router";
import {CreateComponent} from "./create/create.component";
import {ShowComponent} from "./show/show.component";

export const routes: Routes = [{
    path: 'create',
    component: CreateComponent
}, {
    path: 'show',
    component: ShowComponent
}]