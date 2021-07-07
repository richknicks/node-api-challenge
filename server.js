const express = require("express");
const helmet = require("helmet");
const actionRouter = require("./data/routers/actionRouter");
const projectRouter = require("./data/routers/projectRouter");
const server = express();
const cors = require('cors');

server.use(helmet());
server.use(cors());
server.use(express.json());
server.use("/api/actions", actionRouter);
server.use("/api/projects", projectRouter);

server.get("/", (req, res)=>{
    res.send({message: "This is a test"});
});

module.exports=server;