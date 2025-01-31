import { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";
import Avatar from "./Avatar";
import Message from "./Message";
import Achievements from "./Achievements";
import HealthTips from "./HealthTips";
import ShareImage from "./ShareImage";


// Register chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function BMICalculator() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBMI] = useState(null);
  const [bmiHistory, setBmiHistory] = useState([]);
  const [goalBMI, setGoalBMI] = useState("");
  const [progress, setProgress] = useState("");



   

  // Load history from localStorage when component mounts
  useEffect(() => {
    const storedHistory = JSON.parse(localStorage.getItem("bmiHistory")) || [];
    setBmiHistory(storedHistory);
  }, []);

  const calculateBMI = () => {
    if (!weight || !height) {
      alert("Please enter valid weight and height.");
      return;
    }

    const heightInMeters = height / 100; // Convert cm to meters
    const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
    setBMI(bmiValue);

    // Add the current BMI to the history
    const newHistory = [
      ...bmiHistory,
      { bmi: bmiValue, date: new Date().toLocaleString() },
    ];
    setBmiHistory(newHistory);

    // Store the updated history in localStorage
    localStorage.setItem("bmiHistory", JSON.stringify(newHistory));
  };

  // Chart Data
  const chartData = {
    labels: bmiHistory.map((entry) => entry.date),
    datasets: [
      {
        label: "BMI Progress",
        data: bmiHistory.map((entry) => parseFloat(entry.bmi)),
        fill: false,
        borderColor: "yellow",
        tension: 0.1,
      },
    ],
  };


  const copyToClipboard = () => {
    navigator.clipboard.writeText(`My BMI is ${bmi}. Calculate yours with this BMI Tracker!`);
    alert("Copied to clipboard!");
  };
 
  
  return (
    <div className="max-w-md mx-auto bg-[#000000] border border-yellow-300 p-6 rounded-xl shadow-lg text-center">
      <h2 className="text-2xl font-bold mb-4">BMI Calculator</h2>
      {bmi && <HealthTips bmi={parseFloat(bmi)} />}
      <div className="mb-4">
        <input
          type="number"
          className="w-full p-2 border border-yellow-300 rounded-md"
          placeholder="Weight (kg)"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <input
          type="number"
          className="w-full p-2 border border-yellow-300 rounded-md"
          placeholder="Height (cm)"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
      </div>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        onClick={calculateBMI}
      >
        Calculate BMI
      </button>

      {bmi && (
        <div className="mt-4">
          <p className="text-lg  text-yellow-400 font-semibold">Your BMI: {bmi}</p>
          <Message bmi={parseFloat(bmi)} />
          <Avatar bmi={parseFloat(bmi)} />
        </div>
      )}
      <Achievements bmiHistory={bmiHistory} />
      <div className="mt-8">
         
        </div>
        {bmiHistory.length > 0 && (
        <div className="mt-8">
          <h3 className="text-xl text-pink-400 font-semibold">BMI Progress</h3>
          <Line data={chartData} />
        </div>
      )}

{bmi && <ShareImage bmi={bmi} bmiCategory={bmiCategory} />}


      <div className="mt-6">
        <h3 className="text-xl font-semibold">BMI History</h3>
        <ul className="mt-4 space-y-2 text-left">
          {bmiHistory.map((entry, index) => (
            <li key={index} className="border-b py-2">
              <span className="font-semibold">BMI: {entry.bmi}</span>
              <br />
              <span className="text-sm text-gray-500">Date: {entry.date}</span>
            </li>
          ))}
        </ul>
      </div>
    
      <button
  className="bg-green-500 text-white px-4 py-2 rounded-md mt-2"
  onClick={copyToClipboard}
>
  📋 Copy BMI Result
</button>

  

      
    </div>
  );
}
