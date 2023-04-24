import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import ContactsBar from '@/components/contacts-bar/contacts-bar'
import Navigation from '@/components/navigation/navigation'
import MobileNavigation from '@/components/mobile-nav/mobile-nav'
import Banner from '@/components/banner/banner'
import Contacts from '@/components/contacts/contacts'

import {kontakti} from "../data.json"

export default function Warmotech() {
  return (
    <>
      <Head>
        <title>LM Group Buve | Warmotech</title>
        <meta name="og:title" content="LM Group Buve | Warmotech"/>
        <meta name="og:description" content="Warmotech ir silts, efektīvs un stingrs logu termiskās zonas stiprināšanas un aukstuma tiltu lauzošs risinājums. Vienlaicīgi sniedzot maksimālās slodzes un snieguma garantu, gan loga ražotājam, gan katram būvēt gribētājam. Tas ļauj gudri ietaupīt un paaugstināt kā paša loga efektivitātes tā kopējo ēkas termisko vērtības bilanci."/>        
        <meta name="description" content="Warmotech ir silts, efektīvs un stingrs logu termiskās zonas stiprināšanas un aukstuma tiltu lauzošs risinājums. Vienlaicīgi sniedzot maksimālās slodzes un snieguma garantu, gan loga ražotājam, gan katram būvēt gribētājam. Tas ļauj gudri ietaupīt un paaugstināt kā paša loga efektivitātes tā kopējo ēkas termisko vērtības bilanci." />
      </Head>

      <ContactsBar phone={kontakti.aleksandrs.phone} email={kontakti.aleksandrs.email}></ContactsBar>
      <Navigation></Navigation>
      <MobileNavigation phone={kontakti.aleksandrs.phone} email={kontakti.aleksandrs.email}></MobileNavigation>
      <Banner title="Warmotech" image="warmotech/bg1.webp">
        Warmotech ir silts, efektīvs un stingrs logu termiskās zonas stiprināšanas un aukstuma tiltu lauzošs risinājums. Vienlaicīgi sniedzot maksimālās slodzes un snieguma garantu, gan loga ražotājam, gan katram būvēt gribētājam. Tas ļauj gudri ietaupīt un paaugstināt kā paša loga efektivitātes tā kopējo ēkas termisko vērtības bilanci.
      </Banner>


    <div className='flex flex-column items-center pv5 pt6-l bg-marble-o10'>

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
        <div className='flex flex-column flex-row-l justify-center w-80 mt4 mb4'>
            <div className='w-40-l flex justify-center'>
                <div className='w-80-l'>
                    <h3 className='b f2 gold mt0'>Stingrs materiāls, elastīgs risinājums</h3>
                    <p className='arctic'>
                    Piedāvājām dažādas Warmotech sistēmas:<br/><br/>

                    <div className='flex mb3'>
                        <span className='gold mr2'>—</span> <span>PRO80 un PRO90 iznesto logu risinājums siltumizolācijas slānī</span>
                    </div>
                    <div className='flex mb3'>
                        <span className='gold mr2'>—</span> <span>Type-C un HSN bīdāmu sistēmu pacelšanai virs cokola silto grīdu objektos</span>
                    </div>
                    <div className='flex mb3'>
                        <span className='gold mr2'>—</span> <span>M-Frame rāmju sistēma šauro bloku loga ailēm</span>
                    </div>
                    <div className='flex'>
                        <span className='gold mr2'>—</span> <span>Warmotech PA un lokšņu kombinētie sistēmu risinājumi</span>
                    </div>

                    </p>
                </div>
            </div>

            <div className='w-40-l flex justify-center mt5 mt0-l'>
                <div className='w-80-l'>
                    <img src="/img/warmotech-2.webp"></img>    
                </div>
            </div>
        </div>


        {/* <h3 className='arctic f3 mt6'>Apskati PDF Bukletus</h3> */}
        {/* END COLUMN */}
        <div className='flex flex-column items-end flex-row-l w-80 w-60-l mt4'>
            <div className='w-third-l'>
                <h3 className='gold tc'>Virs cokola pacelšanas risinājumi</h3>
                <img src="/img/wt2.webp"></img>
            </div>
            <div className='w-third-l mh4-l'>
                <h3 className='gold tc'>Ailes paplatinošie profili</h3>
                <img src="/img/wt3.webp"></img>
            </div>
            <div className='w-third-l'>
                <h3 className='gold tc'>HST un HSN sistēmas</h3>
                <img src="/img/wt1.webp"></img>
            </div>
        </div>
    </div>

    <div className='flex flex-column items-center'>
        <div className='flex justify-center w-90 w-70-l mt4-l mb4-l'>
                <div className='w-90 flex justify-center'>
                    <img src="/img/warmotech/tabula-paneli-2.webp" className='br3 mt3 mb5 mb0-l'></img>
                </div>
        </div>
    </div>


      <Contacts></Contacts>
     
    </>
  )
}
