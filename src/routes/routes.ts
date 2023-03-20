import express from "express";
import CreateVehicleController from "../controllers/create-vehicle/create-vehicle";
import DeleteVehicleController from "../controllers/delete-vehicle/delete-vehicle";
import GetVehiclesController from "../controllers/get-vehicles/get-vehicles";
import UpdateVehicleController from "../controllers/update-vehicle/update-vehicle";
import ShowVehiclesController from "../controllers/show-vehicle/show-vehicle";

const routes = express.Router();

routes.get("/vehicles", GetVehiclesController.getAll);

routes.get("/vehicles/:id", ShowVehiclesController.getById);

routes.post("/vehicles", CreateVehicleController.create);

routes.put("/vehicles/:id", UpdateVehicleController.update);

routes.delete("/vehicles/:id", DeleteVehicleController.remove);

export default routes;
