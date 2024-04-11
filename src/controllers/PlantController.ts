import { Plant } from "../model/Plant";
import PlantService from "../services/PlantService";
import { Request, Response } from "express";

class PlantController {
  private plantService = new PlantService();

  async getAll(req: Request, res: Response) {
    const plants: Plant[] = await this.plantService.getPlants();
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

  async updatePlant(req: Request, res: Response) {
    const { id } = req.params;
    const plantData = req.body;
    plantData.id = parseInt(id);
    const updatedPlant = await this.plantService.updatePlant(plantData);
    if (updatedPlant) {
      res.status(200).json({ status: "OK", data: updatedPlant });
    } else {
      res.status(404).json({ status: "Not Found", message: "Plant not found" });
    }
  }

  async deletePlant(req: Request, res: Response) {
    const id: number = parseInt(req.params.id);
    await this.plantService.deletePlant(id);
    res
      .status(200)
      .json({ status: "OK", message: "Plant deleted successfully" });
  }
}
export default PlantController;
