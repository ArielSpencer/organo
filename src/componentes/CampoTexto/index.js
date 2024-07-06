import './CampoTexto.css'

const CampoTexto = (props) => {
    const placeholderModificado = `${props.placeholder}.` // ?Para usar template string podemos adicionar o props como uma const, mas não é necessário.

    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input placeholder={placeholderModificado}/>
        </div>
    )
}

export default CampoTexto;