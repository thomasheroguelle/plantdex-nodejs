import AppDataSource from "../../data-source";
import { Plant } from "../model/Plant";

class PlantService {
  async getPlants(): Promise<Plant[]> {
    return AppDataSource.query("SELECT * FROM plant");
  }

  async getPlantById(id: number): Promise<Plant | null> {
    const plants: Plant[] = await AppDataSource.query(
      "SELECT * FROM plant WHERE id = ?",
      [id]
    );
    return plants.length > 0 ? plants[0] : null;
  }

  async createPlant(plantData: any) {
    return AppDataSource.query(
      "INSERT INTO plant (nom, soleil, arrosage, categorie, image) VALUES (?, ?, ?, ?, ?)",
      [
        plantData.nom,
        plantData.soleil,
        plantData.arrosage,
        plantData.categorie,
        plantData.image,
      ]
    );
  }

  async updatePlant(plantData: any): Promise<Plant | null> {
    return AppDataSource.query(
      "UPDATE plant set nom = ?, soleil = ?, arrosage = ?, categorie = ?, image = ?   WHERE id = ?",
      [
        plantData.nom,
        plantData.soleil,
        plantData.arrosage,
        plantData.categorie,
        plantData.image,
        plantData.id,
      ]
    );
  }

  async deletePlant(id: number): Promise<void> {
    await AppDataSource.query("DELETE FROM plant WHERE id = ?", [id]);
  }
}
export default PlantService;
