import { Button } from './style';

type Props = {
    onClick?: () => void;
    children: React.ReactNode;
    style: "default" | "outlined";
}

const DefaultButton = ({onClick, children, style} : Props) => {
    return ( 
        <Button onClick={onClick} styleType={style}>
            {children}
        </Button>
     );
}
 
export default DefaultButton;