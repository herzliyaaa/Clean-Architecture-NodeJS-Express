const ticketEntity = ({}) => {
  return function createTicket(ticket) {
    const {
      date_received,
      comments,
      date_returned,
      car_id,
      customer_id,
      mechanic_id,
      service_id
    } = ticket;

    if (!date_received) {
      throw new Error("No date received");
    }
    if (!comments) {
      throw new Error("Comment is required");
    }
    if (!date_returned) {
      throw new Error("No date returned");
    }
    if (!car_id) {
      throw new Error("Please specify a car!");
    }
    if (!customer_id) {
      throw new Error("Please specify a customer!");
    }
    if (!mechanic_id) {
      throw new Error("Please specify a mechanic!");
    }
    if (!service_id) {
      throw new Error("Please specify a service!");
    }

    return Object.freeze({
      date_received,
      comments,
      date_returned,
      car_id,
      customer_id,
      mechanic_id,
      service_id
    });
  };
};

module.exports = ticketEntity;
