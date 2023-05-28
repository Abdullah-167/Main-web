import useTranslation from '@/hooks/useTranslation'


const Summary = () => {

    const { t } = useTranslation();

    

const data = [
    {
        text: t("lastUpdated_Title")
    },
    {
        text:  t("lastUpdated_para")
    },
    {
        text: 'When you visit our website www.rafiky.net (“Site”), and use our services, you trust us with your personal information. We take your privacy very seriously. In this privacy notice, we describe our privacy policy. We seek to explain to you in the clearest way possible what information we collect, how we use it and what rights you have in relation to it. We hope you take some time to read through it carefully, as it is important. If there are any terms in this privacy policy that you do not agree with, please discontinue the use of our site and our services.'
    },
    {
        text: 'This privacy policy applies to all information collected through our website, and/or any related services, sales, marketing or events (we refer to them collectively in this privacy policy as the “Site“).'
    },
    {
        text: t("aboutUs_Title")
    },
    {
        text:  t("aboutUs_Titlepara")
    },
    {
        text:  t("aboutUs_FirstSubTitle")
     },
    {
        text:  t("aboutUs_FirstSubTitlepara")
     },
    {
        text: t("aboutUs_SecSubTitle")
       },
    {
        text: t("aboutUs_SecSubTitle")
     },
    {
        text:t("aboutUs_SecSubTitlepara")
     },
    {
        text: t("aboutUs_ThirdSubTitle")
      },
    {
        text: t("aboutUs_ThirdSubTitlepara")
     },
    {
        text: t("aboutUs_FourSubTitle")
      },
    {
        text: t("aboutUs_FourSubTitlepara")
     },
    {
        text:t("aboutUs_FiveSubTitle")
       },
    {
        text:t("aboutUs_FiveSubTitlepara")
     },
    {
        text: t("aboutUs_SixSubTitle")
    },
    {
        text: t("aboutUs_SixSubTitlepara")
    },
    {
        text: t("aboutUs_SevenSubTitle")
     },
    {
        text:t("aboutUs_SevenSubTitlepara")
     },
    {
        text:t("aboutUs_EightSubTitle")
      },
    {
        text:t("aboutUs_EightSubTitlepara")
      },
    {
        text: t("aboutUs_NineSubTitle")
      },
    {
        text: t("aboutUs_NineSubTitlepara")
    },
    {
        text: t("aboutUs_TenSubTitle")
    },
    {
        text: t("aboutUs_TenSubTitlepara")
    },
    {
        text: t("aboutUs_ElevenSubTitle")
    },
    {
        text: t("aboutUs_ElevenSubTitlepara")
    },
    {
        text: t("aboutUs_TwelevSubTitle")
    },
    {
        text: t("aboutUs_TwelevSubTitlepara")
    },
    {
        text: t("getStarted_Title")
    },
    {
        text: t("getStarted_SubTitle")
    },
    {
        text: t("getStarted_Btn")
    },
    {
        text: t("cookiePolicy_Title")
    },
    {
        text: t("cookiePolicy_SubTitle")
    },
    {
        text: t("cookiePolicy_para")
    },
    {
        text: t("cookiePolicy_SecTitle")
    },
    {
        text: t("cookiePolicy_SecTitlepara")
    },
    {
        text: t("cookiePolicy_ThirdTitle")
    },
    {
        text: t("cookiePolicy_ThirdTitlepara")
    },
    {
        text: t("typesCategory_Title")
    },
    {
        text: t("typesCategory_para")
    },
    {
        text: t("typesCategory_FirstSubTitle")
    },
    {
        text: t("typesCategory_FirstSubTitlepara")
    },
    {
        text: t("typesCategory_SecSubTitle")
    },
    {
        text: t("typesCategory_SecSubTitlepara")
    },
    {
        text: t("typesCategory_ThirdSubTitle")
    },
    {
        text: t("typesCategory_ThirdSubTitlepara")
    },
    {
        text: t("getStarted_Title")
    },
    {
        text: t("getStarted_SubTitle")
    },
    {
        text: t("getStarted_Btn")
    },
    {
        text: t("refundPolicy_header_subHeading")
    },
    {
        text: t("refundPolicy_header_heading")
    },
    {
        text: t("refundPolicy_summary_firstHeading")
    },
    {
        text: t("refundPolicy_summary_firstPara")
    },
    {
        text: t("refundPolicy_summary_secPara")
    },
    {
        text: t("refundPolicy_summary_secHeading")
    },
    {
        text: t("refundPolicy_summary_thirdPara")
    },
    {
        text: t("refundPolicy_summary_fourthPara")
    },
    {
        text: t("refundPolicy_summary_fifthPara")
    },
    {
        text: t("refundPolicy_summary_thirdHeading")
    },
    {
        text: t("refundPolicy_summary_sixthPara")
    },
    {
        text: t("refundPolicy_summary_seventhPara")
    },
    {
        text: t("refundPolicy_summary_eigthPara")
    },
    {
        text: t("refundPolicy_summary_ninthPara")
    },
    {
        text: t("refundPolicy_summary_fourthHeading")
    },
    {
        text: t("refundPolicy_summary_tenthPara")
    },
    {
        text: t("refundPolicy_summary_fifthHeading")
    },
    {
        text: t("refundPolicy_summary_eleventhPara")
    },
    {
        text: t("refundPolicy_summary_sixthHeading")
    }
]

    return (
        <div className='max-w-[1000px] m-auto'>
            <div className='py-20'>
                <div className='text-[#666666]'>
                    {data.map((item, index) => {
                        return (
                            <p className='py-2' key={index}> {item.text} </p>
                        )
                    })}
                </div>
            </div>
        </div >
    )
}

export default Summary
