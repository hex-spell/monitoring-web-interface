import React from 'react';
import useWebSocket from 'react-use-websocket';

const App: React.FC = () => {
  const {
    lastJsonMessage
  } = useWebSocket("wss://modularizar.com/ws?a=123&t=listener");

  return (
    <div>
     {lastJsonMessage && <><div>
        Temperatura: {parseFloat(lastJsonMessage.temp).toFixed(2)}°C
      </div>
      <div>
        Fuego: {lastJsonMessage.fuego ? "si" : "no"}
      </div></>}
    </div>
  );
};

export default App;