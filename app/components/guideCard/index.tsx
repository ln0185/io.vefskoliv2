"use client"

import ReviewModal from "../reviewModal";
import { CardWrapper, Info, Name, GuideNr, Status, StatusWrapper, StyledLink, InfoWrapper, Review } from "./style";
import { useState } from "react";

type GuideCardProps = {
    guideNr: number;
    name: string;
    status: string;
    forReturn: string;
}

const GuideCard = ({guideNr, name, status, forReturn} : GuideCardProps) => {
    const [openReviewForm, setOpenReviewForm] = useState(false);

    return (
        <>
        <CardWrapper>
            <InfoWrapper>
                <StyledLink href={forReturn}>
                    <Info>
                    <GuideNr>GUIDE {guideNr}</GuideNr>
                    <Name>{name}</Name>
                    </Info>
                </StyledLink>
            </InfoWrapper>
            
            
            <StatusWrapper>
            <Review onClick={() => setOpenReviewForm(!openReviewForm)}>
                <Status>
                    {status}
                </Status>
                </Review>
            </StatusWrapper>
        </CardWrapper>
        {/* This is a modal for review from */}
        {openReviewForm && (
            <ReviewModal shouldShow={openReviewForm} onClose={() => setOpenReviewForm(false)}/>
        )}
        </>

     );
}
 
export default GuideCard;