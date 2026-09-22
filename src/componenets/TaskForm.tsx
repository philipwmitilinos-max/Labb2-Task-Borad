import React, { useState } from "react";
import type { NewTask, TaskPriority, TaskStatus } from "../types/Task";

type TaskFormProps = {
  onAddTask: (article: NewTask) => void;
};

const TaskForm = ({ onAddTask }: TaskFormProps) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [assignee, setAssignee] = useState("");
  const [category, setCategory] = useState("");
  const [priority, setPriority] = useState("high");
  const [status, setStatus] = useState("todo");

  const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    let priorityTemp: TaskPriority = "high";
    if (priority === "medium") {
      priorityTemp = "medium";
    }
    if (priority === "low") {
      priorityTemp = "low";
    }
    console.log("Submitting: " + priority);

    let statusTemp: TaskStatus = "todo";
    if (status === "doing") {
      statusTemp = "doing";
    }
    if (status === "done") {
      statusTemp = "done";
    }
    onAddTask({
      title,
      description,
      assignee,
      category,
      priority: priorityTemp,
      status: statusTemp,
    });
    setTitle("");
    setDescription("");
    setAssignee("");
    setCategory("");
    setPriority("high");
    setStatus("todo");
  };

  return (
    <>
      <p>{title}</p>
      <p>{description}</p>
      <p>{assignee}</p>
      <p>{category}</p>
      <form onSubmit={handleSubmit} action="#" method="POST">
        <label htmlFor="title">Titel</label>
        <input
          type="text"
          value={title}
          id="title"
          required
          onChange={(event) => setTitle(event.target.value)}
        />
        <label htmlFor="description">Beskrivning</label>
        <textarea
          value={description}
          id="description"
          required
          onChange={(event) => setDescription(event.target.value)}
        />
        <label htmlFor="assignee">Ansvarig</label>
        <input
          type="text"
          value={assignee}
          id="assignee"
          required
          onChange={(event) => setAssignee(event.target.value)}
        />
        <label htmlFor="category">Kategori</label>
        <input
          type="text"
          value={category}
          id="category"
          required
          onChange={(event) => setCategory(event.target.value)}
        />
        <label htmlFor="priority">Prioritet</label>
        <select
          name="priority"
          id="priority"
          value={priority}
          required
          onChange={(event) => setPriority(event.target.value)}
        >
          <option value="high">Hög</option>
          <option value="medium">Medium</option>
          <option value="low">Låg</option>
        </select>
        <label htmlFor="status">Status</label>
        <select
          name="status"
          id="status"
          value={status}
          required
          onChange={(event) => setStatus(event.target.value)}
        >
          <option value="todo">ToDo</option>
          <option value="doing">Doing</option>
          <option value="done">Done</option>
        </select>
        <button type="submit">Skapa Task</button>
      </form>
    </>
  );
};
export default TaskForm;
