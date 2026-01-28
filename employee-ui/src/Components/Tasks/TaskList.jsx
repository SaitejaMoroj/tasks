import React from "react";
import TaskItem from "./TaskItem";

const TaskList = () => {
  const tasks = [
    { id: 1, title: "Finish UI Design", due: "Apr 18", status: "pending" },
    { id: 2, title: "Update Project Plan", due: "Apr 19", status: "pending" },
    { id: 3, title: "Submit Report", due: "Apr 20", status: "pending" },
  ];

  return (
    <div className="bg-white rounded-lg shadow p-5">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-semibold text-lg">My Tasks</h2>
        <div className="flex gap-3 text-sm">
          <span className="text-blue-600 font-semibold">5 Pending</span>
          <span className="text-green-600">Completed</span>
        </div>
      </div>

      <div className="space-y-3">
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default TaskList;
