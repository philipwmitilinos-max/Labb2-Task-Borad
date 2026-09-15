type TaskCardProps = {
  title: string;
  id: number;
  description: string;
  assignee: string;
  category: string;
  priority: string;
};

const TaskCard = (props: TaskCardProps) => {
  const ansvar = "Ansvarig: ";
  const prio = "Prioritet: "

  return (
    <article>
      <p>{props.category}</p>
      <h2>{props.title}</h2>
      <p>{props.id}</p>
      <p>{props.description}</p>
      <p>
        {ansvar}
        {props.assignee}
      </p>
      <p>{prio}{props.priority}</p>
    </article>
  );
};
export default TaskCard;
