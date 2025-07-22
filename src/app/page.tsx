import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Welcome to the Task Manager</h1>
      <p className="mt-4 text-lg">Manage your tasks efficiently!</p>
      <Image
        src="/task-manager.png"
        alt="Task Manager"
        width={500}
        height={300}
        className="mt-8 rounded-lg shadow-lg"
      />
    </main>
  );
}
