import useTranslation from "@/hooks/useTranslation";
import { Link } from "next-translate-routes";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { GrLinkedinOption } from "react-icons/gr";
import { IoLogoInstagram } from "react-icons/io5";
import Button from "../Button";

const Pronto = () => {
  const { t } = useTranslation();

  return (
    <div
      className=" py-10"
    // style={{
    //     backgroundImage: `url(${BgImage.src})`
    // }}
    >
      <div className="container">
        <div>
          <div>
            <h5 className="text-2xl text-black font-bold text-center pt-10 pb-8 leading-1">
              {t("servicesWebConference_prontoSubTitle")}
            </h5>
            <h2 className="text-[35px] sm:text-[50px] text-black font-bold text-center mx-auto pb-12 lg:leading-10">
              {t("servicesWebConference_prontoTitle")}
            </h2>
          </div>

          <div className="flex justify-center">
            <Link href={'/richiesta-preventivo'} >
              <Button
                text={t("servicesWebConference_prontoBtn")}
                color={"white"}
                backgroundColor={"#480EB3"}
                minWidth={undefined}
              />
            </Link>
          </div>
        </div>
        <div className="flex justify-center gap-5 items-center">
          {iconData.map((item, index) => {
            return (
              <div
                key={index}
                className="bg-[#F3E9FD] text-[#6A1ACC] font-bold text-xl w-12 h-12 rounded-full p-3 flex justify-center items-center cursor-pointer mt-14"
              >
                {item.icon}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Pronto;

const iconData = [
  {
    icon: <FaFacebookF />,
  },
  {
    icon: <AiOutlineTwitter />,
  },
  {
    icon: <GrLinkedinOption />,
  },
  {
    icon: <IoLogoInstagram />,
  },
  {
    icon: <BsYoutube />,
  },
];