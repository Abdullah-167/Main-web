import Index from "@/Components/InterpretiADistanza/Index";
import Layout from "@/Components/Layout/Index";
import Seo from "@/Components/Seo";
import useTranslation from "@/hooks/useTranslation";


const Interpretiadistanza = () => {
  const { t } = useTranslation();
  return (
    <Layout>
      <Seo title={t("remoteInterpretersMetaTitle")} description={t("remoteInterpretersMetaDescription")} />
      <Index />
    </Layout>
  );
};

export default Interpretiadistanza;
