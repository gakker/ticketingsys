import { Ticket } from "../../services/tickets/tickets.service.js";

export const createTicket = async (req, res, next) => {
  try {
    const payload = req.body;
    const ticket = await Ticket.createTicket(payload);
    res.json(ticket);
  } catch (error) {
    console.log(error)
    next(error);
  }
};

//only for admin
export const getAllTickets = async (req, res, next) => {
  try {
    const tickets = await Ticket.getAllTickets();
    res.json(tickets);
  } catch (error) {
    next(error);
  }
};

export const findOne = async (req, res, next) => {
  try {
    const { id } = req.parms;
    const ticket = await Ticket.findOne(id);
    res.json(ticket);
  } catch (error) {
    next(error);
  }
};
