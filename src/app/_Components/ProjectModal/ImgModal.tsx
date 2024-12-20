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
    <div className="fixed inset-0 bg-black/80 z-30 flex items-center justify-center img-modal">
      <div className="w-11/12 mx-auto rounded sm:mb-0 relative">
        {imgLoading && (
          <div className="absolute inset-0 z-30 flex items-center justify-center">
            <div
              className="w-10 h-10 border-4 border-ring border-t-transparent border-solid rounded-full
                animate-spin"
            ></div>
          </div>
        )}
        {!imgLoading && (
          <div className="absolute top-3 right-3 p-1 bg-black">
            <FaTimes
              className="sm:text-xl cursor-pointer text-white"
              onClick={() => setImgModal({ img: "", idx: 0 })}
            />
          </div>
        )}
        <Image
          onLoad={() => setImgLoading(false)}
          src={img}
          alt={"image" + idx}
          width={800}
          height={400}
          quality={100}
          className="w-full h-full ring ring-ring rounded"
        />
      </div>
    </div>
  );
};

export default memo(ImgModal);
