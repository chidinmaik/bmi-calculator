import { useRef, useState } from "react";
import html2canvas from "html2canvas";

export default function ShareImage({ bmi, bmiCategory }) {
  const captureRef = useRef(null);
  const [imageURL, setImageURL] = useState(null);

  const captureImage = async () => {
    if (!bmi) return alert("Calculate your BMI first!");

    const canvas = await html2canvas(captureRef.current);
    const dataURL = canvas.toDataURL("image/png");
    setImageURL(dataURL);
  };

  return (
    <div className="mt-6">
      <h3 className="text-xl font-semibold">📤 Share Your BMI</h3>
      
      {/* Section to Capture */}
      <div ref={captureRef} className="bg-blue-100 p-4 rounded-md mt-4 text-center shadow-md">
        <h2 className="text-lg font-bold">📊 My BMI Result</h2>
        <p className="text-2xl font-semibold">{bmi}</p>
        <p className="text-sm">{bmiCategory}</p>
      </div>

      {/* Capture & Generate Image */}
      <button
        className="bg-green-500 text-white px-4 py-2 rounded-md mt-2"
        onClick={captureImage}
      >
        📸 Generate Image
      </button>

      {/* Show Preview */}
      {imageURL && (
        <div className="mt-4">
          <h4 className="text-md font-semibold">🖼️ Preview:</h4>
          <img src={imageURL} alt="BMI Result" className="rounded-md shadow-md" />
          
          {/* Download Button */}
          <a
            href={imageURL}
            download="BMI_Result.png"
            className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2 inline-block"
          >
            ⬇️ Download Image
          </a>
        </div>
      )}
    </div>
  );
}
