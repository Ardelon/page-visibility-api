import { IPageWelcoming } from "@/interface";

const title = "Ardelon - Intersection Observer API";
const description = ` Web API Intersection Observer API example using React custom hooks. In
        the demo, there is multiple React Elements that initialized with
        useIntersectionObserver hook and their relative counter increases
        everytime the blocks became visible according to intersection observer
        hook.At the same time, their background tone darkens as the counter
        increase.`;
const mediumUrl = `https://medium.com/@akeskinw/web-api-serisi-intersection-observer-api-74f81f83db9b`;
const mediumUrlDisplay = `Intersection Observer API - Medium Post`;

export const clientData: IPageWelcoming = {
  title,
  description,
  mediumUrl,
  mediumUrlDisplay,
};
