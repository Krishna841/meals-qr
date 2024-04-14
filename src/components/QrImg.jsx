import React from "react";
import WA from "../assets/wa-icon.svg";
import { getWhatsAppUrl } from "@phntms/react-share";

function QrImg({ data }) {
  return (
    <div className="flex-shrink-0 snap-center items-center justify-center relative">
      <img src={data.qrUrl} alt="qr" className="w-[277px] h-[428px] " />
      <a
        href={
          `whatsapp://send?text=${encodeURIComponent("QR")}&amp;` +
          `url=${encodeURIComponent(data.qrUrl)}`
        }
      >
        <img
          src={WA}
          alt="wa-icon"
          className="absolute right-20 bottom-28 h-[30px] w-[30px] rounded-md"
        />
      </a>
    </div>
  );
}

export default QrImg;
