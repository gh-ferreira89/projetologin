import { useContext, useState } from "react"
import { AuthContext } from "../../contexts/Auth/AuthContext";
import { useNavigate } from "react-router-dom";


export const Login = () => {
    const auth = useContext(AuthContext);
    const navigate = useNavigate();


    const [email, setEmail] = useState('');
    const [password, setPassaword] = useState('');


    const handleLogin = async () => {
        if (email && password) {
            const isLogged = await auth.signin(email, password);
            if (isLogged) {
                navigate('/');
            } else {
                alert ("Nao deu certo");
            }
        }

    }

    return (
        <div>
            <h2>Pagina fechada</h2>

            <input
            type="text"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Digite seu email"
            />

            <input
            type="passaword"
            value={password}
            onChange={e => setPassaword(e.target.value)}
            placeholder="Digite sua senha"
            />

            <button onClick={handleLogin}>Logar</button>

        </div>
    )
}