import { useModel } from "../hooks"
import type { FirstChildModel } from "../models";

export const FirstChild: React.FC = () => {
    const model = useModel<FirstChildModel>();

    return (
        <>
            <p>{model.hi}</p>
            <p>{model.sayHi}</p>
        </>
    )
}