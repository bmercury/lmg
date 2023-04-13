import Head from 'next/head'
import Image from 'next/image'

import ContactsBar from '@/components/contacts-bar/contacts-bar'
import Navigation from '@/components/navigation/navigation'
import MobileNavigation from '@/components/mobile-nav/mobile-nav'
import Banner from '@/components/banner/banner'
import Contacts from '@/components/contacts/contacts'

import {kontakti} from "../data.json"

export default function RealDeal() {
  return (
    <>
      <Head>
      <title>LM Group Buve | RealDeal</title>
        <meta name="og:title" content="LM Group Buve | RealDeal"/>
        <meta name="og:description" content="RealDeal - Vieta kur zināšanas un risinājumu sinerģija sniedz būvniecības sirdsmieru! Augsti funkcionējošu materiālu pielietojums no tādiem pasaules ražotājiem kā ProClima, Ytong, Budmat, Enervent un Cedral u.c."/>        
        <meta name="description" content="RealDeal - Vieta kur zināšanas un risinājumu sinerģija sniedz būvniecības sirdsmieru! Augsti funkcionējošu materiālu pielietojums no tādiem pasaules ražotājiem kā ProClima, Ytong, Budmat, Enervent un Cedral u.c." />
      </Head>

      <ContactsBar phone={kontakti.roberts.phone} email={kontakti.roberts.email}></ContactsBar>
      <Navigation></Navigation>
      <MobileNavigation phone={kontakti.roberts.phone} email={kontakti.roberts.email}></MobileNavigation>
      <Banner title="RealDeal - Jūsu īstais darījums" image="bg3.webp">
        Zināšanu, risinājumu un augstvērtīgu būvniecības materiālu sadaļa, kurā mēs rūpējamies par Jūsu māju vai ēku tehnisko risinājumu piemērotību. Konstrukcijas sastāva, mezglu atbilstības un norobežojošo slāņu jautājumi -  sīki par visu, kas veidos Jūsu ēkas energo efektīvās ekspluotācijas priekšnosacījumus un reālu nākotnes ekonomisko mijiedarbību.
        <br/><br/>
        Augsti funkcionējošu materiālu pielietojums no tādiem pasaules ražotājiem kā ProClima, Ytong, Budmat, Enervent un Cedral u.c.
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

            <div className='w-40-l flex justify-center mb5 mb0-l'>
                <div className='w-70'>
                    <img src="/img/partners/realdeal.webp"></img>    
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
        <div className='w-50-l pt4 pb5 pt0-l pb0-l flex justify-center items-center bg-marble-o5'>
            <div className='w-90 w-70-l'>
            <h3 className='b f3 gold tl'>“Sauss ir silts” ProClima risinājumi</h3>
            
            <p className='arctic flex'><span className='gold mr2'>—</span>Tvaika slāņu sistēmas griestiem un sienām</p>
            <p className='arctic flex'><span className='gold mr2'>—</span>Mitrum drošības maksimums arējos slāņos</p>
            <p className='arctic flex'><span className='gold mr2'>—</span>Grūti aizsniedzamu vietu hermetizācija un ēkas blīvums</p>
            </div>
        </div>
    </div>
    {/* LEFT */}

    {/* RIGHT */}
    <div className='flex flex-column-reverse flex-row-l'>
        <div className='w-50-l pt4 pb5 flex justify-center items-center bg-marble-o5'>
        <div className='w-90 w-70-l'>
            <h3 className='b f3 gold tl'>“Dzīves kvalitāte un mikroklimats”<br/>ventilācijas risinājumi</h3>
            <p className='arctic flex'><span className='gold mr2'>—</span>“Enervent” efektivitās rekuperācijas sistēmas</p>
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
        <div className='w-50-l pt4 pb5 pt0-l pb0-l flex justify-center items-center bg-marble-o5'>
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
        <div className='w-50-l pt4 pb5 pa0-l flex justify-center items-center bg-marble-o5'>
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
