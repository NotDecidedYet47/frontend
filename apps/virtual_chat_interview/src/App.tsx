import React, { useEffect, useState } from "react";

interface ReceivedData {
  company: string;
  id: number;
  name: string;
  phone: string;
}

function App() {
  const [receivedData, setReceivedData] = useState<ReceivedData | null>(null);

  useEffect(() => {
    // 메시지를 받는 이벤트 리스너 설정
    const handleMessage = (event: MessageEvent) => {
      try {
        // 문자열을 객체로 파싱
        const data: ReceivedData = JSON.parse(event.data);
        console.log("Received data from React Native WebView:", data);
        setReceivedData(data); // 수신된 데이터를 상태로 설정
      } catch (error) {
        console.error("Error parsing received data:", error);
      }
    };

    window.addEventListener("message", handleMessage);

    // Cleanup
    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          {receivedData
            ? `Received: ${JSON.stringify(receivedData)}`
            : "No data received"}
        </p>
      </header>
    </div>
  );
}

export default App;
