import StatusCard from "components/StatusCard";
import TableCard from "components/TableCard";

import { Dashboard } from "@gooddata/sdk-ui-dashboard";
import { idRef } from "@gooddata/sdk-model";

import "@gooddata/sdk-ui-dashboard/styles/css/main.css";

const dashboardRef = idRef("adJns8Jacu8W");

export default function Tables() {
  return (
    <>
      <div className="bg-light-blue-500 pt-14 pb-28 px-3 md:px-8 h-auto">
        <div className="container mx-auto max-w-full">
          <Dashboard dashboard={dashboardRef} />
        </div>
      </div>
    </>
  );
}
