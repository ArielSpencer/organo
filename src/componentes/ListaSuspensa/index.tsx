import './ListaSuspensa.css';

interface ListaSuspensaProps {
    aoAlterado: (valor: string) => void
    label: string
    obrigatorio: boolean
    valor: string
    items: string[]
}

const ListaSuspensa = ({ label, items, valor, aoAlterado, obrigatorio = false }: ListaSuspensaProps) => {
    return (<div className="lista-suspensa">
        <label>{label}</label>
        <select
            required={obrigatorio}
            value={valor}
            onChange={evento => aoAlterado(evento.target.value)}
        >
            <option />
            {items.map(item => <option key={item}>{item}</option>)}
        </select>
    </div>)
}

export default ListaSuspensa
