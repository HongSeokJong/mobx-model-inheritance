import { useModel } from "../hooks"
import type { SecondChildModel } from "../models";

export const SecondChild: React.FC = () => {
    const model = useModel<SecondChildModel>();

    return (
        <>
            <p>{model.hi}</p>
            <p>{model.sayHello}</p>
        </>
    )
}