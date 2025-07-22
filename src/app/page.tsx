"use client";
import { Task } from "../types/task";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">To-Do List</h1>
      <div className="mt-8">
        <p className="text-lg">¡Bienvenido a tu lista de tareas!</p>
      </div>
    </main>
  );
}