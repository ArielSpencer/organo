import React from 'react';
import './Botao.css';

interface BotaoProps {
    texto: string;
}

const Botao = (props: BotaoProps) => {
    return <button className="botao">
        {props.texto}
    </button>
};

export default Botao;