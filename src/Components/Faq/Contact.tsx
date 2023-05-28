import Button from "../Button";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { GrLinkedinOption } from "react-icons/gr";
import { IoLogoInstagram } from "react-icons/io5";
import { BsYoutube } from "react-icons/bs";
import BgImage from "../../../public/frame.png";
import GetLocale from "@/hooks/getLocale";
import { contactUsSlug } from "@/utils";
import Link from "next-translate-routes/link";
import useTranslation from "@/hooks/useTranslation";

const Contact = () => {
  const { t } = useTranslation();
  const locale = GetLocale();
  //@ts-ignore
  const slug = `/${locale}/${contactUsSlug[locale]}`;
  return (
    <div
      className="main-cpmBg py-10"
      style={{
        backgroundImage: `url(${BgImage.src})`,
      }}
    >
      <div className="container">
        <div>
          <div>
            <h5 className="text-2xl text-white font-bold text-center pt-10 pb-8 leading-1">
            {t("ContactUsTitle")}
            </h5>
            <h2 className="text-[35px] sm:text-[50px] text-white font-bold text-center mx-auto pb-12 lg:leading-10">
            {t("ContactUsFooterPara")}
            </h2>
          </div>

          <div className="flex justify-center">
            <Link href={slug}>
              <Button
                text= {t("ContactUsTitle")}
                color={"black"}
                backgroundColor={"white"}
                minWidth={"250px"}
              />
            </Link>
          </div>
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

export default Contact;

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
