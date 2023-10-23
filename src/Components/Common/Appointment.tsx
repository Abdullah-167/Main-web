import React, { useEffect, Suspense } from "react";
import useTranslation from "@/hooks/useTranslation";

const LoadableAppointment = React.lazy(() =>
  import(/* webpackChunkName: "appointment" */ "./Appointment")
);

const Appointment = () => {
  const { t } = useTranslation();

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <div id={t("talk_to_sales")}>
        <h2 className="text-center pt-20 pb-5 text-black text-4xl font-semibold">
          Talk to sales
        </h2>
        <div className="flex justify-center pb-5">
          <p className="text-xl text-center text-black max-w-3xl">
            {t("appointment_salesDescription")}
          </p>
        </div>

        <div
          className="meetings-iframe-container"
          data-src="https://meetings-eu1.hubspot.com/chiara-moschitta?embed=true"
        ></div>
      </div>
    </>
  );
};

const LazyAppointment = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <LoadableAppointment />
  </Suspense>
);

export default LazyAppointment;
