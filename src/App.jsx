import FilterBar from "./filter.jsx";
import { TodoProvider, useTodo } from "./todocontext.jsx";
import TodoForm from "./todoform.jsx";
import TodoItem from "./todoitem.jsx";

function TodoList() {
  const { filteredTodos, activeCount, completedCount } = useTodo();

  return (
    <div className="bg-[#172842] min-h-screen py-8">
      <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
        <h1 className="text-2xl font-bold text-center mb-6">
          Manage Your Todos
        </h1>
        <TodoForm />
        <FilterBar />
        <p className="text-sm mt-2">
          Active: {activeCount} | Completed: {completedCount}
        </p>
        <div className="flex flex-col gap-y-3 mt-4">
          {filteredTodos.length === 0 ? (
            <p className="text-center opacity-60">No todos yet</p>
          ) : (
            filteredTodos.map((todo) => <TodoItem key={todo.id} todo={todo} />)
          )}
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <TodoProvider>
      <TodoList />
    </TodoProvider>
  );
}
