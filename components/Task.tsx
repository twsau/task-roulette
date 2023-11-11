export const Task: React.FC<Task> = (task) => (
  <div className="flex justify-between" key={`task-${task.id}`}>
    {task.text}
    {task.done}
  </div>
);
