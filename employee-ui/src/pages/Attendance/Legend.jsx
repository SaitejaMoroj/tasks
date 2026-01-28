const Legend = () => {
  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h3 className="font-semibold text-lg mb-4">Status</h3>
      <div className="space-y-3 text-sm">
        <p className="flex items-center gap-2">
          <span className="w-3 h-3 bg-green-500 rounded-full"></span> Present
        </p>
        <p className="flex items-center gap-2">
          <span className="w-3 h-3 bg-red-500 rounded-full"></span> Absent
        </p>
        <p className="flex items-center gap-2">
          <span className="w-3 h-3 bg-yellow-500 rounded-full"></span> Leave
        </p>
      </div>
    </div>
  );
};

export default Legend;
