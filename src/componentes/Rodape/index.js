import './Rodape.css'

const Rodape = () => {
    return (<footer className="footer">
        <section className="social">
            <ul>
                <li>
                    <a href="https://www.linkedin.com/in/arielspencer-log/">
                        <img src="../imagens/linkedin.png" alt="linkedin"/>
                    </a>
                </li>
                <li>
                    <a href="https://github.com/ArielSpencer">
                        <img src="../imagens/github.png" alt="github"/>
                    </a>
                </li>
                <li>
                    <a href="https://instagram.com/arielspencer.tech">
                        <img src="../imagens/instagram.png" alt="instagram"/>
                    </a>
                </li>
            </ul>
        </section>

        <section>
            <img src="../imagens/logo.png" alt="" />
        </section>

        <section>
            <p>
                Desenvolvido por Ariel Spencer.
            </p>
        </section>
    </footer>)
}

export default Rodape
