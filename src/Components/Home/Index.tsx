import MiniNav from "../Layout/MiniNav";
import MainCom from "./MainCom";
import HeroMob from "./HeroMob";
import Layout from "../Layout/Index";
import PercheCards from "./PercheCards";
import Futuro from "./Futuro";
import Vedio from "./Vedio";
import Immergiti from "./Immergiti";
import Pronto from "./Pronto";
import NewsLetter from "../NewsLetter";
import RequestDemoForm from "./RequestDemoForm";
import { Link, Element } from "react-scroll";

const Index = () => {
  return (
    <Layout>
      <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      <MainCom />
      <HeroMob />
      <PercheCards />
      <Futuro />
      <Vedio />
      <Immergiti />
      <Pronto />
      <Element name="form">
        <RequestDemoForm />
      </Element>
    </Layout>
  );
};

export default Index;
