import { IPageWelcoming } from "@/interface";

function PageWelcoming(props: IPageWelcoming) {
  const { title, description, mediumUrl, mediumUrlDisplay } = props;
  return (
    <>
      {title && <h2 className="my-5 mx-auto">{title}</h2>}
      {mediumUrl && mediumUrlDisplay && (
        <h3>
          <a href={mediumUrl} target="_blank">
            {mediumUrlDisplay}
          </a>
        </h3>
      )}
      {description && (
        <p className="leading-normal w-4/5 mb-10">{description}</p>
      )}
    </>
  );
}

export default PageWelcoming;
