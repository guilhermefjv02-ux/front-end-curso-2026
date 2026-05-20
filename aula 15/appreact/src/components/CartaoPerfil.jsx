import './CartaoPerfil.css'

function CartaoPerfil() {

    const nome = "Guilherme Franchini"
    const cargo = " Estudante de Programação RJ"
    const bio = "Guilherme Franchini é estudante de programação e apaixonado por tecnologia, sempre buscando aprender novas linguagens, ferramentas e tendências do desenvolvimento de software. Dedica seu tempo ao estudo, criação de projetos e aprimoramento constante das suas habilidades, com foco em crescer profissionalmente na área da tecnologia e transformar ideias em soluções criativas e funcionais."
    const habilidades = ['excel', 'java', 'world', 'phytom']

    return (
        <div className="cartao">
            <img
                className='cartao-foto'

                src='https://placehold.co/150x150'

                alt={`foto de ${nome}`}
            />
            <h2 className='cartao-nome'>{nome}</h2>
            <p className='cartao-cargo'>{cargo}</p>
            <p className='cartao-bio'>{bio}</p>
            <ul className='cartao-habilidades'>

                {habilidades.map((habilidade, index) => (
                    <li key={index} className='cartao-habilidade'>{habilidade}</li>
                ))}
            </ul>
        </div>
    )
}
export default CartaoPerfil