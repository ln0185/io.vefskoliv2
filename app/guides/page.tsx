import { getGuides } from "./query";
import { UserWithIdType } from "../models/user";
import { ObjectId } from "mongodb";

import GuidesClient from "./guidesClient";
import { GuideType } from "../models/guide";



const Guides = async () => {

    const user: UserWithIdType = {
        "_id": new ObjectId("6501e7f2bbd0d5ea15ccd813"),
        "name": "Jakub Mierzejek",
        "email": "jakub1@m.is",
        "password": "$2b$10$3MdgqPSSZIxU6iwyH5lLbOqfETD2V28VPvdc4KFXmYzzOnmjQWGoW",
        "background": "as",
        "careerGoals": "as",
        "interests": "as",
        "favoriteArtists": "",
        "createdAt": new Date("2023-09-13T16:48:47.660Z"),
        "role": "student",
        "avatarUrl": "",
      }

    const fetchingGuides = await getGuides(user) || [];

    const link = fetchingGuides.map((guide: GuideType) => ({
        ...guide,
        individualGuideLink: `guides/${(guide as any)._id}`
    }))

    return (
        <GuidesClient fetchedGuides={link}/>
    );
}

export default Guides;
