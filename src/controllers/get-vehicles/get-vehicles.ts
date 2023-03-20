import { Request, Response } from "express";
import VehicleModel from "../../models/vehicle";
import { HttpStatusCode } from "../protocols";

export class GetVehiclesController {
  async getAll(request: Request, response: Response) {
    try {
      const vehicles = await VehicleModel.find();

      if (!vehicles) {
        return response.status(HttpStatusCode.OK).send({
          message: "Não foi encontrado nenhum veículo",
        });
      }

      return response.status(HttpStatusCode.CREATED).send({
        body: vehicles,
      });
    } catch (error) {
      return response.status(HttpStatusCode.SERVER_ERROR).send({
        error: "Falha ao buscar os veículos",
        message: error,
      });
    }
  }
}

export default new GetVehiclesController();
