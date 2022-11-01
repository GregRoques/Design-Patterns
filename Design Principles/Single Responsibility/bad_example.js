class CalorieTracker {
  constructor(maxCal) {
    this.maxCalories = maxCal;
    this.currentCalories = 0;
  }

  trackCalories(calorieCount) {
    this.currentCalories += calorieCount;
    if (this.currentCalories > this.maxCalories) {
      this.logCalorieSurplus();
    }
  }

  logCalorieSurplus() {
    console.log(
      `Max calories exceeded by ${this.currentCalories - this.maxCalories}`
    );
  }
} // has two reasons to change... if we change how we 1) track or 2) log our calories

const calorieTracker = new CalorieTracker(2000);
calorieTracker.trackCalories(500);
calorieTracker.trackCalories(1000);
calorieTracker.trackCalories(700);
