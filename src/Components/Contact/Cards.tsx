import { GoLocation } from "react-icons/go";
import { GrMail } from "react-icons/gr";
import { IoHome } from "react-icons/io5";
import useTranslation from "@/hooks/useTranslation";

const PercheCards = () => {
  const { t } = useTranslation();
  const cards = [
    {
      icon: <GoLocation />,
      heading: t("contactUs_FirstcardHeading"),
      para: t("contactUs_Firstcardpara"),
      bgColor: "rgba(122,105,230,0.3)",
      color: "#7a69e6",
    },
    {
      icon: <GrMail />,
      heading: t("contactUs_SeccardHeading"),
      para: t("contactUs_Seccardpara"),
      bgColor: "rgba(250,94,93,0.3)",
      color: "#fa5e5d",
    },
    {
      icon: <IoHome />,
      heading: t("contactUs_ThirdcardHeading"),
      para: t("contactUs_Thirdcardpara"),
      bgColor: "rgba(249,141,94,0.3)",
      color: "#f98d5e",
    },
  ];
  return (
    <div className="sm:py-32">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-5">
          {cards.map((item, index) => {
            return (
              <div
                className="hover-animate hero-cards bg-white px-4 py-10 rounded-xl"
                key={index}
              >
                <div
                  className={`text-4xl rounded-full w-16 h-16 mx-auto px-4 py-3 text-center`}
                  style={{
                    backgroundColor: item.bgColor,
                    color: item.color,
                  }}
                >
                  <div className="icon-container"> {item.icon} </div>
                </div>
                <h2 className="text-lg text-[#333333] text-center font-bold pt-8 pb-3">
                  {item.heading}
                </h2>
                <p className="text-base text-[#666666] max-w-[250px] mx-auto text-center pb-1">
                  {item.para}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PercheCards;
