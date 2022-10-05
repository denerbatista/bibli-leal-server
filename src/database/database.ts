import mongoose, { ConnectOptions } from "mongoose";

const dataBaseUrl= process.env.DATABASE_URL as string;

export const connectToDatabase = (): Promise<void> => mongoose
  .connect(dataBaseUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } as ConnectOptions)
  .then(() => console.log("MongoDB Atlas Conectado!"))
  .catch((error) => console.log(`Erro ao conectar com o MongoDB, erro: ${error}`)
  );
