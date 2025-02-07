import { IPageWelcoming } from "@/interface";

const title = "Ardelon - Page Visibility API (Video Example)";
const description = `Page Visibility API helps to determine if application is visible to the client or not. That information gives applications to know when to reduce hardware needs and improve (at least do not limit) performance clients computer. Other than that, Page Visibility API can be used for advertisement have been seen or not by the clients. Because if clients would not se the advertisement, there is no reason to pay to the website. In order to detect that, Page Visibility API can be utilized. In this example, a video is paused if the page is not visible to the user. This is extremely useful for clients that should not watch some kind or any videos in that given time or location.`;
const mediumUrl = `https://medium.com/@akeskinw/web-api-serisi-page-visibility-api-197c6dea9452`;
const mediumUrlDisplay = `Page Visibility API - Medium Post`;

export const clientData: IPageWelcoming = {
  title,
  description,
  mediumUrl,
  mediumUrlDisplay,
};
