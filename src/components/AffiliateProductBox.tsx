'use client';

import React, { useState } from 'react';
import { Product } from '../types';
import { Star, ExternalLink, ShieldCheck, CheckCircle2, ShoppingCart, Award, Info, X, ChevronDown, ChevronUp, BadgeCheck, ChevronLeft, ChevronRight } from 'lucide-react';

interface Props {
  product: Product;
  compact?: boolean;
}

const PRODUCT_REVIEWS = [
  {
    name: 'Josh DeSotel',
    rating: 5,
    title: 'Sturdy, well-made, and great value',
    date: 'July 29, 2026',
    verified: true,
    text: 'These MCIRCO glass meal prep containers have been a great addition to our kitchen. Right out of the box, they feel solid and well-constructed — the glass is thick and doesn\'t feel like it will chip or crack with normal use, and the snap-locking lids click firmly into place without feeling flimsy.\n\nThe sizing is perfect for everyday meal prep — generous enough for a full meal but not so bulky that they take up the whole fridge or pantry shelf. Having 10 in the set makes it easy to prep a full week\'s worth of lunches or dinners without having to wash containers mid-week.\n\nThe versatility is a big plus too. Being able to go straight from the freezer to the microwave or oven, and then into the dishwasher for cleanup, makes these incredibly practical for busy schedules. No worrying about plastic warping or leaching, and no staining or lingering smells like you sometimes get with plastic containers.\n\nFor the price, this set feels like it should cost more. They seem genuinely built to last, not the flimsy glass containers you often find in this price range. Highly recommend if you\'re looking for a reliable, long-term meal prep solution.',
  },
  {
    name: 'Stark',
    rating: 5,
    title: 'Excellent Glass Quality and Size Variety, But Lid Clips Can Pop Off',
    date: 'August 12, 2026',
    verified: true,
    text: 'Arrived well-packed with no broken pieces. Great for meal prep. The smaller boxes fit snacks or sliders; the larger ones handle full meals. I use them for salads too — chips and dry bits in small, veggies and dressing in large. Five sets cover a week. Glass quality is excellent. The plastic lids are good, but the locking clips sometimes pop off the hinges. Not a defect, just annoying if they get lost. They seal tight and wash well in the dishwasher.',
  },
  {
    name: 'Mr & Mrs B',
    rating: 5,
    title: 'This will change your life and save you a small fortune',
    date: 'August 11, 2025',
    verified: true,
    text: 'Food waste is not a good thing. Foods that are more perishable need extra attention and care. I have only ever kept fruit out on the counter in a basket. Strawberries and blueberries were kept in the refrigerator in their plastic container packaging. This was the fate of the fruit.\n\nWhen you place the strawberries you purchased into one of these containers, lined with paper towels, those strawberries will be fresh, mold free and delicious over 7 days since purchase. This is not some click bait joke.\n\nPurchase fresh berries, line glass storage containers with clean dry paper towels. Remove berries from plastic container and place in glass storage containers. Cover with dry paper towel and snap on the lid. Do not rinse the berries before placing in glass containers. This will keep the berries fresh for 7 days. Glass is a food saver. Plastic destroys food.\n\nThese are great glass storage containers that stack easily, 4 high in the fridge! Clean easily in the dish machine and the lids snap close very easily. These containers are made of THICK and HEAVY glass. If you want to save food, put it in glass.',
  },
  {
    name: 'brittany dodd',
    rating: 5,
    title: 'Durable, Leak-Proof, and Perfect for Meal Prep',
    date: 'July 26, 2026',
    verified: true,
    text: 'These glass meal prep containers have been excellent. The glass is thick and sturdy, the lids seal tightly without leaking, and they\'re perfect for storing leftovers or prepping meals for the week. They\'re easy to clean and hold up well in the refrigerator and microwave (without the lid). I also like that they don\'t stain or retain odors like plastic containers. Great quality for the price, and I\'d definitely buy them again.',
  },
  {
    name: 'Brianna',
    rating: 4,
    title: 'Almost perfect',
    date: 'May 8, 2026',
    verified: true,
    text: 'I love the glass containers, they are much preferred over the plastic ones I had before. The tops are a bit flimsy and the rubber has come out of a couple of them and I\'ve had to put it back in. We use them in the dishwasher which is nice! Overall I\'m happy with them!',
  },
];

