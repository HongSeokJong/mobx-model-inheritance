import { computed, makeObservable, observable } from "mobx";

export class ParentModel {
    name: string;

    constructor() {
        this.name = 'Parent'

        makeObservable(this, {
            name: observable,

            hi: computed
        });
    }

    get hi(): string  {
        return `Hi I'm ${this.name}`
    }
}