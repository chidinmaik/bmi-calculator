export default function Avatar({ bmi }) {
    let avatar = "";
  
    if (bmi < 18.5) {
      avatar = "😟"; // Underweight avatar
    } else if (bmi < 24.9) {
      avatar = "😊"; // Normal weight avatar
    } else if (bmi < 29.9) {
      avatar = "😓"; // Overweight avatar
    } else {
      avatar = "😢"; // Obese avatar
    }
  
    return <div className="mt-4 text-4xl">{avatar}</div>;
  }
  