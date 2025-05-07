import Image from "next/image";
import mainImg from "../../../../public/assets/imgs/hero1.png";
import Content from "@/app/_Components/Content/Content";

const HomeImg = () => {
  return (
    <>
      <Content className={"scale-75 rounded-full lg:rounded-none"}>
        <div className="w-full h-auto">
          <Image
            priority
            src={mainImg}
            className={
              "rounded-full border border-ring lg:border-0 lg:rounded-none lg:w-full lg:h-full "
            }
            alt="profile photo"
            width={666}
            height={666}
          />
        </div>
      </Content>
    </>
  );
};

export default HomeImg;
