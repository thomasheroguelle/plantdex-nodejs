import { DataSource } from "typeorm";
import dotenv from "dotenv";
import { Plant } from "./src/entities/Plant";
import { User } from "./src/entities/User";

dotenv.config({ path: ".env.local" });

const AppDataSource = new DataSource({
  type: "mysql",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: true,
  entities: [Plant, User],
});
export default AppDataSource;
