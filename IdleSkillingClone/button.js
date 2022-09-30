const menubar = document.getElementById("menubar");
const menuLeft = document.getElementById("menuLeft");
const menuRight = document.getElementById("menuRight");
const winWidth = window.innerWidth;
const winHeight = window.innerHeight;
const background = document.getElementById("background");
const curBackground = background.getElementsByTagName("img")[0];

class Stats {
  constructor(name, level = 0, exp = 0) {
    this.name = name;
    this.level = level;
    this.exp = exp;
  }
  getData() {
    let curData = window.localStorage.getItem(this.name);
    this.level = curData.split(",")[0];
    this.exp = curData.split(",")[1];
  }
}

window.localStorage.setItem("atk", [100, 1000]);
let atk = new Stats("atk");
let str = new Stats("str");
let end = new Stats("end");
let h2o = new Stats("h2o");

function getInitData() {
  atk.getData();
  str.getData();
  end.getData();
  h2o.getData();
}

const viewAry = [];
const trainView = document.getElementById("trainView");
const fightView = document.getElementById("fightView");
const perksView = document.getElementById("perksView");
const craftView = document.getElementById("craftView");
const portalView = document.getElementById("portalView");
viewAry.push(trainView, fightView, perksView, craftView, portalView);
class MenuBtn {
  constructor(id, imgLink, isLeft = true) {
    this.imgLink = imgLink;
    this.elem = document.createElement("button");
    this.elem.id = id;
    this.elem.classList.add("menuBtn");
    if (isLeft) {
      this.elem.style.width = "calc((100% - 35px) / 7)";
      menuLeft.appendChild(this.elem);
    } else {
      this.elem.style.width = "calc((100% - 25px) / 5)";
      menuRight.appendChild(this.elem);
      this.elem.style.height = menuLeft.style.height;
    }
    this.img = document.createElement("img");
    this.img.src = `./Assets/Images/${imgLink}`;
    this.elem.appendChild(this.img);
    this.elem.style.borderRadius = "50%";
    this.elem.style.border = "none";
    this.elem.style.backgroundColor = "transparent";
  }
}

const headerBtns = [];

const changeBtn = new MenuBtn("changeBtn", "Main/change.png");
const trainBtn = new MenuBtn("trainBtn", "Main/Train_icon.png");
trainBtn.elem.getElementsByTagName(`img`)[0].classList.add(`focus`);
const fightBtn = new MenuBtn("fightBtn", "Main/Fight_icon.png");
const perksBtn = new MenuBtn("perksBtn", "Main/Perks_icon.png");
const craftBtn = new MenuBtn("craftBtn", "Main/Crafting_icon.png");
const portalBtn = new MenuBtn("portalBtn", "Main/Portal_icon.png");

const trainBtns = [];
const fightBtns = [];
const gymBtn = new MenuBtn(
  "portalBtn",
  "Main/Trains/Small_gym_icon.png",
  false
);
const dojoBtn = new MenuBtn(
  "portalBtn",
  "Main/Trains/Small_dojo_icon.png",
  false
);
const strengthBtn = new MenuBtn(
  "portalBtn",
  "Main/Trains/Small_strength_icon.png",
  false
);
const fieldsBtn = new MenuBtn(
  "portalBtn",
  "Main/Trains/Small_fields_icon.png",
  false
);
const grassLandsBtn = new MenuBtn(
  "grassLandsBtn",
  "Fields/Grasslands_icon.png",
  false
);
const desertBtn = new MenuBtn("desertBtn", "Fields/Desert_icon.png", false);
const mountainsBtn = new MenuBtn(
  "mountainsBtn",
  "Fields/Mountains_icon.png",
  false
);
gymBtn.elem.classList.add("focus");
grassLandsBtn.elem.classList.add("iconSel");
trainBtns.push(gymBtn, dojoBtn, strengthBtn, fieldsBtn);
fightBtns.push(grassLandsBtn, desertBtn, mountainsBtn);
fightBtns.forEach((item) => (item.elem.style.display = "none"));

headerBtns.push(
  changeBtn,
  trainBtn,
  fightBtn,
  perksBtn,
  craftBtn,
  portalBtn,
  gymBtn,
  dojoBtn,
  strengthBtn,
  fieldsBtn
);

// 0 : train 1 : fight 2 : perks 3 : craft 4: portal 5 : dojo 6 : fields 7 : gym 8 : strength
function ViewToggle(num, elem) {
  if (num != 0) {
    trainBtns.forEach((item) => (item.elem.style.display = "none"));
  } else {
    trainBtns.forEach((item) => (item.elem.style.display = "block"));
  }
  if (num != 1) {
    fightBtns.forEach((item) => (item.elem.style.display = "none"));
  } else {
    fightBtns.forEach((item) => (item.elem.style.display = "block"));
  }
  for (let i = 0; i < viewAry.length; ++i) {
    if (i == num) {
      viewAry[i].style.display = "block";
      elem.getElementsByTagName("img")[0].classList.add(`focus`);
    } else {
      headerBtns[i + 1].elem
        .getElementsByTagName("img")[0]
        .classList.remove(`focus`);
      viewAry[i].style.display = "none";
    }
  }
}
function TrainToggle(num) {
  trainBtns.forEach((item) => item.elem.classList.remove("focus"));

  if (num == 0) gymBtn.elem.classList.add("focus");
  else if (num == 1) dojoBtn.elem.classList.add("focus");
  else if (num == 2) strengthBtn.elem.classList.add("focus");
  else if (num == 3) fieldsBtn.elem.classList.add("focus");
}
function fightToggle(num) {
  fightBtns.forEach((item) => item.elem.classList.remove(`iconSel`));
  if (num == 0) {
    grassLandsBtn.elem.classList.add(`iconSel`);
    curBackground.src = backgroundSrc.grassLands;
  }
  if (num == 1) {
    desertBtn.elem.classList.add(`iconSel`);
    curBackground.src = backgroundSrc.desert;
  }
  if (num == 2) {
    mountainsBtn.elem.classList.add(`iconSel`);
    curBackground.src = backgroundSrc.mountains;
  }
}

