import './Time.css';
import { ConverterHexParaRGBA } from '../ManipularCor';
import { IColaborador } from '../../compartilhado/interfaces/IColaborador';
import Colaborador from '../Colaborador';

interface TimeProps {
    time: {
        id: string;
        nome: string;
        cor: string;
    };
    colaboradores: IColaborador[];
    mudarCor: (cor: string, id: string) => void;
    aoFavoritar: (id: string) => void;
    aoDeletar: (id: string) => void;
}

const Time = ({ time, colaboradores, mudarCor, aoFavoritar, aoDeletar }: TimeProps) => {
    return (
        colaboradores.length > 0 && (
            <section className='time' style={{ backgroundColor: ConverterHexParaRGBA(time.cor) }}>
                <input
                    onChange={evento => mudarCor(evento.target.value, time.id)}
                    value={time.cor}
                    type='color'
                    className='input-cor'
                />
                <h3 style={{ borderColor: time.cor }}>{time.nome}</h3>
                <div className='colaboradores'>
                    {colaboradores.map((colaborador, indice) =>
                        <Colaborador
                            id={colaborador.id}
                            key={indice}
                            nome={colaborador.nome}        // Adicionando propriedades
                            imagem={colaborador.imagem}
                            cargo={colaborador.cargo}
                            corDeFundo={time.cor}
                            favorito={colaborador.favorito}
                            colaborador={colaborador}
                            aoDeletar={aoDeletar}
                            aoFavoritar={aoFavoritar}
                        />
                    )}
                </div>
            </section>
        )
    );
}

export default Time;