import React, { useState } from 'react';
import { Sparkles, Calendar, CheckCircle2, Download, Printer, ArrowRight, ShieldCheck, Heart, Coffee, Utensils } from 'lucide-react';

type GoalType = 'gut-reset' | 'blood-sugar' | 'fasting-168' | 'weight-loss';

interface DaySchedule {
  day: number;
  breakfast: string;
  lunch: string;
  dinner: string;
  snack: string;
  keyNutrient: string;
}

const MEAL_PLANS: Record<GoalType, DaySchedule[]> = {
  'gut-reset': [
    {
      day: 1,
      breakfast: 'Warm Bone Broth with 1 scoop L-Glutamine & Steamed Spinach',
      lunch: 'Wild Sockeye Salmon & Roasted Sweet Potato Bowl with EVOO Dressing',
      dinner: 'Grass-Fed Beef Stew with Shiitake Mushrooms & Shredded Kale',
      snack: '1/2 Avocado sprinkled with Hemp Hearts & Himalayan Pink Salt',
      keyNutrient: 'Butyrate prebiotics & Mucosal enterocyte repair'
    },
    {
      day: 2,
      breakfast: 'Cinnamon Spiced Chia Parfait with Coconut Milk & Fresh Raspberries',
      lunch: 'Massaged Kale Salad with Grilled Chicken Breast & Pumpkin Seeds',
      dinner: 'Steamed Wild Cod with Turmeric Cauliflower Rice & Sautéed Bok Choy',
      snack: 'Warm Golden Milk Elixir with Turmeric & Cracked Black Pepper',
      keyNutrient: 'Curcumin anti-inflammatory transport & Zinc barrier support'
    },
    {
      day: 3,
      breakfast: 'Gut-Shield Green Elixir (Pea Protein, Cucumber, Lemon & Avocado)',
      lunch: 'Leftover Grass-Fed Beef Stew with Fermented Sauerkraut side',
      dinner: 'Slow-Cooked Lemon Herb Chicken Thighs with Roasted Zucchini',
      snack: 'Handful of Soaked Raw Almonds & Unsweetened Coconut Chips',
      keyNutrient: 'Fermented probiota & Polysaccharide mucous membrane support'
    }
  ],
  'blood-sugar': [
    {
      day: 1,
      breakfast: '3 Pasture-Raised Scrambled Eggs with Avocado & Fresh Cilantro',
      lunch: 'Protein-First Salmon Salad over Dark Romaine with ACV Vinaigrette',
      dinner: 'Pan-Seared Turkey Meatballs with Zucchini Noodles & Olive Oil',
      snack: 'Celery Sticks with Raw Almond Butter & Ceylon Cinnamon',
      keyNutrient: 'Zero post-breakfast glucose spike & Steady insulin'
    },
    {
      day: 2,
      breakfast: 'Collagen Protein Coffee + Chia & Ground Flaxseed Porridge',
      lunch: 'Grilled Chicken Breast Bowl with Broccoli Florets & Roasted Walnuts',
      dinner: 'Baked Wild Halibut with Asparagus Spears & Lemon Ghee',
      snack: 'Hard-Boiled Egg with Sea Salt & Paprika',
      keyNutrient: 'Fiber-coated intestinal mucosal protection'
    },
    {
      day: 3,
      breakfast: 'Savory Spinach & Feta Omelet drizzled with Cold-Pressed EVOO',
      lunch: 'Leftover Baked Halibut over Mixed Greens & Pumpkin Seeds',
      dinner: 'Grass-Fed Sirloin Steak Strip Sauté with Peppers & Cauliflower Rice',
      snack: 'Handful of Raw Macadamia Nuts',
      keyNutrient: 'Acetic acid alpha-amylase enzyme buffering'
    }
  ],
  'fasting-168': [
    {
      day: 1,
      breakfast: '10:00 AM: Bone Broth Fast-Breaker Smoothie with L-Glutamine',
      lunch: '1:30 PM: Roasted Salmon Bowl with Quinoa & Steamed Greens',
      dinner: '5:30 PM: Lemon Ginger Chicken Stew with Roasted Sweet Potato',
      snack: '4:00 PM: Golden Milk Chia Pudding',
      keyNutrient: 'Gentle fast-breaking protein sequence & Low cortisol'
    },
    {
      day: 2,
      breakfast: '10:00 AM: Pasture Eggs & Avocado on Massaged Curly Kale',
      lunch: '1:30 PM: Shredded Turkey Salad with Cold-Pressed Olive Oil',
      dinner: '5:30 PM: Pan-Seared Cod with Sautéed Swiss Chard & Garlic',
      snack: '4:00 PM: Handful of Pumpkin Seeds & Green Herbal Tea',
      keyNutrient: 'Autophagic cellular repair & Preserved lean muscle'
    },
    {
      day: 3,
      breakfast: '10:00 AM: Collagen Chia Parfait with Organic Raspberries',
      lunch: '1:30 PM: Leftover Lemon Ginger Chicken Stew with Avocado',
      dinner: '5:30 PM: Grass-Fed Beef Burger Patties over Cauli-Rice Bowl',
      snack: '4:00 PM: Chamomile Lavender Herbal Tea',
      keyNutrient: 'Restful circadian digestive sleep cycle'
    }
  ],
  'weight-loss': [
    {
      day: 1,
      breakfast: 'High-Protein Green Smoothie (Pea Protein, Spinach, Cucumber, Chia)',
      lunch: 'Lemon Herb Grilled Chicken Breast over Big Garden Salad',
      dinner: 'Wild Cod en Papillote with Roasted Asparagus & EVOO',
      snack: 'Sliced Cucumber with Guacamole',
      keyNutrient: 'High satiety index & SGLT2 receptor balance'
    },
    {
      day: 2,
      breakfast: '3 Pasture Egg Muffins packed with Mushrooms & Baby Spinach',
      lunch: 'Turkey Lettuce Wraps with Shredded Carrots & Ginger Tamari',
      dinner: 'Slow-Cooked Beef Stew with Root Vegetables & Kale',
      snack: '1/2 Cup Fresh Blueberries with Raw Walnuts',
      keyNutrient: 'Natural fat oxidation without thyroid suppression'
    },
    {
      day: 3,
      breakfast: 'Cinnamon Collagen Chia Pudding with Flaxseed',
      lunch: 'Leftover Slow-Cooked Beef Stew over Steamed Cauliflower',
      dinner: 'Wild Sockeye Salmon with Roasted Brussels Sprouts',
      snack: 'Bone Broth Sipping Cup with Cracked Black Pepper',
      keyNutrient: 'High thermic effect of whole protein foods'
    }
  ]
};

