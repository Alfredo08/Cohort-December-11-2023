
const Todo = ({description, status}) => {
    return(
        <>
            <h3> {description} </h3>
            <p> Status - {status} </p>
        </>
    );
}

export default Todo;