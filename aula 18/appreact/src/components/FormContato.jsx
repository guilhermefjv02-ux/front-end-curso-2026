import { useState } from "react";
import "./FormContato.css";

function FormContato() {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [mensagem, setMensagem] = useState("");
    const [enviado, setEnviado] = useState(false);

    // Nível 1: Função para limpar os campos do formulário
    function handleLimpar() {
        setNome("");
        setEmail("");
        setMensagem("");
    }

    function handleSubmit(e) {
        e.preventDefault();

        // Validação de campos vazios
        if (!nome || !email || !mensagem) {
            alert("Por favor, preencha todos os campos.");
            return;
        }

        // Nível 2: Validação de tamanho mínimo da mensagem
        if (mensagem.length < 20) {
            alert("A mensagem deve ter pelo menos 20 caracteres.");
            return;
        }

        setEnviado(true);
    }

    if (enviado) {
        return (
            <div>
                <h3>Obrigado por entrar em contato, {nome}</h3>
                <p>Recebemos sua mensagem e entraremos em contato em breve.</p>
                <button onClick={() => {
                    setEnviado(false);
                    setNome('');
                    setEmail('');
                    setMensagem('');
                }}>
                    Enviar nova mensagem
                </button>
            </div>
        );
    }

    // ... restante do código acima ...

    return (
        // Adicionamos o Flexbox aqui
        <form onSubmit={handleSubmit}>
            <label>
                Nome:
                <br />
                <input
                    type="text"
                    value={nome}
                    onChange={e => setNome(e.target.value)}
                    placeholder="Digite seu nome"
                />
            </label>


            <label>
                Email:
                <br />
                <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="Digite seu email"
                />
            </label>


            <label>
                Mensagem:
                <br />
                <textarea
                    value={mensagem}
                    onChange={e => setMensagem(e.target.value)}
                    placeholder="Digite sua mensagem"
                />
            </label>
            <p>
                {mensagem.length} / 200 caracteres
            </p>


            {/* Agrupando os botões para ficarem juntos */}
            <div>
                <button type="submit">Enviar</button>
                <button type="button" onClick={handleLimpar}>Limpar</button>
            </div>
        </form>
    );
}

export default FormContato;