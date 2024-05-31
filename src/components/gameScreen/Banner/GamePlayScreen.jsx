function GamePlayScreen() {

  return (
    <div className="grid grid-cols-3 gap-4 w-full text-center">
      <div className="bg-gray-800 p-4 rounded-md">
        <p className="text-lg font-bold">BET</p>
        <p className="text-xl">{25}</p>
      </div>
      <div className="bg-gray-800 p-4 rounded-md">
        <p className="text-lg font-bold">WIN</p>
        <p className="text-xl">{1000}</p>
      </div>
      <div className="bg-gray-800 p-4 rounded-md">
        <p className="text-lg font-bold">CASH</p>
        <p className="text-xl">{1789}</p>
      </div>
    </div>
  );
}

export default GamePlayScreen;
