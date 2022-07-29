import { useModel } from "../hooks"

export const Parent: React.FC = () => {
    const model = useModel();

    return <p>{model.hi}</p>
}