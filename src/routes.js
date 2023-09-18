const { Router } = require("express");
const UsuarioController = require("./Controllers/UsuarioController");
const router = Router();

router.post("/criarUsuario", UsuarioController.criarUsuario);
router.get(`/buscarUsuario/:id`, UsuarioController.buscarUsuario);
router.get(`/buscarUsuario`, UsuarioController.buscarUsuarios);
router.put(`/atualizarUsuario/:id`, UsuarioController.atualizarUsuario);


module.exports =  { router };