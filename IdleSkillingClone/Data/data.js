const FRAMES = {
  ATTACKED: 4,
  COMBO: 14,
  DIE: 1,
  ENERGY: 6,
  FLYING: 7,
  IDLE: 9,
  PUSH: 4,
  PUSH2: 3,
  PUSH3: 7,
  TACKLE: 9,
  WALK: 6,
};

// name : [level, exp]
const statData = {
  atk: [(level = 0), (exp = 0)],
  str: [level, exp],
  end: [level, exp],
  h2o: [level, exp],
};

const currencyData = {
  money: 0,
  gem: 0,
};

const backgroundSrc = {
  gym: "./Assets/Images/backgrounds/backgroundGym.png",
  dojo: "./Assets/Images/backgrounds/backgroundDojo.png",
  strength: "./Assets/Images/backgrounds/backgroundStrength.png",
  fields: "./Assets/Images/backgrounds/backgroundFields.png",
  grassLands: "Assets/Images/backgrounds/backgroundGrassLands.png",
  desert: "Assets/Images/backgrounds/backgroundDesert.png",
  mountains: "Assets/Images/backgrounds/backgroundMountains.png",
};
