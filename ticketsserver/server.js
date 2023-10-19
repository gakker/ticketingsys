import express from "express";
import cors from "cors";
import { envVars, corsOptions } from "./config/env_Config.js";
import { requestLogger } from "./middlewares/logger.middleware.js";
import { DBconnection } from "./config/db/dbConnection.js";
import allRoutes from './routes/index.js'
import bodyParser from "body-parser";
const app = express();

//cors implement
app.use(cors(corsOptions));

//body parser 
app.use(bodyParser.json());

//logger
app.use(requestLogger);

//test request route
app.get("/", (req, res) => {
  res.send("Hello, Express with Winston Logger!");
});

//app routes

app.use('/api',allRoutes);

//error handling middleware 

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});
//self invoking server function
(() => {
  DBconnection();
  app.listen(envVars.APP_PORT, () => {
    console.log(`[server]: Server is running on port ${envVars.APP_PORT}`);
  });
})();
