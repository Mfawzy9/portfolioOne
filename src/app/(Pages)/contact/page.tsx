import ContactForm from "@/app/_Components/ContactForm/ContactForm";
import Content from "@/app/_Components/Content/Content";
import CursorEffect from "@/app/_Components/CursorEffect/CursorEffect";
import SocialIcons from "@/app/_Components/SocialIcons/SocialIcons";
import Title from "@/app/_Components/Title/Title";
import dynamic from "next/dynamic";
import Link from "next/link";
import { FaEnvelopeOpenText, FaPhoneSquareAlt } from "react-icons/fa";

const VisibilityHandler = dynamic(
  () => import("../../_Components/VisibilityHandler"),
  { ssr: false },
);

export const generateMetadata = () => {
  return {
    title: "Contact | Mahmoud Fawzy",
    description: "Contact with Mahmoud Fawzy in multiple ways",
  };
};

const Contact = () => {
  return (
    <>
      <CursorEffect />
      <VisibilityHandler />
      <section className="min-h-screen flex flex-col justify-center py-20 lg:pb-10">
        <Content>
          <Title
            primary="get in"
            span="touch"
            secondary="contact"
            className="!mt-0"
          />
        </Content>
        <div
          className="grid grid-cols-1 lg:grid-cols-3 gap-2 h-full w-full justify-center container
            mt-16"
        >
          {/* contact details */}
          <div className="flex flex-col gap-4">
            <Content>
              <h4
                className="text-3xl font-extrabold font-sans bg-gradient-to-t from-ring from-20%
                  via-secondary-foreground to-ring bg-clip-text text-transparent"
              >
                {"Let’s"} work together!
              </h4>
            </Content>
            <Content>
              <p className="leading-relaxed">
                Feel free to get in touch with me. I am always open to
                discussing new projects, creative ideas or opportunities to be
                part of your visions.
              </p>
            </Content>
            {/* call & email */}
            <div className="flex flex-wrap my-5 lg:my-0 lg:flex-col gap-6">
              <Link
                href="tel:+201066504422"
                target="_blank"
                className="flex items-center gap-4 group w-fit"
              >
                <Content>
                  <FaPhoneSquareAlt
                    className="text-4xl text-ring"
                    title="phone"
                  />
                </Content>
                <div className="flex flex-col">
                  <Content>
                    <strong>Call me</strong>
                  </Content>
                  <Content>
                    <span className="text-sm font-leagueSpartan group-hover:underline">
                      +201066504422
                    </span>
                  </Content>
                </div>
              </Link>
              <Link
                href="mailto:mah.fawzy96@gmail.com"
                className="flex items-center gap-4 group w-fit"
              >
                <Content>
                  <FaEnvelopeOpenText
                    className="text-3xl text-ring"
                    title="email"
                  />
                </Content>
                <div className="flex flex-col">
                  <Content className="w-fit">
                    <strong>Mail me</strong>
                  </Content>
                  <Content className="w-fit">
                    <span className="text-sm font-leagueSpartan font-semibold group-hover:underline">
                      mah.fawzy96@gmail.com
                    </span>
                  </Content>
                </div>
              </Link>
              <SocialIcons className="!w-9 !h-9" iconClassName="text-xl" />
            </div>
          </div>
          {/* contact form */}
          <div className="col-span-2 pe-1">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
