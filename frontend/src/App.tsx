import { useEffect, useState } from "react";

// Lấy base URL từ file .env
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

function App() {
  const [status, setStatus] = useState("Checking backend...");

  useEffect(() => {
    // Gọi API thông qua biến môi trường
    fetch(`${API_BASE_URL}/health`)
      .then((response) => response.json())
      .then((data) => {
        setStatus(data.status);
      })
      .catch(() => {
        setStatus("Backend unavailable");
      });
  }, []);

  return (
    <div>
      <h1>AI Contract Risk Analyzer</h1>
      <p>
        Backend status: {status}
      </p>
    </div>
  );
}

export default App;