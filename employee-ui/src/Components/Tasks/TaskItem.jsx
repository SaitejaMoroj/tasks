import React from "react";

const TaskItem = ({ task }) => {
  return (
    <div className="flex justify-between items-center border rounded-lg p-3 hover:bg-gray-50">
      <div className="flex items-center gap-3">
        <input type="checkbox" />
        <span className="font-medium">{task.title}</span>
      </div>
      <span className="text-sm text-gray-500">Due: {task.due}</span>
    </div>
  );
};

export default TaskItem;
