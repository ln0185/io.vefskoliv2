import { getGuides } from "./query";
import { UserWithIdType } from "../models/user";
import { ObjectId } from "mongodb";


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
    
    return ( 
    <div>
        {fetchedGuides && fetchedGuides.map(guide => (
            <div key={guide._id}>
                <h1>{guide.title}</h1>
            </div>
        ))}
    </div> 
    );
}
 
export default Guides;