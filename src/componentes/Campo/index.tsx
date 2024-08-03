import './Campo.css'

interface CampoProps {
    aoAlterado: (valor: string) => void;
    placeholder?: string;
    label: string;
    valor: string;
    typeCss: 'text' | 'color';
    obrigatorio?: boolean;
}

const Campo = ({ aoAlterado, placeholder, label, valor, typeCss, obrigatorio = false }: CampoProps) => {

    const aoDigitado = (evento: React.ChangeEvent<HTMLInputElement>) => {
        aoAlterado(evento.target.value)
    }

    return (
        <div className={`campo-${typeCss}`}>
            <label>
                {label}
            </label>
            <input
                type={typeCss}
                value={valor}
                onChange={aoDigitado}
                required={obrigatorio}
                placeholder={placeholder} />
        </div>)
}

export default Campo