import Layout from "@/Components/Layout/Index";

import Hero from "./Hero";
import Text from "./Text";
import Flag from "../../Flag";
import Pronto from "./Pronto";

const Index = () => {
  return (
    <>
      <Layout>
        <Hero />
        <Text />
        <Flag />
        <Pronto />
      </Layout>
    </>
  );
};

export default Index;
