import S from './inicio.module.scss'
import article1 from '../../assets/article1.png'
import article2 from '../../assets/article2.png'
import article3 from '../../assets/article3.png'
import article4 from '../../assets/article4.png'

export default function Inicio() {
  return(
    <main>
      <section className={S.banner}>
        <h2>VENHA FAZER PARTE DA MAIOR REDE DE DOAÇÃO</h2>
      </section>
      <section className={S.devoDoar}>
        <div>
          <h2>Por que devo doar?</h2>
        </div>
        <section className={S.boxCard}>
          <article>
            <img src={article1} alt="imagem onde estão quatro pessoas conectadas" />
            <p>Oferece livros a quem não tem acesso, ajudando a reduzir a exclusão social.</p>
          </article>
          <article>
            <img src={article2} alt="imagem de uma pessoa lendo um livro" />
            <p>Estimula o hábito da leitura e o aprendizado contínuo.</p>
          </article>
          <article>
            <img src={article3} alt="imagem que representa a força da união" />
            <p>Fornece conhecimento e inspiração, permitindo que indivíduos transformem suas vidas.</p>
          </article>
          <article>
            <img src={article4} alt="imagem de uma balança" />
            <p>Garante que todos, independentemente de sua condição, tenham oportunidades de aprendizado.</p>
          </article>
        </section>
      </section>
    </main>
  )
}