"use client";

import React from "react";
import { useState, useEffect } from "react";
import TaskCard from "@/components/TaskCard";

const Home = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const response = await fetch(`/api/summary`);
      const data = await response.json();
      setTasks(data);
    };
    fetchTasks();
  }, []);

  return (
    <div className="container">
      <section className="flex flex-center justify-between mt-2">
        <img
          src="/assets/revanth.png"
          alt="task image"
          width={100}
          height={100}
        />
        <h1 className="head_text text-center">
          <span className="orange_gradient">Manifesto Reality Check</span>
          <br />
          <span className="green_gradient">Congress in Telangana</span>
        </h1>
        <img src="/assets/govt_logo.png" alt="govt logo" width={160} />
      </section>
      <div className="task-list">
        <div className="mt-16 task_layout">
          {tasks.map((task) => (
            <TaskCard key={task._id} task={task} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
