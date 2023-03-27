import { Button } from "antd";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

export default function PlayerModal() {
  const [cardItemLink, setCardItemLink] = useState(null);
  const [duration, setDuration] = useState(null);
  const modal = useRef(null);
  const videoIframe = useRef(null);
  const navigate = useNavigate();
  const { bucketId, itemId } = useParams();
  const buckets = useSelector((state) => state.bucket);

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
          item.id == itemId ? setCardItemLink(item.link) : null
        );
      }
    });
  };

  const getIframeDuration = () => {
    const videoIframeRef = videoIframe.current;
    console.log(videoIframeRef);
    const video = videoIframeRef.contentWindow.document.querySelector("video");
    console.log(video);

    setDuration(video.duration);
    console.log(duration);
  };

  const closeModal = () => {
    navigate("/", { replace: true });
  };
  return (
    <div className="modal-wrapper">
      <div className="modal" ref={modal}>
        <iframe
          ref={videoIframe}
          src={cardItemLink}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          onLoad={getIframeDuration}
        ></iframe>
        <Button
          type="primary"
          danger
          className="close-modal-btn"
          onClick={closeModal}
        >
          Close modal
        </Button>
      </div>
    </div>
  );
}
