"use client";
import { useTask } from "../hooks/useTask";

export default function Home() {
  const { tasks, title, setTitle, loading, error, handleSubmit, handleDelete, handleToggle } = useTask();

  return (
    <main className="min-h-screen flex flex-col items-center bg-gradient-to-b from-blue-100 to-blue-300 py-16 px-4">

      <section className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8">
        
        <h1 className="text-3xl font-extrabold mb-8 text-blue-700 text-center">
          <span className="inline-block align-middle mr-2">📝</span>
          To-Do List
        </h1>

        <form onSubmit={handleSubmit} className="flex gap-2 mb-8">
          <input
            className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300 bg-gray-50 transition text-black placeholder-gray-400"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Añade una nueva tarea..."
            disabled={loading}
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-blue-700 transition disabled:opacity-60"
            disabled={loading}
          >
            {loading ? "Agregando..." : "Agregar"}
          </button>
        </form>

        {error && <div className="text-red-500 mb-4 text-center">{error}</div>}
        <ul className="space-y-2">
          {tasks.map((task) => (
            <li
              key={task.id}
              className="flex justify-between items-center bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 group transition hover:shadow"
            >
              <span
                className={`truncate text-base ${
                  task.completed
                    ? "line-through text-gray-300"
                    : "text-gray-800"
                }`}
                title={task.title}
              >
                {task.title}
              </span>
              <div className="flex gap-2">
                <button
                  onClick={() => handleToggle(task.id)}
                  className={`text-xs font-semibold px-3 py-1 rounded transition border ${
                    task.completed
                      ? "bg-green-50 text-green-700 border-green-200 hover:bg-green-100"
                      : "bg-yellow-50 text-yellow-700 border-yellow-200 hover:bg-yellow-100"
                  }`}
                  disabled={loading}
                  aria-label="Alternar completado"
                >
                  {task.completed ? "✔ Terminado" : "⏳ Pendiente"}
                </button>
                <button
                  onClick={() => handleDelete(task.id)}
                  className="opacity-70 group-hover:opacity-100 text-red-400 hover:text-red-600 text-xs font-semibold ml-2 transition"
                  disabled={loading}
                  aria-label="Borrar tarea"
                  title="Borrar tarea"
                >
                  🗑
                </button>
              </div>
            </li>
          ))}
          {tasks.length === 0 && (
            <li className="text-gray-400 text-center py-4">
              No hay tareas pendientes.
            </li>
          )}
        </ul>
      </section>
    </main>
  );
}