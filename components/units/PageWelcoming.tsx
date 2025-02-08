import { IPageWelcoming } from "@/interface";

function PageWelcoming(props: IPageWelcoming) {
  const { title, description, mediumUrl, mediumUrlDisplay } = props;
  return (
    <>
      {title && (
        <h2 className="text-3xl xl:my-10 mx-auto xl:text-4xl">{title}</h2>
      )}
      {mediumUrl && mediumUrlDisplay && (
        <h3 className="text-xl xl:text-2xl underline mb-5">
          <a href={mediumUrl} target="_blank">
            {mediumUrlDisplay}
          </a>
        </h3>
      )}
      {description && (
        <p className=" xl:w-3/5 mb-10 text-lg leading-relaxed">{description}</p>
      )}
    </>
  );
}

export default PageWelcoming;
