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
        <title>LM group Buve | Par Mums</title>
        <meta name="og:title" content="LM group Buve | Par Mums"/>
        <meta name="og:description" content="LM Group Buve - Privātmāju būvniecības pakalpojumi, būvmateriāli, konsultācijas un daudz kas cits. Piezvani!"/>        
        <meta name="description" content="LM Group Buve - Privātmāju būvniecības pakalpojumi, būvmateriāli, konsultācijas un daudz kas cits. Piezvani!" />

      <ContactsBar></ContactsBar>
      <Navigation></Navigation>
      <MobileNavigation></MobileNavigation>
      <Banner title="Par LM Group Buve" image="team.jpg">
      Uzņēmums LM Group Buve tika dibināts 2005. gada 10. janvārī un šobrīd jau 15. gadu veic gan lielus gan mazus būvprojektus Rīgā un Rīgas Rajonā. Mēs piedāvājam visus ar remontdarbiem un būvniecību saistītos risinājumus, galvenokārt privātmāju būvniecību.
      <br/><br/>
      Mūsu profesionālā meistaru komanda parūpēsies, lai dzīvokļa vai privātmājas remonts vai būvniecība neprasītu no Tevis laiku, galvassāpes un liekus līdzekļus.
      </Banner>


    {/* START Services */}
    <div className='flex flex-column items-center justify-center pv6 bg-marble-o10'>
        <h2 className='w-80 w-90-l f2 gold tc mt0 mb2'>Būvniecības Pakalpojumi</h2>
        <p className='tc mt0 mb5 w-80 w-100-l'>Uztici savas sapņu mājas būvniecību mums!</p>

        <div className='flex flex-column flex-row-l justify-center mt4'>

            <div className='w-40-l flex justify-center mb4 mb0-l'>
                <div className='w-80'>
                    <h3 className='f4 gold tc mt0'>Pamatu Betonēšana</h3>
                    <p className='arctic tc'>
                        Lejam pamatus jebkurai privātmājai, garāžai, vaikalam vai vasarnīcai. Sākot ar pamatu iemērīšanu un būvbedres izrakšanu līdz siltināšanai, hidroizolācijai.
                    </p>
                </div>
            </div>

            <div className='w-40-l flex justify-center mb4 mb0-l'>
            <div className='w-80'>
                    <h3 className='f4 gold tc mt0'>Mūrēšanas Darbi</h3>
                    <p className='arctic tc'>
                        Mūrējam sienas un starpsienas ar jebkāda veida blokiem. Izmēri sākot ar 100mm līdz 500mm.
                    </p>
                </div>
            </div>

        </div>

        <div className='flex flex-column flex-row-l justify-center mt5-l'>

            <div className='w-40-l flex justify-center mb4 mb0-l'>
                <div className='w-80'>
                    <h3 className='f4 gold tc mt0'>Starpstāvu Pārsegumu Izbūve</h3>
                    <p className='arctic tc'>
                        Izbūvējam koka, dzelsbetona plākšņu vai monolīta dzelsbetona pārsegumus. Montējam koka sijas, gatavos logus, kā arī VELUX un ROTO jumta logus.
                    </p>
                </div>
            </div>

        <div className='w-40-l flex justify-center'>
            <div className='w-80'>
                    <h3 className='f4 gold tc mt0'>Jumtu Konstrukciju Montāža</h3>
                    <p className='arctic tc'>
                        Spāru, mūrlatu un krēslu montāža, jumta logu, vēja kastu, notekreņu montāža. Iespējams uzstādīt jumta papildelementus - laseni, sniega barjeras, kores un vejmalas.
                    </p>
                </div>
            </div>
        </div>

    </div>
    {/* END Services */}

    {/* START Reviews */}
    <div className='flex flex-column justify-center items-center pv6-l'>

        <div className='flex flex-column flex-row-l justify-around w-80-l'>
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
        <a className='button-gold pa3' target="_blank" href="https://www.facebook.com/lmgroupbuve/reviews/" title="Atstāj atsauksmi Facebook">Atstāj Atsauksmi!</a>
    </div>
    {/* END Reviews */}

      <Contacts></Contacts>
     
    </>
  )
}
