const calculatePrice = (parkingSpot, vehicleCount, duration) => {
  const pricePerVehicle = 10; // Adjust as needed
  const basePrice = 50; // Adjust as needed

  // Calculate the price based on the duration and number of vehicles
  const price = basePrice + pricePerVehicle * vehicleCount * duration;

  // Return the calculated price
  return price;
};
