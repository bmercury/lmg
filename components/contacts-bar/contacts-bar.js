import css from "./contacts-bar.module.scss"

export default function ContactsBar() {
  return (
    <>
      <div className={css.bar+" w-100 flex pa3 absolute z-1"}>
        <div className="w-50">
          <a className="arctic link pr3" href="tel:+371 22 342 440" title="Zvanīt">22 342 440</a>
          <a className="arctic link" href="mailto:info@lmgroup.lv" title="Sūtīt e-pastu">info@lmgroup.lv</a>
        </div>
        <div className="w-50 flex justify-end">
          <a className="arctic link pr3" href="https://www.instagram.com/lmgroup" target="_blank" title="Instagram"><i class="fa-brands fa-instagram"></i></a>
          <a className="arctic link" href="https://www.facebook.com/lmgroupbuve" target="blank" title="Facebook"><i class="fa-brands fa-square-facebook"></i></a>
        </div>
      </div>
    </>
  )
}
