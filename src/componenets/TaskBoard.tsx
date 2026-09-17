import type { Task } from "../types/Task";
import Column from "./Cloumn";
import TaskCard from "./TaskCard";

type TaskBoardProps = {
  tasks: Task[];
};

const TaskBoard = ({ tasks }: TaskBoardProps) => {
  const todoTasks = tasks.filter((task) => task.status === "todo");
  const doingTasks = tasks.filter((task) => task.status === "doing");
  const doneTasks = tasks.filter((task) => task.status === "done");

  return (
    <main>
      <Column title="ToDo">
        {todoTasks.map((task) => (
          <TaskCard
            key={task.id}
            title={task.title}
            id={task.id}
            description={task.description}
            assignee={task.assignee}
            category={task.category}
            priority={task.priority}
          />
        ))}
      </Column>

      <Column title="Doing">
        {doingTasks.map((task) => (
          <TaskCard
            key={task.id}
            title={task.title}
            id={task.id}
            description={task.description}
            assignee={task.assignee}
            category={task.category}
            priority={task.priority}
          />
        ))}
      </Column>

      <Column title="Done">
        {doneTasks.map((task) => (
          <TaskCard
            key={task.id}
            title={task.title}
            id={task.id}
            description={task.description}
            assignee={task.assignee}
            category={task.category}
            priority={task.priority}
          />
        ))}
      </Column>
    </main>
  );
};

export default TaskBoard;
