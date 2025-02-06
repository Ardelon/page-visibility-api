// interface IntersectionOberverProps {}

import RandomBlock from "@/components/demoComponents/randomBlock";
import { generateRandomKey } from "@/utility/rendering";

function IntersectionObserver() {
  const renderRandomBlocks = () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    return array.map(() => {
      return <RandomBlock key={generateRandomKey()} />;
    });
  };

  return (
    <div style={{ padding: "40px" }} className="page-position">
      <h2 style={{ margin: "20px auto" }}>Intersection Observer API</h2>
      <p style={{ lineHeight: "1.5", width: "80%", marginBottom: "40px" }}>
        Web API Intersection Observer API example using React custom hooks. In
        the demo, there is multiple React Elements that initialized with
        useIntersectionObserver hook and their relative counter increases
        everytime the blocks became visible according to intersection observer
        hook.At the same time, their background tone darkens as the counter
        increase.
      </p>
      {renderRandomBlocks()}
    </div>
  );
}

export default IntersectionObserver;
