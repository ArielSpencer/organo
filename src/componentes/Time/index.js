import Colaborador from '../Colaborador'
import './Time.css'
import { ConverterHexParaRGBA } from '../ManipularCor'

const Time = ({ time, colaboradores, aoDeletar, mudarCor, aoFavoritar }) => {
    return (

        colaboradores.length > 0 && <section className='time' style={{ backgroundColor: ConverterHexParaRGBA(time.cor) }}>
            <input onChange={evento => mudarCor(evento.target.value, time.id)} value={time.cor} type='color' className='input-cor' />
            <h3 style={{ borderColor: time.cor }}>{time.nome}</h3>
            <div className='colaboradores'>
                {colaboradores.map((colaborador, indice) => <Colaborador id={colaborador.id} key={indice} colaborador={colaborador} corDeFundo={time.cor} aoDeletar={aoDeletar} aoFavoritar={aoFavoritar} />)}
            </div>
        </section>

    )
}

export default Time
