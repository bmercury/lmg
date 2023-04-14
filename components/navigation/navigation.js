import css from "./navigation.module.scss"
import Link from 'next/link'
import { useRouter } from "next/router";


export default function Navigation() {

  const router = useRouter();

    return (
      <>
        <div className="absolute flex w-100 mt5 justify-center  items-center flex-column z-1">
          <div className="mb3">
            <Link  href="/">
                <img alt="Logo" className={css.logo} src="/img/lmg.webp"></img>
            </Link>
          </div>
          <nav className={css.navigation+" dn db-l"}>
            <Link  className={router.pathname == "/" ? "active" : "navlink"} href="/">Sākums</Link>
            <Link className={router.pathname == "/buvnieciba" ? "active" : "navlink"} href="/buvnieciba">Būvniecība</Link>
            <Link className={router.pathname == "/realdeal" ? "active" : "navlink"} href="/realdeal">RealDeal</Link>
            <Link className={router.pathname == "/warmotech" ? "active" : "navlink"} href="/warmotech">Warmotech</Link>
            <Link className={router.pathname == "/teriva" ? "active" : "navlink"} href="/teriva">Teriva</Link>
            <Link className="navlink" href="#kontakti">Kontakti</Link>
          </nav>
        </div>
      </>
    )
  }
  