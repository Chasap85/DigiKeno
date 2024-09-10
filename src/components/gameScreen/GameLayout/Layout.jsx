import Action from "../ActionBoard/Action";
import CardInfo from "../CardInfo/CardInfo";
import Display from "../Display/Display";

function Layout() {
  return (
    <div className="flex flex-row">
      {/* card info */}
      <div className="p-4 mt-24">
        <CardInfo />
      </div>
      {/* action board */}
      <div>
        <Action />
      </div>
      <Display />
    </div>
  );
}

export default Layout;
