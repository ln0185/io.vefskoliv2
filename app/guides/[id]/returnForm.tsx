"use client"

import Modal from "../../components/modal/modal";
import Button  from "../../globalStyles/buttons/default";
import ExitButton from "../../globalStyles/buttons/exit";
import Input from "../../globalStyles/input";

import { Form, ModalContent } from "./style";

import { useState } from "react";

const ReturnForm = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
        <Button onClick={() => setIsModalOpen(!isModalOpen)} style="default">RETURN</Button>
        {isModalOpen && (
            <Modal onClick={() => setIsModalOpen(!isModalOpen)} shouldShow={isModalOpen}>
                <ModalContent>
                    <ExitButton onClick={() => setIsModalOpen(!isModalOpen)}/>
                    <Form>
                        <Input type="text" label="Github or Figma URL"></Input>
                        <Input type="text" label="Live version or prototype(Figma)"></Input>
                        <Input type="text" label="Image that suits your project (optional)"></Input>
                        <Input type="text" label="Project title"></Input>
                        <Input type="textarea" label="Short project description"></Input>
                        <Button style="default">SUBMIT</Button>
                    </Form>
                </ModalContent>
            </Modal>
        )}
        </>
    )
}

export default ReturnForm;