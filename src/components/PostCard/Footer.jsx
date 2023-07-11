import '../../styles/Footer.css'

export default function Footer({userId}) {
    return (
        <code className='footer'>
            Autor: {
                userId == 1 ? 'João Silva' :
                    userId == 2 ? 'Maria Santos' :
                        userId == 3 ? 'Pedro Oliveira' :
                            userId == 4 ? 'Ana Pereira' :
                                userId == 5 ? 'Carlos Souza' :
                                    userId == 6 ? 'Lúcia Almeida' :
                                        userId == 7 ? 'Fernando Barbosa' :
                                            userId == 8 ? 'Mariana Costa' :
                                                userId == 9 ? 'Rafaela Rocha' : 'Daniel Martins'}
        </code>
    )
}