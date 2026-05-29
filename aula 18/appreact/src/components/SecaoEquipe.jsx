import { useEffect, useState } from "react";
import CartaoPerfil from "./CartaoPerfil.jsx";

function SecaoEquipe() {

    const [funcionarios, setFuncionarios] = useState([]);
    const [busca, setBusca] = useState("");


    const equipeFormatada = funcionarios.map(funcionario => ({
        nome: funcionario.name,
        cargo: funcionario.company.name,
        bio: `Email: ${funcionario.email} | Telefone: ${funcionario.phone}`,
        habilidades: ['Habilidade 1', 'Habilidade 2', 'Habilidade 3'],
        imagem: `https://i.pravatar.cc/150?u=${funcionario.id}`
    }));

    useEffect(() => {
        async function fetchFuncionarios() {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                const equipe = await response.json();
                setFuncionarios(equipe);
            } catch (error) {
                console.error('Erro ao carregar funcionários:', error);
            }
        }

        fetchFuncionarios();
    }, []);

    const equipeFiltrada = equipeFormatada.filter(funcionario =>
        funcionario.nome.toLowerCase().includes(busca.toLowerCase())
    );

    return (
<div>

<div className="campo-busca">

<span className="icone">🔍</span>

<input
    type="text"
    placeholder="Buscar funcionário..."
    value={busca}
    onChange={(e) => setBusca(e.target.value)}
/>

</div>
    
        <div className="grade">
            {equipeFiltrada.map(funcionario => (
                <CartaoPerfil
                key={funcionario.key}
                    {...funcionario}
                />
            ))}
        </div>
        </div>
    );
}

export default SecaoEquipe;