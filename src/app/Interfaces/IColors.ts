export type ThemeColors =
  | "Zinc"
  | "Rose"
  | "Blue"
  | "Green"
  | "Orange"
  | "Violet"
  | "Red"
  | "Yellow";
export interface IThemeColorStateParams {
  themeColor: ThemeColors;
  setThemeColor: React.Dispatch<React.SetStateAction<ThemeColors>>;
  ringColor: string;
  setRingColor: React.Dispatch<React.SetStateAction<string>>;
  customCursor: boolean;
  setCustomCursor: React.Dispatch<React.SetStateAction<boolean>>;
  smallScreen: boolean;
}
