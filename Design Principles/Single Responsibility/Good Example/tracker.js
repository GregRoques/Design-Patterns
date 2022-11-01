import logMessage from "./logger";

class CalorieTracker {
  constructor(maxCal) {
    this.maxCalories = maxCal;
    this.currentCalories = 0;
  }

  trackCalories(calorieCount) {
    this.currentCalories += calorieCount;
    if (this.currentCalories > this.maxCalories) {
      logMessage(
        `Max calories exceeded by ${this.currentCalories - this.maxCalories}`
      );
    }
  }
}

const calorieTracker = new CalorieTracker(2000);
calorieTracker.trackCalories(500);
calorieTracker.trackCalories(1000);
calorieTracker.trackCalories(700);
