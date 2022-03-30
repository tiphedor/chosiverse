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
    <div className={"choseCardContainer"}>
      <div className={"coverImageContainer"}>
        <img src={coverUrl} />
      </div>

      <div>
        <div className={"cardDetailsContainer"}>
          <h1>{name}</h1>

          <div className={"authorName"}>by {author}</div>

          <div className={"shortDescription"}>{shortDescription}</div>
        </div>

        <div className={"bottomPanel"}>
          <div className={"bottomPanelButton"}>
            <FontAwesomeIcon icon="heart" />

            {likesCount}
          </div>
          <a
            className={"bottomPanelButton"}
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
