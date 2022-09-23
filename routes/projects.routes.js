import {Router} from "express";
import {getProjects} from "../controllers/projects.control.get.js";
import {postProjects} from "../controllers/projects.control.post.js";
import {putProjects} from "../controllers/projects.control.put.js";

const router = Router();

router.get("/data", getProjects);

router.post("/data", postProjects);

router.put("/data/:id", putProjects);

export default router;