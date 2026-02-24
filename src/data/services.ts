/**
 * EDITABLE: Package builder configuration.
 * Founders can update industries, goals, tools, and pricing here.
 */

export const industries = [
  { id: "medical", label: "Medical & Healthcare", icon: "🏥" },
  { id: "restaurants", label: "Restaurants & Cafes", icon: "🍽️" },
  { id: "shopping", label: "Shopping & Retail", icon: "🛍️" },
  { id: "transport", label: "Transport & Logistics", icon: "🚚" },
  { id: "bloggers", label: "Bloggers & Influencers", icon: "📱" },
  { id: "electronics", label: "Electronics & Tech", icon: "💻" },
  { id: "flowers", label: "Flower Shops & Events", icon: "🌸" },
  { id: "other", label: "Other Industry", icon: "✨" },
];

export const goals = [
  { id: "leads", label: "Generate Leads", description: "Attract qualified prospects and convert them into customers" },
  { id: "sales", label: "Increase Sales", description: "Drive direct revenue through social media channels" },
  { id: "awareness", label: "Brand Awareness", description: "Build recognition and reach new audiences" },
  { id: "brand", label: "Brand Identity", description: "Develop a strong, consistent brand voice and visual identity" },
];

/**
 * EDITABLE LIST: Add or remove tools/services here.
 * Each tool has an id, label, description, and base price.
 */
export const tools = [
  { id: "instagram-management", label: "Instagram Management", description: "Content creation, posting, and engagement", price: 500 },
  { id: "facebook-ads", label: "Facebook Ads", description: "Targeted advertising campaigns on Facebook", price: 400 },
  { id: "instagram-ads", label: "Instagram Ads", description: "Sponsored posts and story ads", price: 450 },
  { id: "tiktok-management", label: "TikTok Management", description: "Short-form video content and trends", price: 600 },
  { id: "linkedin-strategy", label: "LinkedIn Strategy", description: "B2B content and thought leadership", price: 550 },
  { id: "content-creation", label: "Content Creation", description: "Photography, graphics, and copywriting", price: 700 },
  { id: "reels-production", label: "Reels & Video Production", description: "Professional short-form video content", price: 800 },
  { id: "influencer-marketing", label: "Influencer Marketing", description: "Partner with relevant influencers", price: 1000 },
  { id: "email-marketing", label: "Email Marketing", description: "Newsletter campaigns and automation", price: 350 },
  { id: "seo", label: "SEO Optimization", description: "Search engine optimization and content", price: 600 },
  { id: "analytics", label: "Analytics & Reporting", description: "Monthly performance reports and insights", price: 250 },
  { id: "community", label: "Community Management", description: "Engagement, replies, and DM management", price: 400 },
  { id: "pinterest", label: "Pinterest Strategy", description: "Visual discovery and traffic generation", price: 350 },
  { id: "google-ads", label: "Google Ads", description: "Search and display advertising", price: 500 },
  { id: "ugc", label: "UGC Campaigns", description: "User-generated content strategy", price: 450 },
];

export const supportLevels = [
  {
    id: "basic",
    label: "Basic",
    description: "Monthly reporting, email support, standard response time",
    multiplier: 1,
    features: ["Monthly reports", "Email support", "48h response time", "Quarterly strategy call"],
  },
  {
    id: "standard",
    label: "Standard",
    description: "Bi-weekly reporting, priority support, dedicated manager",
    multiplier: 1.3,
    features: ["Bi-weekly reports", "Priority support", "24h response time", "Monthly strategy call", "Dedicated account manager"],
  },
  {
    id: "premium",
    label: "Premium",
    description: "Weekly reporting, 24/7 support, senior strategist, custom dashboards",
    multiplier: 1.6,
    features: ["Weekly reports", "24/7 support", "4h response time", "Weekly strategy calls", "Senior strategist", "Custom dashboard", "Crisis management"],
  },
];

export function calculatePackage(selectedTools: string[], supportLevel: string) {
  const selectedToolsData = tools.filter((t) => selectedTools.includes(t.id));
  const support = supportLevels.find((s) => s.id === supportLevel) || supportLevels[0];
  const basePrice = selectedToolsData.reduce((sum, t) => sum + t.price, 0);
  const totalPrice = Math.round(basePrice * support.multiplier);
  const timeline = selectedToolsData.length <= 3 ? "2-3 weeks" : selectedToolsData.length <= 6 ? "3-5 weeks" : "5-8 weeks";

  return {
    tools: selectedToolsData,
    support,
    basePrice,
    totalPrice,
    priceRange: `$${Math.round(totalPrice * 0.9).toLocaleString()} – $${Math.round(totalPrice * 1.1).toLocaleString()}`,
    timeline,
  };
}
