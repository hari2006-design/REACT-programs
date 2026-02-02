import './to-do-card.css';

export default function ToDoCard({ task, onDelete, onToggle }) {
  return (
    <div className="todo-card">
      <h2>{task.text}</h2>
      <div className="task-actions">
        <button onClick={() => onToggle(task.id)}>
          {task.completed ? 'Mark Incomplete' : 'Mark Complete'}
        </button>
        <button onClick={() => onDelete(task.id)}>Delete</button>
      </div>
      <div className={`task-status ${task.completed ? 'completed' : ''}`}>
        {task.completed ? 'Completed' : 'Pending'}
      </div>
    </div>
  );
}
