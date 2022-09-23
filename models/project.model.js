import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      unique: true
    }, 
    description: {
      type: String,
      trim: true
    }, 
    technologies: {
      type: Object,
      trim: true
    }, 
    siteURL: {
      type: String,
      trim: true
    }, 
    repository: {
      type: String,
      trim: true
    }
  }
);

export default mongoose.model("Project", projectSchema);