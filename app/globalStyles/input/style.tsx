import styled from 'styled-components';

export const ReusableInput = styled.input`
    width:  382px;
    height: 32px;
    padding: 10px;
    border: 1px solid var(--primary-black-30);
    border-radius: 8px;
    `;

export const ReusableTextarea = styled.textarea`
    width: 382px;
    height: 200px;
    padding: 10px;
    border: 1px solid var(--primary-black-30);
    border-radius: 8px;
    `;

export const Label = styled.label`
    font-size: 12px;
    color: var(--primary-black-60);
    width: 382px;
    `;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    max-width: fit-content;
    `;