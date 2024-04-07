import { DataSource } from "typeorm";
import dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

const AppDataSource = new DataSource({
  type: "mysql",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: false,
  // entities: [Book] penser à créer l'entité 
});
export default AppDataSource;
