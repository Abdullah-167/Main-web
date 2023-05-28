import Button from "../Button";
import Image from "next/image";
import blueBg from "../../../public/frame.png";
import useTranslation from "@/hooks/useTranslation";
import Link from "next-translate-routes/link";
import GetLocale from "@/hooks/getLocale";
import { freeQuoteSlug } from "@/utils";

const MainCom = () => {
  const { t } = useTranslation();
  const locale = GetLocale();
  //@ts-ignore
  const slug = `/${locale}/${freeQuoteSlug[locale]}`;
  return (
    <div
     className="home-bgMain ">
      <div className="max-w-[1600px] mx-auto px-5">
        <div className="header flex justify-between sm:gap-20 items-center">
          <div className="pb-10 sm:pb-12 sm:pl-10 md:pl-20">
            <div>
              <h3 className="text-[20px] font-medium text-secondary pt-[70px] sm:pt-[106px] pb-4 ">
                {t("home_HeroTitle")}{" "}
              </h3>
              <h2 className="text-[40px] md:text-[60px] text-white font-bold  xl:max-w-[651px]  leading-[50px] sm:leading-[65px] pb-7">
                {t("home_HeroSubTitle")}
              </h2>
              <p className="text-base sm:text-[20px] font-medium text-white  xl:max-w-[750px] mb-10 sm:mb-14 leading-8">
                {t("home_HeroDescription")}
              </p>
            </div>
            <div className="flex flex-wrap md:flex-nowrap gap-x-5  gap-y-3">
              <Link href={slug}>
                <Button
                  text={t("home_HeroFirstBtn")}
                  color={"black"}
                  backgroundColor={"white"}
                  minWidth={"250px"}
                />
              </Link>
              <Link href={`${locale}/#${t("reuqest_demo_link")}`}>
                <Button
                  text={t("home_HeroSecBtn")}
                  color={"black"}
                  backgroundColor={"white"}
                  minWidth={"250px"}
                />
              </Link>
            </div>
          </div>
          <div className="mx-auto  md:w-[500px] mt-10 sm:mt-20  md:h-[600px] overflow-hidden relative">
            <Image
              loading="lazy"
              className="image"
              src={"/laugh.webp"}
              alt={"women"}
              width={1000}
              height={0}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainCom;

const formData = [
  {
    type: "text",
    htmlFor: "nome*",
    text: "Nome*",
  },
  {
    type: "email",
    htmlFor: "email*",
    text: "Email*",
  },
  {
    type: "text",
    htmlFor: "nomedell’azienda*",
    text: "Nome dell’azienda*",
  },
  {
    type: "number",
    htmlFor: "umeroditelefono*",
    text: "Numero di telefono*",
  },
  {
    type: "text",
    htmlFor: "datadell’evento*",
    text: "Data dell’evento*",
  },
  {
    type: "text",
    htmlFor: "orariodell’evento*",
    text: "Orario dell’evento*",
  },
];
