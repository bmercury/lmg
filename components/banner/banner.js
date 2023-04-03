import css from "./banner.module.scss"
import 'animate.css';

export default function Banner({children, image, title}) {
    return (
      <>
        <div
          className={css.banner+" flex flex-column items-center justify-center"}
          style={{
            backgroundImage: `url(${"/img/"+image})`,
            width: '100%',
            height: '100%',
            backgroundRepeat: "no-repeat"
          }}
        >
          <div className={css.tint+" flex flex-column items-center justify-center"}>

          <h1 className="f1 mb1 gold uppercase pt5 animate__animated animate__fadeInUp">{title}</h1>
            <p className="arctic w-90 w-70-l tc animate__animated animate__fadeInUp">{children}</p>
          </div>
        </div>
      </>
    )
  }
  