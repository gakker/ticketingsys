import { Tickets } from "../../models/tickets.js";
import { generateCustomTicketNo } from "../../helpers/ticketNoGenerator.js";
import { createError } from "../../helpers/error.js";
import mongoose from "mongoose";

class TicketsClass {
   async createTicket(payload) {
      const { title, description, priority, assignedTo, dueDate, createdBy } = payload;
    
      try {
        console.log(assignedTo, "----------", createdBy);
    
        const newticket = new Tickets({
          ticketNo: generateCustomTicketNo(),
          title,
          description,
          priority,
          assignedTo,
          dueDate,
          createdBy
        });
    
        const ticket = await newticket.save();
    
        return {
          message: "Ticket created successfully",
          ticket,
        };
      } catch (error) {
        console.error("Error creating ticket:", error);
        throw error; // Rethrow the error for further diagnosis
      }
    }

  //getAll Tickets only for Admin

  async getAllTickets() {
    const tickets = await Tickets.find();

    return tickets;
  }

  //getonlyOne

  async findOne(id) {
    const ticket = await Tickets.findById(id).populate(
      "assignedTo createdBy comments"
    );

    if (!ticket) {
      return createError(
        404,
        `Ticket associated with this id ${id} was not found `
      );
    }

    return { message: `Ticket with id ${id}`, ticket };
  }
}

export const Ticket = new TicketsClass();
