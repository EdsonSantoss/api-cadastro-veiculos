import { Request, Response } from "express";
import VehicleModel from "../../models/vehicle";
import { HttpStatusCode } from "../protocols";

export class DeleteVehicleController {
  async remove(request: Request, response: Response) {
    try {
      const { id } = request.params;

      await VehicleModel.findByIdAndDelete(id);

      return response.status(HttpStatusCode.CREATED).send({
        message: "Veículo deletado com sucesso!",
      });
    } catch (error) {
      return response.status(HttpStatusCode.SERVER_ERROR).send({
        error: "Falha ao deletar o veículo",
        message: error,
      });
    }
  }
}

export default new DeleteVehicleController();
