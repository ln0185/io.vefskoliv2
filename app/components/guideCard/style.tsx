import styled from 'styled-components';

export const CardWrapper = styled.div`
display: flex;
flex-direction: column;
gap: 8px;
`;

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid var(--theme-module3-100);
    align-items: center;
    padding-top: 25px;
    gap: 16px;
    width: 190px;
    height: 160px;
    border-radius: 8px 8px 0 0;
`;

export const GuideNr = styled.h2`
    font-size: 16px;
    font-weight: 600;
`;

export const Name = styled.p`
    font-size: 12px;
    width: 155px;
    text-align: center;
`;

export const StatusWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid var(--theme-module3-100);
    width: 190px;
    height: 50px;
    border-radius: 0 0 8px 8px;
`;

export const Status = styled.h3`
    font-size: 12px;
    padding: 10px;
    font-weight: 400;
`;