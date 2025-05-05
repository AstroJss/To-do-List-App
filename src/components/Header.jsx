export function Header(props) {

    const { todos } = props
    const todosLength = todos.length
    const isTasksplural = todos.length != 1
    const taskOrTasks = isTasksplural ? "tasks" : "task"

    return (
        <header>
            <h1 className="text-gradient">
                You have { todosLength } open {taskOrTasks}.
            </h1>
        </header>
    )
}