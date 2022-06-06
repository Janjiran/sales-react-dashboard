import StatusCard from "components/StatusCard";
import ChartLine from "components/ChartLine";
import ChartBar from "components/ChartBar";
import PageVisitsCard from "components/PageVisitsCard";
import TrafficCard from "components/TrafficCard";
import { InsightView } from "@gooddata/sdk-ui-all";

export default function Dashboard() {
  return (
    <>
      <div className="bg-light-blue-500 px-3 md:px-8 h-40" />

      <div className="px-3 md:px-8 -mt-24">
        <div className="container mx-auto max-w-full">
          <div className="grid grid-cols-1 xl:grid-cols-5">
            <div className="xl:col-start-1 xl:col-end-4 px-4 mb-14">
              <div class="w-full bg-white rounded-xl overflow-hdden shadow-md p-4">
                <div class="bg-gradient-to-tr from-pink-500 to-pink-700 -mt-10 mb-4 rounded-xl text-white grid items-center w-full h-24 py-4 px-8 justify-start shadow-lg-pink undefined">
                  <h6 class="uppercase text-gray-200 text-xs font-medium">
                    EMBEDDING
                  </h6>
                  <h2 class="text-white text-2xl">Full Dashboard</h2>
                </div>
                <div class="p-4 undefined">
                  <div class="relative h-96">
                    <div class="chartjs-size-monitor">
                      <div class="chartjs-size-monitor-expand">
                        <div class=""></div>
                      </div>
                      <div class="chartjs-size-monitor-shrink">
                        <div class=""></div>
                      </div>
                    </div>
                    <iframe
                      src="https://fashion-police.on.gooddata.com/dashboards/embedded/#/workspace/f7k90nguqbpvexch1xkzometf8qzvbs9/dashboard/adJns8Jacu8W?showNavigation=false&setHeight=700"
                      height="384px"
                      width="100%"
                      frameborder="0"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
            <div className="xl:col-start-4 xl:col-end-6 px-4 mb-14">
              <div class="w-full bg-white rounded-xl overflow-hdden shadow-md p-4">
                <div class="bg-gradient-to-tr from-pink-500 to-pink-700 -mt-10 mb-4 rounded-xl text-white grid items-center w-full h-24 py-4 px-8 justify-start shadow-lg-pink undefined">
                  <h6 class="uppercase text-gray-200 text-xs font-medium">
                    EMBEDDING
                  </h6>
                  <h2 class="text-white text-2xl">Single Visualization</h2>
                </div>
                <div class="p-4 undefined">
                  <div class="relative h-96">
                    <div class="chartjs-size-monitor">
                      <div class="chartjs-size-monitor-expand">
                        <div class=""></div>
                      </div>
                      <div class="chartjs-size-monitor-shrink">
                        <div class=""></div>
                      </div>
                    </div>
                    <InsightView insight="aaxwvA9xaYYu" />
                  </div>
                </div>
              </div>
              {/* <ChartBar /> */}
            </div>
          </div>
        </div>
      </div>

      <div className="px-3 md:px-8">
        <div className="container mx-auto max-w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 mb-4">
            <StatusCard
              color="pink"
              icon="trending_up"
              title="Traffic"
              amount="350,897"
              percentage="3.48"
              percentageIcon="arrow_upward"
              percentageColor="green"
              date="Since last month"
            />
            <StatusCard
              color="orange"
              icon="groups"
              title="New Users"
              amount="2,356"
              percentage="3.48"
              percentageIcon="arrow_downward"
              percentageColor="red"
              date="Since last week"
            />
            <StatusCard
              color="purple"
              icon="paid"
              title="Sales"
              amount="924"
              percentage="1.10"
              percentageIcon="arrow_downward"
              percentageColor="orange"
              date="Since yesterday"
            />
            <StatusCard
              color="blue"
              icon="poll"
              title="Performance"
              amount="49,65%"
              percentage="12"
              percentageIcon="arrow_upward"
              percentageColor="green"
              date="Since last month"
            />
          </div>
        </div>
      </div>

      <div className="px-3 md:px-8 h-auto">
        <div className="container mx-auto max-w-full">
          <div className="grid grid-cols-1 xl:grid-cols-5">
            <div className="xl:col-start-1 xl:col-end-4 px-4 mb-14">
              <PageVisitsCard />
            </div>
            <div className="xl:col-start-4 xl:col-end-6 px-4 mb-14">
              <TrafficCard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
