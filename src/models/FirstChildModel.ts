import { computed, makeObservable } from "mobx";
import { ParentModel } from "./ParentModel";

export class FirstChildModel extends ParentModel {
    constructor() {
        super();
        this.name = 'First Child'

        makeObservable(this, {
            sayHi: computed
        });
    }

    get sayHi() {
        return 'Hi';
    }
}