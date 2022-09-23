import Projects from "../models/project.model.js"


export const getProjects = async (req, res) => {
  try{
    const projects = await Projects.find();
    return res.json(projects);
  
  } catch (error){
    return res.status(500).json({message: error.message});
  }
};