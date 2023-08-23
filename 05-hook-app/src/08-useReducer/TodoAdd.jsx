import { useForm } from "../hooks/useForm";

export const TodoAdd = ({ onNewTodo }) => {
    const { onInputChange, onResetForm, formState } = useForm({
        description: '',
    });

    const { description } = formState;

    const onFormSubmit = (event) => {
        event.preventDefault();
        if (description.length <= 1) return;

        const newTodo = {
            id: new Date().getTime(),
            done: false,
            description,
        }

        onNewTodo(newTodo);
        onResetForm();
    };

    return (
        <form onSubmit={onFormSubmit}>
            <input
                type="text"
                placeholder="Qué hay que hacer?"
                className="form-control"
                name="description"
                value={description}
                onChange={onInputChange}
            />

            <button
                type="submit"
                className="btn btn-outline-primary mt-1"
            >
                Agregar
            </button>
        </form>
    )
};

