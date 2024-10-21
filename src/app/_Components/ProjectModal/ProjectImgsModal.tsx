import { motion } from "framer-motion";
import Image from "next/image";
import { memo, useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";

const ImgModal = ({
  img,
  idx,
  setImgModal,
  imgModal,
}: {
  img: string;
  idx: number;
  setImgModal: React.Dispatch<
    React.SetStateAction<{ img: string; idx: number }>
  >;
  imgModal: { img: string; idx: number };
}) => {
  const [imgLoading, setImgLoading] = useState(true);

  const closeImgModal = (e: MouseEvent) => {
    if (
      (imgModal.img !== "" &&
        e.target &&
        (e.target as HTMLElement).classList.contains("img-modal")) ||
      (e.target as HTMLElement).classList.contains("project-modal")
    ) {
      setImgModal({ img: "", idx: 0 });
    }
  };

  useEffect(() => {
    document.documentElement.addEventListener("click", closeImgModal);
    return () => {
      document.documentElement.removeEventListener("click", closeImgModal);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [imgModal]);
  return (
    <div className="fixed inset-0 bg-black/70 z-30 flex items-center justify-center img-modal">
      <motion.div
        initial={{
          opacity: 0,
          transform: "scale(0) ",
        }}
        animate={{
          opacity: 1,
          transform: "scale(1) ",
        }}
        exit={{
          opacity: 0,
          transform: "scale(0) ",
          transition: {
            duration: 0.2,
          },
        }}
        className="max-w-xl mx-auto rounded sm:mb-0 shadow-[0_0_7px_0px] shadow-foreground relative
          mix-blend-difference"
      >
        {imgLoading && (
          <div className="absolute inset-0 z-30 flex items-center justify-center">
            <div
              className="w-10 h-10 border-4 border-ring border-t-transparent border-solid rounded-full
                animate-spin"
            ></div>
          </div>
        )}
        {!imgLoading && (
          <div className="absolute top-3 right-3 p-1 rounded-full bg-black">
            <FaTimes
              className="text-xl cursor-pointer"
              onClick={() => setImgModal({ img: "", idx: 0 })}
            />
          </div>
        )}
        <Image
          onLoad={() => setImgLoading(false)}
          src={img}
          alt={"image" + idx}
          width={600}
          height={400}
          quality={100}
          className="w-full h-full"
        />
      </motion.div>
    </div>
  );
};

export default memo(ImgModal);
