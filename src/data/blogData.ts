import { BlogPost } from '../types';

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'post-anti-inflammatory-7-day-prep',
    slug: '7-day-anti-inflammatory-meal-prep-guide',
    title: '7-Day Anti-Inflammatory Meal Prep Guide for Busy Women',
    excerpt: 'Learn how 90 minutes of Sunday prep can reduce joint stiffness, soothe digestive bloating, and keep your energy steady all week long.',
    category: 'Anti-Inflammatory Meal Prep',
    categorySlug: 'anti-inflammatory-meal-prep',
    tags: ['Meal Prep', 'Anti-Inflammatory', 'Gut Reset', 'Quick Recipes', 'Batch Cooking'],
    coverImage: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&q=80&w=1200',
    date: 'August 4, 2026',
    readTime: '7 min read',
    commentsCount: 24,
    views: 14200,
    isFeatured: true,
    author: {
      name: 'Dr. Elena Vance, MS, CNS',
      role: 'Clinical Nutritionist & Founder',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300',
      bio: 'Specializing in gut mucosal barrier restoration, autoimmune diet protocol, and metabolic blood sugar stabilization.',
      credentials: 'MS Human Nutrition, Certified Nutrition Specialist (CNS)'
    },
    tableOfContents: [
      { id: 'why-anti-inflammatory-prep', title: '1. Why Chronic Inflammation Starts in the Gut' },
      { id: 'the-4-pillars-of-prep', title: '2. The 4 Pillars of Anti-Inflammatory Prep' },
      { id: 'featured-recipe', title: '3. Featured Recipe: Golden Turmeric Salmon & Sweet Potato Bowl' },
      { id: 'tools-you-need', title: '4. Essential Prep Kitchen Tools' },
      { id: 'weekly-shopping-list', title: '5. Downloadable Grocery Checklist' }
    ],
    seo: {
      focusKeyword: 'anti-inflammatory meal prep',
      metaTitle: '7-Day Anti-Inflammatory Meal Prep Guide | Gut Glow Kitchen',
      metaDescription: 'Step-by-step Sunday meal prep routine designed to reduce systemic inflammation, relieve bloating, and balance blood sugar naturally.',
      readabilityScore: '92/100 (Very Easy)',
      schemaType: 'Article & Recipe'
    },
    affiliateProductIds: ['prod-vitamix-blender'],
    recipeDetails: {
      title: 'Golden Turmeric Salmon & Sweet Potato Meal Prep Bowls',
      prepTime: '20 mins',
      cookTime: '25 mins',
      totalTime: '45 mins',
      servings: 4,
      calories: 480,
      protein: '34g',
      carbs: '28g',
      fat: '22g',
      fiber: '7g',
      glycemicIndex: 'Low (GI < 35)',
      gutBenefitScore: 9.8,
      ingredients: [
        { name: 'Wild Catch Sockeye Salmon Filets', amount: 4, unit: '6oz portions', note: 'Rich in anti-inflammatory EPA/DHA Omega-3s' },
        { name: 'Organic Sweet Potatoes, diced', amount: 2, unit: 'medium', note: 'Prebiotic beta-carotene source' },
        { name: 'Fresh Baby Spinach & Curly Kale', amount: 6, unit: 'cups', note: 'Steam lightly to neutralize oxalates' },
        { name: 'Organic Cold-Pressed Extra Virgin Olive Oil', amount: 3, unit: 'tbsp' },
        { name: 'Fresh Turmeric Root, grated (or ground powder)', amount: 1.5, unit: 'tbsp' },
        { name: 'Fresh Cracked Black Pepper', amount: 0.5, unit: 'tsp', note: 'Activates curcumin bio-availability' },
        { name: 'Organic Raw Apple Cider Vinegar', amount: 2, unit: 'tbsp' },
        { name: 'Soaked Pumpkin Seeds (Pepitas)', amount: 0.25, unit: 'cup', note: 'Zinc for intestinal mucosal lining' }
      ],
      steps: [
        {
          stepNumber: 1,
          instruction: 'Preheat oven to 390°F (198°C). Line a large baking sheet with unbleached parchment paper.',
          tip: 'Avoid foil wrapping to prevent heavy metal leaching into acidic root vegetables.'
        },
        {
          stepNumber: 2,
          instruction: 'Toss diced sweet potatoes with 1.5 tbsp extra virgin olive oil, 1 tbsp grated turmeric, sea salt, and cracked black pepper.',
          timerMinutes: 20,
          tip: 'Roast for 20 minutes until fork-tender and lightly caramelised.'
        },
        {
          stepNumber: 3,
          instruction: 'Season salmon filets with remaining turmeric, lemon juice, salt, and pepper. Place on baking sheet for the last 12 minutes.',
          timerMinutes: 12
        },
        {
          stepNumber: 4,
          instruction: 'Massage kale and spinach with apple cider vinegar and remaining olive oil in glass meal prep containers.',
          tip: 'Massaging tough greens breaks down cellulose fibers, preventing post-meal gas and bloating.'
        },
        {
          stepNumber: 5,
          instruction: 'Divide roasted sweet potatoes and salmon evenly across the 4 Pyrex glass meal prep containers. Top with pumpkin seeds. Seal tightly and refrigerate for up to 4 days.'
        }
      ]
    },
    content: `
      <p class="lead text-lg text-slate-700 leading-relaxed mb-6 font-medium">
        If you wake up feeling heavy, stiff, or experiencing that dreaded mid-afternoon digestive puffiness, chronic low-grade inflammation is often the hidden culprit. The good news? You do not need restrictive diets or hours in the kitchen every single night to feel vibrant again.
      </p>

      <h2 id="why-anti-inflammatory-prep" class="text-2xl font-bold text-slate-900 mt-8 mb-4 border-b border-sage-light pb-2">
        1. Why Chronic Inflammation Starts in the Gut
      </h2>
      <p class="mb-4 text-slate-700 leading-relaxed">
        When the gut lining experiences micro-tears—often triggered by ultra-processed seed oils, artificial sweeteners, and chronic stress—bacterial endotoxins (Lipopolysaccharides or LPS) leak into the bloodstream. Your immune system perceives these fragments as foreign invaders, triggering a continuous inflammatory response that drains your daily energy.
      </p>
      <p class="mb-6 text-slate-700 leading-relaxed">
        By prepping meals anchored around <strong>polyphenol-dense root vegetables, EPA/DHA omega-3 fatty acids, and gut-soothing spices like turmeric and ginger</strong>, you actively signal your body to switch from cellular stress to tissue repair.
      </p>

      <div class="my-8 p-6 bg-sage-light border-l-4 border-sage rounded-r-xl">
        <h4 class="font-bold text-sage-dark text-lg mb-2">💡 Gut Glow Kitchen Golden Rule</h4>
        <p class="text-slate-800 text-sm leading-relaxed">
          Always pair turmeric with a healthy fat (like EVOO or avocado oil) and a pinch of black pepper. The piperine in black pepper boosts curcumin absorption in the human digestive tract by up to <strong>2000%</strong>!
        </p>
      </div>

      <h2 id="the-4-pillars-of-prep" class="text-2xl font-bold text-slate-900 mt-8 mb-4 border-b border-sage-light pb-2">
        2. The 4 Pillars of Anti-Inflammatory Prep
      </h2>
      <ul class="list-disc pl-6 space-y-3 text-slate-700 mb-8">
        <li><strong>Color Diversity:</strong> Aim for at least 4 distinct plant colors per prep container to feed different phyla of beneficial gut microbes.</li>
        <li><strong>Low-Glycemic Carbs:</strong> Replace refined white rice with prebiotic sweet potatoes, quinoa, or roasted caulirice to avoid glucose spikes.</li>
        <li><strong>Glass Over Plastic:</strong> Heat and store meals exclusively in glass containers to keep microplastics and endocrine-disrupting phthalates out of your food.</li>
        <li><strong>Acid Massage:</strong> Lightly coat raw leafy greens in lemon juice or raw apple cider vinegar to soften tough plant cell walls.</li>
      </ul>

      <h2 id="featured-recipe" class="text-2xl font-bold text-slate-900 mt-8 mb-4 border-b border-sage-light pb-2">
        3. Featured Recipe: Golden Turmeric Salmon & Sweet Potato Bowl
      </h2>
      <p class="mb-6 text-slate-700">
        Use the interactive recipe card below to scale serving portions, check off ingredients as you prep in your kitchen, or print out a clean paper copy for your fridge!
      </p>
    `
  },
  {
    id: 'post-blood-sugar-glucose-hacks',
    slug: '5-low-glycemic-hacks-to-stop-sugar-cravings',
    title: '5 Low-Glycemic Hacks to Stop Sugar Cravings & 3 PM Energy Crashes',
    excerpt: 'Simple science-backed food sequencing tricks that flatten your glucose spikes, protect your gut microbiome, and eliminate afternoon brain fog.',
    category: 'Blood Sugar Balance',
    categorySlug: 'blood-sugar-balance',
    tags: ['Blood Sugar', 'Glucose', 'Low GI', 'Energy Boost', 'Hormone Health'],
    coverImage: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&q=80&w=1200',
    date: 'August 2, 2026',
    readTime: '6 min read',
    commentsCount: 19,
    views: 11800,
    isFeatured: true,
    author: {
      name: 'Dr. Elena Vance, MS, CNS',
      role: 'Clinical Nutritionist & Founder',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300',
      bio: 'Specializing in gut mucosal barrier restoration, autoimmune diet protocol, and metabolic blood sugar stabilization.',
      credentials: 'MS Human Nutrition, Certified Nutrition Specialist (CNS)'
    },
    tableOfContents: [
      { id: 'the-glucose-rollercoaster', title: '1. The Secret Link Between Blood Sugar & Gut Inflammation' },
      { id: 'hack-1-food-clothing', title: '2. Hack #1: Put Clothing on Your Carbs' },
      { id: 'hack-2-apple-cider-vinegar', title: '3. Hack #2: The Pre-Meal Vinegar Vinegar Trick' },
      { id: 'hack-3-veggie-first', title: '4. Hack #3: Eat Vegetables First' },
      { id: 'glucose-balanced-recipe', title: '5. Low-Glycemic Cinnamon Chia Gut Bowl Recipe' }
    ],
    seo: {
      focusKeyword: 'blood sugar balance hacks',
      metaTitle: '5 Low-Glycemic Hacks to Flatten Glucose Spikes | Gut Glow Kitchen',
      metaDescription: 'Discover simple food sequencing hacks to balance blood sugar, eliminate sugar cravings, and prevent energy crashes without removing carbs.',
      readabilityScore: '95/100 (Extremely Readable)',
      schemaType: 'Article'
    },
    affiliateProductIds: ['prod-vitamix-blender'],
    recipeDetails: {
      title: 'Blood Sugar Stabilizing Cinnamon Chia Parfait',
      prepTime: '10 mins',
      cookTime: '0 mins',
      totalTime: '10 mins',
      servings: 2,
      calories: 310,
      protein: '18g',
      carbs: '19g',
      fat: '16g',
      fiber: '12g',
      glycemicIndex: 'Low (GI < 35)',
      gutBenefitScore: 9.6,
      ingredients: [
        { name: 'Organic White Chia Seeds', amount: 0.33, unit: 'cup', note: 'Mucilaginous soluble fiber' },
        { name: 'Unsweetened Coconut Milk or Almond Milk', amount: 1.25, unit: 'cups' },
        { name: 'Ceylon Cinnamon (Organic)', amount: 1, unit: 'tsp', note: 'Mimics insulin signaling' },
        { name: 'Unflavored Grass-Fed Collagen Peptides', amount: 2, unit: 'scoops' },
        { name: 'Fresh Organic Raspberries', amount: 0.5, unit: 'cup', note: 'Low glycemic berry sweetener' },
        { name: 'Raw Almond Butter', amount: 2, unit: 'tbsp' }
      ],
      steps: [
        {
          stepNumber: 1,
          instruction: 'Whisk chia seeds, coconut milk, Ceylon cinnamon, and collagen peptides together in a mason jar.'
        },
        {
          stepNumber: 2,
          instruction: 'Let sit for 5 minutes, then whisk again to break up any seed clumps.',
          timerMinutes: 5
        },
        {
          stepNumber: 3,
          instruction: 'Cover and chill in the refrigerator for at least 2 hours or overnight.'
        },
        {
          stepNumber: 4,
          instruction: 'Top with fresh raspberries and almond butter before serving for a zero-spike morning meal.'
        }
      ]
    },
    content: `
      <p class="lead text-lg text-slate-700 leading-relaxed mb-6 font-medium">
        Have you ever eaten a healthy-looking oat bowl or smoothie for breakfast, only to feel starving, jittery, and hunting for chocolate at 11 AM? That is a classic post-prandial glucose spike followed by a reactive insulin crash.
      </p>

      <h2 id="the-glucose-rollercoaster" class="text-2xl font-bold text-slate-900 mt-8 mb-4 border-b border-sage-light pb-2">
        1. The Secret Link Between Blood Sugar & Gut Inflammation
      </h2>
      <p class="mb-4 text-slate-700 leading-relaxed">
        High blood sugar spikes cause oxidative stress in cell mitochondria, generating free radicals that damage gut tight junctions. Furthermore, elevated insulin signals the liver to store fat while suppressing cellular autophagy.
      </p>

      <h2 id="hack-1-food-clothing" class="text-2xl font-bold text-slate-900 mt-8 mb-4 border-b border-sage-light pb-2">
        2. Hack #1: Put "Clothing" on Your Carbs
      </h2>
      <p class="mb-4 text-slate-700 leading-relaxed">
        Never eat a "naked carb" (e.g., an apple alone, plain toast, or dry crackers). Always pair starches and natural sugars with protein, healthy fat, or soluble fiber. The fat and fiber coat the mucosal wall of the small intestine, slowing down gastric emptying and smoothing out glucose absorption.
      </p>

      <h2 id="hack-2-apple-cider-vinegar" class="text-2xl font-bold text-slate-900 mt-8 mb-4 border-b border-sage-light pb-2">
        3. Hack #2: The Pre-Meal Vinegar Trick
      </h2>
      <p class="mb-6 text-slate-700 leading-relaxed">
        Drinking 1 tablespoon of raw organic apple cider vinegar diluted in 8 oz of tall water 10 minutes before a high-starch meal can cut the post-meal glucose spike by up to <strong>30%</strong> and insulin release by up to <strong>20%</strong>. The acetic acid deactivates salivary alpha-amylase enzymes temporarily.
      </p>
    `
  },
  {
    id: 'post-gut-microbiome-repair',
    slug: 'microbiome-diversity-heals-leaky-gut',
    title: 'How Increasing Microbiome Diversity Heals Leaky Gut & Chronic Fatigue',
    excerpt: 'Why eating 30 distinct plants per week is the single most effective strategy to boost butyrate, strengthen intestinal walls, and revive vital energy.',
    category: 'Gut Health',
    categorySlug: 'gut-health',
    tags: ['Gut Health', 'Microbiome', 'Prebiotics', 'Leaky Gut', 'Digestive Health'],
    coverImage: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=1200',
    date: 'July 28, 2026',
    readTime: '8 min read',
    commentsCount: 31,
    views: 18900,
    isFeatured: true,
    author: {
      name: 'Maya Lin, RD',
      role: 'Holistic Gut Specialist',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=300',
      bio: 'Registered Dietitian focused on microbiome sequencing, fermented foods, and irritable bowel syndrome (IBS) nutritional care.',
      credentials: 'Registered Dietitian (RD), Monash FODMAP Certified'
    },
    tableOfContents: [
      { id: 'what-is-microbiome-diversity', title: '1. What is Microbiome Diversity?' },
      { id: 'the-magic-of-butyrate', title: '2. The Magic of Butyrate (Short-Chain Fatty Acid)' },
      { id: '30-plants-challenge', title: '3. The 30 Plants Per Week Challenge' },
      { id: 'gut-repair-soup', title: '4. Recipe: Gut-Restorative Stew with 12 Plants' }
    ],
    seo: {
      focusKeyword: 'heal leaky gut microbiome',
      metaTitle: 'Microbiome Diversity Strategy for Leaky Gut | Gut Glow Kitchen',
      metaDescription: 'Learn how plant diversity fuels short-chain fatty acids like butyrate to repair mucosal gut linings and eliminate chronic brain fog.',
      readabilityScore: '89/100 (Clear & Engaging)',
      schemaType: 'Article'
    },
    affiliateProductIds: ['prod-vitamix-blender'],
    recipeDetails: {
      title: '12-Plant Gut Restorative Bone Broth Stew',
      prepTime: '15 mins',
      cookTime: '30 mins',
      totalTime: '45 mins',
      servings: 6,
      calories: 320,
      protein: '26g',
      carbs: '22g',
      fat: '12g',
      fiber: '9g',
      glycemicIndex: 'Low (GI < 35)',
      gutBenefitScore: 10.0,
      ingredients: [
        { name: 'Grass-Fed Beef Bone Broth (or rich Mushroom Broth)', amount: 6, unit: 'cups' },
        { name: 'Shiitake & Maitake Mushrooms, sliced', amount: 2, unit: 'cups', note: 'Beta-glucan immune boosters' },
        { name: 'Carrots, Celery & Leeks, chopped', amount: 3, unit: 'cups combined' },
        { name: 'Garlic cloves, crushed', amount: 4, unit: 'cloves', note: 'Prebiotic inulin source' },
        { name: 'Fresh Ginger & Turmeric Root, minced', amount: 2, unit: 'tbsp combined' },
        { name: 'Baby Bok Choy & Lacinato Kale', amount: 3, unit: 'cups' },
        { name: 'Organic French Green Lentils', amount: 1, unit: 'cup', note: 'Soaked for 8 hours to reduce lectins' },
        { name: 'Fresh Thyme & Rosemary sprigs', amount: 4, unit: 'sprigs' }
      ],
      steps: [
        {
          stepNumber: 1,
          instruction: 'Sauté crushed garlic, leeks, ginger, and turmeric in olive oil in your Instant Pot or heavy Dutch oven for 4 minutes until fragrant.'
        },
        {
          stepNumber: 2,
          instruction: 'Add mushrooms, sliced carrots, celery, herbs, and soaked green lentils. Pour in the grass-fed bone broth.'
        },
        {
          stepNumber: 3,
          instruction: 'Pressure cook on HIGH for 15 minutes (or simmer on stovetop covered for 35 minutes).',
          timerMinutes: 15
        },
        {
          stepNumber: 4,
          instruction: 'Stir in Bok Choy and Kale during the last 3 minutes of residual heat so greens stay vibrant green and preserve heat-sensitive C vitamins.'
        }
      ]
    },
    content: `
      <p class="lead text-lg text-slate-700 leading-relaxed mb-6 font-medium">
        Your digestive system contains over 100 trillion microbial cells that act as a second brain, dictating 80% of your immune system and producing 90% of your body's serotonin. When plant diversity drops, beneficial bacterial colonies starve out.
      </p>

      <h2 id="what-is-microbiome-diversity" class="text-2xl font-bold text-slate-900 mt-8 mb-4 border-b border-sage-light pb-2">
        1. What is Microbiome Diversity?
      </h2>
      <p class="mb-4 text-slate-700 leading-relaxed">
        Diversity refers to the variety of distinct bacterial strains inhabiting your colon. The landmark American Gut Project revealed that individuals who consume <strong>30 or more unique plant foods per week</strong> have significantly more diverse, resilient gut microbiomes than those who eat fewer than 10 plants per week.
      </p>

      <h2 id="the-magic-of-butyrate" class="text-2xl font-bold text-slate-900 mt-8 mb-4 border-b border-sage-light pb-2">
        2. The Magic of Butyrate
      </h2>
      <p class="mb-4 text-slate-700 leading-relaxed">
        When good bacteria ferment prebiotic fibers (found in leeks, garlic, onions, oats, seeds, and berries), they produce a magical short-chain fatty acid called <strong>Butyrate</strong>. Butyrate serves as the primary fuel source for colonocytes (the cells lining your colon), sealing tight junctions and shutting down intestinal inflammation.
      </p>
    `
  },
  {
    id: 'post-fasting-metabolism-168-women',
    slug: '16-8-intermittent-fasting-meal-plan-for-women',
    title: '16:8 Intermittent Fasting Meal Plan: How to Fast Without Cortisol Spikes',
    excerpt: 'A gentle, female-friendly intermittent fasting protocol designed to protect thyroid function, support autophagic repair, and prevent hormonal burnout.',
    category: 'Fasting & Metabolism',
    categorySlug: 'fasting-and-metabolism',
    tags: ['Intermittent Fasting', 'Autophagy', 'Hormone Balance', '16:8 Fasting', 'Metabolism'],
    coverImage: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=1200',
    date: 'July 20, 2026',
    readTime: '7 min read',
    commentsCount: 16,
    views: 9400,
    isFeatured: false,
    author: {
      name: 'Dr. Elena Vance, MS, CNS',
      role: 'Clinical Nutritionist & Founder',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300',
      bio: 'Specializing in gut mucosal barrier restoration, autoimmune diet protocol, and metabolic blood sugar stabilization.',
      credentials: 'MS Human Nutrition, Certified Nutrition Specialist (CNS)'
    },
    tableOfContents: [
      { id: 'fasting-female-hormones', title: '1. Why Women Need a Different Fasting Strategy' },
      { id: '16-8-eating-window', title: '2. Structuring Your 10 AM to 6 PM Eating Window' },
      { id: 'fast-breaking-protocol', title: '3. The Ideal Fast-Breaking Nutrient Sequence' },
      { id: 'fast-breaker-recipe', title: '4. Recipe: Gut-Shield Fast Breaker Smoothie' }
    ],
    seo: {
      focusKeyword: '16 8 intermittent fasting meal plan women',
      metaTitle: '16:8 Intermittent Fasting Meal Plan for Women | Gut Glow Kitchen',
      metaDescription: 'Circadian-aligned 16:8 intermittent fasting schedule designed specifically for female hormonal balance, thyroid protection, and gentle autophagy.',
      readabilityScore: '91/100 (Very Good)',
      schemaType: 'Article'
    },
    affiliateProductIds: ['prod-vitamix-blender'],
    recipeDetails: {
      title: 'Gut-Shield Fast Breaker Green Elixir',
      prepTime: '5 mins',
      cookTime: '0 mins',
      totalTime: '5 mins',
      servings: 1,
      calories: 290,
      protein: '22g',
      carbs: '14g',
      fat: '14g',
      fiber: '8g',
      glycemicIndex: 'Low (GI < 35)',
      gutBenefitScore: 9.7,
      ingredients: [
        { name: 'Filtered Water or Bone Broth', amount: 1.5, unit: 'cups' },
        { name: 'Grass-Fed Whey Isolate or Pea Protein Powder', amount: 1, unit: 'scoop', note: '20g protein minimum to break fast smoothly' },
        { name: 'Organic L-Glutamine Powder', amount: 1, unit: 'tsp', note: 'Seals enterocytes before dense solids arrive' },
        { name: 'Organic Hass Avocado', amount: 0.25, unit: 'medium', note: 'Healthy monounsaturated fat for bile release' },
        { name: 'Baby Spinach', amount: 1, unit: 'handful' },
        { name: 'Fresh Cucumber', amount: 0.5, unit: 'medium' },
        { name: 'Fresh Lemon Juice', amount: 1, unit: 'tbsp' }
      ],
      steps: [
        {
          stepNumber: 1,
          instruction: 'Add filtered water/broth base into your Vitamix high-speed blender first.'
        },
        {
          stepNumber: 2,
          instruction: 'Add protein powder, L-glutamine, avocado, spinach, cucumber, and fresh lemon juice.'
        },
        {
          stepNumber: 3,
          instruction: 'Blend on high speed for 45 seconds until silky smooth. Drink slowly over 10 minutes.'
        }
      ]
    },
    content: `
      <p class="lead text-lg text-slate-700 leading-relaxed mb-6 font-medium">
        Intermittent fasting can be a transformative health tool, but when done aggressively without proper nutrient density during the eating window, it can trigger adrenal cortisol spikes and disrupt sensitive female sex hormones.
      </p>

      <h2 id="fasting-female-hormones" class="text-2xl font-bold text-slate-900 mt-8 mb-4 border-b border-sage-light pb-2">
        1. Why Women Need a Different Fasting Strategy
      </h2>
      <p class="mb-4 text-slate-700 leading-relaxed">
        Female hypothalamus receptors are acutely sensitive to perceived caloric scarcity. Extended 24-hour fasts can signal environmental danger, leading to elevated evening cortisol, restless sleep, and hair thinning.
      </p>
      <p class="mb-6 text-slate-700 leading-relaxed">
        By utilizing a <strong>14:10 or gentle 16:8 circadian window</strong> (e.g., eating between 10:00 AM and 6:00 PM), women can harvest all the benefits of autophagic cell cleanup while maintaining hormonal harmony.
      </p>
    `
  }
];
