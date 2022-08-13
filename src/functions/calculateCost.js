export const calculateCost = (distance) => {
  if (typeof distance === "string") {
    return 'Distance is not a number'
  }

  if (distance <= 100) {
    return 100;
  }

  if (distance <= 200) {
    return 130;
  }

  if (distance <= 400) {
    return 170;
  }

  if (distance <= 700) {
    return 210;
  }

  if (distance <= 1000) {
    return 1250;
  }

  if (distance > 1000) {
    return 1350;
  }
};
