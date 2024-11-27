import facebook from '../../assets/facebook.png'
import intagram from '../../assets/instagram.png'
import youtube from '../../assets/youtube.png'
import twitter from '../../assets/Twitter.png'
import linkedin from '../../assets/linkedin.png'
import S from './footer.module.scss'

export default function footer() {
  return(
    <footer>
      <section className={S.boxRede}>
        <h3>4002-8922</h3>
        <nav>
          <a href=""> <img src={facebook} alt="logo facebook" /></a>
          <a href=""> <img src={twitter} alt="logo twitter" /></a>
          <a href=""> <img src={youtube} alt="logo youtube" /></a>
          <a href=""> <img src={linkedin} alt="logo linkedin" /></a>
          <a href=""> <img src={intagram} alt="" /></a>
        </nav>
      </section>
      <section className={S.boxEnd}>
        <p>Layout desenvolvido pela Vai Na Web para fins educativos - 2024</p>
      </section>
    </footer>
  )
}