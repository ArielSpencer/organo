import { useState } from 'react';
import Botao from '../Botao';
import Campo from '../Campo';
import ListaSuspensa from '../ListaSuspensa';
import './Formulario.css';
import { v4 as uuidv4 } from 'uuid';
import { GerarHex } from '../ManipularCor';
import { IColaborador } from '../../compartilhado/interfaces/IColaborador';

interface FormularioProps {
    times: string[];
    aoCadastrar: (colaborador: IColaborador) => void;
    cadastrarTime: (time: { nome: string; cor: string }) => void;
}

const Formulario = ({ times, aoCadastrar, cadastrarTime }: FormularioProps) => {
    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState('');
    const [nomeTime, setNomeTime] = useState('');
    const [corTime, setCorTime] = useState(GerarHex);

    const genRanHex = (size: number) => [...Array(size)].map(() => Math.floor(Math.random() * 16).toString(16)).join('');

    const aoSubmeter = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault();
        aoCadastrar({
            nome,
            cargo,
            imagem,
            time,
            id: uuidv4(),
            favorito: false,
        });

        setNome('');
        setCargo('');
        setImagem('');
        setTime('');
    };

    return (
        <section className="formulario-container">
            {/* Novo Colaborador */}
            <form className="formulario" onSubmit={aoSubmeter}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <Campo
                    typeCss='text'
                    obrigatorio={true}
                    label='Nome'
                    placeholder='Digite seu nome'
                    valor={nome}
                    aoAlterado={valor => setNome(valor)} />
                <Campo
                    typeCss='text'
                    obrigatorio={true}
                    label='Cargo'
                    placeholder='Digite seu cargo'
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)} />
                <Campo
                    typeCss='text'
                    label='Imagem'
                    placeholder='Informe o endereço da imagem'
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)} />
                <ListaSuspensa
                    typeCss='text'
                    obrigatorio={true}
                    label='Times'
                    items={times}
                    valor={time}
                    aoAlterado={valor => setTime(valor)} />
                <Botao>Criar card</Botao>
            </form>
            {/* Novo Time */}
            <form className="formulario" onSubmit={(evento) => {
                evento.preventDefault();
                cadastrarTime({ nome: nomeTime, cor: corTime });
                setNomeTime('');
                setCorTime(`#${genRanHex(6)}`);
            }}>
                <h2>Preencha os dados para criar um novo time.</h2>
                <Campo
                    typeCss='text'
                    obrigatorio
                    label='Nome'
                    placeholder='Digite o nome do time'
                    valor={nomeTime}
                    aoAlterado={valor => setNomeTime(valor)} />
                <Campo
                    obrigatorio
                    typeCss='color'
                    label='Cor'
                    valor={corTime}
                    aoAlterado={valor => setCorTime(valor)} />
                <Botao>Criar novo time</Botao>
            </form>
        </section>
    );
}

export default Formulario;