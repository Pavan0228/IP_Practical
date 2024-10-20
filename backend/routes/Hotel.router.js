// routes/hotelRoutes.js
import { Router } from "express";
import {
	createHotel,
	getHotels,
	getHotelById,
	updateHotel,
	deleteHotel,
} from "../controllers/hotel.controller.js";

const hotelRouter = Router();

hotelRouter.route("/").post(createHotel).get(getHotels);
hotelRouter
	.route("/:id")
	.get(getHotelById)
	.put(updateHotel)
	.delete(deleteHotel);

export default hotelRouter;
