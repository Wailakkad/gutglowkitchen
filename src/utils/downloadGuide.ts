export function downloadFreeGuide() {
  const link = document.createElement('a');
  link.href = '/gut-glow-7-day-anti-inflammatory-meal-prep.pdf';
  link.download = 'Gut_Glow_Kitchen_7Day_AntiInflammatory_MealPrep.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
