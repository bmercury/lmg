import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import ContactsBar from '@/components/contacts-bar/contacts-bar'
import Navigation from '@/components/navigation/navigation'
import MobileNavigation from '@/components/mobile-nav/mobile-nav'
import Banner from '@/components/banner/banner'
import Contacts from '@/components/contacts/contacts'

export default function Paneli() {
  return (
    <>
      <Head>
        <title>Warmotech | Paneļi | LM Group Buve</title>
        <meta name="og:title" content="Warmotech | Paneļi | LM Group Buve"/>
        <meta name="og:description" content="Warmotech panelis ir materiāls ar izcilām tehniskajām īpašībām. Paneļi tiek ražoti no pārstrādāta efektīva poliuretāna (PIR). Pārstrādes un ražošanas laikā materiāls iegūst jaunas īpašības, tas kļūst mehāniski izturīgs, un ar labām siltumizolācijas īpašībām un ir mitrumizturīgs. Paneļi ir universāli, tos pielietojot būvniecības sektorā. "/>        
        <meta name="description" content="Warmotech panelis ir materiāls ar izcilām tehniskajām īpašībām. Paneļi tiek ražoti no pārstrādāta efektīva poliuretāna (PIR). Pārstrādes un ražošanas laikā materiāls iegūst jaunas īpašības, tas kļūst mehāniski izturīgs, un ar labām siltumizolācijas īpašībām un ir mitrumizturīgs. Paneļi ir universāli, tos pielietojot būvniecības sektorā. " />
      </Head>

      <ContactsBar></ContactsBar>
      <Navigation></Navigation>
      <MobileNavigation></MobileNavigation>
      <Banner title="Warmotech Paneļi" image="warmotech/bg2.webp">
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
        <div className='flex flex-column items-center justify-center w-80 mt4-l mb4-l'>
            <div className='w-40-l flex justify-center mt3 mb4 mb0-l mt0-l'>
                <div className='w-70'>
                    <img src="/img/warmotech/paneli.webp"></img>    
                </div>
            </div>
            <div className='w-80-l flex justify-center'>
                <div className='w-80-l'>
                    <h3 className='b f2 gold tc tl-l mt0'>Warmotech Paneļi</h3>
                    <p className='arctic tc tl-l'>
                        Warmotech panelis ir materiāls ar izcilām tehniskajām īpašībām. Paneļi tiek ražoti no pārstrādāta efektīva poliuretāna (PIR). Pārstrādes un ražošanas laikā materiāls iegūst jaunas īpašības, tas kļūst mehāniski izturīgs, un ar labām siltumizolācijas īpašībām un ir mitrumizturīgs. Paneļi ir universāli, tos pielietojot būvniecības sektorā. <br/><br/>
                        Warmotech panelis ir bioloģiski drošs un izturīgs pret jebkāda veida mikroorganismiem, tas nepūst, nepelē un nesatur toksiskas vielas (formaldehīdus). Tā kā panelis ir mehāniski izturīgs, tas iztur lielas svara slodzes. <br/><br/>
                        Materiāls ir viegli apstrādājams, izmantojot standarta kokaptrādes instrumentus, tāpēc strādājot ar šo paneli vai tā izstrādājumiem, nav nepieciešami, tam īpaši pielāgoti instrumenti. Warmotech paneļus ir viegli griezt, urbt un slīpēt. Paneļi ir pieejami divās krāsās – dzeltenā un zaļā. Abu krāsu paneļu īpašības atbilst ekspluatācijas īpašību deklarācijā norādītajām vērtībām. <br/><br/>
                        Maksimālie paneļu izmēri – 1150 x 2750 mm.
                    </p>

                    <a className='gold link mb3 tc w-100 db tl-l' href="https://www.warmotech.lt/assets/doc/products/panels/European-Technical-Assessment-en.pdf" target="_blank" rel="noopener noreferrer" title="European Technical Assessment"><i class="fa-solid fa-file-pdf"></i> European technical assessment</a>
                    <a className='gold link mb3 tc w-100 db tl-l' href="https://www.warmotech.lt/assets/doc/products/panels/warmotech-esd.en.pdf" target="_blank" rel="noopener noreferrer" title="Īpašību atbilstības deklarācija"><i class="fa-solid fa-file-pdf"></i> Īpašību atbilstības deklarācija</a>
                    <a className='gold link mb3 tc w-100 db tl-l' href="https://www.warmotech.lt/assets/doc/products/panels/warmotech-epd.pdf" target="_blank" rel="noopener noreferrer" title="EPD deklarācija"><i class="fa-solid fa-file-pdf"></i> EPD deklarācija</a>
                    <a className='gold link mb3 tc w-100 db tl-l' href="https://www.warmotech.lt/assets/doc/products/panels/warmotech-epd-summary.pdf" target="_blank" rel="noopener noreferrer" title="EPD kopsavilkums"><i class="fa-solid fa-file-pdf"></i> EPD kopsavilkums</a>
                    
                    <img src="/img/warmotech/tabula-paneli.webp" className='br3 mt3'></img>
                    <img src="/img/warmotech/tabula-paneli-2.webp" className='br3 mt3 mb5 mb0-l'></img>
                </div>
            </div>
        </div>

    </div>


      <Contacts></Contacts>
     
    </>
  )
}
