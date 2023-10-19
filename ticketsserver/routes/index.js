import express from "express";
const router = express.Router();

import { register } from "../controllers/Auth/authController.js";
import {
  createTicket,
  findOne,
  getAllTickets,
} from "../controllers/Tickets/ticketController.js";

//Auth Routes

router.post("/auth/register", register);

//Users Routes

//Tickets Routes

//add ticket
router.post("/tickets", createTicket);
//all tickets
router.get("/tickets", getAllTickets);
//findOne
router.get("/tickets/:id", findOne);

//Comments Routes

export default router;
