import './ListaSuspensa.css';

interface ListaSuspensaProps {
    aoAlterado: (valor: string) => void
    label: string
    obrigatorio: boolean
    valor: string
    items: string[]
    tipo?: 'text' | 'color' | 'password' | 'date' | 'number';
}

const ListaSuspensa = ({ label, items, valor, aoAlterado, obrigatorio = false }: ListaSuspensaProps) => {
    return (<div className="lista-suspensa">
        <label>{label}</label>
        <select
            required={obrigatorio}
            value={valor}
            onChange={evento => aoAlterado(evento.target.value)}
        >
            <option value="" disabled>Selecione uma opção...</option>
            {items.map(item => <option key={item}>{item}</option>)}
        </select>
    </div>)
}

export default ListaSuspensa
