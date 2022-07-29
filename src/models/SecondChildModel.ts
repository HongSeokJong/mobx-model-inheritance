import { makeObservable, computed } from "mobx";
import { ParentModel } from "./ParentModel";

export class SecondChildModel extends ParentModel {
    constructor() {
        super();
        this.name = 'Second Child'

        makeObservable(this, {
            sayHello: computed
        });
    }

    get sayHello() {
        return 'Hello';
    }
}