"use client"

import { CardWrapper, Info, Name, GuideNr, Status, StatusWrapper } from "./style";

type GuideCardProps = {
    guideNr: number;
    name: string;
    status: string;
}

const GuideCard = ({guideNr, name, status} : GuideCardProps) => {
    return (
        <CardWrapper>
            <Info>
                <GuideNr>GUIDE {guideNr}</GuideNr>
                <Name>{name}</Name>
            </Info>

            <StatusWrapper>
                <Status>
                    {status}
                </Status>
            </StatusWrapper>
        </CardWrapper>
     );
}
 
export default GuideCard;