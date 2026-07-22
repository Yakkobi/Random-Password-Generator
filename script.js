// prettier-ignore
const colors = [
  "Red", "Tan", "Jet",
  "Blue", "Pink", "Gold", "Gray", "Grey", "Teal", "Navy", "Cyan", "Rose",
  "Rust", "Plum", "Jade", "Ruby", "Aqua",
  "Green", "Black", "White", "Brown", "Coral", "Amber", "Ivory", "Beige",
  "Khaki", "Olive", "Slate", "Peach", "Lilac", "Mauve",
  "Purple", "Orange", "Maroon", "Violet", "Indigo", "Silver", "Bronze",
  "Copper", "Salmon", "Cherry", "Golden", "Yellow", "Sienna", "Auburn",
  "Cobalt",
  "Crimson", "Scarlet", "Emerald", "Magenta", "Fuchsia", "Apricot",
  "Mustard", "Saffron",
  "Burgundy", "Charcoal", "Lavender", "Mahogany"
];

// prettier-ignore
const adjectives = [
  "Big", "Sly", "Shy", "Wet", "Dry", "Hot", "Icy",
  "Bold", "Calm", "Cool", "Dark", "Fast", "Kind", "Loud", "Mild", "Neat",
  "Pure", "Rare", "Slow", "Soft", "Tall", "Warm", "Wild", "Wise", "Fair",
  "Firm", "Keen", "Lean", "Sure", "Tidy", "Vast",
  "Brave", "Fresh", "Happy", "Heavy", "Light", "Quiet", "Quick", "Sharp",
  "Sweet", "Tough", "Young", "Eager", "Loyal", "Proud", "Solid", "Sunny",
  "Witty", "Zesty", "Alert", "Rapid", "Merry", "Noble", "Hardy", "Brisk",
  "Vivid",
  "Clever", "Gentle", "Bright", "Sturdy", "Steady", "Mighty", "Cheery",
  "Breezy", "Chilly", "Simple", "Honest", "Humble", "Active", "Frozen",
  "Modern",
  "Radiant", "Curious", "Elegant", "Playful", "Genuine", "Serious",
  "Distant", "Amazing", "Awesome", "Careful", "Massive", "Restful",
  "Fearless", "Peaceful", "Cheerful", "Powerful", "Faithful", "Youthful",
  "Talented", "Colorful", "Adorable"
];

// prettier-ignore
const animals = [
  "Cat", "Dog", "Fox", "Owl", "Bee", "Ant", "Cow", "Pig", "Rat", "Bat",
  "Cod", "Hen", "Ram", "Elk", "Doe", "Eel",
  "Lion", "Wolf", "Bear", "Deer", "Duck", "Frog", "Goat", "Crab", "Fish",
  "Bird", "Hawk", "Mule", "Newt", "Seal", "Swan", "Lamb", "Mole", "Toad",
  "Puma", "Lynx", "Boar",
  "Tiger", "Zebra", "Horse", "Sheep", "Panda", "Snake", "Whale", "Shark",
  "Eagle", "Otter", "Mouse", "Camel", "Moose", "Skunk", "Raven", "Robin",
  "Rhino", "Gecko", "Llama", "Heron", "Crane", "Stork", "Goose", "Hyena",
  "Monkey", "Rabbit", "Turtle", "Beaver", "Coyote", "Donkey", "Falcon",
  "Jaguar", "Weasel", "Badger", "Salmon", "Gopher", "Possum", "Cougar",
  "Bobcat", "Parrot", "Puffin", "Walrus", "Iguana", "Impala", "Marmot",
  "Ferret", "Toucan", "Osprey", "Magpie", "Condor", "Jackal",
  "Cheetah", "Buffalo", "Dolphin", "Leopard", "Giraffe", "Penguin",
  "Mustang", "Peacock", "Ostrich", "Panther", "Wallaby", "Pelican",
  "Sparrow", "Wildcat", "Warthog", "Buzzard", "Bulldog", "Catfish",
  "Antelope", "Squirrel", "Kangaroo", "Elephant", "Chipmunk", "Flamingo",
  "Hedgehog", "Cockatoo", "Mongoose", "Porpoise", "Reindeer", "Aardvark",
  "Honeybee"
];

// prettier-ignore
const nouns = [
  "Sun", "Sky", "Sea", "Ice", "Ash", "Fog", "Cup", "Box", "Key",
  "Star", "Moon", "Rock", "Tree", "Leaf", "Lake", "Wave", "Wind",
  "Rain", "Snow", "Fire", "Cave", "Hill", "Rope", "Lamp", "Ring",
  "Book", "Door", "Gate", "Bell", "Coin", "Gem", "Song",
  "Cloud", "River", "Ocean", "Beach", "Stone", "Storm", "Flame",
  "Grass", "Field", "Forest", "Bridge", "Tower", "Castle", "Island",
  "Anchor", "Candle", "Feather", "Pillar", "Garden", "Meadow",
  "Canyon", "Desert", "Valley", "Harbor", "Mirror", "Ribbon",
  "Basket", "Blanket", "Compass", "Diamond", "Fountain", "Journey",
  "Kingdom", "Lantern", "Mountain", "Thunder", "Whisper", "Horizon",
  "Crystal", "Sunset", "Sunrise", "Shadow", "Ember", "Breeze",
  "Pebble", "Marble", "Timber", "Willow", "Cedar", "Maple",
  "Blossom", "Meteor", "Comet", "Galaxy", "Nebula", "Voyage",
  "Odyssey", "Lagoon", "Glacier", "Volcano", "Prairie", "Orchard",
  "Vineyard", "Cascade", "Summit", "Ridge"
];

let isAnimal = true;
let isColor = true;
const generateButton = document.querySelector(".generateButton");
const output = document.querySelector(".output");
const copyButton = document.querySelector(".copyButton");

generateButton.addEventListener("click", function (generateButtonClick) {
  function getFirstPasswordParameter() {
    let passwordPartOne = Math.random();

    if (passwordPartOne <= 0.54) return "color";
    else return "adjective";
  }

  function getSecondPasswordParameter() {
    let passwordPartTwo = Math.random();

    if (passwordPartTwo <= 0.54) return "animal";
    else return "noun";
  }

  function getWholePassword(firstPart, secondPart) {
    let firstWord;
    let secondWord;

    if (firstPart === "color") {
      firstWord = colors[Math.floor(Math.random() * colors.length)];
    } else if (firstPart === "adjective") {
      firstWord = adjectives[Math.floor(Math.random() * adjectives.length)];
    }

    if (secondPart === "animal") {
      secondWord = animals[Math.floor(Math.random() * animals.length)];
    } else if (secondPart === "noun") {
      secondWord = nouns[Math.floor(Math.random() * nouns.length)];
    }

    return firstWord + secondWord;
  }

  const firstPart = getFirstPasswordParameter();
  const secondPart = getSecondPasswordParameter();
  output.textContent = getWholePassword(firstPart, secondPart);
});

copyButton.addEventListener("click", function (copyButtonClick) {
  navigator.clipboard.writeText(output.textContent);
});
