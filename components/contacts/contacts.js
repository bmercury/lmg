import css from "./contacts.module.scss"
import {kontakti} from "../../data.json"

export default function Contacts() {
    return (
      <>
        <div id="kontakti" className={css.contacts+" flex flex-column items-center pb5 pv6-l"}>
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
                <h3>{kontakti.roberts.name}</h3>
                <a className="link" href={"tel:"+kontakti.roberts.phone} title="Zvanīt">{kontakti.roberts.phone}</a>
                <a className="link" href={"mailto:"+kontakti.roberts.email} title="Sūtīt e-pastu">{kontakti.roberts.email}</a>
                <span className="gray mt2 f6">{kontakti.roberts.role}<br/>{kontakti.roberts.role2}</span>
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
        </div>
        <footer className="tc pb4">
          <span>© {new Date().getFullYear()} LM GROUP BUVE</span>
        </footer>
      </>
    )
  }
  