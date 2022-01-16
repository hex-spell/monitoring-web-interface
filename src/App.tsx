import React from 'react';
import useWebSocket from 'react-use-websocket';

const App: React.FC = () => {
  const {
    lastJsonMessage
  } = useWebSocket("wss://modularizar.com/ws");

  return (
    <div>
     {lastJsonMessage ? <><div>
        Temperatura: {parseFloat(lastJsonMessage.ambientTemperature).toFixed(2)}°C
      </div>
      <div>
        Fuego: {lastJsonMessage.fireAlarm ? "si" : "no"}
      </div></> : "cargando"}
    </div>
  );
};

export default App;