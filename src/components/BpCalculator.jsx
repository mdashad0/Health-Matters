import React, { useState } from 'react';
import { Activity, AlertTriangle, CheckCircle, Info, RefreshCw } from 'lucide-react';

export default function BpCalculator() {
  const [systolic, setSystolic] = useState('118');
  const [diastolic, setDiastolic] = useState('76');
  const [result, setResult] = useState(null);

  const calculateBpCategory = (e) => {
    if (e) e.preventDefault();
    const sys = parseInt(systolic, 10);
    const dia = parseInt(diastolic, 10);

    if (isNaN(sys) || isNaN(dia) || sys < 50 || sys > 250 || dia < 30 || dia > 160) {
      setResult({
        error: true,
        category: 'Invalid Range',
        desc: 'Please enter realistic blood pressure values (Systolic: 50–250 mmHg, Diastolic: 30–160 mmHg).',
        color: 'border-red-300 bg-red-50 text-red-700'
      });
      return;
    }

    if (sys < 90 || dia < 60) {
      setResult({
        category: 'Hypotension (Low Blood Pressure)',
        status: 'Low',
        badge: 'bg-blue-100 text-blue-800 border-blue-200',
        textColor: 'text-blue-700',
        desc: 'Your reading is below the standard normal range. If you feel dizzy, lightheaded, or fatigued, rest and hydrate. Consult a doctor if persistent.',
        icon: Info
      });
    } else if (sys < 120 && dia < 80) {
      setResult({
        category: 'Normal & Healthy Blood Pressure',
        status: 'Optimal',
        badge: 'bg-emerald-100 text-emerald-800 border-emerald-200',
        textColor: 'text-emerald-700',
        desc: 'Excellent! Your readings indicate a healthy cardiovascular pressure. Keep maintaining balanced nutrition and regular physical activity.',
        icon: CheckCircle
      });
    } else if (sys >= 120 && sys <= 129 && dia < 80) {
      setResult({
        category: 'Elevated Blood Pressure',
        status: 'Precaution',
        badge: 'bg-amber-100 text-amber-800 border-amber-200',
        textColor: 'text-amber-700',
        desc: 'Your blood pressure is slightly elevated. Lifestyle modifications such as lowering sodium and increasing aerobic activity can prevent progression to hypertension.',
        icon: AlertTriangle
      });
    } else if ((sys >= 130 && sys <= 139) || (dia >= 80 && dia <= 89)) {
      setResult({
        category: 'Hypertension Stage 1',
        status: 'Stage 1',
        badge: 'bg-orange-100 text-orange-800 border-orange-200',
        textColor: 'text-orange-700',
        desc: 'Arterial tension is consistently elevated. Healthcare providers typically recommend heart-healthy dietary changes (DASH) and may consider medication based on risk factors.',
        icon: AlertTriangle
      });
    } else if (sys >= 180 || dia >= 120) {
      setResult({
        category: 'Hypertensive Crisis',
        status: 'Emergency Alert',
        badge: 'bg-red-100 text-red-800 border-red-300 font-bold',
        textColor: 'text-red-700',
        desc: 'WARNING: This reading is critically high. If accompanied by chest pain, shortness of breath, blurry vision, or numbness, seek emergency medical care immediately.',
        icon: AlertTriangle
      });
    } else {
      setResult({
        category: 'Hypertension Stage 2',
        status: 'Stage 2',
        badge: 'bg-rose-100 text-rose-800 border-rose-200',
        textColor: 'text-rose-700',
        desc: 'Consistently high pressure. Medical professionals typically prescribe a combination of lifestyle changes and blood pressure medications to protect target organs.',
        icon: AlertTriangle
      });
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-card p-6 md:p-8">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 rounded-xl bg-brand-50 border border-brand-100 flex items-center justify-center text-brand-600">
          <Activity className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-slate-800">Interactive Blood Pressure Category Checker</h3>
          <p className="text-sm text-slate-500">Check where your systolic and diastolic measurements fall on the clinical chart.</p>
        </div>
      </div>

      <form onSubmit={calculateBpCategory} className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
        <div>
          <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
            Systolic (Top / mmHg)
          </label>
          <input
            type="number"
            value={systolic}
            onChange={(e) => setSystolic(e.target.value)}
            placeholder="e.g. 120"
            className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent text-slate-800 font-semibold"
            min="50"
            max="260"
            required
          />
          <span className="text-xs text-slate-400 mt-1 block">Normal: Under 120</span>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
            Diastolic (Bottom / mmHg)
          </label>
          <input
            type="number"
            value={diastolic}
            onChange={(e) => setDiastolic(e.target.value)}
            placeholder="e.g. 80"
            className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent text-slate-800 font-semibold"
            min="30"
            max="180"
            required
          />
          <span className="text-xs text-slate-400 mt-1 block">Normal: Under 80</span>
        </div>

        <div className="flex items-end">
          <button
            type="submit"
            className="w-full py-2.5 px-5 bg-brand-600 hover:bg-brand-700 text-white font-medium rounded-xl transition duration-200 shadow-md shadow-brand-500/20 flex items-center justify-center gap-2 cursor-pointer"
          >
            <Activity className="w-4 h-4" />
            Check Category
          </button>
        </div>
      </form>

      {result && (
        <div className={`mt-4 p-5 rounded-xl border ${result.badge ? 'bg-slate-50 border-slate-200' : result.color} transition-all`}>
          <div className="flex items-start gap-3">
            {result.icon && <result.icon className={`w-6 h-6 mt-0.5 shrink-0 ${result.textColor}`} />}
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <span className={`text-base font-bold ${result.textColor}`}>{result.category}</span>
                {result.status && (
                  <span className={`text-xs px-2.5 py-0.5 rounded-full font-medium border ${result.badge}`}>
                    {result.status}
                  </span>
                )}
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">{result.desc}</p>
            </div>
          </div>
        </div>
      )}

      <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
        <span>Based on American Heart Association (AHA) Guidelines</span>
        <span>Educational awareness only</span>
      </div>
    </div>
  );
}
