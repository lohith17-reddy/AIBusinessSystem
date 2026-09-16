export type FilterCategory =
  | 'All'
  | 'Laptop'
  | 'Smartphone'
  | 'Smartwatch'
  | 'Audio'
  | 'Accessories';

export interface Product {
  id: string;
  name: string;
  category: string;
  filterGroup: FilterCategory;
  price: string;
  priceValue: number;
  tagline: string;
  specifications: string[];
  warranty: string;
}

export const FILTERS: FilterCategory[] = [
  'All',
  'Laptop',
  'Smartphone',
  'Smartwatch',
  'Audio',
  'Accessories',
];

export const products: Product[] = [
  {
    id: 'novabook-pro-14',
    name: 'NovaBook Pro 14',
    category: 'Laptop',
    filterGroup: 'Laptop',
    price: '₹64,999',
    priceValue: 64999,
    tagline: '14-inch Full HD display, Intel Core i5, 16GB RAM, 512GB SSD.',
    specifications: [
      'Intel Core i5',
      '16GB RAM',
      '512GB SSD',
      '14-inch Full HD display',
    ],
    warranty: '1-year warranty',
  },
  {
    id: 'novaphone-x1',
    name: 'NovaPhone X1',
    category: 'Smartphone',
    filterGroup: 'Smartphone',
    price: '₹29,999',
    priceValue: 29999,
    tagline: '6.5-inch Full HD+ display, 8GB RAM, 128GB storage, 5000mAh battery.',
    specifications: [
      '6.5-inch Full HD+ display',
      '8GB RAM',
      '128GB storage',
      '5000mAh battery',
    ],
    warranty: '1-year warranty',
  },
  {
    id: 'novawatch-s2',
    name: 'NovaWatch S2',
    category: 'Smartwatch',
    filterGroup: 'Smartwatch',
    price: '₹7,999',
    priceValue: 7999,
    tagline: '1.8-inch display with activity tracking, notifications and sleep tracking.',
    specifications: [
      '1.8-inch display',
      'Up to 7 days battery',
      'Activity tracking',
      'Notifications',
      'Sleep tracking',
    ],
    warranty: '1-year warranty',
  },
  {
    id: 'novabuds-pro',
    name: 'NovaBuds Pro',
    category: 'Wireless Earbuds',
    filterGroup: 'Audio',
    price: '₹4,499',
    priceValue: 4499,
    tagline: 'Bluetooth earbuds with touch controls and charging case.',
    specifications: [
      'Bluetooth',
      'Touch controls',
      'Charging case',
      'Up to 6 hours per charge',
    ],
    warranty: '1-year warranty',
  },
  {
    id: 'novasound-max',
    name: 'NovaSound Max',
    category: 'Wireless Headphones',
    filterGroup: 'Audio',
    price: '₹5,999',
    priceValue: 5999,
    tagline: 'Bluetooth headphones with built-in microphone and adjustable headband.',
    specifications: [
      'Bluetooth',
      'Built-in microphone',
      'Adjustable headband',
      'Up to 30 hours battery',
    ],
    warranty: '1-year warranty',
  },
  {
    id: 'novacharge-65w',
    name: 'NovaCharge 65W',
    category: 'Fast Charger',
    filterGroup: 'Accessories',
    price: '₹2,499',
    priceValue: 2499,
    tagline: '65W fast charger with compact design.',
    specifications: [
      '65W fast charging',
      'Compact design',
      'Compatible with compatible smartphones, tablets and laptops',
    ],
    warranty: '6-month warranty',
  },
];

export const business = {
  name: 'NovaTech Electronics',
  shortName: 'NovaTech',
  type: 'Online Electronics Store',
  email: 'support@novatech-electronics.com',
  phone: '+91 98765 43210',
  phoneHref: 'tel:+919876543210',
  location: 'Chennai, Tamil Nadu, India',
  hours: 'Monday–Saturday, 9 AM–6 PM',
  description:
    'NovaTech Electronics is an online electronics store offering laptops, smartphones, smartwatches, headphones, and technology accessories.',
} as const;

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'products', label: 'Products' },
  { id: 'delivery', label: 'Delivery & Returns' },
  { id: 'ai-support', label: 'AI Support' },
  { id: 'contact', label: 'Contact' },
] as const;

export function scrollToSection(id: string): void {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
