const { Router } = require("express");
const UsuarioController = require("./Controllers/UsuarioController");
const router = Router();

router.post("/criarUsuario", UsuarioController.criarUsuario);
router.get(`/buscarUsuario/:id`, UsuarioController.buscarUsuario)

module.exports =  { router };