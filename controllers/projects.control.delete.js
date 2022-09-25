import Projects from "../models/project.model.js"
import {deleteImage} from "../utils/cloudinary.js"

export const deleteProjects = async (req, res) => {
  try {
    const {id} = req.params;
    const deleteProjects = await Projects.findByIdAndDelete(id);

    if(deleteProjects.image?.public_id){
      await deleteImage(deleteProjects.image.public_id)
    }
    
    return res.json(deleteProjects);
  } catch (error) {  
   
    return res.status(404).json({info: "Projecto no Registrado", message: error.message})
  }  
};
