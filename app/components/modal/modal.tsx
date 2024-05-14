import { ModalWrapper } from './style';

type Props = {
    shouldShow: boolean;
    children: React.ReactNode;
    [props: string]:any;
}
const Modal = ({shouldShow, children, ...props}: Props) => {
    return shouldShow ? ( 
        <ModalWrapper {...props}>
            <div onClick={(e) => e.stopPropagation()}>
            {children}
            </div>
        </ModalWrapper>
    ) : null;
}

export default Modal;