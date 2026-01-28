const RecentLogs = () => {
  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h3 className="font-semibold text-lg mb-4">Recent Logs</h3>
      <ul className="space-y-4 text-sm text-gray-700">
        <li className="border-b pb-2">Apr 12 – 09:05 AM | Out: 06:15 PM</li>
        <li className="border-b pb-2">Apr 11 – 09:03 AM | Out: 06:03 PM</li>
        <li>Apr 10 – 09:10 AM | Out: 05:50 PM</li>
      </ul>
    </div>
  );
};

export default RecentLogs;
