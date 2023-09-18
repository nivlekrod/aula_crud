const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

module.exports = {
  async criarUsuario(req, res) {
    const { nome, email } = req.body;
    try {
      const usuarioExiste = await prisma.usuario.findFirst({
        where: {
          email,
        },
      });
      if (usuarioExiste) {
        return res.json("Esse usuário já foi criado");
      } else {
        const usuario = await prisma.usuario.create({
          data: {
            email,
            nome,
          },
        });
        res.json({ Mensagem: `Usuário Criado` });
      }
    } catch (error) {
      res.json(error);
    }
  },

  async buscarUsuario(req, res) {
    const { id } = req.params;

    try {
      const usuario = await prisma.usuario.findUnique({
        where: { id: parseInt(id, 10) },
      });
      res.json(usuario);
    } catch (error) {
      res.json(error);
    }
  },

  async buscarUsuarios(req, res) {
    const usuarios = await prisma.usuario.findMany();
    res.json(usuarios);
  },

  async atualizarUsuario(req, res) {
    try {
      const { id } = req.params;
      const { nome, email } = req.body;

      const usuario = await prisma.usuario.findUnique({
        where: { id: parseInt(id) },
      });

      if (!usuario) {
        return res.json({ error: "Usuario não existe" });
      }

      usuario = await prisma.usuario.update({
        where: { id: parseInt(id) },
        data: { nome, email },
        select: {
          nome: true,
          email: true,
        },
      });
      return res.json(usuario);
    } catch (error) {
      res.json(error);
    }
  },

  async deletarUsuario(req, res) {
    try {
      const { id } = req.params;

      const usuario = await prisma.usuario.findUnique({
        where: { id: parseInt(id) },
      });

      if (!usuario) {
        return res.json({ error: "Usuario não existe" });
      }

      usuario = await prisma.usuario.delete({
        where: { id: parseInt(id) },
      });
      return res.json("Usuario Deletado");
    } catch (error) {
      res.json(error);
    }
  },
};
