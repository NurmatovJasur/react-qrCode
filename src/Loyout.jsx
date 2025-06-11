import { Navigation } from "./components/navigation/navigation";
import { QrCodeGenerator } from './components/generate/QrCodeGenerator'
import { QrCodeScanner } from './components/scan/QrCodeScanner'
import { Routes, Route } from "react-router-dom";
import {Generate} from './components/generate/GenerateHistory'
import {Scan} from './components/scan/scanHistory'



export const Layout = () => {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/generate" element={<QrCodeGenerator />} />
        <Route path="/scanner" element={<QrCodeScanner />} />
        <Route path="/generateHistory" element={<Generate/>}/>
        <Route path="/scanHistory" element={<Scan/>}/>
      </Routes>
    </div>
  );
};
