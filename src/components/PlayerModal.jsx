import ReactPlayer from "react-player";
import { Button } from "antd";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { setHistory } from "../store/historySlice";

export default function PlayerModal() {
  const [cardInfo, setCardInfo] = useState(null);
  const modal = useRef(null);
  const navigate = useNavigate();
  const { bucketId, itemId } = useParams();
  const buckets = useSelector((state) => state.bucket);
  const dispatch = useDispatch();

  useEffect(() => {
    getCardItemInfo();
    window.scrollTo({
      top: modal.current.offsetTop - 100,
      behavior: "smooth",
    });
  }, []);

  const getCardItemInfo = () => {
    buckets.map((bucket) => {
      if (bucket.id == bucketId) {
        bucket.items.map((item) =>
          item.id == itemId
            ? setCardInfo({ id: item.id, title: item.title, link: item.link })
            : null
        );
      }
    });
  };

  const getVideoPlayedTime = () => {
    const date = new Date();
    const currentTime = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    dispatch(setHistory({ ...cardInfo, playtime: currentTime }));
  };

  const closeModal = () => {
    navigate("/", { replace: true });
  };
  return (
    <div className="modal-wrapper">
      <div className="modal" ref={modal}>
        {cardInfo ? (
          <>
            <ReactPlayer
              url={cardInfo.link}
              className="react-player"
              width="100%"
              height="100%"
              playing={true}
              onReady={getVideoPlayedTime}
            />
            <Button
              type="primary"
              danger
              className="close-modal-btn"
              onClick={closeModal}
            >
              Close modal
            </Button>
          </>
        ) : null}
      </div>
    </div>
  );
}
