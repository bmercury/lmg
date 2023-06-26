import css from "./contacts.module.scss"
import {kontakti} from "../../data.json"

export default function Contacts() {
    return (
      <>
        <div id="kontakti" className={css.contacts+" flex flex-column items-center pb5 pv5-l"}>
          <h2 className="f2 tc w-70 w-100-l">Mūsu Profesionāļu Komanda</h2>
          <div className="w-90 w-50-l mt3">
            <div className="flex flex-column flex-row-l items-center items-start-l justify-center">
              <div className="w-third-l mb4 mb0-l flex flex-column tc arctic">
                <h3>{kontakti.matiss.name}</h3>
                <a className="link" href={"tel:"+kontakti.matiss.phone} title="Zvanīt">{kontakti.matiss.phone}</a>
                <a className="link" href={"mailto:"+kontakti.matiss.email} title="Sūtīt e-pastu">{kontakti.matiss.email}</a>
                <span className="gray mt2 f6">{kontakti.matiss.role}</span>
              </div>
              <div className="w-third-l mb4 mb0-l flex flex-column tc arctic">
                <h3>{kontakti.aleksandrs.name}</h3>
                <a className="link" href={"tel:"+kontakti.aleksandrs.phone} title="Zvanīt">{kontakti.aleksandrs.phone}</a>
                <a className="link" href={"mailto:"+kontakti.aleksandrs.email} title="Sūtīt e-pastu">{kontakti.aleksandrs.email}</a>
                <span className="gray mt2 f6">{kontakti.aleksandrs.role}</span>
              </div>
            </div>

            <div className="flex flex-column flex-row-l justify-center mt4-l">
              <div className="w-third-l mb4 mb0-l flex flex-column tc arctic">
                <h3>{kontakti.guntars.name}</h3>
                <a className="link" href={"tel:"+kontakti.guntars.phone} title="Zvanīt">{kontakti.guntars.phone}</a>
                <a className="link" href={"mailto:"+kontakti.guntars.email} title="Sūtīt e-pastu">{kontakti.guntars.email}</a>
                <span className="gray mt2 f6">{kontakti.guntars.role}</span>
              </div>
              <div className="w-third-l mb4 mb0-l flex flex-column tc arctic">
                <h3>{kontakti.arnita.name}</h3>
                <a className="link" href={"tel:"+kontakti.arnita.phone} title="Zvanīt">{kontakti.arnita.phone}</a>
                <a className="link" href={"mailto:"+kontakti.arnita.email} title="Sūtīt e-pastu">{kontakti.arnita.email}</a>
                <span className="gray mt2 f6">{kontakti.arnita.role}</span>
              </div>
            </div>        
          </div>





        <h2 className="f2 tc w-70 w-100-l mt5-l pt4">SIA "LM GROUP BUVE"</h2>
        <div className="w-80 w-40-l flex flex-column flex-row-l items-center items-start-l justify-center mt3 mb4">
              <div className="w-100 mb4 mb0-l dn flex-l flex-column tc tl-l arctic">
                <span className="mt2">PVN reģistrācijas numurs</span>
                <span className="mt2">Juridiskā adrese</span>
                <span className="mt2">Banka</span>
                <span className="mt2">SWIFT</span>
                <span className="mt2">Konta numurs</span>
              </div>

              <div className="w-100 w-70-l mb4 mb0-l flex flex-column tc tl-l arctic">
              <span className="mt2 mb3 mb0-l"><span className="db dn-l pv2 ">PVN reģistrācijas numurs</span> <i className="gray">LV40103860128</i></span>
              <span className="mt2 mb3 mb0-l"><span className="db dn-l pv2 ">Juridiskā adrese</span><i className="gray">Krasta iela 95, Rīga, LV-1019</i></span>
              <span className="mt2 mb3 mb0-l"><span className="db dn-l pv2 ">Banka</span><i className="gray">AS “Luminor Bank”</i></span>
              <span className="mt2 mb3 mb0-l"><span className="db dn-l pv2 ">SWIFT</span><i className="gray">RIKOLV2X</i></span>
              <span className="mt2"><span className="db dn-l pv2">Konta numurs</span><i className="gray">LV52 RIKO 0001 0801 7021 7</i></span>
              </div>
          </div>
        </div>


        <footer className="tc pb4">
          <span>© {new Date().getFullYear()} LM GROUP BUVE</span>
        </footer>
      </>
    )
  }
  