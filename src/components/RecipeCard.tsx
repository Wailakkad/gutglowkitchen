import React, { useState, useEffect } from 'react';
import { RecipeDetails } from '../types';
import {
  Clock,
  Users,
  Flame,
  Printer,
  CheckSquare,
  Square,
  Play,
  Pause,
  RotateCcw,
  Sparkles,
  Award,
  ChevronRight,
  ShieldCheck
} from 'lucide-react';

interface Props {
  recipe: RecipeDetails;
}

export const RecipeCard: React.FC<Props> = ({ recipe }) => {
  const [servingsMultiplier, setServingsMultiplier] = useState(1);
  const [checkedIngredients, setCheckedIngredients] = useState<Record<number, boolean>>({});
  const [activeTimerStep, setActiveTimerStep] = useState<number | null>(null);
  const [timerSecondsLeft, setTimerSecondsLeft] = useState<number>(0);
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);

  // Calculate current effective serving count
  const baseServings = recipe.servings || 4;
  const currentServings = baseServings * servingsMultiplier;

  // Toggle ingredient checkbox
  const toggleIngredient = (idx: number) => {
    setCheckedIngredients((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  // Timer logic
  const startTimer = (stepNum: number, minutes: number) => {
    setActiveTimerStep(stepNum);
    setTimerSecondsLeft(minutes * 60);
    setIsTimerRunning(true);
  };

  useEffect(() => {
    let interval: any = null;
    if (isTimerRunning && timerSecondsLeft > 0) {
      interval = setInterval(() => {
        setTimerSecondsLeft((sec) => sec - 1);
      }, 1000);
    } else if (timerSecondsLeft === 0 && isTimerRunning) {
      setIsTimerRunning(false);
      alert(`⏱️ Cooking Timer Completed for Step ${activeTimerStep}!`);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning, timerSecondsLeft, activeTimerStep]);

  const handlePrint = () => {
    window.print();
  };

  const formatTimerTime = (sec: number) => {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  return (
    <div
      id="printable-recipe"
      className="bg-white border border-stone-200 rounded-2xl shadow-sm overflow-hidden my-8"
    >
      {/* Header Banner */}
      <div className="bg-sage text-white p-6 sm:p-8 relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center space-x-1.5 bg-sage-dark/80 text-gold text-xs font-bold px-3 py-1 rounded-full mb-3 border border-sage-light/20">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Gut Glow Recipe Card • Low GI</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
              {recipe.title}
            </h3>
          </div>

          <button
            onClick={handlePrint}
            className="self-start md:self-auto bg-white/10 hover:bg-white/20 text-white border border-white/30 px-4 py-2 rounded-xl text-sm font-semibold flex items-center space-x-2 transition-colors shrink-0"
          >
            <Printer className="w-4 h-4 text-gold" />
            <span>Print Recipe</span>
          </button>
        </div>

        {/* Recipe Key Stats Bar */}
        <div className="mt-6 pt-6 border-t border-white/20 grid grid-cols-2 sm:grid-cols-4 gap-4 text-white/90 text-sm">
          <div className="flex items-center space-x-2">
            <Clock className="w-5 h-5 text-gold" />
            <div>
              <div className="text-[11px] text-white/70 font-semibold uppercase">Prep Time</div>
              <div className="font-bold">{recipe.prepTime}</div>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Clock className="w-5 h-5 text-gold" />
            <div>
              <div className="text-[11px] text-white/70 font-semibold uppercase">Cook Time</div>
              <div className="font-bold">{recipe.cookTime}</div>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Flame className="w-5 h-5 text-gold" />
            <div>
              <div className="text-[11px] text-white/70 font-semibold uppercase">Calories / Serv</div>
              <div className="font-bold">{recipe.calories} kcal</div>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Award className="w-5 h-5 text-gold" />
            <div>
              <div className="text-[11px] text-white/70 font-semibold uppercase">Gut Score</div>
              <div className="font-bold text-gold">{recipe.gutBenefitScore}/10</div>
            </div>
          </div>
        </div>
      </div>

      {/* Serving Adjuster & Nutrition Bar */}
      <div className="bg-stone-50 border-b border-stone-200 p-4 sm:p-6 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Serving Scaler */}
        <div className="flex items-center space-x-3 w-full md:w-auto">
          <Users className="w-5 h-5 text-sage shrink-0" />
          <span className="text-sm font-bold text-slate-800">Servings:</span>
          <div className="flex items-center space-x-1 bg-white border border-stone-300 rounded-lg p-1">
            {[0.5, 1, 1.5, 2].map((mult) => {
              const val = Math.round(baseServings * mult);
              return (
                <button
                  key={mult}
                  onClick={() => setServingsMultiplier(mult)}
                  className={`px-3 py-1 rounded-md text-xs font-bold transition-colors ${
                    servingsMultiplier === mult
                      ? 'bg-sage text-white shadow-xs'
                      : 'text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  {val} serv
                </button>
              );
            })}
          </div>
        </div>

        {/* Nutritional Macros */}
        <div className="flex items-center space-x-3 text-xs text-slate-700 bg-white px-4 py-2 rounded-xl border border-stone-200 w-full md:w-auto justify-around sm:justify-start">
          <div><strong className="text-slate-900 font-mono">{recipe.protein}</strong> Protein</div>
          <div className="h-3 w-px bg-slate-300"></div>
          <div><strong className="text-slate-900 font-mono">{recipe.carbs}</strong> Carbs</div>
          <div className="h-3 w-px bg-slate-300"></div>
          <div><strong className="text-slate-900 font-mono">{recipe.fiber}</strong> Fiber</div>
          <div className="h-3 w-px bg-slate-300"></div>
          <div><strong className="text-slate-900 font-mono">{recipe.fat}</strong> Fat</div>
        </div>
      </div>

      {/* Ingredients & Instructions Grid */}
      <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Ingredients Checklist */}
        <div className="lg:col-span-5 bg-stone-50/70 p-6 rounded-2xl border border-stone-200/80">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-lg font-serif font-bold text-slate-900 flex items-center space-x-2">
              <CheckSquare className="w-5 h-5 text-sage" />
              <span>Ingredients</span>
            </h4>
            <span className="text-xs text-slate-500 font-medium">
              Check off as you prep
            </span>
          </div>

          <ul className="space-y-3">
            {recipe.ingredients.map((ing, idx) => {
              const scaledAmount = Math.round((ing.amount * servingsMultiplier) * 100) / 100;
              const isChecked = !!checkedIngredients[idx];

              return (
                <li
                  key={idx}
                  onClick={() => toggleIngredient(idx)}
                  className={`cursor-pointer p-2.5 rounded-xl transition-all border flex items-start space-x-3 ${
                    isChecked
                      ? 'bg-sage-light/50 border-sage/30 text-slate-400 line-through'
                      : 'bg-white border-stone-200 hover:border-sage-light text-slate-800'
                  }`}
                >
                  <div className="mt-0.5 shrink-0">
                    {isChecked ? (
                      <CheckSquare className="w-4 h-4 text-sage" />
                    ) : (
                      <Square className="w-4 h-4 text-slate-400" />
                    )}
                  </div>
                  <div className="text-sm">
                    <span className="font-bold font-mono text-sage-dark mr-1">
                      {scaledAmount} {ing.unit}
                    </span>
                    <span>{ing.name}</span>
                    {ing.note && (
                      <span className="block text-[11px] text-slate-500 italic mt-0.5">
                        {ing.note}
                      </span>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Right Column: Step-by-Step Instructions */}
        <div className="lg:col-span-7 space-y-6">
          <h4 className="text-lg font-serif font-bold text-slate-900 flex items-center space-x-2">
            <ChevronRight className="w-5 h-5 text-sage" />
            <span>Step-by-Step Preparation</span>
          </h4>

          {/* Active Timer Box if running */}
          {activeTimerStep !== null && (
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Clock className="w-6 h-6 text-gold animate-bounce" />
                <div>
                  <div className="text-xs font-bold text-amber-900 uppercase">
                    Step {activeTimerStep} Timer Running
                  </div>
                  <div className="text-xl font-mono font-bold text-amber-900">
                    {formatTimerTime(timerSecondsLeft)}
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setIsTimerRunning(!isTimerRunning)}
                  className="bg-amber-200 hover:bg-amber-300 p-2 rounded-lg text-amber-900 font-bold"
                >
                  {isTimerRunning ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                </button>
                <button
                  onClick={() => {
                    setIsTimerRunning(false);
                    setActiveTimerStep(null);
                  }}
                  className="bg-amber-200 hover:bg-amber-300 p-2 rounded-lg text-amber-900"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          <div className="space-y-4">
            {recipe.steps.map((step) => (
              <div
                key={step.stepNumber}
                className="bg-stone-50 p-5 rounded-2xl border border-stone-200/80 space-y-3"
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center space-x-3">
                    <span className="w-7 h-7 rounded-full bg-sage text-white font-mono font-bold text-sm flex items-center justify-center shrink-0">
                      {step.stepNumber}
                    </span>
                    <span className="font-bold text-slate-900 text-sm">
                      Instruction Step
                    </span>
                  </div>

                  {step.timerMinutes && (
                    <button
                      onClick={() => startTimer(step.stepNumber, step.timerMinutes!)}
                      className="text-xs bg-gold hover:bg-amber-400 text-slate-900 font-bold px-2.5 py-1 rounded-lg flex items-center space-x-1 transition-colors"
                    >
                      <Clock className="w-3.5 h-3.5" />
                      <span>Start {step.timerMinutes}m Timer</span>
                    </button>
                  )}
                </div>

                <p className="text-sm text-slate-700 leading-relaxed pl-10">
                  {step.instruction}
                </p>

                {step.tip && (
                  <div className="ml-10 bg-sage-light/60 p-3 rounded-xl border border-sage-light text-xs text-sage-dark flex items-start space-x-2">
                    <Sparkles className="w-4 h-4 text-sage shrink-0 mt-0.5" />
                    <span><strong>Nutritional Tip:</strong> {step.tip}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
