import ProjectFormats from "../models/project.model.js"

export const postProjects = async (req, res) => {
  const { name, description, technologies, siteURL, repository} = req.body;

  if(!name) return res.status(404).json({
    message: "valor name es requerido"
  })

  try{
    const newProject = new ProjectFormats({
      name, description, technologies, siteURL, repository
    });
    
    await newProject.save();
    return res.json(newProject);
    
  } catch (error){
    return res.status(500).json({ message: error.message });
  }
}