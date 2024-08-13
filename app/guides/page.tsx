import { getGuides } from "./query";
import { UserWithIdType } from "../models/user";
import { ObjectId } from "mongodb";

import GuidesClient from "./guidesClient";
import { GuideType } from "../models/guide";
import { useSession } from "next-auth/react";




const Guides = async () => {

    const { data: session } = useSession();
    //get the user from session
    const user = session?.user as UserWithIdType;
    console.log("This is happy user", user)

    const fetchingGuides = await getGuides(user) || [];


    const link = fetchingGuides.map((guide: GuideType) => ({
        ...guide,
        individualGuideLink: `guides/${(guide as any)._id}`
    }))


    return (
        <GuidesClient fetchedGuides={JSON.parse(JSON.stringify(link))}/>
    );
}

export default Guides;
