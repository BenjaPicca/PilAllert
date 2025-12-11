import express from "express";
import cors from "cors";
const app = express();
const port = 3000;

import UsuarioRouters from "./Routes/Usuario.js";



app.use(express.json());

app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
}));

app.get("/", (req, res) => {
    res.send("API working");
});

app.use("/usuario", UsuarioRouters);

app.listen(port, () => {
    console.log("Escuchando beibi");
});

export default app;