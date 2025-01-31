export default function Message({ bmi }) {
    let message = "";
  
    if (bmi < 18.5) {
      message = "You are underweight 😟";
    } else if (bmi < 24.9) {
      message = "You have a normal weight ✅";
    } else if (bmi < 29.9) {
      message = "You are overweight ⚠️";
    } else {
      message = "You are obese 🚨";
    }
  
    return <p className="text-sm text-gray-600">{message}</p>;
  }

