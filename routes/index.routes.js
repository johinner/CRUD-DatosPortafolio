import {Router} from "express";
const router = Router();

router.get(("/"), (req, res) =>{
  res.send("Ruta inicial")
});

export default router;
