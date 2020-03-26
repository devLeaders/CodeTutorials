const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px"
};

export enum device {
  MOBILE_S = `(min-width: 320px)`,
  MOBILE_M = `(min-width: 375px)`,
  MOBILE_L = `(min-width: 425px)`,
  TABLET = `(min-width: 768px)`,
  LAPTOP = `(min-width: 1024px)`,
  LAPTOP_L = `(min-width: 1440px)`,
  DESKTOP = `(min-width: 2560px)`
};
