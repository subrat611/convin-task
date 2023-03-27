import { Button } from "antd";
import { useNavigate } from "react-router-dom";

export default function PlayerModal() {
  const navigate = useNavigate();
  const closeModal = () => {
    navigate("/", { replace: true });
  };
  return (
    <div className="modal-wrapper">
      <div className="modal">
        <iframe
          src="https://www.youtube.com/embed/IyBhFma4H1A"
          title="YouTube video player"
          allow="accelerometer; autoplay; encrypted-media; gyroscope;"
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
