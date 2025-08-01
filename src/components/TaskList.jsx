const TaskList = ({ tasks=[], onEdit, onDelete }) => {
    return (
        <>
            <div>
                <h1>Your Tasks</h1>
                {
                    tasks.length === 0 ? (
                        <p>No tasks available</p>
                    ) : (
                        <ul>
                            {
                                tasks.map((task, index) => (
                                    <li key={index} style={{ marginBottom: "10px" }}>
                                        <h4>{task.title}</h4>
                                        <p>{task.description}</p>
                                        <button onClick={() => onEdit(index)}>Edit</button>
                                        <button onClick={() => onDelete(index)}>Delete</button>
                                    </li>
                                ))
                            }
                        </ul>
                    )
                }
            </div>
        </>
    );
};

export default TaskList;