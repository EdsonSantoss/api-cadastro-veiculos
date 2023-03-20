import { Request, Response } from "express";
import VehicleModel from "../../models/vehicle";
import { HttpStatusCode } from "../protocols";

export class UpdateVehicleController {
  async update(request: Request, response: Response) {
    try {
      const { id } = request.params;
      const { placa, chassi, renavamr, modelo, marca, ano } = request.body;

      await VehicleModel.findByIdAndUpdate(id, {
        placa,
        chassi,
        renavamr,
        modelo,
        marca,
        ano,
      });

      const vehicle = await VehicleModel.findById(id);

      return response.status(HttpStatusCode.CREATED).send({
        success: vehicle,
        message: "Veículo atualizado com sucesso!",
      });
    } catch (error) {
      return response.status(HttpStatusCode.SERVER_ERROR).send({
        error: "Falha ao atualizar o veículo",
        message: error,
      });
    }
  }
}

export default new UpdateVehicleController();
