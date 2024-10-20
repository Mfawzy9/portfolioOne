import {
  Poppins,
  League_Spartan,
  Raleway,
  Oleo_Script,
  Righteous,
} from "next/font/google";

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

//p
export const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-league-spartan",
});

//h
export const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-raleway",
});

//حبشكنات صايع شوية
export const oleoScript = Oleo_Script({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-oleo-script",
});

//صايع شوية
export const righteous = Righteous({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-righteous",
});
