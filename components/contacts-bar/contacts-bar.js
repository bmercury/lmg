import css from "./contacts-bar.module.scss"
import {kontakti} from "../../data.json"

export default function ContactsBar({phone=kontakti.matiss.phone, email=kontakti.matiss.email}) {
  return (
    <>
      <div className={css.bar+" w-100 flex pa3 absolute z-1"}>
        <div className="w-50">
          <a className="arctic link pr3" href={"tel:"+phone} title="Zvanīt">{phone}</a>
          <a className="arctic link" href={"mailto:info@lmgroup.lv"+email} title="Sūtīt e-pastu">{email}</a>
        </div>
        <div className="w-50 flex justify-end">
          <a className="arctic link pr3" href="https://www.instagram.com/lmgrouplatvija" target="_blank" title="Instagram"><i class="fa-brands fa-instagram"></i></a>
          <a className="arctic link" href="https://www.facebook.com/lmgrouplatvija" target="blank" title="Facebook"><i class="fa-brands fa-square-facebook"></i></a>
        </div>
      </div>
    </>
  )
}
