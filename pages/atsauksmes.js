import Head from 'next/head'
import Image from 'next/image'

import ContactsBar from '@/components/contacts-bar/contacts-bar'
import Navigation from '@/components/navigation/navigation'
import MobileNavigation from '@/components/mobile-nav/mobile-nav'
import Banner from '@/components/banner/banner'
import Contacts from '@/components/contacts/contacts'
import Link from 'next/link'

export default function Reviews() {
  return (
    <>
      <Head>
        <title>LM GROUP HOLDING - Tavs Būvniecības Partneris</title>
        <meta name="og:title" content="LM GROUP HOLDING - Tavs Būvniecības Partneris"/>
        <meta name="og:description" content="LM GROUP HOLDING - Privātmāju būvniecības pakalpojumi, būvmateriāli, konsultācijas un daudz kas cits. Piezvani!"/>        
        <meta name="description" content="LM GROUP HOLDING - Privātmāju būvniecības pakalpojumi, būvmateriāli, konsultācijas un daudz kas cits. Piezvani!" />
      </Head>

      <ContactsBar></ContactsBar>
      <Navigation></Navigation>
      <MobileNavigation></MobileNavigation>
      <Banner image="home.webp" title="Paldies par sadarbību!"></Banner>

      {/* START Reviews */}
    <div className='flex flex-column justify-center items-center pb4 pt4 pt6-l'>
    <h2 className='w-80 w-90-l f2 gold tc mt5 mt2-l mb2'>Lūdzu, atstāj mums savu atsauksmi!</h2>
    </div>

    <div className='flex flex-column flex-row-l ph7-l pb5 pb4-l mh5 mh5-l'>
        
        <a className='w-100 w-50-l' href="https://www.facebook.com/lmgrouplatvija/reviews"><img src="/img/facebook.png"></img></a>
        <a className='w-100 w-50-l' href="https://www.google.com/search?q=LM+Group+Holding&client=safari&sca_esv=c8032146a3e65808&hl=en-LV&biw=1440&bih=772&sxsrf=ACQVn088wPkdEZAbBg_ugH2kO8RhDv1ZBA%3A1707131502085&ei=bsLAZcPgBJmgwPAP2oCOSA&ved=0ahUKEwjDz5C2iJSEAxUZEBAIHVqAAwkQ4dUDCA8&uact=5&oq=LM+Group+Holding&gs_lp=Egxnd3Mtd2l6LXNlcnAiEExNIEdyb3VwIEhvbGRpbmcyChAjGIAEGIoFGCcyBBAjGCcyBhAAGBYYHjIGEAAYFhgeMgYQABgWGB5I1xxQoRNY8RtwBHgAkAEAmAF-oAHnAaoBAzAuMrgBA8gBAPgBAeIDBBgBIEGIBgE&sclient=gws-wiz-serp#ip=1"><img src="/img/google.png"></img></a>

      </div>
    {/* END Reviews */}

      <Contacts></Contacts>
     
    </>
  )
}
