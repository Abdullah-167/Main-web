import Hero from "./Hero";
import RafikyPrezzi from "./RafikyPrezzi";
import DropDown from "./DropDown";
import SecCard from "../PartnerZone/SecCard";
import Domande from "./Domande";
import Pronto from "./Pronto";

const Index = () => {
  return (
    <div>
      <Hero />
      <RafikyPrezzi />
      <DropDown />
      <SecCard display={"none"} />
      <Domande />
      <Pronto />
    </div>
  );
};

export default Index;
