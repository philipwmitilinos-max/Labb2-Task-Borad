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
  const [tasks, setTasks] = useState<Task[]>([
    // {
    //   id: 1,
    //   title: "Kod labb del 1",
    //   description: "Task Boare med React, TypeScript och komponenter.",
    //   assignee: "Philip",
    //   category: "Frontend",
    //   priority: "low",
    //   status: "done",
    // },
    // {
    //   id: 2,
    //   title: "Kod labb del 2",
    //   description: "Komponenttestning i React med Vitest",
    //   assignee: "Philip",
    //   category: "Test",
    //   priority: "low",
    //   status: "done",
    // },
    // {
    //   id: 3,
    //   title: "Kod labb del 3",
    //   description: "Rendera tasks från en array",
    //   assignee: "Philip",
    //   category: "Fronend",
    //   priority: "low",
    //   status: "done",
    // },
    // {
    //   id: 4,
    //   title: "Lägg till formulär",
    //   description:
    //     "Skapa ny task I den här delen ska du skapa ett formulär för att kunna skriva in en ny task. Formuläret ska finnas i en egen komponent. När formuläret skickas ska värdena skrivas ut i konsolen.",
    //   assignee: "Philip",
    //   category: "Frontend",
    //   priority: "high",
    //   status: "doing",
    // },
    // {
    //   id: 5,
    //   title: "Laboration del 4",
    //   description:
    //     "TaskBoard-applikation ska kunna skapa nya Tasks via formuläret",
    //   assignee: "Philip",
    //   category: "Frontend",
    //   priority: "low",
    //   status: "todo",
    // },
    // {
    //   id: 6,
    //   title: "Laboration del 5",
    //   description: "Implementera en backend-tjänst med node och javascript",
    //   assignee: "Philip",
    //   category: "Backend",
    //   priority: "low",
    //   status: "todo",
    // },
    // {
    //   id: 7,
    //   title: "Laboration del 7",
    //   description:
    //     "TaskBoard-applikation ska kunna integrera med den backend ni tidigare skapat",
    //   assignee: "Philip",
    //   category: "Backend",
    //   priority: "low",
    //   status: "todo",
    // },
    // {
    //   id: 8,
    //   title: "Laboration del 8",
    //   description: "",
    //   assignee: "Philip",
    //   category: "Backend",
    //   priority: "low",
    //   status: "todo",
    // },
    // {
    //   id: 9,
    //   title: "Titel",
    //   description: "Beskrivning..",
    //   assignee: "Philip",
    //   category: "Fronend",
    //   priority: "low",
    //   status: "done",
    // },
  ]);

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
