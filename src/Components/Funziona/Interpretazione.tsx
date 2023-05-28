import Button from "../Button";
import Image from "next/image";
import useTranslation from "@/hooks/useTranslation";
import GetLocale from "@/hooks/getLocale";
import { freeQuoteSlug } from "@/utils";
import Link from "next-translate-routes/link";
const Interpretazione = () => {
  const { t } = useTranslation();
  const locale = GetLocale();
  //@ts-ignore
  const slug = `/${locale}/${freeQuoteSlug[locale]}`;
  const data = [
    {
      listText: t("remoteSimultaneous_list1"),
    },
    {
      listText: t("remoteSimultaneous_list2"),
    },
    {
      listText: t("remoteSimultaneous_list3"),
    },
    {
      listText: t("remoteSimultaneous_list4"),
    },
  ];
  return (
    <div
      className="hero-laptop bg-[#F7F6FD]"
    
    >
      <div className="max-w-[1250px] mx-auto px-8">
        <div className="flex flex-col lg:flex-row items-center py-16 sm:py-[150px]">
          <div>
            <h3 className="text-[35px] sm:text-[45px] text-[#333333] font-medium leading-[55px] pb-5">
              {t("remoteSimultaneous_Title")}{" "}
            </h3>
            <p className="text-base sm:text-3xl text-[#C1C1C1] font-medium py-1 mb-7">
              {t("remoteSimultaneous_SubTitle")}{" "}
            </p>
            <div className="max-w-[765px] mx-auto lg:mx-0">
              {data.map((item, index) => {
                return (
                  <div key={index}>
                    <li className="py-1">{item.listText}</li>
                  </div>
                );
              })}
            </div>
            <div className="mt-10">
              <Link href={slug}>
                <Button
                  text={t("remoteSimultaneous_Btn")}
                  color={"white"}
                  backgroundColor={"#8624E1"}
                  minWidth={undefined}
                />
              </Link>
            </div>
          </div>
          <div className="xl:min-w-[750px] pt-20 sm:pt-0">
            <Image
              className="lg:h-[800px]"
              src={"/herolaptop.png"}
              alt="laptop"
              width={1000}
              height={0}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Interpretazione;
