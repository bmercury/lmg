import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import ContactsBar from '@/components/contacts-bar/contacts-bar'
import Navigation from '@/components/navigation/navigation'
import MobileNavigation from '@/components/mobile-nav/mobile-nav'
import Banner from '@/components/banner/banner'
import Contacts from '@/components/contacts/contacts'

import Product from "../../components/warmotech/product"

export default function Poliframe() {
  return (
    <>
      <Head>
        <title>Warmotech | Iznestās Logu Sistēmas | LM GROUP HOLDING</title>
        <meta name="og:title" content="Warmotech || Iznestās Logu Sistēmas || LM GROUP HOLDING"/>
        <meta name="og:description" content="Warmotech Poliframe HDE, HDE FR profili un HDE Profili. Labākais risinājums Tavam mājoklim!"/>        
        <meta name="description" content="Warmotech Poliframe HDE, HDE FR profili un HDE Profili. Labākais risinājums Tavam mājoklim!" />
      </Head>

      <ContactsBar></ContactsBar>
      <Navigation></Navigation>
      <MobileNavigation></MobileNavigation>
      <Banner title="Iznestās Logu Sistēmas" image="warmotech/bg2.webp">
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


        <Product title="WARMOTECH PA FR" photo="warmotech/pa-fr.webp">
            Profili izgatavoti no cieta viengabala „Warmotech“ paneļa; <br/><br/>
            Dažādi profilu augstumi ļauj pacelt logus līdz vajadzīgajam grīdas līmenim; <br/><br/>
            Profili ir ārkārtīgi spēcīgi, iztur lielas slodzes; <br/><br/>
            Frēzēts pēc loga rāmja.
        </Product>

        <Product title="WARMOTECH PRO 80/90" photo="warmotech/pro-80-90.webp" reverse>
            Izmanto logu uzstādīšanai siltumizolācijas slānī;  <br/><br/>
            Profila uzstādīšanas dziļums – 80mm; <br/><br/>
            Atbilst A++ klases prasībām.
        </Product>



        <Product title="WARMOTECH C" photo="warmotech/c.webp">
            Izmanto vitrīnu un logu pacelšanai virs cokola; <br/><br/>
            Fēzēts un izgatavots atbilstoši nepieciešamajam loga profilam; <br/><br/>
            Vidū papildus siltināts;
        </Product>

        <Product title="WARMOTECH M FRAME" photo="warmotech/m-frame.webp" reverse>
            Izmanto logu uzstādīšanai siltumizolācijas slānī, kad nepieciešama lielāka iekšējā ailes un palodzes daļa;  <br/><br/>
            Profila uzstādīšanas dziļums 100-250mm; <br/><br/>
            Sistēma sastāv no nerūsējošā tērauda stiprinājumiem, kronšteiniem un profiliem;<br/><br/>
            Atbilst A++ klases prasībām.
        </Product>



        <Product title="WARMOTECH PA UNIVERSAL" photo="warmotech/pa-universal.webp">
            Izmanto kā palodzes profilus vai loga paaugstināšanai līdz vajadzīgajam grīdas līmenim; <br/><br/>
            Profiliem ir universāla frēzēšana, kas piemērota daudziem logu profiliem; <br/><br/>
            Šie profili ar noteiktu augstumu vienmēr ir pieejami mūsu noliktavā.
        </Product>

        <Product title="WARMOTECH PA" photo="warmotech/pa.webp" reverse>
            Profili tiek izgatavoti no viena masīva vai dažām līmēto paneļu kārtām;  <br/><br/>
            Pieejami dažādi biezumi un platumi; <br/><br/>
            Profilus var frēzēt.
        </Product>




        <Product title="WARMOTECH HSN" photo="warmotech/hsn.webp">
            Izmanto bīdāmo durvju sistēmu pacelšanai virs cokola līdz vajadzīgajam augstumam; <br/><br/>
            Fēzēts atbilstoši nepieciešamajai logu sistēmai;
        </Product>
        <Product title="POLIFRAME HDE" photo="warmotech/poliframe-hde.webp" reverse>
            Izmanto logu uzstādīšanai siltumizolācijas slānī; <br/><br/>
            Izgatavots ar iefrēzētiem atslēgas savienojumiem profila galos, vieglai un precīzai savienojuma izveidei vienam ar otru; <br/><br/>
            Standarta profila biezums - 85mm and 100mm.
        </Product>




        <Product title="HDE FR PROFILI" photo="warmotech/hde-fr.webp">
            Izmanto vitrīnu un logu pacelšanai virs cokola; <br/><br/>
            Frēzēts un izgatavots atbilstoši nepieciešamajam loga profilam; <br/><br/>
            Standarta platums - 60mm un 70mm; <br/><br/>
            Izgriežams no paneļa vajadzīgajā augstumā.
        </Product>
        <Product title="HDE PROFILI" photo="warmotech/hde.webp" reverse>
            Izmanto būvniecībā un rūpniecībā, kur nepieciešams silts un izturīgs materiāls; <br/><br/>
            Standarta platums - 60mm and 70mm; <br/><br/>
            Izgriežams no paneļa vajadzīgajā augstumā.
        </Product>
                

    </div>


      <Contacts></Contacts>
     
    </>
  )
}
