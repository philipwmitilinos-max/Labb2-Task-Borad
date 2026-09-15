export type Task = {
  title: string;
  id: number;
  description: string;
  assignee: string;
  category: string;
  priority: TaskPriority;
  status: TaskStatus;
};

export type NewTask = {
  title: string;
  description: string;
  assignee: string;
  category: string;
  priority: TaskPriority;
  status: TaskStatus;
};

export type TaskPriority = "high" | "medium" | "low";

export type TaskStatus = "todo" | "doing" | "done";
