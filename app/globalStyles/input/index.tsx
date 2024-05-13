import { Wrapper, Label, ReusableInput, ReusableTextarea } from "./style";

type InputProps = {
    label: string;
    [props: string]: any; // To accept any other prop like placeholder, value, etc.
}
    

const Input = ({label, ...props }: InputProps) => {
    return(
        <Wrapper>
        <Label>{label}</Label>
        {props.type === "textarea" ? (
            <ReusableTextarea {...props} />
        ) : (
            <ReusableInput {...props}/>
        )}
        </Wrapper>
)}

export default Input;