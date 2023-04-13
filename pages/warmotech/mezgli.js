import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import ContactsBar from '@/components/contacts-bar/contacts-bar'
import Navigation from '@/components/navigation/navigation'
import MobileNavigation from '@/components/mobile-nav/mobile-nav'
import Banner from '@/components/banner/banner'
import Contacts from '@/components/contacts/contacts'

export default function Mezgli() {
  return (
    <>
      <Head>
        <title>Warmotech | Mezgli | LM Group Buve</title>
        <meta name="og:title" content="Warmotech | Mezgli | LM Group Buve"/>
        <meta name="og:description" content="Apskati plašo mezglu piedāvājumu no Warmotech!"/>        
        <meta name="description" content="Apskati plašo mezglu piedāvājumu no Warmotech!" />
      </Head>

      <ContactsBar></ContactsBar>
      <Navigation></Navigation>
      <MobileNavigation></MobileNavigation>
      <Banner title="Warmotech Mezgli" image="warmotech/bg3.webp">
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

       {/* 1 COLUMN */}
       <div className='flex flex-column-reverse flex-row-l justify-center w-90 mt4-l mb4'>
            <div className='w-40-l flex justify-center items-center'>
                <div className='w-80-l'>
                    <h3 className='b f3 f2-l gold tc tl-l mt0'>Loga apakšējās malas montāžas mezgls ar PRO 80 un PIR izolāciju</h3>

                    <div className='flex'>
                        <div className='w-50 mb3'>
                            <a className=' f3 link gold tc w-100 db tl-l' href="https://www.warmotech.lt/assets/doc/designs/pro-80-apatinis-angokrascio-mazgas-su-pir-izoliacija.pdf" target="_blank" rel="noopener noreferrer" title="Warmotech Poliframe HDE"><i class="fa-solid fa-file-pdf"></i> <span className='arctic'>Mezgls PDF</span></a>
                        </div>
                        <div className='w-50'>
                            <a className=' f3 link gold tc w-100 db tl-l' href="https://www.warmotech.lt/assets/doc/designs/dwg/pro-80-apatinis-angokrascio-mazgas-su-pir-izoliacija.dwg" target="_blank" rel="noopener noreferrer" title="Warmotech Poliframe HDE"><i class="fa-solid fa-file"></i> <span className='arctic'>Mezgls DWG</span></a>
                        </div>
                    </div>
                    
                </div>
            </div>

            <div className='w-40-l flex items-center justify-center mt3 mb4 mb0-l mt0-l'>
                <div className='w-90'>
                    <img className='white-border' src="/img/warmotech/m1.webp"></img>    
                </div>
            </div>
        </div>

        {/* 2 COLUMN */}
       <div className='flex flex-column-reverse flex-row-l justify-center w-90 mt4-l mb4'>
            <div className='w-40-l flex justify-center items-center'>
                <div className='w-80-l'>
                    <h3 className='b f3 f2-l gold tc tl-l mt0'>Loga sānu malas montāžas mezgls ar PRO 80 un PIR izolāciju</h3>

                    <div className='flex'>
                        <div className='w-50 mb3'>
                            <a className=' f3 link gold tc w-100 db tl-l' href="https://www.warmotech.lt/assets/doc/designs/pro-80-soninis-angokrascio-mazgas-su-pir-izoliacija.pdf" target="_blank" rel="noopener noreferrer" title="Warmotech Poliframe HDE"><i class="fa-solid fa-file-pdf"></i> <span className='arctic'>Mezgls PDF</span></a>
                        </div>
                        <div className='w-50'>
                            <a className=' f3 link gold tc w-100 db tl-l' href="https://www.warmotech.lt/assets/doc/designs/dwg/pro-80-soninis-angokrascio-mazgas-su-pir-izoliacija.dwg" target="_blank" rel="noopener noreferrer" title="Warmotech Poliframe HDE"><i class="fa-solid fa-file"></i> <span className='arctic'>Mezgls DWG</span></a>
                        </div>
                    </div>
                    
                </div>
            </div>

            <div className='w-40-l flex justify-center mt3 mb4 mb0-l mt0-l'>
                <div className='w-90'>
                    <img className='white-border' src="/img/warmotech/m2.webp"></img>    
                </div>
            </div>
        </div>

        {/* 3 COLUMN */}
       <div className='flex flex-column-reverse flex-row-l justify-center w-90 mt4-l mb4'>
            <div className='w-40-l flex justify-center items-center'>
                <div className='w-80-l'>
                    <h3 className='b f3 f2-l gold tc tl-l mt0'>Loga apakšējās malas montāžas mezgls ar PRO 80 un EPS izolāciju</h3>

                    <div className='flex'>
                        <div className='w-50 mb3'>
                            <a className=' f3 link gold tc w-100 db tl-l' href="https://www.warmotech.lt/assets/doc/designs/pro-80-apatinis-angokrascio-mazgas-su-eps-izoliacija.pdf" target="_blank" rel="noopener noreferrer" title="Warmotech Poliframe HDE"><i class="fa-solid fa-file-pdf"></i> <span className='arctic'>Mezgls PDF</span></a>
                        </div>
                        <div className='w-50'>
                            <a className=' f3 link gold tc w-100 db tl-l' href="https://www.warmotech.lt/assets/doc/designs/dwg/pro-80-apatinis-angokrascio-mazgas-su-eps-izoliacija.dwg" target="_blank" rel="noopener noreferrer" title="Warmotech Poliframe HDE"><i class="fa-solid fa-file"></i> <span className='arctic'>Mezgls DWG</span></a>
                        </div>
                    </div>
                    
                </div>
            </div>

            <div className='w-40-l flex justify-center mt3 mb4 mb0-l mt0-l'>
                <div className='w-90'>
                    <img className='white-border' src="/img/warmotech/m3.webp"></img>    
                </div>
            </div>
        </div>

         {/* 4 COLUMN */}
       <div className='flex flex-column-reverse flex-row-l justify-center w-90 mt4-l mb4'>
            <div className='w-40-l flex justify-center items-center'>
                <div className='w-80-l'>
                    <h3 className='b f3 f2-l gold tc tl-l mt0'>Loga sānu malas montāžas mezgls ar PRO 80 un EPS izolāciju</h3>

                    <div className='flex'>
                        <div className='w-50 mb3'>
                            <a className=' f3 link gold tc w-100 db tl-l' href="https://www.warmotech.lt/assets/doc/designs/pro-80-soninis-angokrascio-mazgas-su-eps-izoliacija.pdf" target="_blank" rel="noopener noreferrer" title="Warmotech Poliframe HDE"><i class="fa-solid fa-file-pdf"></i> <span className='arctic'>Mezgls PDF</span></a>
                        </div>
                        <div className='w-50'>
                            <a className=' f3 link gold tc w-100 db tl-l' href="https://www.warmotech.lt/assets/doc/designs/dwg/pro-80-soninis-angokrascio-mazgas-su-eps-izoliacija.dwg" target="_blank" rel="noopener noreferrer" title="Warmotech Poliframe HDE"><i class="fa-solid fa-file"></i> <span className='arctic'>Mezgls DWG</span></a>
                        </div>
                    </div>
                    
                </div>
            </div>

            <div className='w-40-l flex justify-center mt3 mb4 mb0-l mt0-l'>
                <div className='w-90'>
                    <img className='white-border' src="/img/warmotech/m4.webp"></img>    
                </div>
            </div>
        </div>

          {/* 5 COLUMN */}
       <div className='flex flex-column-reverse flex-row-l justify-center w-90 mt4-l mb4'>
            <div className='w-40-l flex justify-center items-center'>
                <div className='w-80-l'>
                    <h3 className='b f3 f2-l gold tc tl-l mt0'>Loga apakšējās malas montāžas mezgls ar M FRAME</h3>

                    <div className='flex'>
                        <div className='w-50 mb3'>
                            <a className=' f3 link gold tc w-100 db tl-l' href="https://www.warmotech.lt/assets/doc/designs/m-frame-apatinis-angokrascio-mazgas.pdf" target="_blank" rel="noopener noreferrer" title="Warmotech Poliframe HDE"><i class="fa-solid fa-file-pdf"></i> <span className='arctic'>Mezgls PDF</span></a>
                        </div>
                        <div className='w-50'>
                            <a className=' f3 link gold tc w-100 db tl-l' href="https://www.warmotech.lt/assets/doc/designs/dwg/m-frame-apatinis-angokrascio-mazgas.dwg" target="_blank" rel="noopener noreferrer" title="Warmotech Poliframe HDE"><i class="fa-solid fa-file"></i> <span className='arctic'>Mezgls DWG</span></a>
                        </div>
                    </div>
                    
                </div>
            </div>

            <div className='w-40-l flex justify-center mt3 mb4 mb0-l mt0-l'>
                <div className='w-90'>
                    <img className='white-border' src="/img/warmotech/m5.webp"></img>    
                </div>
            </div>
        </div>

           {/* 6 COLUMN */}
       <div className='flex flex-column-reverse flex-row-l justify-center w-90 mt4-l mb4'>
            <div className='w-40-l flex justify-center items-center'>
                <div className='w-80-l'>
                    <h3 className='b f3 f2-l gold tc tl-l mt0'>Loga sānu malas montāžas mezgls ar M FRAME
</h3>

                    <div className='flex'>
                        <div className='w-50 mb3'>
                            <a className=' f3 link gold tc w-100 db tl-l' href="https://www.warmotech.lt/assets/doc/designs/m-frame-soninis-angokrascio-mazgas.pdf" target="_blank" rel="noopener noreferrer" title="Warmotech Poliframe HDE"><i class="fa-solid fa-file-pdf"></i> <span className='arctic'>Mezgls PDF</span></a>
                        </div>
                        <div className='w-50'>
                            <a className=' f3 link gold tc w-100 db tl-l' href="https://www.warmotech.lt/assets/doc/designs/dwg/m-frame-soninis-angokrascio-mazgas.dwg" target="_blank" rel="noopener noreferrer" title="Warmotech Poliframe HDE"><i class="fa-solid fa-file"></i> <span className='arctic'>Mezgls DWG</span></a>
                        </div>
                    </div>
                    
                </div>
            </div>

            <div className='w-40-l flex justify-center mt3 mb4 mb0-l mt0-l'>
                <div className='w-90'>
                    <img className='white-border' src="/img/warmotech/m6.webp"></img>    
                </div>
            </div>
        </div>

           {/* 7 COLUMN */}
       <div className='flex flex-column-reverse flex-row-l justify-center w-90 mt4-l mb4'>
            <div className='w-40-l flex justify-center items-center'>
                <div className='w-80-l'>
                    <h3 className='b f3 f2-l gold tc tl-l mt0'>Loga apakšējās malas montāžas mezgls ar HDE 85
</h3>

                    <div className='flex'>
                        <div className='w-50 mb3'>
                            <a className=' f3 link gold tc w-100 db tl-l' href="https://www.warmotech.lt/assets/doc/designs/hde-85-apatinis-angokrascio-mazgas.pdf" target="_blank" rel="noopener noreferrer" title="Warmotech Poliframe HDE"><i class="fa-solid fa-file-pdf"></i> <span className='arctic'>Mezgls PDF</span></a>
                        </div>
                        <div className='w-50'>
                            <a className=' f3 link gold tc w-100 db tl-l' href="https://www.warmotech.lt/assets/doc/designs/dwg/hde-85-apatinis-angokrascio-mazgas.dwg" target="_blank" rel="noopener noreferrer" title="Warmotech Poliframe HDE"><i class="fa-solid fa-file"></i> <span className='arctic'>Mezgls DWG</span></a>
                        </div>
                    </div>
                    
                </div>
            </div>

            <div className='w-40-l flex justify-center mt3 mb4 mb0-l mt0-l'>
                <div className='w-90'>
                    <img className='white-border' src="/img/warmotech/m7.webp"></img>    
                </div>
            </div>
        </div>

            {/* 8 COLUMN */}
       <div className='flex flex-column-reverse flex-row-l justify-center w-90 mt4-l mb4'>
            <div className='w-40-l flex justify-center items-center'>
                <div className='w-80-l'>
                    <h3 className='b f3 f2-l gold tc tl-l mt0'>Loga sānu malas montāžas mezgls ar HDE 85
</h3>

                    <div className='flex'>
                        <div className='w-50 mb3'>
                            <a className=' f3 link gold tc w-100 db tl-l' href="https://www.warmotech.lt/assets/doc/designs/hde-85-soninis-angokrascio-mazgas.pdf" target="_blank" rel="noopener noreferrer" title="Warmotech Poliframe HDE"><i class="fa-solid fa-file-pdf"></i> <span className='arctic'>Mezgls PDF</span></a>
                        </div>
                        <div className='w-50'>
                            <a className=' f3 link gold tc w-100 db tl-l' href="https://www.warmotech.lt/assets/doc/designs/dwg/hde-85-soninis-angokrascio-mazgas.dwg" target="_blank" rel="noopener noreferrer" title="Warmotech Poliframe HDE"><i class="fa-solid fa-file"></i> <span className='arctic'>Mezgls DWG</span></a>
                        </div>
                    </div>
                    
                </div>
            </div>

            <div className='w-40-l flex justify-center mt3 mb4 mb0-l mt0-l'>
                <div className='w-90'>
                    <img className='white-border' src="/img/warmotech/m8.webp"></img>    
                </div>
            </div>
        </div>


    </div>


      <Contacts></Contacts>
     
    </>
  )
}
