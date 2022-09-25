import ProjectFormats from "../models/project.model.js"
import {uploadImage, deleteImage} from '../utils/cloudinary.js'
import fs from "fs-extra";

export const postProjects = async (req, res) => {
  const {name, description, technologies, siteURL, repository} = await req.body;

  const newProject = new ProjectFormats({
      name, description, technologies, siteURL, repository
    });
  try{
    
    
    if(!name){
    if (req.files?.image){
      await fs.unlink(req.files.image.tempFilePath)
    }
     return res.status(404).json({ message: "valor name es requerido"})
    }
    
    

    if(req.files?.image){
      const result = await uploadImage(req.files.image.tempFilePath);
      newProject.image = {
        public_id: result.public_id,
        secure_url: result.secure_url
      }
    }
    await fs.unlink(req.files.image.tempFilePath);
    await newProject.save();
    return res.json(newProject);
    
  } catch (error){
    if (req.files?.image){
      await deleteImage(newProject.image.public_id)
    }
    
    return res.status(500).json({ message: error.message });
  }
}
