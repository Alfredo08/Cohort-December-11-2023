import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigation = useNavigate();

    const handleLogin = async (event) => {
        event.preventDefault();

        const URL = "http://localhost:8080/login";
        const settings = {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({email, password})
        }

        const response = await fetch(URL, settings);
        const data = await response.json();
        if(! response.ok){
            alert(data.message);
        }
        else{
            localStorage.setItem('token', data.token);
            navigation('/dashboard');
        }
    }

    return(
        <>
            <h2> Login </h2>
            <form onSubmit={handleLogin}>
                <div>
                    <label htmlFor="email">
                        Email:
                    </label>
                    <input type="text" 
                           id="email"
                           name="email"
                           value={email}
                           onChange={(event) => setEmail(event.target.value)} />
                </div>
                <div>
                    <label htmlFor="password">
                        Password:
                    </label>
                    <input type="password" 
                           id="password"
                           name="password"
                           value={password}
                           onChange={(event) => setPassword(event.target.value)} />
                </div>
                <button>
                    Login
                </button>
            </form>
        </>
    );
}

export default Login;