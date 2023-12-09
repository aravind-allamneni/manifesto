// Inside TaskItem component
function TaskItem({ title, percentCompletion }) {
  const getColor = (percent) => {
    const color = `linear-gradient(90deg, red ${percent}%, green ${percent}%)`;
    return color;
  };

  const progressBarStyle = {
    width: `${percentCompletion}%`,
    backgroundColor: getColor(percentCompletion),
  };

  return (
    <div className="task-item">
      <h3>{title}</h3>
      <div className="task-item flex flex-row">
        <div className="progress-bar" style={progressBarStyle}></div>
        <div className="percent-label ml-2">{percentCompletion}%</div>
      </div>
    </div>
  );
}

export default TaskItem;
