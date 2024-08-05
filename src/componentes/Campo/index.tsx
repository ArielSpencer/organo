import './Campo.css'

interface CampoProps {
    aoAlterado: (valor: string) => void;
    placeholder?: string;
    label: string;
    valor: string;
    tipo?: 'text' | 'color' | 'password' | 'date' | 'number';
    obrigatorio?: boolean;
}

const Campo = ({ aoAlterado, placeholder, label, valor, obrigatorio = false, tipo = 'text' }: CampoProps) => {

    const aoDigitado = (evento: React.ChangeEvent<HTMLInputElement>) => {
        aoAlterado(evento.target.value)
    }

    return (
        <div className={`campo-${tipo}`}>
            <label>
                {label}
            </label>
            <input
                type={tipo}
                value={valor}
                onChange={aoDigitado}
                required={obrigatorio}
                placeholder={placeholder}
            />
        </div>)
}

export default Campo