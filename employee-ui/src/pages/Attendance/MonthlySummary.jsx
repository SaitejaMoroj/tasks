const MonthlySummary = () => {
  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h3 className="font-semibold text-lg mb-4">Monthly Summary</h3>
      <div className="flex gap-8 text-sm">
        <span className="flex items-center gap-2 text-green-600">
          <span className="w-3 h-3 bg-green-500 rounded-full"></span> Present: 18
        </span>
        <span className="flex items-center gap-2 text-red-500">
          <span className="w-3 h-3 bg-red-500 rounded-full"></span> Absent: 2
        </span>
        <span className="flex items-center gap-2 text-yellow-500">
          <span className="w-3 h-3 bg-yellow-500 rounded-full"></span> Leave: 1
        </span>
      </div>
    </div>
  );
};

export default MonthlySummary;
