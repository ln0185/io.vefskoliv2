"use client"

import { CardWrapper, Info, Name, GuideNr, Status, StatusWrapper, StyledLink, InfoWrapper } from "./style";

type GuideCardProps = {
    guideNr: number;
    name: string;
    status: string;
    forReturn: string;
    forReview: string;
}

const GuideCard = ({guideNr, name, status, forReturn, forReview} : GuideCardProps) => {
    return (
        <CardWrapper>
            
            <InfoWrapper >
                <StyledLink href={forReturn}>
                    <Info>
                    <GuideNr>GUIDE {guideNr}</GuideNr>
                    <Name>{name}</Name>
                    </Info>
                </StyledLink>
            </InfoWrapper>
            
            
            <StatusWrapper>
            <StyledLink href={forReview}>
                <Status>
                    {status}
                </Status>
                </StyledLink>
            </StatusWrapper>
        </CardWrapper>
     );
}
 
export default GuideCard;