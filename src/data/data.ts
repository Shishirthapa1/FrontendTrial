import { NavTypes, ServiceCardProps } from "@/types/types";
import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

export const paddingX = "px-6 md:px-12 lg:px-16 xl:px-24";

export const navLinks: NavTypes[] = [
  {
    id: 1,
    title: "Home",
    linkTo: "/",
  },
  {
    id: 2,
    title: "About Us",
    linkTo: "/about-us",
  },
  {
    id: 3,
    title: "Services",
    linkTo: "/services",
  },
  {
    id: 4,
    title: "Gallery",
    linkTo: "/gallery",
  },
  {
    id: 5,
    title: "Price List",
    linkTo: "/price-list",
  },
  {
    id: 6,
    title: "Contact Us",
    linkTo: "/contact-us",
  },
];

export const heroData = [
  {
    id: 1,
    title: "Cleaning Specialist",
    description: "4 EVA KLEEN is through!",
  },
  {
    id: 2,
    title: "Cleaning Specialist second",
    description: "second slide",
  },

  {
    id: 3,
    title: "Cleaning Specialist third",
    description: "third slide",
  },
];

export const serviceData: ServiceCardProps[] = [
  {
    id: 1,
    title: "Carpet Steam Cleaning",
    image: "/images/serviceImg1.jpg",
  },
  {
    id: 2,
    title: "Window Cleaning",
    image: "/images/serviceImg2.jpg",
  },
  {
    id: 3,
    title: "Sofa & Upholstery Cleaning",
    image: "/images/serviceImg1.jpg",
  },
  {
    id: 4,
    title: "Tile & Grout Cleaning",
    image: "/images/serviceImg2.jpg",
  },
  {
    id: 5,
    title: "Mattress Cleaning",
    image: "/images/serviceImg1.jpg",
  },
  {
    id: 6,
    title: "End of Lease Cleaning",
    image: "/images/serviceImg2.jpg",
  },
];

export const chooseData = [
  {
    id: 1,
    title: "And Happiness Guaranteed",
    image: "/images/choose1.png",
    description:
      "Your happiness is our top priority – We will make assure that we will give you 100% satisfaction for all the kind of services you are in need of.",
  },
  {
    id: 2,
    title: "Fully Screened and Insured",
    image: "/images/choose2.png",
    description:
      "We’re trusted members of your local community, and are police-checked, Criminal Checked, Registered ABN including GST and fully insured before stepping foot in a client’s home.",
  },
  {
    id: 3,
    title: "Experienced, Dependable People",
    image: "/images/choose3.png",
    description:
      "4EVA KLEEN have backgrounds in end of lease cleaning,  window cleaning, carpet and tiles steam cleaning with quality rating of 5 stars ",
  },
];

export const contactData = [
  { id: 1, text: "Call Us", contact: "0989292833", icon: IoIosCall },
  {
    id: 2,
    text: "Email Us",
    contact: "4evakleen@gmail.com",
    icon: MdEmail,
  },
  {
    id: 3,
    text: "Find Us",
    contact: "Perth W.A",
    icon: FaLocationDot,
  },
];

export const testimonialData = [
  {
    id: 1,
    text: "I've had my windows cleaned twice now by 4Eva Kleen and I highly recommend them! Thank you!",
    fullText:
      "I've had my windows cleaned twice now by 4Eva Kleen and I highly recommend them! Very thorough including the tracks and fly screens, they've come up sparkling both times. Thank you!",
    author: "Magda Upton",
    location: "",
    rating: 5,
  },
  {
    id: 2,
    text: "Excellent Exit Clean for Lease handback. Rejuvenated tired carpets.",
    fullText:
      "Excellent Exit Clean for Lease handback. Rejuvenated tired carpets. Eva and Wesley came to the rescue when another vendor let me down at the last moment",
    author: "Mullaloo WA",
    location: "",
    rating: 5,
  },
  {
    id: 3,
    text: "Eva is very nice and helpful. My house windows and tracks are absolutely spotless! Highly recommended and will definitely use their service again!",
    fullText:
      "Eva is very nice and helpful. My house windows and tracks are absolutely spotless! Highly recommended and will definitely use their service again!",
    author: "Eric",
    location: "",
    rating: 5,
  },
];
