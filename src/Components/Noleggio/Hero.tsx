import Button from "../Button";
import BgImage from "../../../public/frame3.png";
import useTranslation from "@/hooks/useTranslation";

const Hero = () => {
  const { t } = useTranslation();
  return (
    <div
      className="main-cpmBg"
      style={{
        backgroundImage: `url(${BgImage.src})`,
      }}
    >
      <div className="container">
        <div className="flex justify-center items-center gap-10">
          <div className="pb-20 sm:pb-32">
            <div className="mb-12">
              <h2 className="text-[30px] sm:text-[40px] md:text-[79px] text-white font-bold mx-auto max-w-[1100px] text-center leading-[1.2em] pt-20 pb-12">
                {t("equipmentRental_Heading")}
              </h2>
              <p className="text-base sm:text-[20px] font-medium text-white mx-auto max-w-[750px] text-center leading-9">
                {" "}
                {t("equipmentRental_para")}
              </p>
            </div>
            <div className="flex justify-center">
              <Button
                text={t("equipmentRental_Btn")}
                color={"black"}
                backgroundColor={"white"}
                minWidth={undefined}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
