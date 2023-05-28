
import Button from '../Button'
import useTranslation from '@/hooks/useTranslation'

const SecComp = () => {

  const { t } = useTranslation()

  const cards = [
    {
      heading: t('zonessDifference_FirstHeading'),
      para: t('zonessDifference_Firstpara'),
    },
    {
      heading: t('zonessDifference_SecHeading'),
      para: t('zonessDifference_Secpara'),
    },
    {
      heading: t('zonessDifference_ThirdHeading'),
      para: t('zonessDifference_Thirdpara'),
    }
  ]

  return (
    <div className=' container'>
      <div className='py-20'>
        <div className='text-[#A8A8A8] text-center max-w-[900px] mx-auto pb-5'>
          <h2 className='text-black text-5xl font-semibold pb-6'>{t('zonessDifference_Title')}</h2>
          <p>{t('zonessDifference_para')}</p>
        </div>
        <div className='flex gap-8 py-10'>
          <div>
            {cards.map((item, index) => {
              return (
                <div className='cards-shadow px-5 py-8 my-5 text-[#A8A8A8] rounded' key={index}>
                  <h2 className='text-[#F88590] font-semibold text-base pb-3'>{item.heading}</h2>
                  <p className='pb-4'>{item.para}</p>
                </div>
              )
            })}
          </div>
          <div>
            <iframe className="w-[829px] h-[466px] rounded-md mt-5 mb-12" src="https://www.youtube.com/embed/KCgEhNeVhUc" />
            <span>
              <Button text={t('zonessDifference_Btn')} color={'white'} backgroundColor={'#8300E9'} minWidth={'300px'} />
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SecComp


