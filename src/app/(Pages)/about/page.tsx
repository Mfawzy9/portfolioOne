import Content from "@/app/_Components/Content/Content";
import Title from "@/app/_Components/Title/Title";
import Image from "next/image";
import { FaCalendarDay, FaDownload, FaEnvelope } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoCall, IoLanguage } from "react-icons/io5";
import mainImg from "../../../../public/assets/imgs/me2.png";
import { IInfos } from "@/app/Interfaces/IAboutInfos";
import dynamic from "next/dynamic";
import CursorsContainer from "@/app/_Components/CursorEffects/CursorsContainer";

const VisibilityHandler = dynamic(
  () => import("../../_Components/VisibilityHandler"),
  { ssr: false },
);

export const generateMetadata = () => {
  return {
    title: "About | Mahmoud Fawzy",
    description: "about Mahmoud Fawzy",
  };
};

const infos: IInfos[] = [
  { title: "Address", value: "Egypt", icon: FaLocationDot },
  { title: "Age", value: "28 Years Old", icon: FaCalendarDay },
  { title: "Phone", value: "+201066504422", icon: IoCall },
  { title: "Email", value: "mah.fawzy96@gmail.com", icon: FaEnvelope },
  { title: "Languages", value: "Arabic , English", icon: IoLanguage },
];

export default function About() {
  return (
    <>
      <CursorsContainer />
      <VisibilityHandler />
      <section className="min-h-screen pb-20 lg:pb-0 flex flex-col justify-center items-center">
        <Content className="mb-4 sm:mb-0 min-w-full">
          <Title primary="ABOUT" span="ME" secondary="RESUME" />
        </Content>
        <section className="container xl:gap-5 sm:mt-16 grid grid-cols-1 lg:grid-cols-3 items-center gap-1">
          {/* infos */}
          <div className="flex flex-col px-2">
            <div className="space-y-1 text-center">
              <Content className="flex justify-center">
                <figure className="rounded-full border-2 border-ring w-[150px] h-[150px] relative">
                  <Image
                    src={mainImg}
                    className="mb-4 w-full h-full rounded-full object-contain relative z-20 bg-[#322b3a]"
                    alt="profile photo"
                    width={150}
                    height={150}
                  />
                  <div
                    className="absolute -inset-[3.5px] rounded-full bg-gradient-to-t from-ring via-transparent
                      -z-10 to-ring animate-rotate360"
                  ></div>
                </figure>
              </Content>
              <Content>
                <h2 className="text-2xl font-bold">
                  MAHMOUD <span className="text-ring">FAWZY</span>
                </h2>
              </Content>
              <Content>
                <h4 className="text-xl">
                  <span className="text-muted-foreground font-semibold">
                    Front-End
                  </span>{" "}
                  Developer
                </h4>
              </Content>
            </div>
            <div className="flex justify-center">
              <ul
                className="flex flex-wrap w-full py-5 flex-col gap-4 divide-y divide-muted justify-center
                  text-start"
              >
                {infos.map(({ value, title, icon }) => {
                  const Icon = icon;
                  return (
                    <Content key={title}>
                      <li
                        title={title}
                        className="flex gap-2 items-center font-leagueSpartan"
                      >
                        <Icon className="text-xl text-ring" />
                        {value}
                      </li>
                    </Content>
                  );
                })}
                <Content>
                  <li className="mt-2">
                    <a
                      aria-label="download cv"
                      download=""
                      href="/RouteCertification.pdf"
                      target="_blank"
                      className="brightness-150 dark:brightness-100 group hover:shadow-lg hover:shadow-ring/60
                        block w-full transition ease-in-out hover:scale-105 p-1 rounded-xl
                        bg-gradient-to-br from-ring via-ring to-ring hover:from-ring hover:via-ring
                        hover:to-ring"
                    >
                      <div className="px-6 py-2 backdrop-blur-xl bg-black/80 rounded-lg font-bold w-full h-full">
                        <div
                          className="group-hover:scale-100 justify-center flex items-center group-hover:text-ring
                            text-ring gap-1"
                        >
                          <FaDownload className="text-xl me-2" />
                          Download CV
                        </div>
                      </div>
                    </a>
                  </li>
                </Content>
              </ul>
            </div>
          </div>
          {/* content */}
          <div className="flex flex-col gap-7 text-lg lg:col-span-2 pb-10 lg:pe-10 mt-10 xl:mt-0">
            <Content>
              <h5 className="text-ring font-semibold border-b-2 text-3xl text-start w-fit">
                who am i ?
              </h5>
            </Content>
            <Content>
              <p className="text-muted-foreground leading-relaxed">
                My name is{" "}
                <span className="text-foreground font-semibold">
                  Mahmoud Fawzy.{" "}
                </span>
                {"I'm"} a front-end developer specializing in React.js and
                Next.js, with a passion for creating interactive, responsive,
                and user-friendly web applications. I thrive on building digital
                experiences that are fast, accessible, and intuitive.
              </p>
            </Content>

            <Content>
              <p className="text-muted-foreground leading-relaxed">
                I focus on building pixel-perfect user interfaces, while
                prioritizing performance and user experience. I enjoy working
                closely with designers and backend developers to create seamless
                integrations and bring designs to life.
              </p>
            </Content>

            <Content>
              <p className="text-muted-foreground leading-relaxed">
                With a strong background in JavaScript, I focus on building
                efficient and scalable applications using modern frontend
                technologies like React.js and Next.js. I have hands-on
                experience in developing both static and dynamic websites,
                utilizing tools like Framer Motion for animations, Tailwind CSS
                for design, and integrating various APIs.
              </p>
            </Content>
            <Content>
              <p className="text-muted-foreground leading-relaxed">
                {"I'm"} constantly pushing my limits by learning new frameworks
                and techniques, and I aim to dive deeper into full-stack
                development in the future while continuously refining my
                frontend skills.
              </p>
            </Content>
          </div>
        </section>
      </section>
    </>
  );
}
