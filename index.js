import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import router from "./routes/routes.js";
const mongodbRoute = "mongodb+srv://aitor:kryptomon@cluster0.eoygc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"


const app = express();
const port = process.env.PORT || 3001;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
})
app.use(router);

/*MONGODB*/
const options = {
  socketTimeoutMS: 0,
  keepAlive: true,
  useNewUrlParser: true
};
mongoose.Promise = global.Promise
mongoose.connect(mongodbRoute, options, (err) => {
  if (err) {
    return console.log(`Error connecting to database: ${err}`)
  }
  app.listen(port, () => {
    console.log(`Server up on ${port}`);
  });
  console.log(`Successful connection to Mongo.`)
})

