import Image from "next/image";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { GrLinkedinOption } from "react-icons/gr";
import { IoLogoInstagram, IoLogoGooglePlaystore } from "react-icons/io5";
import { BsYoutube, BsApple } from "react-icons/bs";
import Link from "next-translate-routes/link";
import useTranslation from "@/hooks/useTranslation";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="bg-[#FDF7FF] text-[#1F1926]">
        <div className="max-w-[1080px] mx-auto py-20 px-5">
          <div className="flex flex-wrap lg:flex-nowrap justify-between gap-4 sm:gap-20">
            <div>
              <Image loading="lazy" src="/logo.png" alt="" width={250} height={10} />
              <div className="mb-5">
                <a
                  href="https://apps.apple.com/it/app/rafiky-connect/id1515495958"
                  target="_blank"
                >
                  <span className="flex items-center gap-3 my-5">
                    <BsApple className="text-3xl  text-[#2A2828]" />
                    <span className="text-xl font-medium">{t("appStore")}</span>
                  </span>
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=com.rafiky.connect"
                  target="_blank"
                >
                  <span className="flex items-center gap-3">
                    <IoLogoGooglePlaystore className="text-3xl  text-[#2A2828]" />
                    <span className="text-xl font-medium">
                      {t("playStore")}
                    </span>
                  </span>
                </a>
              </div>
              <div className="flex gap-3 items-center">
                {iconData.map((item, index) => {
                  return (
                    <a
                      key={index}
                      href={item.url}
                      className="bg-[#6A1ACC] text-white font-bold text-xl w-10 h-10 rounded-full p-3 flex justify-center items-center cursor-pointer"
                      target="_blank"
                    >
                      {item.icon}
                    </a>
                  );
                })}
              </div>
            </div>
            <div>
              <h4 className="text-[#1F1926] text-2xl mt-5 mb-6 font-bold">
                {t("pages")}
              </h4>
              <div className="footer flex flex-col text-sm">
                <Link href={"/chi-siamo"} className="mb-4">
                  <span>{t("footerPageOne")}</span>
                </Link>
                <Link href={"/come-funziona"} className="mb-4">
                  <span>{t("footerPageTwo")}</span>
                </Link>
                <Link href={"/casi-duso"} className="mb-4">
                  <span>{t("footerPageThree")}</span>
                </Link>
                <Link href={"/contattaci"} className="mb-4">
                  <span>{t("footerPageFour")}</span>
                </Link>
                <Link
                  href={
                    "/terms-conditions/rescheduling-cancellation-and-refund-policy"
                  }
                  className="mb-4"
                >
                  {t("footerPageFive")}
                </Link>
              </div>
            </div>
            <div>
              <h4 className="text-[#1F1926] text-2xl mt-5 mb-6 font-bold">
                {t("offices")}
              </h4>
              <p className="text-sm">
                Rafiky – Italy Viale Fulvio Testi, 59
                <br />
                Milan 20158 Italy
              </p>
              <p className="text-sm mt-6 mb-1">VAT number</p>
              <p className="text-sm">10145550967</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#f2e8f7] ">
        <div className="text-xs flex justify-between max-w-[1100px] mx-auto py-5 px-5">
          <p className="">{t("captcha")}</p>
          <span className="hidden sm:block">
            <Link href={"/terms-conditions"}>
              <span className="px-1">{t("terms")} ||</span>
            </Link>
            <Link href={"/terms-conditions/privacy-policy"}>
              <span className="px-1">{t("privacy")} ||</span>
            </Link>
            <Link href={"/terms-conditions/cookies-policy"}>
              <span className="px-1"> {t("cookie")} </span>
            </Link>
          </span>
        </div>
      </div>
    </>
  );
};

export default Footer;

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
