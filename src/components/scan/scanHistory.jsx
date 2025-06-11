import { keyScan } from "../../constans";
import { QRCodeCanvas } from 'qrcode.react';

export const Scan = () => {
  const data = JSON.parse(localStorage.getItem(keyScan) || "[]");
  return (
    <div className="container">
      <section id="history-scan" className="section">
        <h2>История сканирования</h2>
        {data.map((text) => (
          <div className="placeholder">
            <p style={{ margin: "0 0 10px 0", fontSize: "20px" }} key={text}>
              {text}
            </p>
            <QRCodeCanvas value={text} size={100}/>
          </div>
        ))}
      </section>
    </div>
  );
};
