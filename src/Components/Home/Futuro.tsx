import Button from "../Button";
import Image from "next/image";
import useTranslation from "@/hooks/useTranslation";
import GetLocale from "@/hooks/getLocale";
import Link from "next-translate-routes/link";
import { freeQuoteSlug } from "@/utils";

const Futuro = () => {
  const { t } = useTranslation();

  const locale = GetLocale();
  //@ts-ignore
  const slug = `/${locale}/${freeQuoteSlug[locale]}`;
  const data = [
    {
      heading: t("futureRemote_Heading"),
    },
    {
      text: t("futureRemote_para"),
    },
  ];

  return (
    <div className="container">
      <div className="flex flex-wrap lg:flex-nowrap items-center gap-0 md:gap-20 py-10">
        <div className="py-8 sm:py-28">
          <div className="mb-10">
            {data.map((item, index) => {
              return (
                <div className="" key={index}>
                  <h2 className="text-[#333333] text-[30px] sm:text-[45px] font-bold leading-10 sm:leading-[60px]">
                    {item.heading}
                  </h2>
                  <p className=" text-base text-[#666666] font-medium max-w-[795px] mx-auto  py-2 sm:py-3">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
          <Link href={slug}>
            <Button
              text={t("futureRemote_Btn")}
              color={"white"}
              backgroundColor={"#7F26DA"}
              minWidth={undefined}
            />
          </Link>
        </div>
        <div className="max-w-[700px]">
          <Image src="/heroMobile.png" width={1000} height={0} alt="mobile" />
        </div>
      </div>
    </div>
  );
};

export default Futuro;
