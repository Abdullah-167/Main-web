import Button from "@/Components/Button";

import useTranslation from "@/hooks/useTranslation";

const Text = () => {
  const { t } = useTranslation();
  const text = [
    {
      heading:
      t("italianEnglish_Heading"),
      para: t("italianEnglish_para"),
      btnText: t("italianEnglish_Btn"),
    },
    {
      heading:
      t("italianIntoEnglish_Heading"),
      para:  t("italianIntoEnglish_para"),
      btnText: t("italianIntoEnglish_Btn"),
    },
    {
        heading:
        t("interpretationServices_Heading"),
        para:  t("interpretationServices_para"),
        btnText: t("interpretationServices_Btn"),
      },
  ];
  return (
    <div className="container">
      <div className="py-24">
        {text.map((item, index) => {
          return (
            <div className="py-10" key={index}>
              <h1 className="text-2xl font-semibold pb-3">{item.heading}</h1>
              <p className="text-base font-normal pb-4 leading-8">
                {item.para}
              </p>
              <Button
                text={item.btnText}
                color={"white"}
                backgroundColor={"#8624E1"}
                minWidth={undefined}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Text;