export const AffiliateProductBox: React.FC<Props> = ({ product, compact = false }) => {
  const [showDisclosureModal, setShowDisclosureModal] = useState(false);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [expandedReviews, setExpandedReviews] = useState<Record<number, boolean>>({});

  const handleAmazonClick = () => {
    window.open(product.amazonUrl, '_blank', 'noopener,noreferrer');
  };

  const toggleReview = (index: number) => {
    setExpandedReviews((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  if (compact) {
    return (
      <>
        <div className="bg-white border border-[#4A7C59]/10 rounded-2xl p-4 shadow-xs hover:shadow-md transition-all flex items-center space-x-4">
          <img
            src={product.image}
            alt={product.name}
            className="w-20 h-20 object-cover rounded-xl shrink-0 bg-[#F4F7F2]"
          />
          <div className="flex-1 min-w-0">
            <div className="flex items-center space-x-2 mb-1">
              <span className="text-[10px] font-bold bg-[#F4B942]/20 text-[#8B6E2C] px-2 py-0.5 rounded-full uppercase tracking-wider">
                {product.badge || 'Recommended'}
              </span>
              <div className="flex items-center text-[#F4B942] text-xs">
                <Star className="w-3.5 h-3.5 fill-current" />
                <span className="font-mono ml-1 font-bold text-[#333333]">{product.rating}</span>
              </div>
            </div>
            <h5 className="font-bold text-sm text-[#4A7C59] truncate">{product.name}</h5>
            <div className="text-xs font-mono text-[#3A6346] font-bold mt-0.5">{product.price}</div>
          </div>
          <button
            onClick={() => setShowDetailsModal(true)}
            className="bg-[#F4B942] hover:bg-[#E2A732] text-[#4A7C59] font-bold px-3 py-2 rounded-xl text-xs flex items-center space-x-1 shrink-0 transition-colors uppercase tracking-wider"
          >
            <span>See Details</span>
          </button>
        </div>

        {showDetailsModal && (
          <DetailsModal
            product={product}
            reviews={PRODUCT_REVIEWS}
            expandedReviews={expandedReviews}
            toggleReview={toggleReview}
            onClose={() => setShowDetailsModal(false)}
            onAmazonClick={handleAmazonClick}
          />
        )}
      </>
    );
  }

  return (
    <>
      <div className="bg-white border border-[#4A7C59]/10 rounded-2xl p-6 shadow-xs hover:shadow-md transition-all relative overflow-hidden my-6">
        {/* Top Badge Banner */}
        <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#4A7C59]/10">
          <div className="flex items-center space-x-2">
            <span className="bg-[#F4B942] text-[#4A7C59] text-xs font-bold px-2.5 py-1 rounded-md flex items-center space-x-1 uppercase tracking-wider">
              <Award className="w-3.5 h-3.5 text-[#4A7C59]" />
              <span>{product.badge || 'Kitchen Essential'}</span>
            </span>
            <span className="text-xs text-[#777777] hidden sm:inline">
              Tested & Verified by Gut Glow Kitchen
            </span>
          </div>

          <button
            onClick={() => setShowDisclosureModal(true)}
            className="text-xs text-[#777777] hover:text-[#4A7C59] flex items-center space-x-1"
          >
            <Info className="w-3.5 h-3.5" />
            <span>Affiliate Link</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          {/* Product Image */}
          <div className="md:col-span-4 relative group">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover rounded-xl bg-[#F4F7F2] group-hover:scale-102 transition-transform duration-200 border border-[#4A7C59]/10"
            />
          </div>

          {/* Product Description & Features */}
          <div className="md:col-span-8 space-y-3">
            <div className="flex items-center space-x-2">
              <div className="flex items-center text-[#F4B942]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="text-xs font-mono font-bold text-[#333333]">{product.rating}</span>
              <span className="text-xs text-[#777777] font-mono">({product.reviewsCount.toLocaleString()} Amazon reviews)</span>
            </div>

            <h4 className="text-lg font-serif font-bold text-[#4A7C59] leading-snug">
              {product.name}
            </h4>

            <p className="text-sm text-[#555555] line-clamp-2 leading-relaxed">
              {product.description}
            </p>

            <ul className="space-y-1.5 text-xs text-[#333333]">
              {product.keyFeatures.map((feat, idx) => (
                <li key={idx} className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[#4A7C59] shrink-0" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>

            {/* Pricing & CTA */}
            <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-t border-[#4A7C59]/10">
              <div className="space-y-1">
                {product.discount && (
                  <span className="inline-block bg-red-100 text-red-700 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                    {product.discount} off
                  </span>
                )}
                <div className="flex items-baseline space-x-2">
                  <span className="text-2xl font-mono font-bold text-[#333333]">{product.price}</span>
                  {product.listPrice && (
                    <span className="text-sm font-mono text-[#777777] line-through">{product.listPrice}</span>
                  )}
                </div>
                {product.pricePerUnit && (
                  <span className="text-xs text-[#777777] font-mono">{product.pricePerUnit}</span>
                )}
              </div>

              <button
                onClick={() => setShowDetailsModal(true)}
                className="w-full sm:w-auto bg-[#F4B942] hover:bg-[#E2A732] text-[#4A7C59] font-bold px-6 py-3 rounded-xl text-xs uppercase tracking-widest transition-all flex items-center justify-center space-x-2 shadow-xs"
              >
                <span>See Details</span>
              </button>
            </div>
          </div>
        </div>

        {/* Why We Recommend Callout */}
        <div className="mt-4 bg-[#F4F7F2] p-3.5 rounded-xl border border-[#4A7C59]/20 text-xs text-[#333333] flex items-start space-x-2">
          <ShieldCheck className="w-4 h-4 text-[#4A7C59] shrink-0 mt-0.5" />
          <span>
            <strong className="text-[#4A7C59]">Why Gut Glow Kitchen Recommends This:</strong> {product.whyWeLoveIt}
          </span>
        </div>

        {/* Affiliate Disclosure Modal */}
        {showDisclosureModal && (
          <div className="fixed inset-0 bg-[#333333]/60 backdrop-blur-xs flex items-center justify-center p-4 z-50 animate-in fade-in">
            <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl space-y-4">
              <h3 className="text-lg font-serif font-bold text-[#4A7C59]">
                Affiliate Link Transparency Notice
              </h3>
              <p className="text-sm text-[#555555] leading-relaxed">
                Gut Glow Kitchen is a reader-supported health publication. When you buy products through our Amazon links, we may earn an affiliate commission at no extra cost to you.
              </p>
              <p className="text-xs text-[#777777]">
                We only recommend kitchen tools, appliances, and gut supplements that our team of clinical nutritionists has thoroughly vetted.
              </p>
              <button
                onClick={() => setShowDisclosureModal(false)}
                className="w-full bg-[#4A7C59] text-white font-bold py-2.5 rounded-xl text-xs uppercase tracking-widest hover:bg-[#3A6346] transition-colors"
              >
                Understood, Close
              </button>
            </div>
          </div>
        )}
      </div>

      {showDetailsModal && (
        <DetailsModal
          product={product}
          reviews={PRODUCT_REVIEWS}
          expandedReviews={expandedReviews}
          toggleReview={toggleReview}
          onClose={() => setShowDetailsModal(false)}
          onAmazonClick={handleAmazonClick}
        />
      )}
    </>
  );
};

function DetailsModal({
  product,
  reviews,
  expandedReviews,
  toggleReview,
  onClose,
  onAmazonClick,
}: {
  product: Product;
  reviews: typeof PRODUCT_REVIEWS;
  expandedReviews: Record<number, boolean>;
  toggleReview: (i: number) => void;
  onClose: () => void;
  onAmazonClick: () => void;
}) {
  const [selectedImage, setSelectedImage] = useState(0);

  const productImages = [
    product.image,
    'https://res.cloudinary.com/dhkyla1rv/image/upload/v1786828410/galss-containers-image-detail_6.jpg',
    'https://res.cloudinary.com/dhkyla1rv/image/upload/v1786828412/galss-containers-image-detail_3.jpg',
    'https://res.cloudinary.com/dhkyla1rv/image/upload/v1786828413/galss-containers-image-detail_1.jpg',
    'https://res.cloudinary.com/dhkyla1rv/image/upload/v1786828414/galss-containers-image-detail_4.jpg',
    'https://res.cloudinary.com/dhkyla1rv/image/upload/v1786828414/galss-containers-image-detail_5.jpg',
    'https://res.cloudinary.com/dhkyla1rv/image/upload/v1786828414/galss-containers-image-detail_2.jpg',
  ];

  const prevImage = () => setSelectedImage((i) => (i === 0 ? productImages.length - 1 : i - 1));
  const nextImage = () => setSelectedImage((i) => (i === productImages.length - 1 ? 0 : i + 1));

  return (
    <div className="fixed inset-0 bg-[#333333]/60 backdrop-blur-xs flex items-center justify-center p-4 z-50 animate-in fade-in">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        {/* Modal Header */}
        <div className="sticky top-0 bg-white border-b border-[#4A7C59]/10 px-6 py-4 flex items-center justify-between z-10">
          <h3 className="text-lg font-serif font-bold text-[#4A7C59]">Product Details</h3>
          <button
            onClick={onClose}
            className="text-[#777777] hover:text-[#333333] p-1 rounded-lg hover:bg-stone-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Interactive Image Gallery */}
          <div className="space-y-3">
            {/* Main Image */}
            <div className="relative group bg-[#F4F7F2] rounded-xl overflow-hidden border border-[#4A7C59]/10">
              <img
                src={productImages[selectedImage]}
                alt={`${product.name} - image ${selectedImage + 1}`}
                className="w-full h-72 object-contain p-2"
              />
              {/* Nav Arrows */}
              <button
                onClick={prevImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#333333] w-8 h-8 rounded-full flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#333333] w-8 h-8 rounded-full flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
              {/* Image Counter */}
              <span className="absolute bottom-2 right-3 bg-[#333333]/70 text-white text-[10px] font-mono px-2 py-0.5 rounded-full">
                {selectedImage + 1} / {productImages.length}
              </span>
            </div>

            {/* Thumbnail Strip */}
            <div className="flex items-center space-x-2 overflow-x-auto pb-1">
              {productImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`shrink-0 w-14 h-14 rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImage === idx
                      ? 'border-[#4A7C59] ring-2 ring-[#4A7C59]/20'
                      : 'border-stone-200 hover:border-[#4A7C59]/50 opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Basic Info */}
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <span className="bg-[#F4B942] text-[#4A7C59] text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                {product.badge || 'Recommended'}
              </span>
              <span className="text-xs text-[#777777]">by Gut Glow Kitchen</span>
            </div>
            <h4 className="text-base font-serif font-bold text-[#333333] leading-snug">
              {product.name}
            </h4>
            <div className="flex items-center space-x-2">
              <div className="flex items-center text-[#F4B942]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <span className="text-xs font-mono font-bold text-[#333333]">{product.rating}</span>
              <span className="text-xs text-[#777777] font-mono">({product.reviewsCount.toLocaleString()})</span>
            </div>
            <p className="text-sm text-[#555555] leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Pricing */}
          <div className="bg-[#F4F7F2] rounded-xl p-4 border border-[#4A7C59]/10">
            <div className="flex items-center space-x-3">
              {product.discount && (
                <span className="bg-red-100 text-red-700 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                  {product.discount} off
                </span>
              )}
              <div className="flex items-baseline space-x-2">
                <span className="text-2xl font-mono font-bold text-[#333333]">{product.price}</span>
                {product.listPrice && (
                  <span className="text-sm font-mono text-[#777777] line-through">{product.listPrice}</span>
                )}
              </div>
            </div>
            {product.pricePerUnit && (
              <span className="text-xs text-[#777777] font-mono mt-1 block">{product.pricePerUnit}</span>
            )}
          </div>

          {/* Key Features */}
          <div>
            <h5 className="text-sm font-bold text-[#333333] mb-2 uppercase tracking-wider">Key Features</h5>
            <ul className="space-y-2">
              {product.keyFeatures.map((feat, idx) => (
                <li key={idx} className="flex items-start space-x-2 text-sm text-[#555555]">
                  <CheckCircle2 className="w-4 h-4 text-[#4A7C59] shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Why We Recommend */}
          <div className="bg-[#F4F7F2] p-4 rounded-xl border border-[#4A7C59]/20 text-sm text-[#333333] flex items-start space-x-2">
            <ShieldCheck className="w-4 h-4 text-[#4A7C59] shrink-0 mt-0.5" />
            <span>
              <strong className="text-[#4A7C59]">Why Gut Glow Kitchen Recommends This:</strong> {product.whyWeLoveIt}
            </span>
          </div>

          {/* Customer Reviews */}
          <div>
            <h5 className="text-sm font-bold text-[#333333] mb-3 uppercase tracking-wider">
              Customer Reviews ({reviews.length})
            </h5>
            <div className="space-y-4">
              {reviews.map((review, idx) => {
                const isExpanded = expandedReviews[idx];
                const isLong = review.text.length > 200;
                const displayText = isLong && !isExpanded
                  ? review.text.slice(0, 200) + '...'
                  : review.text;

                return (
                  <div key={idx} className="border border-stone-200 rounded-xl p-4 space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="flex items-center text-[#F4B942]">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-3 h-3 ${i < review.rating ? 'fill-current' : 'text-stone-300'}`}
                            />
                          ))}
                        </div>
                        <span className="text-xs font-bold text-[#333333]">{review.title}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 text-[10px] text-[#777777]">
                      <span className="font-medium">{review.name}</span>
                      {review.verified && (
                        <span className="flex items-center space-x-0.5 text-[#4A7C59] font-bold">
                          <BadgeCheck className="w-3 h-3" />
                          <span>Verified Purchase</span>
                        </span>
                      )}
                      <span>·</span>
                      <span>{review.date}</span>
                    </div>
                    <p className="text-xs text-[#555555] leading-relaxed whitespace-pre-line">
                      {displayText}
                    </p>
                    {isLong && (
                      <button
                        onClick={() => toggleReview(idx)}
                        className="text-[10px] font-bold text-[#4A7C59] hover:text-[#3A6346] flex items-center space-x-0.5"
                      >
                        {isExpanded ? (
                          <>
                            <span>Show less</span>
                            <ChevronUp className="w-3 h-3" />
                          </>
                        ) : (
                          <>
                            <span>Read more</span>
                            <ChevronDown className="w-3 h-3" />
                          </>
                        )}
                      </button>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Sticky Bottom CTA */}
        <div className="sticky bottom-0 bg-white border-t border-[#4A7C59]/10 px-6 py-4">
          <button
            onClick={onAmazonClick}
            className="w-full bg-[#F4B942] hover:bg-[#E2A732] text-[#4A7C59] font-bold py-3.5 rounded-xl text-xs uppercase tracking-widest transition-all flex items-center justify-center space-x-2 shadow-xs"
          >
            <ShoppingCart className="w-4 h-4 text-[#4A7C59]" />
            <span>Check Price on Amazon</span>
            <ExternalLink className="w-4 h-4" />
          </button>
          <p className="text-[10px] text-[#777777] text-center mt-2">
            Affiliate link · Gut Glow Kitchen may earn a small commission at no cost to you
          </p>
        </div>
      </div>
    </div>
  );
}
