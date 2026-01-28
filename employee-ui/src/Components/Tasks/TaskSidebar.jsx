import React from "react";

const TaskSidebar = () => {
  return (
    <div className="w-56 bg-white rounded-lg shadow p-4">
      <h3 className="font-semibold mb-4">Tasks</h3>
      <ul className="space-y-2 text-sm">
        <li className="text-blue-600 font-semibold">No Task</li>
        <li className="text-gray-600">Pending</li>
        <li className="text-gray-600">Completed</li>
      </ul>
    </div>
  );
};

export default TaskSidebar;
