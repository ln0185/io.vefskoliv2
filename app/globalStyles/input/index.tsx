import { Wrapper, Label, ReusableInput, ReusableTextarea } from "./style";

type InputProps = {
    componentType: "input" | "textarea";
    type?: string
    label: string;
    [x: string]: any; // To accept any other prop like placeholder, value, etc.
}
    

const Input = ({label, componentType = "input", type, ...props }: InputProps) => {
    return(
        <Wrapper>
        <Label>{label}</Label>
        {componentType === "input" ? (
            <ReusableInput type="type" {...props} />
        ) : (
            <ReusableTextarea {...props} />
        )}
        </Wrapper>
)}

export default Input;