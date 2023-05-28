import Layout from "../Layout/Index";
import Hero from "./Hero";
import FaqSection from "./Faq";
import BgPronto from "../BgPronto";

const Index = () => {
  return (
    <div>
      <Layout>
        <Hero text={"Rafiky Faq"} para={""} fontSize={"80px"} />
        <FaqSection />
        <BgPronto />
      </Layout>
    </div>
  );
};

export default Index;
