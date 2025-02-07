import { IPageWelcoming } from "@/interface";

const title = "Ardelon - Battery Status API";
const description = `Battery Status API is helps to reach battery status information of clients device. It is a very straightforward API but also a useful one. Potential use cases could be saving necessary data in local storages or in servers depend on application architecture. For example, if Netflix did not save the proggress on what I have been watching for the last hour and my battery died, I would be very upset to find out that Netflix did not take the necessary actions to save my data.`;
const mediumUrl = `https://medium.com/@akeskinw/web-api-serisi-battery-status-api-6615b5006e6b`;
const mediumUrlDisplay = `Battery Status API - Medium Post`;

export const clientData: IPageWelcoming = {
  title,
  description,
  mediumUrl,
  mediumUrlDisplay,
};
