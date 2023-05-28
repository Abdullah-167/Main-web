
import Hero from '../Faq/Hero'
import Summary from './Summary'
import Pronto from './Pronto'
import useTranslation from '@/hooks/useTranslation'

const Index = () => {
const { t }  = useTranslation();

  return (
    <div>
      <Hero text={t("privacypolicy_SubTitle")} para={t("privacypolicy_Title")} fontSize={'80px'} />
      <Summary />
      <Pronto />
    </div>
  )
}

export default Index