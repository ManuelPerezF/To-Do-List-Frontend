import { Task } from '../types/task';

const API_URL = 'http://localhost:4000/api/tasks';

export async function getTasks(): Promise<Task[]> {
    try {
        const res = await fetch(API_URL);
        if (!res.ok) {
            throw new Error('Failed to fetch tasks');
        }
        const data = await res.json();
        return data;
    } catch (error) {
        throw new Error('Failed to fetch tasks');
    }
}

export async function createTask(task: Task): Promise<Task> {
    try {
        const res = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(task),
        });
        if (!res.ok) {
            throw new Error('Failed to create task');
        }
        const data = await res.json();
        return data;
    } catch (error) {
        throw new Error('Failed to create task');
    }
}

export async function deleteTask(id: string): Promise<void> {
    try {
        const res = await fetch(`${API_URL}/delete/${id}`, {
            method: 'DELETE',
        });
        if (!res.ok) {
            throw new Error('Failed to delete task');
        }
    } catch (error) {
        throw new Error('Failed to delete task');
    }
}