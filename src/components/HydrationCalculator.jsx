import React, { useState } from 'react';
import { Droplet, Info, Plus, Minus, RotateCcw } from 'lucide-react';

export default function HydrationCalculator() {
  const [weightKg, setWeightKg] = useState('65');
  const [activityMinutes, setActivityMinutes] = useState('30');
  const [climate, setClimate] = useState('moderate');
  const [cupsDrunk, setCupsDrunk] = useState(3);

  // Daily intake formula: approx 35 ml per kg of body weight + 350ml per 30 mins exercise + 300ml for hot climate
  const calculateDailyGoal = () => {
    const weight = parseFloat(weightKg) || 60;
    const activity = parseFloat(activityMinutes) || 0;
    
    let baseLiters = (weight * 33) / 1000;
    let exerciseAddition = (activity / 30) * 0.35;
    let climateAddition = climate === 'hot' ? 0.5 : climate === 'cold' ? -0.1 : 0;

    let totalLiters = baseLiters + exerciseAddition + climateAddition;
    return Math.max(1.8, Math.min(5.0, totalLiters)).toFixed(1);
  };

  const dailyGoalLiters = calculateDailyGoal();
  const totalCupsGoal = Math.round(parseFloat(dailyGoalLiters) * 4); // 250ml per cup

  const handleCupChange = (delta) => {
    setCupsDrunk(prev => Math.max(0, Math.min(totalCupsGoal + 4, prev + delta)));
  };

  const currentLiters = (cupsDrunk * 0.25).toFixed(2);
  const progressPercent = Math.min(100, Math.round((cupsDrunk / totalCupsGoal) * 100));

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-card p-6 md:p-8">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-600">
          <Droplet className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-slate-800">Personal Daily Hydration Calculator</h3>
          <p className="text-sm text-slate-500">Estimate your body's optimal fluid intake based on weight and activity.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
        <div>
          <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
            Body Weight (kg)
          </label>
          <input
            type="number"
            value={weightKg}
            onChange={(e) => setWeightKg(e.target.value)}
            className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-slate-800 font-semibold"
            min="30"
            max="180"
          />
          <span className="text-xs text-slate-400 mt-1 block">Approx {(parseFloat(weightKg) * 2.20462 || 140).toFixed(0)} lbs</span>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
            Daily Exercise (Minutes)
          </label>
          <select
            value={activityMinutes}
            onChange={(e) => setActivityMinutes(e.target.value)}
            className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-slate-800 font-medium"
          >
            <option value="0">Sedentary (0 mins)</option>
            <option value="30">Light (30 mins)</option>
            <option value="60">Moderate (60 mins)</option>
            <option value="90">Intense (90+ mins)</option>
          </select>
          <span className="text-xs text-slate-400 mt-1 block">Adds sweat replenishment</span>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
            Current Climate
          </label>
          <select
            value={climate}
            onChange={(e) => setClimate(e.target.value)}
            className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-slate-800 font-medium"
          >
            <option value="moderate">Moderate / Indoors</option>
            <option value="hot">Hot or Humid (+0.5 L)</option>
            <option value="cold">Cold or Winter (-0.1 L)</option>
          </select>
          <span className="text-xs text-slate-400 mt-1 block">Adjusts for perspiration</span>
        </div>
      </div>

      {/* Target Output Banner */}
      <div className="bg-gradient-to-r from-teal-50 to-cyan-50 border border-teal-200/80 rounded-2xl p-5 mb-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <span className="text-xs font-semibold text-teal-700 uppercase tracking-wider">Recommended Daily Fluid Target</span>
          <div className="text-3xl font-extrabold text-teal-900 mt-0.5">
            {dailyGoalLiters} <span className="text-lg font-medium text-teal-700">Liters / day</span>
          </div>
          <p className="text-xs text-teal-800 mt-1">
            Equal to approximately <strong>{totalCupsGoal} standard glasses</strong> (250ml each).
          </p>
        </div>

        {/* Interactive Cup logger */}
        <div className="bg-white/80 backdrop-blur rounded-xl border border-teal-200 p-3 flex items-center gap-3">
          <div className="text-right">
            <div className="text-xs text-slate-500 font-medium">Logged Today</div>
            <div className="text-sm font-bold text-slate-800">{cupsDrunk} / {totalCupsGoal} glasses</div>
          </div>
          <div className="flex items-center gap-1.5">
            <button
              onClick={() => handleCupChange(-1)}
              className="p-1.5 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-100 hover:text-slate-800 transition"
              aria-label="Decrease cup"
            >
              <Minus className="w-4 h-4" />
            </button>
            <button
              onClick={() => handleCupChange(1)}
              className="p-1.5 rounded-lg bg-teal-600 text-white hover:bg-teal-700 transition shadow-sm"
              aria-label="Add cup"
            >
              <Plus className="w-4 h-4" />
            </button>
            <button
              onClick={() => setCupsDrunk(0)}
              title="Reset"
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 transition"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div>
        <div className="flex justify-between items-center text-xs font-semibold text-slate-600 mb-1.5">
          <span>Daily Hydration Goal Progress</span>
          <span className="text-teal-700">{progressPercent}% ({currentLiters} L)</span>
        </div>
        <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden border border-slate-200/60">
          <div
            className="bg-gradient-to-r from-teal-500 to-cyan-500 h-full rounded-full transition-all duration-500 ease-out"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
        <span>Includes water from food (~20%) and beverages</span>
        <span>General guidelines for healthy adults</span>
      </div>
    </div>
  );
}
