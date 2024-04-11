import { Router } from "express";
import PlantController from "../controllers/PlantController";
import checkToken from "../middleware/CheckToken";

const plantRouter = Router();
const plantController = new PlantController();

plantRouter.get("/", checkToken, (req, res) => {
  plantController.getAll(req, res);
});
plantRouter.get("/:id", (req, res) => {
  plantController.getById(req, res);
});
plantRouter.post("/", (req, res) => {
  plantController.addPlant(req, res);
});
plantRouter.put("/:id", (req, res) => {
  plantController.updatePlant(req, res);
});
plantRouter.delete("/:id", (req, res) =>{ 
  plantController.deletePlant(req,res)
})
export default plantRouter;
