import bin from "../assets/bin.png";
import cart from "../assets/cart.png";
import cross from "../assets/cross.png";
import exchange from "../assets/exchange.png";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";
import menu from "../assets/menu.png";
import rightside from "../assets/rightside.png";
import logo from "../assets/logo.png";
import foreverlogo from "../assets/foreverlogo.png";
import searchIcon from "../assets/searchIcon.png";
import profile from "../assets/profile.png";
import back from "../assets/back.png";
import Hero from "../assets/Hero.png";
import support from "../assets/support.png";
import check from "../assets/check.png";
import image1_1 from '../assets/image1_1.png'
import image1_2 from '../assets/image1_2.png'
import image1_3 from '../assets/image1_3.png'
import image1_4 from '../assets/image1_4.png'
import star from '../assets/star.png'
import star_dull from '../assets/star_dull.png'
import stripe from '../assets/stripe.png'
import razorpay from '../assets/razorpay.png'
import about from '../assets/about.png'
import contact from '../assets/contact.png'
export const assets = {
  contact,
  about,
  razorpay,
  stripe,
  star,
  star_dull,
  support,
  check,
  Hero,
  back,
  searchIcon,
  logo,
  profile,
  foreverlogo,
  bin,
  cart,
  cross,
  exchange,
  image1,
  image2,
  image3,
  image4,
  menu,
  rightside,
};

export const products = [
  {
    _id: "aaaa",
    name: "Women outfit",
    description: "kdsjfksjdfhdnsacndskfs",
    price: 100,
    image: [image4],
    category: "Women",
    subCategory: "Topwear",
    sizes: ["S", "M", "L"],
    date: 2343515435,
    bestseller: true,
  },
  
  {
    _id: "cccc",
    name: "Men outfit",
    description: "Voluptates quibusdam eligendi laborum repudiandae ipsa necessitatibus aut quaerat totam atque exercitationem!",
    price: 200,
    image: [image3],
    category: "Men",
    subCategory: "Topwear",
    sizes: ["M", "L", "XL"],
    date: 1716621345448,
    bestseller: true,
  },
  {
    _id: "dddd",
    name: "Kids outfit",
    description: "Voluptates quibusdam eligendi laborum repudiandae ipsa necessitatibus aut quaerat totam atque exercitationem!",
    price: 300,
    image: [image1, image2],
    category: "Kids",
    subCategory: "Bottomwear",
    sizes: ["M", "L", "XL"],
    date: 1716621345448,
    bestseller: false,
  },
    {
    _id: "eeee",
    name: "Women outfit",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates quibusdam eligendi laborum repudiandae ipsa necessitatibus aut quaerat totam atque exercitationem!",
    price: 100,
    image: [image1_1, image1_2, image1_3, image1_4],
    category: "Women",
    subCategory: "Topwear",
    sizes: ["S", "M", "L"],
    date: 2343515435,
    bestseller: true,
  },
];
