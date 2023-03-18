import { BASICPLAN, PREMIUMPLAN, PROPLAN } from "./svgs";

export const plansData = [
  {
    icon: (className) => <BASICPLAN className={className} />,
    name: "BASIC PLAN",
    price: "25",
    features: [
      "2 hours of excercises",
      "Free consultaion to coaches",
      "Access to The Community",
    ],
  },
  {
    icon: (className) => <PREMIUMPLAN className={className} />,
    name: "PREMIUM PLAN",
    price: "30",
    features: [
      "5 hour of excercises",
      "Free consultaion of Coaches",
      "Accessto minibar",
    ],
  },
  {
    icon: (className) => <PROPLAN className={className} />,
    name: "PRO PLAN",
    price: "45",
    features: [
      "8 hours of excercises",
      "Consultation of Private Coach",
      "Free Fitness Merchandises",
    ],
  },
];
