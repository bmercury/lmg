import Head from 'next/head'
import Image from 'next/image'

import ContactsBar from '@/components/contacts-bar/contacts-bar'
import Navigation from '@/components/navigation/navigation'
import MobileNavigation from '@/components/mobile-nav/mobile-nav'
import Banner from '@/components/banner/banner'
import Contacts from '@/components/contacts/contacts'

import {kontakti} from "../data.json"

export default function ParMums() {
  return (
    <>
      <Head>
      <title>LM GROUP HOLDING | Par Mums</title>
        <meta name="og:title" content="LM GROUP HOLDING | Par Mums"/>
        <meta name="og:description" content="LM GROUP HOLDING - Vieta kur zināšanas un risinājumu sinerģija sniedz būvniecības sirdsmieru! Augsti funkcionējošu materiālu pielietojums no tādiem pasaules ražotājiem kā ProClima, Ytong, Budmat, Enervent un Cedral u.c."/>        
        <meta name="description" content="LM GROUP HOLDING - Vieta kur zināšanas un risinājumu sinerģija sniedz būvniecības sirdsmieru! Augsti funkcionējošu materiālu pielietojums no tādiem pasaules ražotājiem kā ProClima, Ytong, Budmat, Enervent un Cedral u.c." />
      </Head>

      <ContactsBar></ContactsBar>
      <Navigation></Navigation>
      <MobileNavigation phone={kontakti.roberts.phone} email={kontakti.roberts.email}></MobileNavigation>
      <Banner title="LM GROUP HOLDING - Jūsu īstais darījums" image="bg3.webp">
      Mēs novērtējam, ka esat izvēlējušies mūs, kā savu būvniecības sadarbības partneri. Kā vadošais nozares uzņēmums mēs specializējamies augstākās klases profesionālu risinājumu nodrošināšanā, kas pielāgoti būvniecības ekspertu unikālajām prasībām. Mūsu apņemšanās sasniegt izcilību un inovācijas ir nostiprinājusi mūs kā uzticamu partneri celtnieku, būvuzņēmēju, arhitektu un inženieru vidū.
      <br/><br/>
      Kā atbildīgi būvniecības nozares locekļi mēs aktīvi veicinām ilgtspējīgu praksi un videi draudzīgus risinājumus. Mūsu apņemšanās rūpēties par vidi liek mums atrast un piedāvāt videi draudzīgus produktus, kas palīdz samazināt jūsu projektu oglekļa dioksīda emisijas nospiedumu.
      </Banner>


    <div className='flex flex-column items-center pv6'>


        {/* START COLUMN */}
        <div className='flex flex-column-reverse flex-row-l justify-center w-90 w-80-l'>
            <div className='w-40-l flex justify-center'>
                <div className='w-90'>
                    <h3 className='b f3 f2-l gold tl mt0'>Nepērc cenu - izzini risinājumu</h3>
                    <p className='arctic tl'>
                        Vieta kur zināšanas un risinājumu sinerģija sniedz būvniecības sirdsmieru<br/><br/>
                        <div className='flex mb3'>
                            <span className='gold mr2'>—</span> <span>Konstrukcijas apzināšana un izveide </span>
                        </div>
                        <div className='flex mb3'>
                            <span className='gold mr2'>—</span> <span>Norobežojošās konstrukcijas slāņi un logu iestrādes risinājumi </span>
                        </div>
                        <div className='flex mb3'>
                            <span className='gold mr2'>—</span> <span>Ventilācijas sistēmas un pareiza mikroklimata pārvaldība </span>
                        </div>
                        <div className='flex mb3'>
                            <span className='gold mr2'>—</span> <span>Būvniecības procesu konsultācijas un materiālu tirdzniecība</span>
                        </div>
                        <div className='flex'>
                            <span className='gold mr2'>—</span> <span>Rekonstrukcijas objekti un atbilstošas siltināšanas metodes</span>
                        </div>
                    </p>
                </div>
            </div>

            <div className='w-40-l flex justify-center items-center-l mb5 mb0-l'>
                <div className='w-80 w-90-l'>
                    <img src="/img/lmg.webp"></img>    
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
            backgroundImage: `url(${"/img/proclima.webp"})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: 'cover',
            }}
        >
        </div>
        <div className='w-50-l pt4 pb4 pt0-l pb0-l flex justify-center items-center bg-marble-o5'>
            <div className='w-90 w-70-l'>
            <h3 className='b f3 gold tl'>“Sauss ir silts” ALUJET risinājumi</h3>
            
            <p className='arctic flex'><span className='gold mr2'>—</span>Tvaika slāņu sistēmas griestiem un sienām</p>
            <p className='arctic flex'><span className='gold mr2'>—</span>Mitrum drošības maksimums arējos slāņos</p>
            <p className='arctic flex'><span className='gold mr2'>—</span>Grūti aizsniedzamu vietu hermetizācija un ēkas blīvums</p>
            </div>
        </div>
    </div>
    {/* LEFT */}

    {/* RIGHT */}
    <div className='flex flex-column-reverse flex-row-l'>
        <div className='w-50-l pt4 pb4 flex justify-center items-center bg-marble-o5'>
        <div className='w-90 w-70-l'>
            <h3 className='b f3 gold tl'>“Dzīves kvalitāte un mikroklimats”<br/>ventilācijas risinājumi</h3>
            <p className='arctic flex'><span className='gold mr2'>—</span>“Enervent” efektīvās rekuperācijas sistēmas</p>
            <p className='arctic flex'><span className='gold mr2'>—</span>Augstākā snieguma iekārtas un gaisa vadi</p>
            <p className='arctic flex'><span className='gold mr2'>—</span>Mitruma atguves maksimums līdz 78% </p>
            <p className='arctic flex'><span className='gold mr2'>—</span>Maksimālā siltuma atguve līdz -38`C </p>
            <p className='arctic flex'><span className='gold mr2'>—</span>Gaisa kvalitātes monitorings un viedā vadība</p>
            <p className='arctic flex'><span className='gold mr2'>—</span>Tirgus garantijas maksimums 5gadi (darbs un sistēma)</p>
            </div>
        </div>
        <div
            className='w-50-l mobile-photos oh'
            style={{
            backgroundImage: `url(${"/img/ventilation.webp"})`,
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
            backgroundImage: `url(${"/img/frame.webp"})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: 'cover',
            }}
        >
        </div>
        <div className='w-50-l pt4 pb4 pt0-l pb0-l flex justify-center items-center bg-marble-o5'>
        <div className='w-90 w-70-l'>
            <h3 className='b f3 gold tl'>Bloki un ar koka karkasiem<br/>saistīti jautājumi</h3>
            <p className='arctic flex'><span className='gold mr2'>—</span>Materiālu iegāde (visas veida bloki)</p>
            <p className='arctic flex'><span className='gold mr2'>—</span>Būvniecības darbi</p>
            <p className='arctic flex'><span className='gold mr2'>—</span>Karkasu montāžas darbi </p>
            <p className='arctic flex'><span className='gold mr2'>—</span>Iekšējās apdares plāksnes (Fermacell, ģipsis vai OSB) </p>
            <p className='arctic flex'><span className='gold mr2'>—</span>Piegāde uz objektu </p>
            </div>
        </div>
    </div>
    {/* LEFT */}

    {/* RIGHT */}
    <div className='flex flex-column-reverse flex-row-l'>
        <div className='w-50-l pt4 pb4 pa0-l flex justify-center items-center bg-marble-o5'>
        <div className='w-90 w-70-l'>
            <h3 className='b f3 gold tl'>Jumta segumi un cementšķiedras<br/> fasādes risinājumi</h3>
            <p className='arctic flex'><span className='gold mr2'>—</span>Jumta kopnes un to montāža “Freimans”</p>
            <p className='arctic flex'><span className='gold mr2'>—</span>Funkcionālo slāņu iestrāde un latošana (vēja un tvaika barjeras)</p>
            <p className='arctic flex'><span className='gold mr2'>—</span>Jumta segumu ieklāšana vai tikai materiālu iegāde (Budmat, Eternit)</p>
            <p className='arctic flex'><span className='gold mr2'>—</span>Noteku sistēmas “Flamingo”</p>
            <p className='arctic flex'><span className='gold mr2'>—</span>Ventilējmās fasādes montāža un materiālu iegāde no “Cedral” vai “James Hardie”</p>
            </div>
        </div>
        <div
            className='w-50-l mobile-photos oh'
            style={{
            backgroundImage: `url(${"/img/roof.webp"})`,
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
