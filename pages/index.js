import Head from 'next/head'
import Image from 'next/image'

import ContactsBar from '@/components/contacts-bar/contacts-bar'
import Navigation from '@/components/navigation/navigation'
import MobileNavigation from '@/components/mobile-nav/mobile-nav'
import Banner from '@/components/banner/banner'
import Contacts from '@/components/contacts/contacts'

export default function Home() {
  return (
    <>
      <Head>
        <title>LM Group Buve - Tavs Būvniecības Partneris</title>
        <meta name="og:title" content="LM Group Buve - Tavs Būvniecības Partneris"/>
        <meta name="og:description" content="LM Group Buve - Privātmāju būvniecības pakalpojumi, būvmateriāli, konsultācijas un daudz kas cits. Piezvani!"/>        
        <meta name="description" content="LM Group Buve - Privātmāju būvniecības pakalpojumi, būvmateriāli, konsultācijas un daudz kas cits. Piezvani!" />
      </Head>

      <ContactsBar></ContactsBar>
      <Navigation></Navigation>
      <MobileNavigation></MobileNavigation>
      <Banner image="home.webp" title="Būvniecības Pakalpojumi Un Materiāli"></Banner>

      <div className='flex flex-column flex-row-l'>
        <div
          style={{
            backgroundImage: `url(${"/img/bg2.webp"})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: 'cover'
          }}
          className='w-100 w-50-l oh mobile-photos'
        >
        </div>
        <div className='pv5 pv4-l pv0-l w-100 w-50-l flex justify-center items-center bg-marble-o5'>
          <div>
            <h2 className='f2 gold mt2 mt4-l'>Kādēļ Izvēlēties Mūs?</h2>
            <p className='arctic'><span className='gold mr2'>—</span>Daudzu gadu pieredze</p>
            <p className='arctic'><span className='gold mr2'>—</span>Garantēta darba kvalitāte</p>
            <p className='arctic'><span className='gold mr2'>—</span>Augsta precizitāte un ātra Izpilde</p>
            <p className='arctic'><span className='gold mr2'>—</span>Profesionāla komanda</p>
            <p className='arctic'><span className='gold mr2'>—</span>Zināšanas un attieksme</p>
            <p className='arctic'><span className='gold mr2'>—</span>Jūsu saskaņotā tāme paliks nemainīga</p>
            <p className='arctic'><span className='gold mr2'>—</span>Materiālu piegāde</p>
          </div>
        </div>
      </div>

      <div className='flex flex-column-reverse flex-row-l'>
          <div className='w-100 w-50-l flex justify-center items-center  bg-marble-o5'>
            <div className='flex flex-column w-70 w-50-l mb3 mb0-l'>
                <h2 className='f2 gold tc mb0 mt5 mt4-l'>Partneri</h2>
                <img className='o-80' src="/img/partners.webp"></img>
            </div>
          </div>
        <div
          className='w-100 w-50-l oh mobile-photos'
          style={{
            backgroundImage: `url(${"/img/office.webp"})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: 'cover',
          }}
        >
        </div>
      </div>

      <Contacts></Contacts>
     
    </>
  )
}
