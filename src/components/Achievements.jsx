export default function Achievements({ bmiHistory }) {
    let badges = [];
  
    if (bmiHistory.length >= 1) badges.push("🥉 Beginner - First Calculation!");
    if (bmiHistory.length >= 5) badges.push("🥈 Consistent Tracker - 5 Entries Logged!");
  
    const normalBMI = bmiHistory.filter((entry) => entry.bmi >= 18.5 && entry.bmi <= 24.9).length;
    if (normalBMI >= 3) badges.push("🥇 Healthy Champ - 3 Normal BMIs!");
  
    return (
      <div className="mt-6">
        <h3 className="text-xl font-semibold text-yellow-400">🏆 Achievements</h3>
        <div className="mt-4 flex flex-wrap gap-2 justify-center">
          {badges.length > 0 ? (
            badges.map((badge, index) => (
              <span key={index} className="bg-green-500 text-white px-3 py-1 rounded-md">{badge}</span>
            ))
          ) : (
            <p className="text-gray-500">No achievements yet</p>
          )}
        </div>
      </div>
    );
  }
  