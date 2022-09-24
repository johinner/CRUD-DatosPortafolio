import Projects from "../models/project.model.js"


export const getProjects = async (req, res) => {
  try{
    const projects = await Projects.find();
    return res.json(projects);
  
  } catch (error){
    return res.status(500).json({message: error.message});
  }
};

export const getProject = async (req, res) => {
  const {id} = req.params
  try {
    const getProject = await Projects.findById(id);
    return res.json(getProject)
  } catch (error) {
     return res.status(500).json({message: error.message});
  }
};