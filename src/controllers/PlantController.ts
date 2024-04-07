import { Plant } from "../model/Plant";
import PlantService from "../services/PlantService";
import { Request, Response } from "express";

class PlantController {
  private plantService = new PlantService();

  async getAll(req: Request, res: Response) {
    const plants: Plant[] = await this.plantService.getPlants(); // Ajoutez le type de retour Plant[]
    res.send({ status: "OK", data: plants });
  }

  async getById(req: Request, res: Response) {
    const id: number = parseInt(req.params.id);
    const plant: Plant | null = await this.plantService.getPlantById(id);
    if (plant) {
      res.send({ status: "OK", data: plant });
    } else {
      res.status(400).send({ status: "Not Found", message: "Plant not found" });
    }
  }

  async addPlant(req: Request, res: Response) {
    const plantData = req.body;
    const newPlant = await this.plantService.createPlant(plantData);
    res.status(201).json(newPlant);
  }
}
export default PlantController;
