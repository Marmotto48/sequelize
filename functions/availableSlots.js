const checkAvailableSlots = async () => {
  const slots = await Subscription.findAll({
    attributes: [
      "parkingSpot",
      [Sequelize.fn("COUNT", Sequelize.col("id")), "count"],
    ],
    group: ["parkingSpot"],
  });

  const availableSlots = TOTAL_SLOTS - slots.length;
  return availableSlots;
};
