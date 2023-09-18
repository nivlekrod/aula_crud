const { Router } = require("express");
const UsuarioController = require("./Controllers/UsuarioController");
const router = Router();

router.post("/criarUsuario", UsuarioController.criarUsuario);

module.exports =  { router };