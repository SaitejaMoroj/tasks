import React, { useState } from "react";
import { FaPlus, FaFilter, FaCheckCircle, FaClock } from "react-icons/fa";

const Tasks = () => {
  const [tasks] = useState([
    { id: 1, title: "Finish UI Design", due: "Apr 18", status: "pending" },
    { id: 2, title: "Update Project Plan", due: "Apr 19", status: "pending" },
    { id: 3, title: "Submit Report", due: "Apr 20", status: "pending" },
    { id: 4, title: "Fix Dashboard Bugs", due: "Apr 15", status: "completed" }
  ]);

  const pending = tasks.filter(t => t.status === "pending");
  const completed = tasks.filter(t => t.status === "completed");

  return (
    <div className="space-y-6 p-6">

      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">My Tasks</h1>

        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200">
            <FaFilter /> Filter
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            <FaPlus /> New Task
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow p-4">
          <p className="text-sm text-gray-500">Total Tasks</p>
          <h2 className="text-2xl font-bold">{tasks.length}</h2>
        </div>

        <div className="bg-yellow-50 rounded-xl shadow p-4">
          <p className="text-sm text-gray-500">Pending</p>
          <h2 className="text-2xl font-bold text-yellow-600">{pending.length}</h2>
        </div>

        <div className="bg-green-50 rounded-xl shadow p-4">
          <p className="text-sm text-gray-500">Completed</p>
          <h2 className="text-2xl font-bold text-green-600">{completed.length}</h2>
        </div>
      </div>

      {/* Task List */}
      <div className="bg-white rounded-xl shadow p-6 space-y-4">
        <h2 className="text-lg font-semibold">Pending Tasks</h2>

        {pending.map(task => (
          <div key={task.id} className="flex justify-between items-center border rounded-lg p-4 hover:shadow transition">
            <div className="flex items-center gap-3">
              <FaClock className="text-yellow-500" />
              <div>
                <p className="font-medium">{task.title}</p>
                <p className="text-sm text-gray-500">Due: {task.due}</p>
              </div>
            </div>

            <span className="px-3 py-1 text-xs rounded-full bg-yellow-100 text-yellow-700">
              Pending
            </span>
          </div>
        ))}
      </div>

      {/* Completed */}
      <div className="bg-white rounded-xl shadow p-6 space-y-4">
        <h2 className="text-lg font-semibold">Completed Tasks</h2>

        {completed.map(task => (
          <div key={task.id} className="flex justify-between items-center border rounded-lg p-4 opacity-80">
            <div className="flex items-center gap-3">
              <FaCheckCircle className="text-green-500" />
              <div>
                <p className="font-medium line-through">{task.title}</p>
                <p className="text-sm text-gray-500">Completed</p>
              </div>
            </div>

            <span className="px-3 py-1 text-xs rounded-full bg-green-100 text-green-700">
              Done
            </span>
          </div>
        ))}
      </div>

      {/* Announcements */}
      <div className="bg-white rounded-xl shadow p-6 space-y-4">
        <h2 className="text-lg font-semibold">Announcements</h2>

        <div className="bg-green-50 p-3 rounded-lg text-green-700">
          ● Quarterly Meeting this Friday
        </div>

        <div className="bg-red-50 p-3 rounded-lg text-red-700">
          ● System Maintenance on April 22
        </div>
      </div>

    </div>
  );
};

export default Tasks;
