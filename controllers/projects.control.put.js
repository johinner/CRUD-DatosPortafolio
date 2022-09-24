import Project from "../models/project.model.js"

export const putProjects = async (req, res) => {
  const{id} = req.params;
  try {
    const updatedProject = await Project.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if(!updatedProject){
      return res.status(404).json({message: "Proyecto no encontrado"})
    }
    return res.json(updatedProject)
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};