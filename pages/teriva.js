import Head from 'next/head'
import Image from 'next/image'

import ContactsBar from '@/components/contacts-bar/contacts-bar'
import Navigation from '@/components/navigation/navigation'
import MobileNavigation from '@/components/mobile-nav/mobile-nav'
import Banner from '@/components/banner/banner'
import Contacts from '@/components/contacts/contacts'

export default function Teriva() {
  return (
    <>
      <title>LM Group Buve | Teriva Pārsegums</title>
        <meta name="og:title" content="LM Group Buve | Teriva Pārsegums"/>
        <meta name="og:description" content="LM Group Buve - Privātmāju būvniecības pakalpojumi, būvmateriāli, konsultācijas un daudz kas cits. Piezvani!"/>        
        <meta name="description" content="LM Group Buve - Privātmāju būvniecības pakalpojumi, būvmateriāli, konsultācijas un daudz kas cits. Piezvani!" />

      <ContactsBar></ContactsBar>
      <Navigation></Navigation>
      <MobileNavigation></MobileNavigation>
      <Banner title="Teriva Pārsegums" image="teriva-gal-1.png">
        TERIVA ir patentēta starpstāvu pārsegumu sistēma, kas atbilst Eiropas standartam LST EN 15037 un ir marķēta ar CE marķējumu.
        <br/><br/>
        TERIVA pārsegumu sistēmas sastāv no vieglām dzelzsbetona sijām, dobiem betona blokiem vai polistirola blokiem ( TERIVA LIGHT sistēmā ), kā arī monolīta betona pārklājuma, kas tiek izveidots jau pēc pārseguma sistēmas elementu uzstādīšanas. Šāda pārseguma konstrukcija ir viegla, izturīga un energofektīva, kas atbilst А, А+ un А++ energoefektivitātes klases prasībām.
      </Banner>

      <div className='flex flex-column flex-row-l justify-center pv5 pv6-l bg-marble-o10'>
      <div className='w-40-l flex justify-center mb4 mb0-l'>
            <div className='w-80'>
                <h2 className='f2 gold tc mt0'>Pasūtīšana</h2>
                <p className='arctic tc'>
                  Lai sagatavotu izmaksu aprēķinu, mums ir nepieciešams objekta projekts, pdf vai dwg.
                  <br/><br/>
                  Balstoties uz projektu, mūsu inženieri izveidos pārseguma plāna projektu un ieteiks optimālāko risinājumu.
                  <br/><br/>
                  Rasējumu, kopā ar objekta adresi un kontaktinformāciju, lūgums sūtīt uz mūsu e-pastu - info@lmgroup.lv
                  <br/><br/>
                  Norēķini - priekšapmaksa.
                  <br/><br/>
                  Apmaksas veids - pārskaitījums.
                </p>
            </div>
        </div>
        <div className='w-40-l flex justify-center'>
          <div className='w-80'>
                <h2 className='f2 gold tc mt0'>Piegāde</h2>
                <p className='arctic tc'>
                Piegādes pakalpojumu nodrošinām visā Latvijas teritorijā, tieši no ražotnes Lietuvā. Piegāde ir maksas pakalpojums un tā nav iekļauta produktu cenā. Piegādes cena ir atkarīga no objekta atrašanās vietas.
                <br/><br/>
                Izkraušana nav iekļauta piegādes pakalpojumā. Kā alternatīvu risinājumu, piedāvājam piegādi organizēt pašiem. Šajā gadījumā būs nepieciešama transportlīdzekļa un tā vadītāja identifikācijas informācija, lai sagatavotu CMR.
                <br/><br/>
                Termiņi - vidēji 5 darba dienas, jo standarta izmēru pārseguma elementi vienmēr ir noliktavas atlikumā, un lielāko daļu laika aizņem projekta detaļu saskaņošana un piemērota transporta meklēšana.
                </p>
            </div>
        </div>
    </div>
    
    <div className='flex flex-column items-center pv4 pv6-l bg-alt'>
      <div className='w-90 w-70-l'>
      <h2 className='f2 mt0'>Teriva Saliekamo Pārseguma Sistēmas Priekšrocības</h2>
        <h3 className='gold'>Salīdzinājumā ar monolīt-betona pārsegumiem</h3>
        <p>
        1. TERIVA pārsegumam nav nepieciešams veidņu izgatavošana, armatūras siešana un statņu izveidošana.
        <br/><br/>
        2. Betonēta pārseguma darba un transporta izmaksas ir ievērojami augstākas.
        <br/><br/>
        3. TERIVA pārsegums ir vieglāks par 100 -120 kg/m2.
        <br/><br/>
        4. TERIVA pārsegumā izmanto izturīgāku armatūru. Karkasu izgatavo no auksti velmēta, ribota un gluda tērauda, ar plastiskuma pakāpi - 500 MPa, kas atbilst Vācijas standartam DIN 488. Šis karkass ir par 23% izturīgāks nekā A-III klases armatūra.
        <br/><br/>
        5. Laba siltumizolācija:
        <br/>
        TERIVA 4,0/1 - 0,37 m2 K/W
        <br/>
        TERIVA 4,0/3; 6.0; 8.0 - 0,39 m2 K/W
        <br/>
        TERIVA LIGHT 4,0/1 - 3,51 m2 K/W
        </p>
      </div>
      <div className='w-90 w-70-l'>
        <h3 className='gold'>Salīdzinājumā ar pārseguma plātnēm</h3>
        <p>
        1. TERIVA pārsegumu iespējams uzstādīt manuāli, neizmantojot pacelšanas krānus un citus mehānismus. Pārsegums tiek veidots no mazgabarīta elementiem. Viegli: bloks (atkarīgs no pārseguma tipa) sver 2; 14 vai 18 kg, bet sija – 12 kg.
        <br/><br/>
        2. Transportēšana. Ar standarta izmēra kravas auto 13,6 m garumā, iespējams nogādāt uz objektu līdz 500 m2 pārseguma elementu. Pārseguma plātnes līdz 70 m2.
        <br/><br/>
        3. Nogādājot objektā TERIVA pārseguma elementus, tos var izlādēt manuāli, pārseguma plātnes tikai ar krāna vai pacēlāja palīdzību.
        <br/><br/>
        4. TERIVA pārsegums ir daudz vieglāks nekā pārseguma plātnes (aptuveni 100 -120 kg/m2) tādēļ mājas sienām var izmantot vieglākus konstrukciju un siltumizolācijas materiālus.
        <br/><br/>
        5. Ēku rekonstrukcijās pārseguma elementus montāžas vietā var piegādāt pa durvīm vai logiem. Savukārt, pārseguma plātnes rekonstrukcijas gadījumos, kad jumta konstrukcija ir esoša, nebūs iespējams piegādāt šādā veidā.
        <br/><br/>
        6. Pārseguma plātnes darbojas kā atsevišķi elementi, kas bieži ir iemesls plaisām starp plātnēm un sienām. TERIVA konstrukcija ir kā viengabala, monolīts elements.
        <br/><br/>
        7. Ar pārseguma plātnēm, kā ar standartizētu izmēru izstrādājumiem, ir sarežģīti izveidot objekta pārsegumu bez ievērojamiem plātņu pārpalikumiem, kas ievērojami paaugstina kopējās izmaksas. Veidojot TERIVA pārsegumu, pārpalikumi veidojas nenozīmīgi.
        </p>
      </div>
    </div>

    <div className='flex flex-column items-center pv4 pv6-l bg-alt2'>
      <div className='w-90 w-70-l'>
        <h2 className='f2 mt0'>Rekonstruējami Objekti</h2>
        <p>
        TERIVA saliekamie pārsegumi ir viens no labākajiem risinājumiem ēku rekonstrukcijā
        <br/><br/>
        Nostiprināt vecos, esošos pārsegumus vai mainīt tos uz jauniem - tas ir sarežģīts process, kas saistīts ar ievērojamām izmaksām. Pārseguma paneļus caur logu ailēm nav iespējams padot, tāpat dzelzsbetona monolīto pārsegumu ir ļoti sarežģīti izveidot, jo esošās konstrukcijas ir nepieciešams demontēt, lai izveidotu pārseguma balstus un esošās konstrukcijas var neizturēt lielu šķidrā betona daudzumu, tādēļ Izmantojot TERIVA saliekamo pārsegumu sistēmas, to var izdarīt daudz ērtāk un lētāk.
        <br/>
        TERIVA pārseguma montāžas posmi:
        1. Sienās izveido atveres "ligzdas" pārseguma siju ievietošanai <br/><br/>
        2. Pārseguma sijas montē ik pēc 60 cm vai 45 cm (atkarībā no pārseguma veida)<br/><br/>
        3. Sijas balsta uz statnēm <br/><br/>
        4. Izvieto pārseguma blokus <br/><br/>
        5. Pārseguma konstrukciju pārklāj ar betonu (Marka C20/25)
        </p>
      </div>
    </div>

    <div className='flex flex-column flex-row-l mb5 mb0-l'>
      <div className='w-100 w-50-l'>
        <img src="/img/teriva-gal-1.png"></img>
      </div>
      <div className='w-100 w-50-l'>
        <img src="/img/teriva-gal-2.png"></img>
      </div>
    </div>

      <Contacts></Contacts>
     
    </>
  )
}
