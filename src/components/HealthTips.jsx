export default function HealthTips({ bmi }) {
    let tip = "";
  
    if (bmi < 18.5) {
      tip = "You're underweight. Increase protein and healthy carbs in your diet.";
    } else if (bmi < 24.9) {
      tip = "Great job! Maintain your healthy lifestyle.";
    } else if (bmi < 29.9) {
      tip = "You're overweight. Consider regular exercise and a balanced diet.";
    } else {
      tip = "You're in the obese category. Seek medical advice for a structured plan.";
    }
  
    return <p className="text-sm text-blue-600 mt-4">{tip}</p>;
  }
  