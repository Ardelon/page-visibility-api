// interface IntersectionOberverProps {}

import RandomBlock from "@/components/demoComponents/randomBlock";
import PageWelcoming from "@/components/units/PageWelcoming";
import { generateRandomKey } from "@/utility/rendering";
import { clientData } from "./data";

function IntersectionObserver() {
  const renderRandomBlocks = () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    return array.map(() => {
      return <RandomBlock key={generateRandomKey()} />;
    });
  };

  return (
    <div className="page-position">
      <PageWelcoming {...clientData} />
      {renderRandomBlocks()}
    </div>
  );
}

export default IntersectionObserver;
