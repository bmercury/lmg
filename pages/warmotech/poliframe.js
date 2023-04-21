import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import ContactsBar from '@/components/contacts-bar/contacts-bar'
import Navigation from '@/components/navigation/navigation'
import MobileNavigation from '@/components/mobile-nav/mobile-nav'
import Banner from '@/components/banner/banner'
import Contacts from '@/components/contacts/contacts'

export default function Poliframe() {
  return (
    <>
      <Head>
        <title>Warmotech | Poliframe | LM Group Buve</title>
        <meta name="og:title" content="Warmotech || Poliframe || LM Group Buve"/>
        <meta name="og:description" content="Warmotech Poliframe HDE, HDE FR profili un HDE Profili. Labākais risinājums Tavam mājoklim!"/>        
        <meta name="description" content="Warmotech Poliframe HDE, HDE FR profili un HDE Profili. Labākais risinājums Tavam mājoklim!" />
      </Head>

      <ContactsBar></ContactsBar>
      <Navigation></Navigation>
      <MobileNavigation></MobileNavigation>
      <Banner title="Warmotech Poliframe" image="warmotech/bg2.webp">
      Warmotech ir silts, efektīvs un stingrs logu termiskās zonas stiprināšanas un aukstuma tiltu lauzošs risinājums. Vienlaicīgi sniedzot maksimālās slodzes un snieguma garantu, gan loga ražotājam, gan katram būvēt gribētājam. Tas ļauj gudri ietaupīt un paaugstināt kā paša loga efektivitātes tā kopējo ēkas termisko vērtības bilanci.
      </Banner>


    <div className='flex flex-column items-center pv2 pt6-l bg-marble-o10'>

    <div className='flex flex-column flex-row-l w-80 w-60-l warmotech-flying'>
            <div className='w-third-l mb4 mb0-l  animate__animated animate__fadeInLeft'>
                <Link  href="/warmotech/poliframe">
                    <img src="/img/poliframe.webp"></img>
                </Link>
            </div>
            <div className='w-third-l mb4 mb0-l mh4-l animate__animated animate__fadeInUp'>
                <Link  href="/warmotech/paneli">
                <img src="/img/paneli.webp"></img>
                </Link>
            </div>
            <div className='w-third-l mb4 mb0-l animate__animated animate__fadeInRight'>
                <Link  href="/warmotech/mezgli">
                <img src="/img/mezgli.webp"></img>
                </Link>
            </div>
        </div>

        {/* START COLUMN */}
        <div className='flex flex-column-reverse flex-row-l justify-center w-80 mt4-l mb4-l'>
            <div className='w-40-l flex justify-center'>
                <div className='w-80-l'>
                    <h3 className='b f2 gold tc tl-l mt0'>POLIFRAME HDE</h3>
                    <p className='arctic tc tl-l'>
                        Izmanto logu uzstādīšanai siltumizolācijas slānī; <br/><br/>
                        Izgatavots ar iefrēzētiem atslēgas savienojumiem profila galos, vieglai un precīzai savienojuma izveidei vienam ar otru; <br/><br/>
                        Standarta profila biezums - 85mm and 100mm.
                    </p>
                    {/* <a className='gold tc w-100 db tl-l' href="https://www.warmotech.lt/lv/products/poliframe-profiliai/poliframe-hde" target="_blank" rel="noopener noreferrer" title="Warmotech Poliframe HDE">Lasīt vairāk</a> */}
                </div>
            </div>

            <div className='w-40-l flex justify-center mt3 mb4 mb0-l mt0-l'>
                <div className='w-50'>
                    <img src="/img/warmotech/poliframe-hde.webp"></img>    
                </div>
            </div>
        </div>

        {/* START COLUMN */}
        <div className='flex flex-column flex-row-l justify-center w-80 mt4 mb4'>
            <div className='w-40-l flex justify-center  mt3 mb4 mb0-l mt0-l'>
                <div className='w-50'>
                    <img src="/img/warmotech/hde-fr.webp"></img>    
                </div>
            </div>
            <div className='w-40-l flex justify-center'>
                <div className='w-80-l'>
                    <h3 className='b f2 gold tc tl-l mt0'>HDE FR PROFILI</h3>
                    <p className='arctic tc tl-l'>
                        Izmanto vitrīnu un logu pacelšanai virs cokola; <br/><br/>
                        Frēzēts un izgatavots atbilstoši nepieciešamajam loga profilam; <br/><br/>
                        Standarta platums - 60mm un 70mm; <br/><br/>
                        Izgriežams no paneļa vajadzīgajā augstumā.
                    </p>
                    {/* <a className='gold tc w-100 db tl-l' href="https://www.warmotech.lt/lv/products/poliframe-profiliai/hde-fr" target="_blank" rel="noopener noreferrer" title="Warmotech HDE FR">Lasīt vairāk</a> */}
                </div>
            </div>

        </div>

        {/* START COLUMN */}
        <div className='flex flex-column-reverse flex-row-l justify-center w-80 mt4 mb4'>
            <div className='w-40-l flex justify-center'>
                <div className='w-80-l'>
                    <h3 className='b f2 gold tc tl-l mt0'>HDE PROFILI</h3>
                    <p className='arctic tc tl-l'>
                    Izmanto būvniecībā un rūpniecībā, kur nepieciešams silts un izturīgs materiāls; <br/><br/>
                    Standarta platums - 60mm and 70mm; <br/><br/>
                    Izgriežams no paneļa vajadzīgajā augstumā.
                    </p>
                    {/* <a className='gold tc w-100 db tl-l' href="https://www.warmotech.lt/lv/products/poliframe-profiliai/hde-pjaustiniai" target="_blank" rel="noopener noreferrer" title="Warmotech HDE Profili">Lasīt vairāk</a> */}
                </div>
            </div>
            <div className='w-40-l flex justify-center mt0 mb4 mb0-l mt0-l'>
                <div className='w-50'>
                    <img src="/img/warmotech/hde.webp"></img>    
                </div>
            </div>

        </div>

    </div>


      <Contacts></Contacts>
     
    </>
  )
}
