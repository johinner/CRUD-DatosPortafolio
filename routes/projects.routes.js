import {Router} from "express";
import {getProjects, getProject} from "../controllers/projects.control.get.js";
import {postProjects} from "../controllers/projects.control.post.js";
import {putProjects} from "../controllers/projects.control.put.js";
import {deleteProjects} from "../controllers/projects.control.delete.js";

import fileUpload from "express-fileupload"; 

const router = Router();

router.get("/data", getProjects);

router.get("/data/:id", getProject);

router.post("/data", fileUpload({
  useTempFiles: true,
  tempFileDir: "./uploads"
}), postProjects);

router.put("/data/:id", putProjects);

router.delete("/data/:id", deleteProjects);

export default router;