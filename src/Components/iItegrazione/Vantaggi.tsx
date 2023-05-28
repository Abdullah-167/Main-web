import { HiPuzzlePiece } from "react-icons/hi2";
import { HiClipboardDocumentCheck } from "react-icons/hi2";
import {
  BsEnvelope,
  BsFileBarGraphFill,
  BsFillPeopleFill,
} from "react-icons/bs";
import { AiTwotoneLike, AiOutlineDesktop } from "react-icons/ai";

import { FcVlc } from "react-icons/fc";
import useTranslation from "@/hooks/useTranslation";

const Vantaggi = () => {
  const { t } = useTranslation();
  const cards = [
    {
      icon: <HiPuzzlePiece />,
      heading: t("microsoftTeams_FirstcardHeading"),
      para: t("microsoftTeams_Firstcardpara"),
      bgColor: "rgba(122,105,230,0.3)",
      color: "#7a69e6",
    },
    {
      icon: <HiClipboardDocumentCheck />,
      heading: t("microsoftTeams_SeccardHeading"),
      para: t("microsoftTeams_Seccardpara"),
      bgColor: "rgba(250,94,93,0.3)",
      color: "#fa5e5d",
    },
    {
      icon: <BsFillPeopleFill />,
      heading: t("microsoftTeams_ThirdHeading"),
      para: t("microsoftTeams_Thirdpara"),
      bgColor: "rgba(249,141,94,0.3)",
      color: "#f98d5e",
    },
    {
      icon: <FcVlc />,
      heading: t("microsoftTeams_ForthHeading"),
      para: t("microsoftTeams_Forthpara"),
      bgColor: "rgba(118,206,68,0.3)",
      color: "#76ce44",
    },

    {
      icon: <BsFileBarGraphFill />,
      heading: t("microsoftTeams_FiveHeading"),
      para: t("microsoftTeams_Fivepara"),
      bgColor: "rgba(106,154,232,0.3)",
      color: "#6a9ae8",
    },
    {
      icon: <BsEnvelope />,
      heading: t("microsoftTeams_SixHeading"),
      para: t("microsoftTeams_Sixpara"),
      bgColor: "rgba(249,192,67,0.3)",
      color: "#f9c043",
    },
    {
      icon: <AiOutlineDesktop />,
      heading: t("microsoftTeams_SevenHeading"),
      para: t("microsoftTeams_Sevenpara"),
      bgColor: "rgba(247,103,180,0.3)",
      color: "#f767b4",
    },
    {
      icon: <AiTwotoneLike />,
      heading: t("microsoftTeams_EightHeading"),
      para: t("microsoftTeams_Eightpara"),
      bgColor: "rgba(68,206,176,0.3)",
      color: "#44ceb0",
    },
  ];
  return (
    <div className="bg-[#F5F6FC] py-10">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-5 py-20">
          {cards.map((item, index) => {
            return (
              <div
                className="hero-cards bg-white px-4 py-10 rounded-xl"
                key={index}
              >
                <div
                  className={`text-4xl rounded-full w-20 h-20 mx-auto px-4 py-3 text-center`}
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
                <p className="text-base text-[#666666] sm:max-w-[250px] mx-auto text-center">
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

export default Vantaggi;
