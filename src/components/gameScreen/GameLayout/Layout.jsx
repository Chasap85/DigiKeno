import Action from "../ActionBoard/Action";
import CardInfo from "../CardInfo/CardInfo";

function Layout() {
  return (
    <div className="flex flex-row">
      {/* card info */}
      <div className="p-4">
        <CardInfo />
      </div>
      {/* action board */}
      <div>
        <Action />
      </div>
    </div>
  );
}

export default Layout;
