import { Router } from "express";
import PlantController from "../controllers/PlantController";

const plantRouter = Router();
const plantController = new PlantController();

plantRouter.get("/", (req, res) => {
  plantController.getAll(req, res);
});
export default plantRouter;
