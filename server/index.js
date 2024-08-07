require("dotenv").config();
const express = require("express");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const jwtConfig = require("./jwt.config");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const { Usuario } = require("./Models/usuario");
const { Tarea } = require("./Models/tarea");
const { Console } = require("console");
const app = express();

app.set("key", jwtConfig.clave);
app.use(express.json());
app.use(cors(corsOptions));

const PORT = process.env.PORT || "3001";

var corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200,
};

const verifyToken = (req, res, next) => {
  console.log(`header authorization`, req.headers.authorization);
  const authorization = req.headers.authorization;
  const token = authorization && authorization.split(" ")[1];
  console.log(`header authorization > token`, token);

  if (!token) {
    return res.status(401).json({ error: "No token sent" });
  }

  const secret = app.get("key");

  jwt.verify(token, secret, (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: "Unauthorized" });
    }
    req.user = decoded;
    next();
  });
};

const uri = process.env.MONGODB_URI;

mongoose
  .connect(uri)
  .then(() => {
    console.log("Conexión a MongoDB exitosa");
  })
  .catch((error) => {
    console.error("Error conectando a MongoDB:", error);
  });

app.post("/api/register", async (req, res) => {
  try {
    // Chequeamos si el email existe en nuestra base de datos
    const existingUser = await Usuario.findOne({ email: req.body.email });
    if (existingUser) {
      return res.status(400).json({ error: "Email already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    // Creamos el objeto usuario desde el modelo Usuario
    const newUser = new Usuario({
      email: req.body.email,
      password: hashedPassword,
    });

    await newUser.save();
    res.status(201).json({ message: "Usuario registrado correctamente" });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
    console.log(error);
  }
});

app.post("/api/login", async (req, res) => {
  try {
    const user = await Usuario.findOne({ email: req.body.email });
    //console.log("user", user);
    if (!user) {
      return res
        .status(401)
        .json({ error: "El email no existe en nuestra base de datos" });
    }

    const passwordMatch = await bcrypt.compare(
      req.body.password,
      user.password,
    );
    if (!passwordMatch) {
      return res
        .status(401)
        .json({ error: "Las contraseñas no son correctas" });
    }

    const secret = app.get("key");
    const token = jwt.sign({ email: user.email, usuario: user.user }, secret);
    res.status(200).json({ token, ok: true });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get("/api/user", verifyToken, async (req, res) => {
  try {
    console.log("Token decodificado:", req.user);

    const user = await Usuario.findOne({ email: req.user.email });
    if (!user) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }
    res.status(200).json({ user: user.user, email: user.email });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get("/", (req, res) => {
  res.send("API del proyecto ToDo List del Bootcamp de ProgramandoPY");
});

app.post("/autenticar", async (req, res) => {
  if (req.body.email) {
    const emailExistente = await Usuario.findOne({ email: req.body.email });
    if (emailExistente) {
      const usuario = req.body.user;

      const payload = {
        usuario,
        email: emailExistente.email,
        checked: true,
      };
      const key = app.get("key");
      try {
        const token = jwt.sign(payload, key);
        res.send({
          message: "Token creado",
          token,
        });
      } catch (error) {
        res.send({
          message: "Hubo un error",
        });
      }
    } else {
      res.send({ message: "El email no existe en nuestros registros" });
    }
  } else {
    res.send({ message: "No se recibio el user" });
  }
});

app.post("/tarea", verifyToken, async (req, res) => {
  console.log("Body de mi request", req.body);
  const data = req.body;
  if (data.name && data.userEmail) {
    const newTarea = new Tarea({
      name: data.name,
      done: data.done,
      userEmail: data.userEmail,
    });

    console.log("Tarea creada", newTarea);

    try {
      await newTarea.save();
      console.log("Tarea guardada", newTarea);
      res.send({ message: "Tarea guardada", data: newTarea });
    } catch (e) {
      console.log("Error al crear la tarea", e);
      res.status(404).send({ message: `Error al crear la tarea` });
    }
  } else {
    res.status(400).send({ message: "Datos incompletos para crear la tarea" });
  }
});

app.get("/api/tareas", verifyToken, async (req, res) => {
  try {
    const tareas = await Tarea.find(req.query);
    if (!tareas) {
      return res.status(200).json({ error: "No hay tareas encontradas" });
    }
    res.status(200).json(tareas);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor iniciado. Escuchando en el puerto: ${PORT}`);
});
