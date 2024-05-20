import { connectToDatabase } from "../../utils/mongoose-connector";
import { Guide as G, GuideType } from "../../models/guide";
import { Types } from "mongoose";


//Getting the guide and all of it's content here
const getGuide = async (id: string) => {
        if (!Types.ObjectId.isValid(id)) {
            return null;
        }
        const objectId = new Types.ObjectId(id);
        await connectToDatabase();
        const guide: GuideType & {_id:string} | null = await G.findOne({ _id: objectId });
        return guide; 
    }


//displaying the guide here
  const guide = async ({ params }: { params: { id: string } }) => {
    const g = await getGuide(params.id);
    if (!g) {
      return <><h1>Guide not found</h1> <h2>{params.id}</h2></>
    }
    const rMaterials = g.resources.map((material) => {
      return { title: material.description, link: material.link };
    });
    const cMaterials = JSON.parse(JSON.stringify(g.classes));
    const allMaterials = rMaterials.concat(cMaterials);
    return (
        <div>YAY! the guides is here!</div>
    )};

    export default guide;