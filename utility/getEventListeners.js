// "use client";
// const getAllEventListeners = () => {
//   Array.from(document.querySelectorAll("*")).reduce(function (pre, dom) {
//     var evtObj = document.getEventListeners(dom);
//     Object.keys(evtObj).forEach(function (evt) {
//       if (typeof pre[evt] === "undefined") {
//         pre[evt] = 0;
//       }
//       pre[evt] += evtObj[evt].length;
//     });
//     return pre;
//   }, {});
// };
// export { getAllEventListeners };
