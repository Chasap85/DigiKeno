import Action from "../ActionBoard/Action";
import CardInfo from "../CardInfo/CardInfo";
import Display from "../Display/Display";

function Layout() {
  return (
    <div className="flex flex-col lg:flex-row bg-purple-900 min-h-screen p-4 gap-4">
    {/* Left column: CardInfo */}
    <div className="space-y-4">
      <CardInfo />
    </div>
    
    {/* Middle column: Action (CardMenu, KenoBoard, BannerButtons) */}
    <div className="lg:w-1/2 space-y-4">
      <Action />
    </div>
    
    {/* Right column: Display */}
    <div className="lg:w-1/4 space-y-4">
      <Display />
    </div>
  </div>
  );
}

export default Layout;
