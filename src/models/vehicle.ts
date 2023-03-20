import mongoose from "mongoose";
const Schema = mongoose.Schema;

const VehicleSchema = new Schema({
  placa: String,
  chassi: String,
  renavam: Number,
  modelo: String,
  marca: String,
  ano: Number,
});

const VehicleModel = mongoose.model("vehicles", VehicleSchema);

export default VehicleModel;
