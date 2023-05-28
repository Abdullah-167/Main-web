import Button from "../Button";
import BgImage from "../../../public/frame3.png";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { GrLinkedinOption } from "react-icons/gr";
import { IoLogoInstagram } from "react-icons/io5";
import { BsYoutube } from "react-icons/bs";
import useTranslation from "@/hooks/useTranslation";
import GetLocale from "@/hooks/getLocale";
import Link from "next-translate-routes/link";
import { freeQuoteSlug } from "@/utils";

const Pronto = () => {
  const { t } = useTranslation();
  const locale = GetLocale();
  //@ts-ignore
  const slug = `/${locale}/${freeQuoteSlug[locale]}`;
  return (
    <div
      className="main-cpmBg py-10 sm:py-28"
      style={{
        backgroundImage: `url(${BgImage.src})`,
      }}
    >
      <div className="container">
        <div>
          <div>
            <h5 className="text-xl sm:text-2xl text-secondary font-bold text-center">
              {t("homeReady_Heading")}
            </h5>
            <h2 className="text-[30px] sm:text-[50px] text-white font-bold max-w-[780px] text-center mx-auto pb-8 sm:leading-[60px]">
              {t("homeReady_para")}
            </h2>
          </div>
          <Link href={slug}>
            <div className="flex justify-center">
              <Button
                text={t("homeReady_Btn")}
                color={"#6A1ACC"}
                backgroundColor={"white"}
                minWidth={""}
              />
            </div>
          </Link>
        </div>
        <div className="flex justify-center gap-5 items-center">
          {iconData.map((item, index) => {
            return (
              <a
                key={index}
                href={item.url}
                target="_blank"
                className="bg-[#F3E9FD] text-[#6A1ACC] font-bold text-xl w-12 h-12 rounded-full p-3 flex justify-center items-center cursor-pointer mt-14"
              >
                {item.icon}
              </a>
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
    url: "https://www.facebook.com/Rafiky-103256367862244/",
    icon: <FaFacebookF />,
  },
  {
    url: "https://twitter.com/rafiky_net",
    icon: <AiOutlineTwitter />,
  },
  {
    url: "https://www.linkedin.com/in/rafiky-ltd-49826a19a/",
    icon: <GrLinkedinOption />,
  },
  {
    url: "https://www.instagram.com/rafikynet/",
    icon: <IoLogoInstagram />,
  },
  {
    url: "https://www.youtube.com/channel/UCQj4LE9-1G0dhWDbzIoUy8w",
    icon: <BsYoutube />,
  },
];
