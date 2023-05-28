
import Hero from '../Faq/Hero'
import Summary from './Summary'
import Pronto from './Pronto'
import useTranslation from '@/hooks/useTranslation'

const Index = () => {

    const { t } = useTranslation();

    return (
        <div>
            <Hero text={t("refundPolicy_header_heading")} para={t("refundPolicy_header_subHeading")} fontSize={'60px'} />
            <Summary />
            <Pronto />
        </div>
    )
}

export default Index