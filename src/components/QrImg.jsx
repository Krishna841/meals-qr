import { WhatsappShareButton } from "react-share";
import WA from "../assets/wa-icon.svg";

function QrImg({ data }) {
  return (
    <div className="flex-shrink-0 snap-center items-center justify-center relative">
      <img src={data.qrUrl} alt="qr" className="w-[277px] h-[428px] " />
      <WhatsappShareButton url={data.qrUrl}>
        <img
          src={WA}
          alt="wa-icon"
          className="absolute right-20 bottom-28 h-[30px] w-[30px] rounded-md"
        />
      </WhatsappShareButton>
    </div>
  );
}

export default QrImg;
