import { Button, ExitIcon } from './style';
import exiticon from '../../../assets/exit.svg';

type Props = {
    onClick: () => void;

}

const ExitButton = ({onClick}: Props) => {
    return ( 
        <Button onClick={onClick}>
            <ExitIcon src={exiticon} alt="exit" />
        </Button>
     );
}
 
export default ExitButton;