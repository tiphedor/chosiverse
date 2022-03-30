import "./choseCard.css";
import { Chose } from "../firebase/collections.type";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const ChoseCard = ({
  name,
  id,
  coverUrl,
  author,
  shortDescription,
  likesCount,
  downloadCount,
  zipDownloadLink,
}: Chose) => {
  return (
    <div className={"chose-card-container"}>
      <div className={"cover-image-container"}>
        <img src={coverUrl} alt={"Chose"} />
      </div>

      <div>
        <div className={"card-details-container"}>
          <h1>{name}</h1>

          <div className={"author-name"}>by {author}</div>

          <div className={"short-description"}>{shortDescription}</div>
        </div>

        <div className={"bottom-panel"}>
          <div className={"bottom-panel-button"}>
            <FontAwesomeIcon icon="heart" />

            {likesCount}
          </div>
          <a
            className={"bottom-panel-button"}
            href={zipDownloadLink}
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon="download" />
            {downloadCount}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ChoseCard;
