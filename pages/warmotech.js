import Head from 'next/head'
import Image from 'next/image'

import ContactsBar from '@/components/contacts-bar/contacts-bar'
import Navigation from '@/components/navigation/navigation'
import Banner from '@/components/banner/banner'
import Contacts from '@/components/contacts/contacts'

export default function Warmotech() {
  return (
    <>
      <Head>
        <title>Warmotech</title>
        <meta name="og:title" content="Warmotech"/>
        <meta name="og:description" content="LM Group Buve - Privātmāju būvniecības pakalpojumi, būvmateriāli, konsultācijas un daudz kas cits. Piezvani!"/>        
        <meta name="description" content="LM Group Buve - Privātmāju būvniecības pakalpojumi, būvmateriāli, konsultācijas un daudz kas cits. Piezvani!" />
      </Head>

      <ContactsBar></ContactsBar>
      <Navigation></Navigation>
      <Banner title="Warmotech" image="warmotech.jpg">
        Warmotech ir silts un efektīvi elastīgs risinājums kā arī maksimāla snieguma garants gan loga ražotājam, gan katram būvēt gribētājam. <br/>
        PRO80 un PRO90 risinājums, Type-C un HSN bīdāmās sistēmas, M-Frame rāmju sistēma kā arī Warmotech PA un kombinētie sistēmu risinājumi.
      </Banner>


    <div className='flex flex-column items-center pv5 pv6-l bg-marble-o10'>

        <div className='flex flex-column flex-row-l w-80 w-60-l warmotech-flying'>
            <div className='w-third-l mb4 mb0-l  animate__animated animate__fadeInLeft'>
                <a title="Warmotech Poliframe Risinājums" href="https://www.warmotech.lt/lv/products/poliframe-profiliai" target="_blank" rel="noopener noreferrer">
                    <img src="/img/poliframe.png"></img>
                </a>
            </div>
            <div className='w-third-l mb4 mb0-l mh4-l animate__animated animate__fadeInUp'>
                <a title="Warmotech Paneļu Risinājums" href="https://www.warmotech.lt/lv/products/panels" target="_blank" rel="noopener noreferrer">
                <img src="/img/paneli.png"></img>
                </a>
            </div>
            <div className='w-third-l mb4 mb0-l animate__animated animate__fadeInRight'>
                <a title="Warmotech Mezgli" href="https://www.warmotech.lt/lv/designs" target="_blank" rel="noopener noreferrer">
                <img src="/img/mezgli.png"></img>
                </a>
            </div>
        </div>


        {/* START COLUMN */}
        <div className='flex flex-column flex-row-l justify-center w-80 mt4 mb4'>
            <div className='w-40-l flex justify-center'>
                <div className='w-80-l'>
                    <h3 className='b f2 gold tc tl-l mt0'>Stingrs Materiāls, Elastīgs Risinājums</h3>
                    <p className='arctic tc tl-l'>
                        Warmotech paneļi <br/><br/>
                        Warmotech logu montāžas profili <br/><br/>
                        Poliframe logu montāžas profili
                    </p>
                </div>
            </div>

            <div className='w-40-l flex justify-center mt5 mt0-l'>
                <div className='w-80'>
                    <img src="/img/warmotech-2.png"></img>    
                </div>
            </div>
        </div>


        {/* <h3 className='arctic f3 mt6'>Apskati PDF Bukletus</h3> */}
        {/* END COLUMN */}
        <div className='flex flex-column flex-row-l w-80 w-60-l mt4'>
            <div className='w-third-l'>
                <h3 className='gold tc'>Augsta Mehāniskā Izturība</h3>
                <img src="/img/wt1.png"></img>
            </div>
            <div className='w-third-l mh4-l'>
                <h3 className='gold tc'>Uguns Noturība</h3>
                <img src="/img/wt3.png"></img>
            </div>
            <div className='w-third-l'>
                <h3 className='gold tc'>Laba Skaņas Izolācija</h3>
                <img src="/img/wt2.png"></img>
            </div>
        </div>
    </div>


      <Contacts></Contacts>
     
    </>
  )
}
