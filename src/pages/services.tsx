import Layout from "@/Components/Layout/Index";
import Seo from "@/Components/Seo";
import Index from "@/Components/Sservices/Index";
import useTranslation from "@/hooks/useTranslation";


const ServicesPage = () => {
  const { t } = useTranslation();
  return (
    <Layout>
      <Seo title={t("servicesMetaTitle")} description={t("servicesMetaDescription")} />
      <Index />
    </Layout>
  );
};

export default ServicesPage;
