import css from "./mobile-nav.module.scss"
import {kontakti} from "../../data.json"

export default function MobileNavigation({phone=kontakti.matiss.phone, email=kontakti.matiss.email}) {
    return (
      <>
        <div className={css.wrapper+" flex justify-around items-center pv3 ph2"}>
            <a href={"mailto:"+email} className={css.mail+" w-third tc"}><i class="fa-sharp fa-solid fa-envelope"></i></a>
            <a href={"tel:"+phone} className={css.phone+" w-third tc"}><i class="fa-solid fa-phone"></i></a>
            <button id="hamburger" onClick={openNav} className={css.hamburger+" w-third"}><i class="fa-sharp fa-solid fa-bars"></i></button>
            <button id="times" onClick={closeNav} className={css.hamburger+" dn w-third"}><i class="fa-sharp fa-solid fa-times"></i></button>
        </div>

        <div id="drawer" className="drawer navclosed">
            <nav className="navigation">
                <a className="arctic link" href="/" title="Sākumlapa">Sākums</a>
                <a className="arctic link" href="/buvnieciba" title="Būvniecības Pakalpojumi">Būvniecība</a>
                <a className="arctic link" href="/realdeal" title="RealDeal Sadarbība">RealDeal</a>
                <a className="arctic link" href="/warmotech" title="Warmotech Sadarbība">Warmotech</a>
                <a className="arctic link" href="/teriva" title="Teriva Pārsegums">Teriva</a>
                <a className="arctic link" href="#kontakti" title="LM Group Kontakti">Kontakti</a>
            </nav>
        </div>
      </>
    )
  }

  function openNav() {
    var nav = document.getElementById("drawer");
    nav.classList.remove("navclosed");
    document.getElementById("hamburger").style.display = 'none';
    document.getElementById("times").style.display = 'block';
  }

  function closeNav() {
    var nav = document.getElementById("drawer");
    nav.classList.add("navclosed");
    document.getElementById("times").style.display = 'none';
    document.getElementById("hamburger").style.display = 'block';
  }