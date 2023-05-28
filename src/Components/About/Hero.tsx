import Button from "../Button";
import Image from "next/image";
import useTranslation from "@/hooks/useTranslation";
import GetLocale from "@/hooks/getLocale";
import { contactUsSlug } from "@/utils";
import Link from "next-translate-routes/link";

const Hero = () => {
  const { t } = useTranslation();
  const locale = GetLocale();
  //@ts-ignore
  const slug = `/${locale}/${contactUsSlug[locale]}#${t("reuqest_demo_link")}`;
  return (
    <div className="container">
      <div className="flex flex-wrap lg:flex-nowrap gap-9 justify-between items-center py-12">
        <div className="xl:max-w-[570px] mb-7 sm:mb-0">
          <p className="text-xl text-[#231f20] font-medium pb-2">
            {t("home_HeroTitle")}
          </p>
          <h2 className="text-3xl lg:text-[37px] text-[#231f20] font-bold pb-5">
            {t("whoWeAre_SubTitle")}
          </h2>
          <p className="lg:text-lg text-[#231f20] leading-7 mb-10">
            {t("whoWeAre_SubTitlepara")}
          </p>
          <div className="flex flex-col-reverse sm:flex-row flex-wrap sm:flex-nowrap gap-4 ">
            <Button
              text={t("whoWeAre_Btnone")}
              color={"white"}
              backgroundColor={"#5412BC"}
              minWidth={"256px"}
            />
            <Link href={slug}>
              <button className="text-[#5412BC] border border-[#5412BC] rounded-full py-4 sm:py-5 px-10 min-w-[256px] text-center cursor-pointer  hover:shadow-lg transition-shadow duration-300 max-w-[266px]">
                {t("whoWeAre_Btntwo")}
              </button>
            </Link>
          </div>
        </div>
        <div className="w-full lg:min-w-[450px] xl:min-w-[500px]">
          <Image src={"/team.jpg"} alt={"About-Main"} width={1000} height={0} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
