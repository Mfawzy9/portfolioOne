import { ISocialIcons } from "@/app/Interfaces/ISocialIcons";
import Link from "next/link";
import React from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import Content from "../Content/Content";

const icons: ISocialIcons[] = [
  {
    label: "Facebook",
    icon: FaFacebook,
    href: "https://www.facebook.com/mahmoud.fawzy.7/",
  },
  {
    label: "Github",
    icon: FaGithub,
    href: "https://github.com/Mfawzy9",
  },
  {
    label: "Linkedin",
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/mahmoud-fawzy0/",
  },
  {
    label: "Whatsapp",
    icon: FaWhatsapp,
    href: "https://wa.me/+201066504422",
  },
];

const SocialIcons = ({
  className,
  iconClassName,
}: {
  className?: string;
  iconClassName?: string;
}) => {
  return (
    <>
      <ul className="flex gap-2 items-center">
        {icons.map((icon) => {
          const Icon = icon.icon;
          return (
            <Content key={icon.label}>
              <li className="social-button">
                <Link
                  target="_blank"
                  href={icon.href as string}
                  className={`flex items-center justify-center relative ${className ?? ""} w-10 h-10 bg-ring
                  rounded-full group border hover:border-black`}
                >
                  <Icon
                    className={`text-2xl absolute ${iconClassName ?? ""} text-white z-10 group-hover:text-black
                    transition-all`}
                  />
                  <div
                    className="w-full h-full absolute flex justify-center top-0 left-0 rounded-full
                      overflow-hidden"
                  >
                    <span
                      className={`w-full h-0 group-hover:h-full transition-all duration-500 absolute bottom-0
                      bg-white`}
                    ></span>
                  </div>
                  <span
                    className="absolute block group-hover:visible group-hover:-top-11 group-hover:opacity-100
                      font-bold text-sm opacity-0 invisible transition-all duration-500 bg-ring z-10
                      px-2.5 py-1 rounded -top-5"
                  >
                    {icon.label}
                  </span>
                </Link>
              </li>
            </Content>
          );
        })}
      </ul>
    </>
  );
};

export default SocialIcons;
