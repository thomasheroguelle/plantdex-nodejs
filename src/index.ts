import AppDataSource from "../data-source";
import express from "express";
import cors from "cors";
import plantRouter from "./routes/PlantRoutes"

AppDataSource.initialize().then(() => {
  const app = express();
  app.use(cors());
  app.use(express.json()); // on parametre la possibilite de recuperer des infos en  format json
  
  app.get("/", (req, res) => {
    res.send("Hello, world!");
  });

  app.post("/", (req, res) => { 
    res.send();
  })

  app.use("/api/plants", plantRouter) 

  app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
  });

});

