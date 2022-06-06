import StatusCard from "components/StatusCard";
import TableCard from "components/TableCard";

import { Dashboard } from "@gooddata/sdk-ui-dashboard";
import { idRef } from "@gooddata/sdk-model";

import "@gooddata/sdk-ui-dashboard/styles/css/main.css";

const dashboardRef = idRef("adJns8Jacu8W");

export default function Dashboard() {
  return (
    <>
      <div className="bg-light-blue-500 pt-14 pb-28 px-3 md:px-8 h-auto">
        <div className="container mx-auto max-w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4">
            <Dashboard dashboard={dashboardRef} />
          </div>
        </div>
      </div>

      <div className="px-3 md:px-8 h-auto -mt-24">
        <div className="container mx-auto max-w-full">
          <div className="grid grid-cols-1 px-4 mb-16">
            <TableCard />
          </div>
        </div>
      </div>
    </>
  );
}
