import AppDataSource from "../../data-source";
import { Plant } from "../model/Plant";

class PlantService {
  async getPlants(): Promise<Plant[]> { // Ajoutez le type de retour Plant[]
    return AppDataSource.query("SELECT * FROM plant");
  }
}
export default PlantService;
