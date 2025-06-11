import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <div>
      <header>
        <h1>QR Code Tool</h1>
        <nav>
          <Link className="nav-link" to="/generate">
            Генерировать QR код
          </Link>
          <Link className="nav-link" to="/scanner">
            Сканировать QR код
          </Link>
          <Link className="nav-link" to="/generateHistory">
            История генерации
          </Link>
          <Link className="nav-link" to="/scanHistory">
            История сканирования
          </Link>
        </nav>
      </header>
    </div>
  );
};
