import express from "express";
import {
  createHotel,
  deleteHotel,
  getAllHotels,
  getHotel,
  updateHotel,
} from "../controllers/hotelController.js";
import { verifyAdmin, verifyToken } from "../utils/verifyToken.js";

const router = express.Router();

//CREATE
router.post("/", verifyToken, verifyAdmin, createHotel);
//UPDATE
router.put("/:id", verifyToken, verifyAdmin, updateHotel);
//DELETE
router.delete("/:id", verifyToken, verifyAdmin, deleteHotel);
//GET
router.get("/:id", getHotel);
//GETALL
router.get("/", getAllHotels);

export default router;
