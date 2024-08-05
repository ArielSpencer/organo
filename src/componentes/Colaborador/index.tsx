import './Colaborador.css'
import { AiFillCloseCircle } from 'react-icons/ai';
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { IColaborador } from '../../compartilhado/interfaces/IColaborador';

interface ColaboradorProps {
    id: string;
    nome: string;
    imagem: string;
    cargo: string;
    data: string;
    corDeFundo: string;
    favorito: boolean;
    colaborador: IColaborador;
    aoDeletar: (id: string) => void;
    aoFavoritar: (id: string) => void;
}

const Colaborador = ({ id, nome, imagem, cargo, corDeFundo, favorito, colaborador, data, aoDeletar, aoFavoritar }: ColaboradorProps) => {
    function favoritar() {
        aoFavoritar(id)
    }

    const propsFavorito = { size: 35, onClick: favoritar }

    return (<div className="colaborador">
        <AiFillCloseCircle size={25} className="deletar" onClick={() => aoDeletar(id)} />
        <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
            <img src={imagem} alt={nome} />
        </div>
        <div className="rodape">
            <h4>{nome}</h4>
            <div className='favoritar'>
                {favorito
                    ? <FcLike {...propsFavorito} />
                    : <FcLikePlaceholder {...propsFavorito} />
                }
            </div>
            <h5>{cargo}</h5>
            <div className='container__data'>
                <h6>no time desde:</h6>
                <p>{new Date(data).toLocaleDateString()}</p>
            </div>
        </div>
    </div>)
}

export default Colaborador
