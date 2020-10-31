export default {
  name: "ticketAmount",
  title: "Ticket with Amount",
  type: "object",
  options: { hotspot: true },
  fields: [
    { name: "name", title: "Name", type: "string" },
    { name: "amount", title: "Cost (in €)", type: "number"  }
  ],


  preview: {
    select: {
      name: 'name',
      amount: 'amount',
    },
    prepare({name = 'No title', amount = 0}) {
      return { title: `${name}: ${amount}€`}
    }
  }

};
