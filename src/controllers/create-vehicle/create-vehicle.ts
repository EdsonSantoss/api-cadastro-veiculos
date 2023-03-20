import { Request, Response } from "express";
import VehicleModel from "../../models/vehicle";
import { HttpStatusCode } from "../protocols";

class CreateVehicleController {
  async create(request: Request, response: Response) {
    try {
      const vehicle = await VehicleModel.create(request.body);

      return response.status(HttpStatusCode.CREATED).send({
        body: vehicle,
        message: "Veículo criado com sucesso!",
      });
    } catch (error) {
      return response.status(HttpStatusCode.SERVER_ERROR).send({
        error: "Falha ao cadastrar o veículo",
        message: error,
      });
    }
  }
}

export default new CreateVehicleController();
