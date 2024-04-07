import { Router } from "express";
import PlantController from "../controllers/PlantController";

const plantRouter = Router();
const plantController = new PlantController();

plantRouter.get("/", (req, res) => {
  plantController.getAll(req, res);
});
plantRouter.get("/:id", (req, res) => {
  plantController.getById(req, res);
});
plantRouter.post("/", (req, res) => {
  plantController.addPlant(req, res);
});
export default plantRouter;
