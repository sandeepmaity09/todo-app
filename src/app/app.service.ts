import {Injectable} from '@angular/core';
import {Tasks} from './tasks'

@Injectable()

export class TaskService{

    tasks:Tasks[];

    createTask(task:Tasks) {
        this.tasks.push(task);
    }
}