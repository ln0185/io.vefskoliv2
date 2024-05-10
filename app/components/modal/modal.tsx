import { ModalWrapper } from './style';

type Props = {
    shouldShow: boolean;
    onClose: () => void;
    children: React.ReactNode;
}
const Modal = ({shouldShow, onClose, children}: Props) => {
    return shouldShow ? ( 
        <ModalWrapper>
            <div>
        <button onClick={onClose}>
          X
        </button>
        {children}
      </div>
        </ModalWrapper>
    ) : null;
}

export default Modal;