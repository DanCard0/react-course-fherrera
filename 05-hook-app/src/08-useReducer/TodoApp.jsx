import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";
import { useTodos } from "../hooks";

export const TodoApp = () => {
    const { todos, handleRemoveTodo, handleNewTodo, handleToggleTodo, calculatePendingTodos } = useTodos();

    return (
        <>
            <h1>TodoApp {todos.length}, <small>pendientes: {calculatePendingTodos()}</small></h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    <TodoList
                        todos={todos}
                        onRemoveTodo={handleRemoveTodo}
                        onToggleTodo={handleToggleTodo}
                    />
                </div>

                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />
                    <TodoAdd onNewTodo={handleNewTodo} />
                </div>
            </div>
        </>
    )
};
