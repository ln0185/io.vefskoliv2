import { ModalWrapper } from './style';

type Props = {
    shouldShow: boolean;
    children: React.ReactNode;
}
const Modal = ({shouldShow, children}: Props) => {
    return shouldShow ? ( 
        <ModalWrapper>
        {children}
        </ModalWrapper>
    ) : null;
}

export default Modal;