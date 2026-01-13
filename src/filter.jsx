import { useTodo } from "./todocontext";

export default function FilterBar() {
  const { filter, setFilter, clearCompleted } = useTodo();

  return (
    <div className="flex gap-2 mt-4">
      {["all", "active", "completed"].map((f) => (
        <button
          key={f}
          onClick={() => setFilter(f)}
          className={`px-3 py-1 rounded-lg ${
            filter === f ? "bg-blue-600 text-white" : "bg-gray-200 text-black"
          }`}
        >
          {f}
        </button>
      ))}
      <button
        onClick={clearCompleted}
        className="ml-auto px-3 py-1 rounded-lg bg-red-600 text-white"
      >
        Clear Completed
      </button>
    </div>
  );
}