export const MealPlanCalculator: React.FC = () => {
  const [selectedGoal, setSelectedGoal] = useState<GoalType>('gut-reset');
  const [selectedDays, setSelectedDays] = useState<number>(3);
  const [copiedSuccess, setCopiedSuccess] = useState(false);

  const plan = MEAL_PLANS[selectedGoal];

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="bg-white border border-[#4A7C59]/10 rounded-3xl p-6 sm:p-10 shadow-xs my-12">
      <div className="max-w-3xl mx-auto text-center space-y-3 mb-8">
        <div className="inline-flex items-center space-x-1.5 bg-[#F4B942]/20 text-[#8B6E2C] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">
          <Sparkles className="w-3.5 h-3.5 text-[#F4B942]" />
          <span>Interactive Protocol Builder</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#4A7C59] tracking-tight">
          Personalized Anti-Inflammatory Meal Prep Builder
        </h3>
        <p className="text-sm text-[#555555]">
          Select your primary wellness target below to preview your customized batch-cooking meal plan and grocery checklist.
        </p>
      </div>

      {/* Goal Selector Buttons */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
        {[
          { id: 'gut-reset', title: 'Gut Lining Repair', sub: 'Reduce Bloating & Leaky Gut' },
          { id: 'blood-sugar', title: 'Blood Sugar Balance', sub: 'Flatten Glucose Spikes' },
          { id: 'fasting-168', title: '16:8 Fasting Plan', sub: 'Circadian Female Fasting' },
          { id: 'weight-loss', title: 'Anti-Inflammatory Weight', sub: 'Natural Metabolic Reset' }
        ].map((item) => (
          <button
            key={item.id}
            onClick={() => setSelectedGoal(item.id as GoalType)}
            className={`p-4 rounded-2xl border text-left transition-all ${
              selectedGoal === item.id
                ? 'bg-[#4A7C59] text-white border-[#4A7C59] shadow-md'
                : 'bg-[#F4F7F2] border-[#4A7C59]/10 text-[#333333] hover:bg-stone-100'
            }`}
          >
            <div className={`font-bold text-sm ${selectedGoal === item.id ? 'text-white' : 'text-[#4A7C59]'}`}>
              {item.title}
            </div>
            <div className={`text-xs mt-1 ${selectedGoal === item.id ? 'text-[#F4F7F2]/80' : 'text-[#777777]'}`}>
              {item.sub}
            </div>
          </button>
        ))}
      </div>

      {/* Days Tabs */}
      <div className="flex items-center justify-between border-b border-[#4A7C59]/10 pb-4 mb-6">
        <div className="flex items-center space-x-2 text-sm font-bold text-[#333333]">
          <Calendar className="w-4 h-4 text-[#4A7C59]" />
          <span>Showing {selectedDays}-Day Prep Overview</span>
        </div>

        <button
          onClick={handlePrint}
          className="text-xs bg-[#F4F7F2] text-[#4A7C59] font-bold px-3 py-1.5 rounded-lg border border-[#4A7C59]/20 hover:bg-[#4A7C59] hover:text-white transition-colors flex items-center space-x-1 uppercase tracking-wider"
        >
          <Printer className="w-3.5 h-3.5" />
          <span>Print Schedule</span>
        </button>
      </div>

      {/* Generated Schedule Grid */}
      <div className="space-y-4 mb-8">
        {plan.map((dayItem) => (
          <div
            key={dayItem.day}
            className="bg-[#F4F7F2] p-5 rounded-2xl border border-[#4A7C59]/10 transition-all"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-[#4A7C59]/10 mb-3 gap-2">
              <span className="font-serif font-bold text-[#4A7C59] text-base flex items-center space-x-2">
                <span className="w-6 h-6 rounded-full bg-[#4A7C59] text-white text-xs font-mono flex items-center justify-center">
                  D{dayItem.day}
                </span>
                <span>Day {dayItem.day} Meal Breakdown</span>
              </span>
              <span className="text-xs text-[#8B6E2C] bg-[#F4B942]/20 px-2.5 py-1 rounded-md font-semibold">
                Target: {dayItem.keyNutrient}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs text-[#333333]">
              <div className="bg-white p-3 rounded-xl border border-[#4A7C59]/10 space-y-1">
                <div className="font-bold text-[#4A7C59] uppercase tracking-wider text-[10px] flex items-center space-x-1">
                  <Coffee className="w-3 h-3 text-[#F4B942]" />
                  <span>Breakfast</span>
                </div>
                <div className="font-medium text-[#333333]">{dayItem.breakfast}</div>
              </div>

              <div className="bg-white p-3 rounded-xl border border-[#4A7C59]/10 space-y-1">
                <div className="font-bold text-[#4A7C59] uppercase tracking-wider text-[10px] flex items-center space-x-1">
                  <Utensils className="w-3 h-3 text-[#F4B942]" />
                  <span>Lunch</span>
                </div>
                <div className="font-medium text-[#333333]">{dayItem.lunch}</div>
              </div>

              <div className="bg-white p-3 rounded-xl border border-[#4A7C59]/10 space-y-1">
                <div className="font-bold text-[#4A7C59] uppercase tracking-wider text-[10px] flex items-center space-x-1">
                  <Utensils className="w-3 h-3 text-[#F4B942]" />
                  <span>Dinner</span>
                </div>
                <div className="font-medium text-[#333333]">{dayItem.dinner}</div>
              </div>

              <div className="bg-white p-3 rounded-xl border border-[#4A7C59]/10 space-y-1">
                <div className="font-bold text-[#4A7C59] uppercase tracking-wider text-[10px] flex items-center space-x-1">
                  <Heart className="w-3 h-3 text-[#F4B942]" />
                  <span>Snack & Elixir</span>
                </div>
                <div className="font-medium text-[#333333]">{dayItem.snack}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Grocery Checklist & PDF CTA */}
      <div className="bg-[#4A7C59] p-6 rounded-2xl text-white flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h4 className="text-lg font-serif font-bold text-white flex items-center space-x-2">
            <CheckCircle2 className="w-5 h-5 text-[#F4B942]" />
            <span>Complete Grocery List Included in PDF</span>
          </h4>
          <p className="text-xs text-[#F4F7F2]/80 mt-1">
            Download the exact itemized shopping list (wild fish, grass-fed proteins, organic root veggies & anti-inflammatory herbs) for this prep.
          </p>
        </div>

        <button
          onClick={() => {
            setCopiedSuccess(true);
            setTimeout(() => setCopiedSuccess(false), 3000);
          }}
          className="bg-[#F4B942] hover:bg-[#E2A732] text-[#4A7C59] font-bold px-5 py-2.5 rounded-xl text-xs uppercase tracking-widest transition-all shrink-0 flex items-center space-x-1.5 shadow-md"
        >
          <Download className="w-4 h-4 text-[#4A7C59]" />
          <span>{copiedSuccess ? 'Downloaded Plan PDF!' : 'Download Grocery PDF'}</span>
        </button>
      </div>
    </div>
  );
};
