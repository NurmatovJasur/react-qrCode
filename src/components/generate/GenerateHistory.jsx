import { keyGenerate } from "../../constans";
import { QRCodeCanvas } from "qrcode.react";

export const Generate = () => {
  const data = JSON.parse(localStorage.getItem(keyGenerate) || "[]");
  return (
    <div className="container">
      <section id="history-generate" className="section">
        <h2>История генерации</h2>
        {data.map((text) => (
          <div className="placeholder">
            <p style={{ margin: "0 0 10px 0", fontSize: "20px" }} key={text}>
              {text}
            </p>
            <QRCodeCanvas value={text} size={100} />
          </div>
        ))}
      </section>
    </div>
  );
};
