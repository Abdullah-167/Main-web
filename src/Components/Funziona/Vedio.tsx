import Image from "next/image";

import Button from "../Button";
import BgImage from "../../../public/pink.png";
import useTranslation from "@/hooks/useTranslation";

const Vedio = () => {
  const { t } = useTranslation();
  return (
    <div
      className="vedio"
      style={{
        backgroundImage: `url(${BgImage.src})`,
      }}
    >
      <div className="container relative">
        <div className="xl:flex  gap-24 py-20 sm:py-32 pb-[100px]">
          <div>
            <div className="flex justify-center items-center mb-6">
             
                <div>
                  <h3 className="text-[#6A1ACC] text-3xl sm:text-[45px] font-bold pt-10 leading-[55px]">
                   
                  </h3>
                  <p className="text-base font-normal text-black pbF-4 max-w-[750px] pb-3 leading-7">
                  {t("videoInterpreted_para")}  
                  </p>
              
              </div>
            </div>
            <div className="mb-10">
              <Button
                text={t("videoInterpreted_Heading")}
                color={"white"}
                backgroundColor={"#8624E1"}
                minWidth={undefined}
              />
            </div>
          </div>
          <div className="flex justify-center sm:pt-20 self-center">
            <iframe
              className="w-[400px] sm:w-[550px] md:w-[700px] xl:w-[700px] h-[300px] sm:h-[400px] mx-auto"
              src="https://www.youtube.com/embed/K1xWE4MdmTY?feature=oembed"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vedio;
