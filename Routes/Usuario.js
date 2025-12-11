import { Router } from "express";
import UsuarioControllers from "../Controllers/Usuario.js";

const router = Router();

router.get("/Selector/:mail", UsuarioControllers.selectUsuario)
router.get("/:mail",UsuarioControllers.selectUsuario);
router.post("/insertar", UsuarioControllers.insertUsuario)
router.post("/login", UsuarioControllers.login)

export default router;