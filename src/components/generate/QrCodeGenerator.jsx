import { useState } from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import '../../style.css'
import {keyGenerate} from "../../constans"


export const QrCodeGenerator = () => {
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');

  const onClickHandler = () => {
    setResult(value);
    setValue('');

    const prevData = JSON.parse(localStorage.getItem(keyGenerate) || '[]');
    
    localStorage.setItem(keyGenerate, JSON.stringify([...prevData, value]))
  };

  const onChangeHandler = (event) => {
    setValue(event.target.value);
    setResult('');
  };

  return (
    <div className='container'>
      <section id="generate" className="section active">
        <h2>Генерация QR кода</h2>
        <div className="input-group">
          <input
            type="text"
            placeholder="Введите текст для QR кода"
            value={value}
            onChange={onChangeHandler}
          />
          <button onClick={onClickHandler}>Генерировать QR код</button>
          {result !== '' ? <QRCodeCanvas value={result} size={200} /> : null }
        </div>
      </section>
    </div>
  );
};