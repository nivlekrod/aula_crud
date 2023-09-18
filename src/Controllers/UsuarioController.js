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
        res.json(error)
    }
  },
};
