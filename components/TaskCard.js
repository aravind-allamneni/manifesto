import Image from "next/image";

const TaskCard = ({ task }) => {
  const getColor = (percent) => {
    const color = `linear-gradient(90deg, red ${percent}%, green ${percent}%)`;
    return color;
  };

  const progressBarStyle = {
    width: `${task.percentCompletion}%`,
    backgroundColor: getColor(task.percentCompletion),
  };
  return (
    <div className="task_card">
      <div className="flex justify-between items-start gap-5">
        <div className="flex-1 flex justify-start cursor-pointer">
          <Image
            src={task.image}
            alt="task image"
            width={60}
            height={60}
            className="rounded-full object-contain pr-1"
          />
          <div className="flex flex-col">
            <h3 className="font-satoshi font-semibold text-gray-900">
              {task.title}
            </h3>
            {/* <p className="font-intertext-sm text-gray-500">{task.title}</p> */}
          </div>
        </div>
      </div>
      <div className="task-item flex flex-row">
        <div className="progress-bar" style={progressBarStyle}></div>
        <div className="percent-label ml-2">{task.percentCompletion}%</div>
      </div>
      <p className="my-4 font-satoshi text-sm text-gray-700 text-justify">
        {task.description}
      </p>
      <p className="font-inter text-sm blue_gradient cursor-pointer text-left">
        {task.category}
      </p>
    </div>
  );
};
export default TaskCard;
