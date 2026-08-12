'use client';

import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, ChevronDown, Sparkles } from 'lucide-react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  const faqs = [
    {
      q: 'Are your meal prep plans suitable for gluten-free or dairy-free diets?',
      a: 'Yes! All Gut Glow Kitchen prep recipes are naturally 100% gluten-free and dairy-free or feature simple dairy-free sub swaps (like coconut kefir or almond milk) to minimize gut mucosal irritation.'
    },
    {
      q: 'How long do the prepped glass container meals stay fresh?',
      a: 'When stored in airtight Pyrex glass containers in a refrigerator kept at 38°F (3°C), cooked fish meals last 3-4 days, while cooked poultry, grass-fed beef stews, and root vegetables last up to 5 days.'
    },
    {
      q: 'Can I follow the blood sugar hacks if I am not diabetic?',
      a: 'Absolutely. Flattening glucose spikes benefits everyone by reducing oxidative mitochondrial stress, lowering systemic inflammation, preventing brain fog, and maintaining steady mental focus.'
    },
    {
      q: 'How do you test the kitchen tools recommended on your site?',
      a: 'Our clinical nutrition team personally uses and tests all appliances, non-stick ceramic cookware, and glass containers in real Sunday batch-cooking sessions for at least 30 days before featuring them.'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      <div className="text-center space-y-3">
        <div className="inline-flex items-center space-x-1.5 bg-sage-light text-sage-dark text-xs font-bold px-3 py-1 rounded-full">
          <Mail className="w-3.5 h-3.5 text-gold" />
          <span>Get in Touch</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 tracking-tight">
          Contact Gut Glow Kitchen
        </h1>
        <p className="text-sm text-slate-600 max-w-xl mx-auto">
          Have a question about an anti-inflammatory recipe, a media partnership inquiry, or need help scaling a meal prep batch? Send us a message!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Contact Form */}
        <div className="md:col-span-7 bg-white border border-stone-200 rounded-3xl p-6 sm:p-8 shadow-xs">
          {submitted ? (
            <div className="text-center space-y-4 py-8">
              <div className="w-12 h-12 bg-sage text-white rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6 text-gold" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-slate-900">
                Message Received!
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Thank you for reaching out to Gut Glow Kitchen. Our support team responds within 24-48 business hours.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="bg-stone-100 hover:bg-stone-200 text-slate-800 font-bold px-4 py-2 rounded-xl text-xs"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Your Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Sarah Jenkins"
                  className="w-full px-4 py-2.5 bg-stone-50 border border-stone-300 rounded-xl text-xs text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-sage"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Email Address</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="sarah@example.com"
                  className="w-full px-4 py-2.5 bg-stone-50 border border-stone-300 rounded-xl text-xs text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-sage"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Inquiry Subject</label>
                <select
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-2.5 bg-stone-50 border border-stone-300 rounded-xl text-xs text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-sage"
                >
                  <option value="General Inquiry">General Nutrition Question</option>
                  <option value="Meal Prep Help">Meal Prep Batch Assistance</option>
                  <option value="Media & Partnership">Media & Brand Partnerships</option>
                  <option value="Affiliate Inquiry">Product Review Request</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Message</label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="How can our clinical team help you with your gut health or meal prep routine?"
                  className="w-full px-4 py-2.5 bg-stone-50 border border-stone-300 rounded-xl text-xs text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-sage"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-sage hover:bg-sage-dark text-white font-bold py-3 rounded-xl text-xs flex items-center justify-center space-x-2 transition-colors shadow-xs"
              >
                <Send className="w-4 h-4 text-gold" />
                <span>Send Message</span>
              </button>
            </form>
          )}
        </div>

        {/* Contact Info & Direct Email */}
        <div className="md:col-span-5 space-y-6">
          <div className="bg-sage-50 border border-sage-light p-6 rounded-3xl space-y-4">
            <h3 className="font-serif font-bold text-slate-900 text-lg">
              Direct Contact Channels
            </h3>
            <div className="space-y-3 text-xs text-slate-700">
              <div>
                <span className="font-bold block text-sage-dark">General Editorial Email:</span>
                <span className="font-mono">hello@gutglowkitchen.com</span>
              </div>
              <div>
                <span className="font-bold block text-sage-dark">Media & Brand Relations:</span>
                <span className="font-mono">press@gutglowkitchen.com</span>
              </div>
              <div>
                <span className="font-bold block text-sage-dark">Office Location:</span>
                <span>Gut Glow Kitchen Media LLC<br />750 Health Science Parkway, Suite 400</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Accordion */}
      <div className="space-y-4 pt-6 border-t border-stone-200">
        <h3 className="text-2xl font-serif font-bold text-slate-900 text-center">
          Frequently Asked Questions
        </h3>

        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white border border-stone-200 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full p-4 text-left font-bold text-xs sm:text-sm text-slate-900 flex items-center justify-between hover:bg-stone-50"
              >
                <span>{faq.q}</span>
                <ChevronDown className={`w-4 h-4 text-sage transition-transform ${openFaq === idx ? 'rotate-180' : ''}`} />
              </button>
              {openFaq === idx && (
                <div className="p-4 pt-0 text-xs text-slate-600 leading-relaxed border-t border-stone-100 bg-stone-50/50">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}