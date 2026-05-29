import funcionarios, { useEffect } from "react"

function SecaoEquipe() {

    const [funcionarios, setFuncionarios] = useState([])
    /* useEffect(() => {
        fetch('/api/funcionarios')
          .then(response => response.json())
          .then(data => setFuncionarios(data))
          .catch(error => console.error('Erro ao carregar funcionários:', error));
    },[])
    }
     */
    useEffect(() => {
        async function fetchFuncionarios() {
            try {
                const response = await fetch('/api/funcionarios');
                const equipe = await response.json();
                setFuncionarios(equipe);
            } catch (error) {
                console.error('Erro ao carregar funcionários:', error);
            }
        }
        fetchFuncionarios();
    }, [])

        return (
            <div className="grade">
                {funcionarios.map(funcionario => (
                    <CartaoPerfil
                        key={funcionario.nome}
                        imagem={funcionario.img}
                        nome={funcionario.nome}
                        cargo={funcionario.cargo}
                        bio={funcionario.bio}
                        habilidades={funcionario.habilidades}

                    />
                ))}
            </div>
