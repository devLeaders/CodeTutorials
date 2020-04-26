const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px"
};

export enum Device {
  mobileS = `(min-width: 320px)`,
  mobileM = `(min-width: 375px)`,
  mobileL = `(min-width: 425px)`,
  tablet = `(min-width: 768px)`,
  laptop = `(min-width: 1024px)`,
  laptopL = `(min-width: 1440px)`,
  desktop = `(min-width: 2560px)`
};
