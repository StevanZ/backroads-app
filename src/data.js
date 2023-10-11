import tour1 from './images/tour-1.jpeg';
import tour2 from './images/tour-2.jpeg';
import tour3 from './images/tour-3.jpeg';
import tour4 from './images/tour-4.jpeg';

export const pageLinks = [
  { id: 1, href: '#home', text: 'home' },
  { id: 2, href: '#about', text: 'about' },
  { id: 3, href: '#services', text: 'services' },
  { id: 4, href: '#tours', text: 'tours' }
];

export const socialLinks = [
  { id: 1, href: 'https://www.twitter.com', icon: 'fab fa-facebook' },
  { id: 2, href: 'https://www.twitter.com', icon: 'fab fa-twitter' },
  { id: 3, href: 'https://www.twitter.com', icon: 'fab fa-squarespace' }
];

export const services = [
  {
    id: 1,
    text: 'Discover budget-friendly options without compromising on the quality of your travel experiences. We believe in smart spending, ensuring you get the most out of your adventures without breaking the bank.',
    icon: 'fas fa-wallet fa-fw',
    title: 'saving money'
  },
  {
    id: 2,
    text: 'Embark on an endless journey of discovery as you hike through diverse landscapes and scenic trails. From picturesque mountain paths to tranquil forest walks, our hiking experiences offer an adventure for every nature enthusiast.',
    icon: 'fas fa-tree fa-fw',
    title: 'endless hiking'
  },
  {
    id: 3,
    text: 'Experience the epitome of comfort and luxury as we ensure every aspect of your trip is seamlessly delightful. Our dedication to providing unmatched comfort guarantees a relaxing and rejuvenating travel experience, leaving you pampered and satisfied.',
    icon: 'fas fa-socks fa-fw',
    title: 'amazing comfort'
  }
];

export const tours = [
  {
    id: 1,
    img: tour1,
    date: 'august 26th, 2020',
    title: 'Tibet Adventure',
    info: 'Embark on an awe-inspiring journey to Tibet, where ancient culture meets breathtaking landscapes in an adventure of a lifetime. Discover the mystical allure of Tibet through our adventure packages, offering a unique blend of spirituality, nature, and unforgettable experiences.',
    location: 'china',
    duration: '6 days',
    cost: 'from $2100'
  },
  {
    id: 2,
    img: tour2,
    date: 'october 1th, 2020',
    title: 'best of java',
    info: "Explore the very essence of Java, a land where ancient traditions harmoniously blend with vibrant landscapes and modern allure. Discover the highlights of Java with our curated experiences, showcasing the island's rich culture, natural wonders, and gastronomic delights.",
    location: 'indonesia',
    duration: '11 days',
    cost: 'from $1400'
  },
  {
    id: 3,
    img: tour3,
    date: 'september 15th, 2020',
    title: 'explore hong kong',
    info: "Dive into the vibrant tapestry of Hong Kong, where tradition dances with modernity, and every corner tells a unique story of this dynamic city. Experience the magic of Hong Kong with our curated adventures, offering a glimpse into the city's captivating culture, iconic landmarks, and delectable cuisine.",
    location: 'hong kong',
    duration: '8 days',
    cost: 'from $5000'
  },
  {
    id: 4,
    img: tour4,
    date: 'december 5th, 2019',
    title: 'kenya highlights',
    info: "Immerse yourself in the wonders of Kenya, a land where wildlife roams freely, and the diverse landscapes captivate the soul. Embark on an unforgettable journey through Kenya's highlights, embracing the beauty of its savannas, encountering majestic wildlife, and experiencing the warmth of its people.",
    location: 'kenya',
    duration: '20 days',
    cost: 'from $3300'
  }
];
