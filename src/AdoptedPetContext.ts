import { createContext } from "react";
import { Pet } from "./APIResponsesTypes";

const AdoptedPetContext = createContext<
  [Pet | null, (adoptedPet: Pet) => void]
>([
  {
    id: 2137,
    name: "Karol",
    animal: "reptile",
    breed: "predator",
    city: "Rome",
    images: [],
    state: "Wat",
    description: "sniff sniff",
  },
  () => {},
]);

export default AdoptedPetContext;
