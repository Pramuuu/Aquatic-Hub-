
export interface Species {
  id: string;
  name: string;
  scientificName: string;
  habitat: 'ocean' | 'pond' | 'river' | 'lake';
  size: {
    min: number;
    max: number;
    unit: string;
  };
  price: {
    value: number;
    currency: string;
  };
  season: string[];
  availability: 'high' | 'medium' | 'low';
  image: string;
  description: string;
  tags: string[];
}

export const sampleSpecies: Species[] = [
  {
    id: "1",
    name: "Humpback Whale",
    scientificName: "Megaptera novaeangliae",
    habitat: "ocean",
    size: {
      min: 12,
      max: 16,
      unit: "meters"
    },
    price: {
      value: 0,
      currency: "USD"
    },
    season: ["Summer", "Fall"],
    availability: "medium",
    image: "https://images.unsplash.com/photo-1518877593221-1f28583780b4?auto=format&fit=crop&q=80&w=800",
    description: "The humpback whale is a species of baleen whale known for its distinctive body shape and acrobatic behavior like breaching and slapping the water with its tail.",
    tags: ["Mammal", "Protected", "Migratory"]
  },
  {
    id: "2",
    name: "Emperor Penguin",
    scientificName: "Aptenodytes forsteri",
    habitat: "ocean",
    size: {
      min: 1.1,
      max: 1.3,
      unit: "meters"
    },
    price: {
      value: 0,
      currency: "USD"
    },
    season: ["Winter"],
    availability: "low",
    image: "https://images.unsplash.com/photo-1441057206919-63d19fac2369?auto=format&fit=crop&q=80&w=800",
    description: "The emperor penguin is the tallest and heaviest of all living penguin species and is endemic to Antarctica. These penguins have adapted to harsh environments.",
    tags: ["Bird", "Protected", "Cold-water"]
  },
  {
    id: "3",
    name: "Pacific Bluefin Tuna",
    scientificName: "Thunnus orientalis",
    habitat: "ocean",
    size: {
      min: 1.5,
      max: 3,
      unit: "meters"
    },
    price: {
      value: 80,
      currency: "USD"
    },
    season: ["Spring", "Summer"],
    availability: "medium",
    image: "https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?auto=format&fit=crop&q=80&w=800",
    description: "The Pacific bluefin tuna is a predatory species of tuna found widely in the northern Pacific Ocean. They are highly valued for sushi and sashimi.",
    tags: ["Fish", "Edible", "Commercial"]
  },
  {
    id: "4",
    name: "Giant Pacific Octopus",
    scientificName: "Enteroctopus dofleini",
    habitat: "ocean",
    size: {
      min: 1,
      max: 5,
      unit: "meters"
    },
    price: {
      value: 25,
      currency: "USD"
    },
    season: ["All year"],
    availability: "medium",
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&q=80&w=800",
    description: "The giant Pacific octopus is among the largest and longest-living octopus species, known for its intelligence. They have special pigment cells for camouflage.",
    tags: ["Cephalopod", "Intelligent", "Deep water"]
  },
  {
    id: "5",
    name: "Koi Fish",
    scientificName: "Cyprinus rubrofuscus",
    habitat: "pond",
    size: {
      min: 0.3,
      max: 0.7,
      unit: "meters"
    },
    price: {
      value: 200,
      currency: "USD"
    },
    season: ["All year"],
    availability: "high",
    image: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?auto=format&fit=crop&q=80&w=800",
    description: "Koi fish are colored varieties of the Amur carp that are kept for decorative purposes in outdoor ponds or water gardens.",
    tags: ["Freshwater", "Ornamental", "Long-lived"]
  },
];
