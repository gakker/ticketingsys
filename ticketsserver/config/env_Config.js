import dotenv from 'dotenv'
dotenv.config();

class envVarsConfig {
    constructor(env) {
      if (env.APP_PORT) {
        this.APP_PORT = env.APP_PORT;
      } else throw "env.APP_PORT is missing";
      if (env.MONGODB_URI) {
        this.MONGODB_URI = env.MONGODB;
      } else throw "env.MONGODB_URI is missing";
      
    }
  
    APP_PORT;
    MONGODB_URI;
   
  }
  //getting variables from env
  const {APP_PORT,MONGODB_URI}  = process.env
  //initializing constructor for envVarsConfig class
  export const envVars = new envVarsConfig({
    APP_PORT:APP_PORT,
    MONGODB_URI:MONGODB_URI
  })

  const allowedOrigins = ["http://localhost:5173",];

export const corsOptions = {
  origin: (origin, callback) => {
    console.log("origin-cors", origin);
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods:"GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  optionsSuccessStatus: 200,
};