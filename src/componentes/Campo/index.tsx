import './Campo.css'

interface CampoProps {
    aoAlterado: (valor: string) => void;
    placeholder?: string;
    label: string;
    valor: string;
    obrigatorio?: boolean;
    typeCss?: 'text' | 'color';
}

// const Campo = ({ type = 'text', label, placeholder, valor, aoAlterado, obrigatorio = false }) => {
// const Campo = ({ type = 'text', label, placeholder, valor, aoAlterado, obrigatorio = false }: CampoProps) => {
const Campo = (props: CampoProps) => {

    const aoDigitado = (evento: React.ChangeEvent<HTMLInputElement>) => {
        props.aoAlterado(evento.target.value)
    }

    return (
        <div className={`campo-${props.typeCss}`}>
            <label>
                {props.label}
            </label>
            <input
                type={props.typeCss}
                value={props.valor}
                onChange={aoDigitado}
                required={props.obrigatorio}
                placeholder={props.placeholder} />
        </div>)
}

export default Campo