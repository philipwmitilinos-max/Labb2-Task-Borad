import Header from "../componenets/Header";
import Column from "../componenets/Cloumn";
import TaskCard from "../componenets/TaskCard";
import Footer from "../componenets/Footer";
import type { Task } from "../types/Task";

type TaskPageProps = {
  tasks: Task[];
};

const TaskPage = ({ tasks }: TaskPageProps) => {
  const todo: Task[] = tasks.filter((tasks) => tasks.status === "todo");
  const doing: Task[] = tasks.filter((tasks) => tasks.status === "doing");
  const done: Task[] = tasks.filter((tasks) => tasks.status === "done");

  return (
    <main>
      <Column title="ToDo">
        {todo.map((news) => (
          <TaskCard
            key={news.id}
            title={news.title}
            id={news.id}
            description={news.description}
            assignee={news.assignee}
            category={news.category}
            priority={news.priority}
          />
        ))}
      </Column>

      <Column title="Doing">
        {doing.map((news) => (
          <TaskCard
            key={news.id}
            title={news.title}
            id={news.id}
            description={news.description}
            assignee={news.assignee}
            category={news.category}
            priority={news.priority}
          />
        ))}
      </Column>

      <Column title="Done">
        {done.map((news) => (
          <TaskCard
            key={news.id}
            title={news.title}
            id={news.id}
            description={news.description}
            assignee={news.assignee}
            category={news.category}
            priority={news.priority}
          />
        ))}
      </Column>
    </main>
  );
};
export default TaskPage;
