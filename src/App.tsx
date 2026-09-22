import Header from "./componenets/Header";
import Footer from "./componenets/Footer";
import styles from "./module/TaskBoard.module.css";
import type { NewTask, Task } from "./types/Task.ts";
import TaskForm from "./componenets/TaskForm.tsx";
import { useEffect, useState } from "react";
import TaskBoard from "./componenets/TaskBoard.tsx";

// const tasks: Task[] = [];

const apiUrl = "http://localhost:3005/api/tasks";

const App = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const fetchTasks = async () => {
    try {
      const response = await fetch(apiUrl);

      if (!response.ok) {
        throw new Error("Kunde inte hämta tasks");
      }

      const result: Task[] = await response.json();

      setTasks(result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const executeFetch = async () => {
      await fetchTasks();
    };
    executeFetch();
  }, []);

  const addTask = async (newTask: NewTask) => {
    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTask),
      });

      if (!response.ok) {
        throw new Error("Kunde inte skapa task");
      }
    } catch (error) {
      console.log(error);
    }

    await fetchTasks();
  };

  return (
    <>
      <Header />
      <main className={styles.main}>
        <TaskBoard tasks={tasks} />
        <TaskForm onAddTask={addTask} />
      </main>

      <Footer />
    </>
  );
};

export default App;