// Btn Onclick
function OnClickInit() {
  trainBtn.elem.onclick = () => {
    for (let i = 0; i < trainBtns.length; ++i) {
      if (trainBtns[i].elem.classList.contains(`focus`)) {
        switch (i) {
          case 0:
            curBackground.src = backgroundSrc.gym;
            break;
          case 1:
            curBackground.src = backgroundSrc.dojo;
            break;
          case 2:
            curBackground.src = backgroundSrc.strength;
            break;
          case 3:
            curBackground.src = backgroundSrc.fields;
            break;
        }
      }
    }
    ViewToggle(0, trainBtn.elem);
  };
  fightBtn.elem.onclick = () => {
    for (let i = 0; i < fightBtns.length; ++i) {
      if (fightBtns[i].elem.classList.contains(`iconSel`)) {
        switch (i) {
          case 0:
            curBackground.src = backgroundSrc.grassLands;
            break;
          case 1:
            curBackground.src = backgroundSrc.desert;
            break;
          case 2:
            curBackground.src = backgroundSrc.mountains;
            break;
        }
      }
    }
    ViewToggle(1, fightBtn.elem);
  };
  perksBtn.elem.onclick = () => {
    ViewToggle(2, perksBtn.elem);
  };
  craftBtn.elem.onclick = () => {
    ViewToggle(3, craftBtn.elem);
  };
  portalBtn.elem.onclick = () => {
    ViewToggle(4, portalBtn.elem);
  };
  gymBtn.elem.onclick = () => {
    curImgElem = trainBtn.elem.getElementsByTagName("img")[0];
    if (!curImgElem.classList.contains(`focus`)) {
      gymBtn.elem.classList.remove(`focus`);
      return;
    }
    const myImg = background.getElementsByTagName("img")[0];
    myImg.src = backgroundSrc.gym;
    TrainToggle(0);
  };
  dojoBtn.elem.onclick = () => {
    curImgElem = trainBtn.elem.getElementsByTagName("img")[0];
    if (!curImgElem.classList.contains(`focus`)) {
      gymBtn.elem.classList.remove(`focus`);
      return;
    }
    const myImg = background.getElementsByTagName("img")[0];
    myImg.src = backgroundSrc.dojo;
    TrainToggle(1);
  };
  strengthBtn.elem.onclick = () => {
    curImgElem = trainBtn.elem.getElementsByTagName("img")[0];
    if (!curImgElem.classList.contains(`focus`)) {
      gymBtn.elem.classList.remove(`focus`);
      return;
    }
    const myImg = background.getElementsByTagName("img")[0];
    myImg.src = backgroundSrc.strength;
    TrainToggle(2);
  };
  fieldsBtn.elem.onclick = () => {
    curImgElem = trainBtn.elem.getElementsByTagName("img")[0];
    if (!curImgElem.classList.contains(`focus`)) {
      gymBtn.elem.classList.remove(`focus`);
      return;
    }
    const myImg = background.getElementsByTagName("img")[0];
    myImg.src = backgroundSrc.fields;
    TrainToggle(3);
  };
  grassLandsBtn.elem.onclick = () => {
    fightToggle(0);
  };
  desertBtn.elem.onclick = () => {
    fightToggle(1);
  };
  mountainsBtn.elem.onclick = () => {
    fightToggle(2);
  };
}
OnClickInit();

const animIds = {
  1: undefined,
  2: undefined,
  3: undefined,
  4: undefined,
  5: undefined,
};
function MakeAnimation(animName, trainerNum = 1) {
  let curTrainer = document.getElementById(`trainer${trainerNum}`);
  let curImg = curTrainer.getElementsByTagName("img")[0];
  curImg.src = `./Assets/sprites/${animName}/1.png`;
  let path = `./Assets/sprites/${animName}/`;
  let endNum;
  // atk, str, end, h2o
  let curDataName = "atk";
  switch (animName) {
    case "attacked":
      curDataName = "atk";
      endNum = FRAMES.ATTACKED;
      break;
    case "combo":
      curDataName = "atk";
      endNum = FRAMES.COMBO;
      break;
    case "die":
      curDataName = "atk";
      endNum = FRAMES.DIE;
      break;
    case "energy":
      curDataName = "atk";
      endNum = FRAMES.ENERGY;
      break;
    case "flying":
      curDataName = "atk";
      endNum = FRAMES.FLYING;
      break;
    case "Idle":
      curDataName = "atk";
      endNum = FRAMES.IDLE;
      break;
    case "push":
      curDataName = "atk";
      endNum = FRAMES.PUSH;
      break;
    case "push2":
      curDataName = "atk";
      endNum = FRAMES.PUSH2;
      break;
    case "push3":
      curDataName = "atk";
      endNum = FRAMES.PUSH3;
      break;
    case "tackle":
      curDataName = "atk";
      endNum = FRAMES.TACKLE;
      break;
    case "walk":
      curDataName = "atk";
      endNum = FRAMES.WALK;
      break;
  }
  let count = 0;
  let delay = 1000 / endNum;
  animIds.trainerNum = setInterval(() => {
    curImg.src = `${path}${(count++ % endNum) + 1}.png`;
  }, delay);
}
MakeAnimation("Idle");
MakeAnimation("push", 2);
MakeAnimation("push2", 3);
MakeAnimation("flying", 4);
MakeAnimation("combo", 5);
