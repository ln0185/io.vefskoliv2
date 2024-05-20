
import { getGuides } from "./query";
import { UserWithIdType } from "../models/user";
import { ObjectId } from "mongodb";
import GuideCard  from "../components/guideCard";

import { Grid } from "./style";



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

    const fetchedGuides = await getGuides(user);

    console.log(fetchedGuides);

    let nr = 0;

    
    return ( 
    <Grid>
        {fetchedGuides && fetchedGuides.map(guide => (
                <GuideCard key={guide._id} guideNr={++nr} name={guide.title} status="Guide not Returned"/>
        ))}
    </Grid> 
    );
}
 
export default Guides;