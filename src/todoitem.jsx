import { useState } from "react";
import { useTodo } from "./todocontext";

export default function TodoItem({ todo }) {
  const { updateTodo, deleteTodo, toggleComplete } = useTodo();
  const [isEditing, setIsEditing] = useState(false);
  const [msg, setMsg] = useState(todo.todo);

  const handleEdit = () => {
    updateTodo(todo.id, { ...todo, todo: msg });
    setIsEditing(false);
  };

  const handleEditClick = () => {
    if (todo.completed) return;
    isEditing ? handleEdit() : setIsEditing(true);
  };

  return (
    <div className="flex items-center gap-2 border border-gray-300 rounded-lg p-2 bg-white/10">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleComplete(todo.id)}
      />

      <input
        type="text"
        value={msg}
        onChange={(e) => setMsg(e.target.value)}
        readOnly={!isEditing}
        className={`flex-1 bg-transparent outline-none ${
          todo.completed ? "line-through opacity-60" : ""
        }`}
      />

      <button onClick={handleEditClick} disabled={todo.completed}>
        {isEditing ? "📁" : "✏️"}
      </button>

      <button onClick={() => deleteTodo(todo.id)}>❌</button>
    </div>
  );
}
