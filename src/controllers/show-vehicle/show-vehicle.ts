import { Request, Response } from "express";
import VehicleModel from "../../models/vehicle";
import { HttpStatusCode } from "../protocols";

export class ShowVehiclesController {
  async getById(request: Request, response: Response) {
    try {
      const { id } = request.params;

      const vehicles = await VehicleModel.findById(id);

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
        error: "Falha ao buscar o veículo",
        message: error,
      });
    }
  }
}

export default new ShowVehiclesController();
