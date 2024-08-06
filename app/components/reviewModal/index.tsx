"use client";

import Modal from "../modal/modal";

type Props = {
    shouldShow: boolean;
    onClose: () => void;
}

const ReviewModal = ({shouldShow, onClose}: Props) => {
    return (
        <Modal shouldShow={shouldShow}>
            <button onClick={onClose}>X</button>
        </Modal>
    )
}

export default ReviewModal;