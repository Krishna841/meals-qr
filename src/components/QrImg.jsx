import { WhatsappShareButton } from "react-share";
import WA from "../assets/wa-icon.svg";
import { useState } from "react";

function QrImg({ data }) {
  const [loadingImage, setLoadingImage] = useState(true);
  return (
    <div className="flex-shrink-0 snap-center items-center justify-center relative">
      <img
        src={data.qrUrl}
        alt="qr"
        className="w-[277px] h-[428px]"
        onLoad={() => setLoadingImage(false)}
      />
      <WhatsappShareButton url={data.qrUrl}>
        <img
          src={WA}
          alt="wa-icon"
          className={`absolute right-20 bottom-[88px] h-[30px] w-[30px] rounded-md ${
            loadingImage ? "hidden" : ""
          }`}
        />
      </WhatsappShareButton>
    </div>
  );
}

export default QrImg;
