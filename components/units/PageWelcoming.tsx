import { IPageWelcoming } from "@/interface";

function PageWelcoming(props: IPageWelcoming) {
  const { title, description, mediumUrl, mediumUrlDisplay } = props;
  return (
    <div className="p-8 xl:p-0">
      {title && (
        <h2 className="text-2xl mb-8  xl:my-10 mx-auto xl:text-4xl text-center">
          {title}
        </h2>
      )}
      {mediumUrl && mediumUrlDisplay && (
        <h3 className="text-xl xl:text-2xl underline mb-8 text-center">
          <a href={mediumUrl} target="_blank">
            {mediumUrlDisplay}
          </a>
        </h3>
      )}
      {description && (
        <p className=" xl:w-3/5 xl:mx-auto mb-10 text-lg leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}

export default PageWelcoming;
