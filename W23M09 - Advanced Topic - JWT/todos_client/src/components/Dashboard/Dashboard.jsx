import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Todo from "../Todo/Todo";

const Dashboard = () => {
    
    const [todos, setTodos] = useState([]);
    const navigation = useNavigate();

    useEffect(() => {
        const fetchUserTodos = async () => {
            const URL = "http://localhost:8080/todosByUserId";
            const settings = {
                method: 'GET',
                headers: {
                    usertoken: localStorage.getItem('token')
                }
            }

            const response = await fetch(URL, settings)
            if(!response.ok){
                navigation("/login");
            }
            else{
                const data = await response.json();
                setTodos(data.todos);
            }
        }
        fetchUserTodos();
    }, []);

    const logout = () => {
        localStorage.removeItem("token");
        navigation("/login");
    }

    return(
        <>
            {(todos.length !== 0) ? 
                <>
                    <h2> Your list of todos </h2>
                    {todos.map((todo, index) => {
                        return(<Todo key={index} description={todo.description} status={todo.status}/>)
                    })}
                    <button onClick={logout}> Logout </button>
                </> : ""
            }
        </>
    );
}

export default Dashboard;