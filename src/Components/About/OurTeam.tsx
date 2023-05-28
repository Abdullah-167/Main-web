import useTranslation from "@/hooks/useTranslation";
import Image from "next/image";
import React from "react";

const OurTeam = () => {
  const { t } = useTranslation();
  const data = [
    {
      name: "Veronica Gaudesi",
      designation: t("Veronica"),
      img: "/ellipse-rafiky1.jpg",
    },
    {
      name: "Miriam Fratacci",
      designation: t("Miriam"),
      img: "/ellipse-rafiky2.jpg",
    },
    {
      name: "Chiara Moschitta",
      designation: t("Chiara"),
      img: "/ellipse-rafiky3.jpg",
    },
    {
      name: "Gaia Alfano",
      designation: t("Gaia"),
      img: "/ellipse-rafiky4.png",
    },
    {
      name: "Paolo Di Girolamo",
      designation: t("Paolo"),
      img: "/ellipse-rafiky5.png",
    },
    {
      name: "Jim Puccio",
      designation: t("Jim"),
      img: "/ellipse-rafiky6.jpg",
    },
  ];
  return (
    <div className="w-full mb-28">
      <div className="container">
        <h2 className="text-3xl md:text-5xl font-bold text-[#333] mb-16 mt-10 text-center">
          {t("ourTeam")}
        </h2>
        <div className="grid grid-cols-3 gap-10">
          {data.map((item, index) => {
            return (
              <div key={index}>
                <div className="rounded-full">
                  <Image
                    src={item.img}
                    alt={"Mission"}
                    width={1000}
                    height={1000}
                    className="rounded-full max-w-[300px] mx-auto"
                  />
                  <h3 className="text-center font-medium text-xl">
                    {item.name}
                  </h3>
                  <p className="text-center italic">{item.designation}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
