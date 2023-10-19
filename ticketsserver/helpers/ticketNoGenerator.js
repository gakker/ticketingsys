export  function generateCustomTicketNo() {
    // Logic to generate the custom ID
    const prefix = 'PK';
    const datePart = new Date().toISOString().replace(/[-T:.Z]/g, '');
    const randomPart = Math.floor(Math.random() * 1000000).toString().padStart(6, '0');
  
    return prefix + datePart + randomPart;
  }