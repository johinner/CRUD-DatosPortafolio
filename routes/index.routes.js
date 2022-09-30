import {Router} from "express";
import {getProjects} from "../controllers/projects.control.get.js";
const router = Router();

router.get(("/"), getProjects);

export default router;
