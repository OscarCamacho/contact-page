export enum LogoOrientation {
  PORTRAIT,
  LANDSCAPE,
  SQUARE
}

export function resolveLogoClass (orientation: LogoOrientation): string {
  let res = "";
  switch(orientation) {
    case LogoOrientation.LANDSCAPE:
      res = "landscape";
      break;
    case LogoOrientation.PORTRAIT:
      res = "portrait";
      break;
    case LogoOrientation.SQUARE:
      res = "square";
      break;
  }
  return res;
}
