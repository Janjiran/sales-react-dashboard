import { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { factory } from "@gooddata/api-client-bear";
import Sidebar from "components/Sidebar";
import Dashboard from "pages/Dashboard";
import Settings from "pages/Settings";
import Tables from "pages/Tables";
import Maps from "pages/Maps";
import Footer from "components/Footer";

// Tailwind CSS Style Sheet
import "assets/styles/tailwind.css";

const bearClient = factory({
  domain: "https://fashion-police.on.gooddata.com",
});

function App() {
  useEffect(() => {
    bearClient.user.login("jan.zamborsky@gooddata.com", "Police2021");
  }, []);
  return (
    <>
      <Sidebar />
      <div className="md:ml-64">
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/settings" component={Settings} />
          <Route exact path="/tables" component={Tables} />
          <Route exact path="/maps" component={Maps} />
          <Redirect from="*" to="/" />
        </Switch>
        <Footer />
      </div>
    </>
  );
}

export default App;