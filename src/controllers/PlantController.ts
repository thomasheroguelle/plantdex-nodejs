import { Plant } from "../model/Plant";
import PlantService from "../services/PlantService";
import { Request, Response } from "express";

class PlantController {
  private plantService = new PlantService();

  async getAll(req: Request, res: Response) {
    const plants: Plant[] = await this.plantService.getPlants(); // Ajoutez le type de retour Plant[]
    res.send({ status: "OK", data: plants });
  }
}
export default PlantController;
