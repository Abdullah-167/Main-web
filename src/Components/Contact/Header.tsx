import newBg from "../../../public/frame.png";
import useTranslation from "@/hooks/useTranslation";

const Header = () => {
  const { t } = useTranslation();
  return (
    <div
      className="home-bg "
      style={{
        backgroundImage: `url(${newBg.src})`,
      }}
    >
      <div className="text-white  text-center py-32">
        <p className="text-[26px] font-medium">{t("contactUs_Title")}</p>
        <h2 className="text-[80px] font-bold pb-8">
          {t("contactUs_SubTitle")}
        </h2>
        <p className="font-normal max-w-[600px] mx-auto text-lg leading-9">
          {t("contactUs_para")}
        </p>
      </div>
    </div>
  );
};

export default Header;
