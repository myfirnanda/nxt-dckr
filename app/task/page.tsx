const data = [
    { id: 1, title: 'Task 1', completed: false },
    { id: 2, title: 'Task 2', completed: true },
    { id: 3, title: 'Task 3', completed: false },
]

export default function TaskPage() {
    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Task List</h1>
            <ul>
                {data.map((task) => (
                    <li key={task.id} className="mb-2">
                        <span className={task.completed ? 'line-through text-gray-500' : ''}>
                            {task.title}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
}