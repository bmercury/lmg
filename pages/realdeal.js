import Head from 'next/head'
import Image from 'next/image'

import ContactsBar from '@/components/contacts-bar/contacts-bar'
import Navigation from '@/components/navigation/navigation'
import MobileNavigation from '@/components/mobile-nav/mobile-nav'
import Banner from '@/components/banner/banner'
import Contacts from '@/components/contacts/contacts'

export default function RealDeal() {
  return (
    <>
      <Head>
      <title>LM Group Buve | RealDeal</title>
        <meta name="og:title" content="LM Group Buve | RealDeal"/>
        <meta name="og:description" content="LM Group Buve - Privātmāju būvniecības pakalpojumi, būvmateriāli, konsultācijas un daudz kas cits. Piezvani!"/>        
        <meta name="description" content="LM Group Buve - Privātmāju būvniecības pakalpojumi, būvmateriāli, konsultācijas un daudz kas cits. Piezvani!" />
      </Head>

      <ContactsBar></ContactsBar>
      <Navigation></Navigation>
      <MobileNavigation></MobileNavigation>
      <Banner title="Tas ir RealDeal" image="bg3.jpg">
        ProClima tvaika membranas griestiem un sienām. Intello sistēma. Logu iestrāde, hermetizācija, ventilācijas risinājumi, klūsās enervent sistēmas, profesionāli beramie un iepūšamie siltumizolācijas materiāli un daudz kas cits.
      </Banner>


    <div className='flex flex-column items-center pv6'>


        {/* START COLUMN */}
        <div className='flex flex-column-reverse flex-row-l justify-center w-90 w-80-l'>
            <div className='w-40-l flex justify-center'>
                <div className='w-90'>
                    <h3 className='b f3 f2-l gold tl mt0'>Nepērc cenu - izzini risinājumu</h3>
                    <p className='arctic tl'>
                        1. Norobežojošās Konstrukcijas & Logi <br/><br/>
                        2. Ventilācijas Risinājumi <br/><br/>
                        3. Būvniecības Konsultācijas Un Materiāli
                    </p>
                </div>
            </div>

            <div className='w-40-l flex justify-center mb5 mb0-l'>
                <div className='w-90'>
                    <img src="/img/partners/realdeal.png"></img>    
                </div>
            </div>
        </div>

        {/* <h3 className='arctic f3 mt6'>Apskati PDF Bukletus</h3> */}
        {/* END COLUMN */}
    </div>

    {/* LEFT */}
    <div className='flex flex-column flex-row-l'>
        <div
            className='w-50-l mobile-photos oh'
            style={{
            backgroundImage: `url(${"/img/membranas.jpeg"})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: 'cover',
            }}
        >
        </div>
        <div className='w-50-l pt4 pb5 pt0-l pb0-l flex justify-center items-center bg-marble-o5'>
            <div>
            <h3 className='b f3 f2-l gold tl'>ProClima</h3>
            <p className='arctic'><span className='gold mr2'>—</span>Tvaika membrānas griestiem un sienām</p>
            <p className='arctic'><span className='gold mr2'>—</span>Mitrum drošības maksimums</p>
            <p className='arctic'><span className='gold mr2'>—</span>Intello sistēma, sausi un silti</p>
            </div>
        </div>
    </div>
    {/* LEFT */}

    {/* RIGHT */}
    <div className='flex flex-column-reverse flex-row-l'>
        <div className='w-50-l pt4 pb5 flex justify-center items-center bg-marble-o5'>
        <div>
            <h3 className='b f3 f2-l gold tl'>Monolītās jumta <br/> un fasādes membrānas</h3>
            <p className='arctic'><span className='gold mr2'>—</span>FrontWA un Fronta QUATRO</p>
            <p className='arctic'><span className='gold mr2'>—</span>UV noturīga</p>
            <p className='arctic'><span className='gold mr2'>—</span>10m ūdens staba pretestība</p>
            </div>
        </div>
        <div
            className='w-50-l mobile-photos oh'
            style={{
            backgroundImage: `url(${"/img/roof.jpg"})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: 'cover',
            }}
        >
        </div>
    </div>
    {/* RIGHT */}

    {/* LEFT */}
    <div className='flex flex-column flex-row-l'>
        <div
            className='w-50-l mobile-photos oh'
            style={{
            backgroundImage: `url(${"/img/windows.jpg"})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: 'cover',
            }}
        >
        </div>
        <div className='w-50-l pt4 pb5 pt0-l pb0-l flex justify-center items-center bg-marble-o5'>
        <div>
            <h3 className='b f3 f2-l gold tl'>Logu iestrāde, šuves</h3>
            <p className='arctic'><span className='gold mr2'>—</span>Contega Solido IQ</p>
            <p className='arctic'><span className='gold mr2'>—</span>Grūti aizsniedzamu vietu maximāla<br/> hermetizācija</p>
            <p className='arctic'><span className='gold mr2'>—</span>Šuvju lenta Tescon</p>
            </div>
        </div>
    </div>
    {/* LEFT */}

    {/* RIGHT */}
    <div className='flex flex-column-reverse flex-row-l'>
        <div className='w-50-l pt4 pb5 pa0-l flex justify-center items-center bg-marble-o5'>
        <div>
            <h3 className='b f3 f2-l gold tl'>Ventilācijas risinājumi</h3>
            <p className='arctic'><span className='gold mr2'>—</span>Enervent sistēmas</p>
            <p className='arctic'><span className='gold mr2'>—</span>Augstākā snieguma ventilācija</p>
            <p className='arctic'><span className='gold mr2'>—</span>Gaisa kvalitātes nodrošināšana</p>
            </div>
        </div>
        <div
            className='w-50-l mobile-photos oh'
            style={{
            backgroundImage: `url(${"/img/ventilation.jpg"})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: 'cover',
            }}
        >
        </div>
    </div>
    {/* RIGHT */}


      <Contacts></Contacts>
     
    </>
  )
}
