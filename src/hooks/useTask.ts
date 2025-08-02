"use client";

import { useState, useEffect, FormEvent } from "react";
import { getTasks, createTask, deleteTask } from "../services/taskService";
import { Task } from "../types/task";

export function useTask() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [title, setTitle] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(function () {
    fetchTasks();
  }, []);

  async function fetchTasks() {
    try {
      setLoading(true);
      const tasks = await getTasks();
      setTasks(tasks);
    } catch (error) {
      setError("Failed to fetch tasks");
    } finally {
      setLoading(false);
    }
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!title.trim()) return;
    setLoading(true);
    setError(null);
    try {
      const newTask = await createTask({ title, completed: false, id: "" });
      setTasks([...tasks, newTask]);
      setTitle("");
    } catch (error) {
      setError("Failed to create task");
    } finally {
      setLoading(false);
    }
  }

  async function handleDelete(id: string) {
    setLoading(true);
    setError(null);
    try {
      await deleteTask(id);
      setTasks(tasks.filter((task) => task.id !== id));
    } catch (error) {
      setError("Failed to delete task");
    } finally {
      setLoading(false);
    }
  }

  async function handleToggle(id: string) {
    setLoading(true);
    setError(null);
    try {
      // Busca la tarea y cambia su estado
      const updatedTasks = tasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      );
      setTasks(updatedTasks);
    } catch (error) {
      setError("Error al alternar tarea");
    } finally {
      setLoading(false);
    }
  }

  return {
    tasks,
    title,
    setTitle,
    loading,
    error,
    handleSubmit,
    handleDelete,
    handleToggle,
  };
}
