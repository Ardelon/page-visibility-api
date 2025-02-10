"use client";
import { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";

function QRAppPage() {
  const [qrCode, setQRCode] = useState([
    "https://www.linkedin.com/in/alihankeskin/",
    "https://medium.com/@akeskinw",
    "https://github.com/Ardelon",
    "https://ardelon.com/alihan-keskin-cv-2025.pdf",
    "https://www.hexaapps.net/",
  ]);
  const [selectedQR, setSelectedQR] = useState(0);

  const handleUpdateQRCode = (index: number, value: string) => {
    setQRCode((s) => {
      s[index] = value;
      return [...s];
    });
  };

  const exportQRCode = () => {
    const canvas = document.querySelector("canvas");
    const image = canvas?.toDataURL("image/png");
    if (image) {
      const link = document.createElement("a");
      link.href = image;
      link.download = "qr-code.png";
      link.click();
    }
  };

  return (
    <div className="flex flex-col xl:flex-row items-center justify-around mb-6">
      <div className="flex flex-col items-center justify-center gap-2">
        <div
          className="flex flex-row items-center justify-around gap-4 magnify-a-bit"
          onClick={() => {
            setSelectedQR(0);
          }}
        >
          <label
            htmlFor="qrCode"
            className={`${selectedQR === 0 ? "font-bold" : ""}`}
          >
            QR 1
          </label>
          <input
            type="text"
            value={qrCode[0]}
            placeholder="Enter text for QR code"
            className={`border-2 border-gray-300 rounded-md p-2 ${
              qrCode[0] ? "border-green-500" : ""
            }`}
            onChange={(e) =>
              handleUpdateQRCode(0, e.target.value.substring(0, 1256))
            }
          />
        </div>
        <div
          className="flex flex-row items-center justify-around gap-4 magnify-a-bit4"
          onClick={() => {
            setSelectedQR(1);
          }}
        >
          <label
            htmlFor="qrCode"
            className={`${selectedQR === 1 ? "font-bold" : ""}`}
          >
            QR 2
          </label>
          <input
            type="text"
            value={qrCode[1]}
            placeholder="Enter text for QR code"
            className={`border-2 border-gray-300 rounded-md p-2 ${
              qrCode[1] ? "border-green-500" : ""
            }`}
            onChange={(e) =>
              handleUpdateQRCode(1, e.target.value.substring(0, 1256))
            }
          />
        </div>
        <div
          className="flex flex-row items-center justify-around gap-4 magnify-a-bit"
          onClick={() => {
            setSelectedQR(2);
          }}
        >
          <label
            htmlFor="qrCode"
            className={`${selectedQR === 2 ? "font-bold" : ""}`}
          >
            QR 3
          </label>
          <input
            type="text"
            value={qrCode[2]}
            placeholder="Enter text for QR code"
            className={`border-2 border-gray-300 rounded-md p-2 ${
              qrCode[2] ? "border-green-500" : ""
            }`}
            onChange={(e) =>
              handleUpdateQRCode(2, e.target.value.substring(0, 1256))
            }
          />
        </div>
        <div
          className="flex flex-row items-center justify-around gap-4 magnify-a-bit"
          onClick={() => {
            setSelectedQR(3);
          }}
        >
          <label
            htmlFor="qrCode"
            className={`${selectedQR === 3 ? "font-bold" : ""}`}
          >
            QR 4
          </label>
          <input
            type="text"
            value={qrCode[3]}
            placeholder="Enter text for QR code"
            className={`border-2 border-gray-300 rounded-md p-2 ${
              qrCode[3] ? "border-green-500" : ""
            }`}
            onChange={(e) =>
              handleUpdateQRCode(3, e.target.value.substring(0, 1256))
            }
          />
        </div>
        <div
          className="flex flex-row items-center justify-around gap-4 magnify-a-bit"
          onClick={() => {
            setSelectedQR(4);
          }}
        >
          <label
            htmlFor="qrCode"
            className={`${selectedQR === 4 ? "font-bold" : ""}`}
          >
            QR 5
          </label>
          <input
            type="text"
            value={qrCode[4]}
            placeholder="Enter text for QR code"
            className={`border-2 border-gray-300 rounded-md p-2 ${
              qrCode[4] ? "border-green-500" : ""
            } `}
            onChange={(e) =>
              handleUpdateQRCode(4, e.target.value.substring(0, 1256))
            }
          />
        </div>
      </div>
      {qrCode && (
        <div className="mt-4 flex flex-col items-center justify-center gap-2">
          <QRCodeCanvas
            value={qrCode[selectedQR]}
            size={250}
            bgColor="#ffffff"
            fgColor="#000000"
            level="H"
            includeMargin={true}
            onClick={() => {
              window.open(qrCode[selectedQR], "_blank");
            }}
            className="cursor-pointer magnify-a-bit"
          />
          <button
            className="bg-yellow-400  p-2 rounded-md w-3/5 m-auto magnify-a-bit"
            onClick={() => {
              exportQRCode();
            }}
          >
            Export
          </button>
        </div>
      )}
    </div>
  );
}

export default QRAppPage;
