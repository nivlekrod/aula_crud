const express = require("express");
const { router } = require("./routes")
const { PrismaClient } = require("@prisma/client");

const app = express();

app.use(express.json());

const prisma = new PrismaClient();

app.use(router);

app.listen(8080, () => {
    console.log("Rodando na porta 8080")
})
