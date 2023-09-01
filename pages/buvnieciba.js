import Head from 'next/head'
import Image from 'next/image'

import ContactsBar from '@/components/contacts-bar/contacts-bar'
import Navigation from '@/components/navigation/navigation'
import MobileNavigation from '@/components/mobile-nav/mobile-nav'
import Banner from '@/components/banner/banner'
import Contacts from '@/components/contacts/contacts'

export default function Buvnieciba() {
  return (
    <>
        <title>LM GROUP HOLDING | Par Mums</title>
        <meta name="og:title" content="LM GROUP HOLDING | Par Mums"/>
        <meta name="og:description" content="Uzņēmums LM GROUP HOLDING tika dibināts 2005. gada 10. janvārī un šobrīd jau 8. gadu veic gan lielus gan mazus būvprojektus Rīgā un Rīgas Rajonā. Mēs piedāvājam visus ar būvniecību saistītos risinājumus, galvenokārt privātmāju būvniecību."/>        
        <meta name="description" content="Uzņēmums LM GROUP HOLDING tika dibināts 2005. gada 10. janvārī un šobrīd jau 8. gadu veic gan lielus gan mazus būvprojektus Rīgā un Rīgas Rajonā. Mēs piedāvājam visus ar būvniecību saistītos risinājumus, galvenokārt privātmāju būvniecību." />

      <ContactsBar></ContactsBar>
      <Navigation></Navigation>
      <MobileNavigation></MobileNavigation>
      <Banner title="Par LM GROUP HOLDING" image="bg2-alt.webp">
      Uzņēmums LM GROUP HOLDING tika dibināts 2015. gada 10. janvārī un šobrīd jau 8. gadu veic gan lielus gan mazus būvprojektus Rīgā un Rīgas Rajonā. Mēs piedāvājam visus ar būvniecību saistītos risinājumus, galvenokārt privātmāju būvniecību.
      <br/><br/>
      Mūsu profesionālā meistaru komanda parūpēsies, lai būvniecība neprasītu no Jums laiku, galvassāpes un liekus līdzekļus.
      </Banner>


    {/* START Services */}
    <div className='flex flex-column items-center justify-center pv6 pb5-l bg-marble-o10'>
        <h2 className='w-80 w-90-l f2 gold tc mt0 mb2'>Būvniecības Pakalpojumi</h2>
        <p className='tc mt0 mb5 w-80 w-100-l'>Novadīsim un gudri pārvaldīsim visus Jūsu mājas būvniecības procesus!</p>

        <div className='flex w-70 flex-column flex-row-l justify-center mt4'>

            <div className='w-50-l flex flex-column mb0 mb0-l'>
                <div className='w-100'>
                    <h3 className='f4 gold tc mt0'>Norobežojošo konstrukciju iestrāde</h3>
                </div>
                <div className='w-100'>
                <div className='w-100'>
                    <h3 className='f4 gold tc mt0'>Mūrēšanas un karkasu montāžas darbi</h3>
                </div>
                    <h3 className='f4 gold tc mt0'>Fasādes apdares darbi</h3>
                </div>
            </div>

            <div className='w-50-l flex flex-column mb0 mb0-l'>
                <div className='w-100'>
                    <h3 className='f4 gold tc mt0'>Starpstāvu pārsegumu izbūve</h3>
                </div>
                <div className='w-100'>
                    <h3 className='f4 gold tc mt0'>Jumtu un jumta konstrukciju montāža</h3>
                </div>
                <div className='w-100'>
                    <h3 className='f4 gold tc mt0'>Pamatu betonēšana</h3>
                </div>
            </div>
        </div>


    </div>
    {/* END Services */}

    {/* START Reviews */}
    <div className='flex flex-column justify-center items-center pb6-l pt5-l'>

        <div className='flex flex-column flex-row-l justify-around w-80-l pt3-l'>
            <div className={"review-item w-50-l pa3 pa4-l ma3 mb0"}>
                <h3 className='gold'>Raivis Redlihs
                    <span className={"star ml2"}>★</span>
                    <span className={"star"}>★</span>
                    <span className={"star"}>★</span>
                    <span className={"star"}>★</span>
                    <span className={"star"}>★</span>
                </h3>
                <p className='arctic'>
                Ātri un kvalitatīvi uzmūrētas sienas, uzlikts jumts, nosiltināta fasāde un ieklāts bruģis. Visi darbi veikti atrunātajos termiņos, kvalitatīvi un izpildot gan projektētāja, gan klienta vēlmes un risinājumus. Laba komunikācija! Iesaku.
                </p>
            </div>
            <div className={"review-item w-50-l pa3 pa4-l ma3 mb0"}>
            <h3 className='gold'>Alvis Sars
                    <span className={"star ml2"}>★</span>
                    <span className={"star"}>★</span>
                    <span className={"star"}>★</span>
                    <span className={"star"}>★</span>
                    <span className={"nostar"}>★</span>
                </h3>
                <p className='arctic'>
                    Iesaku šos čaļus! Sakarīgas cenas, ātri izpildes termiņi, kvalitāte un profesionālas konsultācijas.
                    Un pats galvenais, nerodas nezin no kurienes izdomāti papildus darbi darba izpildes procesā.
                </p>
            </div>
        </div>

        <div className='flex flex-column flex-row-l justify-around w-80-l'>
            <div className={"review-item w-50-l pa3 pa4-l ma3 mb0"}>
                <h3 className='gold'>Artūrs Millers
                    <span className={"star ml2"}>★</span>
                    <span className={"star"}>★</span>
                    <span className={"star"}>★</span>
                    <span className={"star"}>★</span>
                    <span className={"star"}>★</span>
                </h3>
                <p className='arctic'>
                    Ātri un kvalitatīvi veica mājas karkasa un jumta izbūvi. Esmu apmierināts ar padarītā darba kvalitāti un ieteicamajiem risinājumiem. Ļoti laba un pretīmnākoša attieksme. Iesaku!
                </p>
            </div>
            <div className={"review-item w-50-l pa3 pa4-l ma3 mb0"}>
            <h3 className='gold'>Madara Maniņa
                    <span className={"star ml2"}>★</span>
                    <span className={"star"}>★</span>
                    <span className={"star"}>★</span>
                    <span className={"star"}>★</span>
                    <span className={"star"}>★</span>
                </h3>
                <p className='arctic'>
                    Rekomendēju. Mums bija ļoti laba pieredze ar privātmājas būvniecību Jelgavā.
                    
                    Paldies!
                </p>
            </div>
        </div>

    </div>

    <div className='flex justify-center mv5 mv0-l'>
        <a className='button-gold pa3' target="_blank" href="https://www.facebook.com/lmgrouplatvija/reviews/" title="Atstāj atsauksmi Facebook">Atstāj Atsauksmi!</a>
    </div>
    {/* END Reviews */}

      <Contacts></Contacts>
     
    </>
  )
}
