import Layout from "../Layout/Index";
import Hero from "./Hero";
import FaqSection from "./Faq";
import Contact from "./Contact";

const Index = () => {
  return (
    <div>
      <Layout>
        <Hero text={"Rafiky Faq"} para={""} fontSize={"80px"} />
        <FaqSection />
        <Contact />
      </Layout>
    </div>
  );
};

export default Index;
