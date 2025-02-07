import { IPageWelcoming } from "@/interface";

function PageWelcoming(props: IPageWelcoming) {
  const { title, description, mediumUrl, mediumUrlDisplay } = props;
  return (
    <>
      {title && <h2 className="my-10 mx-auto text-4xl">{title}</h2>}
      {mediumUrl && mediumUrlDisplay && (
        <h3 className="text-2xl underline mb-5">
          <a href={mediumUrl} target="_blank">
            {mediumUrlDisplay}
          </a>
        </h3>
      )}
      {description && (
        <p className=" w-3/5 mb-10 text-lg leading-relaxed">{description}</p>
      )}
    </>
  );
}

export default PageWelcoming;
