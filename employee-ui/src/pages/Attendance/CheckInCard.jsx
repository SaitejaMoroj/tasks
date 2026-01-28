const CheckInCard = () => {
  return (
    <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl p-6 flex justify-between items-center shadow-lg">
      <div className="flex items-center gap-4">
        <div className="bg-white text-green-600 rounded-full w-10 h-10 flex items-center justify-center font-bold">
          ✔
        </div>
        <div>
          <p className="text-xl font-semibold">Check-In: 09:05 AM</p>
          <p className="text-sm opacity-90">For TIS: 2005</p>
        </div>
      </div>

      <button className="bg-white text-green-700 px-6 py-2 rounded-lg font-semibold shadow hover:bg-gray-100">
        Check Out
      </button>
    </div>
  );
};

export default CheckInCard;
