import { CardioTraining, FatBurning, HealthFitness, StrengthTraining } from "./svgs";

export const programsData = [
  {
    id: 1,
    image: (className) => <CardioTraining className={className} />,
    heading: "Cardio Training",
    details:
      "In this program, you are trained to do sequential moves in range of 20 until 30 minutes.",
  },
  {
    id: 2,
    image: (className) => <StrengthTraining className={className} />,
    heading: "Strength Training",
    details:
      "In this program, you are trained to improve your strength through many exercises.",
  },
  {
    id: 3,
    image: (className) => <HealthFitness className={className} />,
    heading: "Health Fitness",
    details:
      "This programs is designed for those who exercises only for their body fitness not body building.",
  },
  {
    id: 4,
    image: (className) => <FatBurning className={className} />,
    heading: "Fat Burning",
    details:
      "This program is suitable for you who wants to get rid of your fat and lose their weight.",
  },
];



