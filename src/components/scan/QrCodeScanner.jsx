import { useState } from "react";
import { Scanner } from "@yudiel/react-qr-scanner";
import {keyScan} from "../../constans"

export const QrCodeScanner = () => {
  const [scanner, setScanner] = useState(null);

  const scanHandler = (result) => {
    setScanner(result[0].rawValue);

    const prevData = JSON.parse(localStorage.getItem(keyScan) || '[]');
    
    localStorage.setItem(keyScan, JSON.stringify([...prevData, result[0].rawValue]))
  };
  const settings = {
    finder: false,
    audio: false,
  };

  return (
    <div className="container">
        <h2>Сканировать QR код</h2>
        <div className="scanner">
        <Scanner
        onScan={scanHandler}
        components={settings}
        styles={{ container: { height: 500 } }}
      />
        </div>
      <a className="scannerLink" href={scanner}>{scanner}</a>
    </div>
  );
};
