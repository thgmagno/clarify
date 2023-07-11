import './styles.css'

export default function Button({ texto, onClick, disabled }) {
    return (
        <button
            className='btn-navegacao'
            onClick={onClick}
            disabled={disabled}
        >
            {texto}
        </button>
    )
}