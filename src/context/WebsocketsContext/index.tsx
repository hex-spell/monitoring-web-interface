import React, { createContext, useMemo } from "react";
import useWebSocket from "react-use-websocket";

export const WebsocketsContext = createContext({
  lastMessage: {
    ambientTemperature: "0",
    ambientHumidity: "0",
    waterTemperature: "0",
    waterTDS: "0",
    waterPh: "0",
    fireAlarm: false,
  },
});

export const WebsocketsContextProvider: React.FC = React.memo(
  ({ children }) => {
    const { lastJsonMessage } = useWebSocket("wss://modularizar.com/ws");
    return (
      <WebsocketsContext.Provider value={{ lastMessage: lastJsonMessage }}>
        {children}
      </WebsocketsContext.Provider>
    );
  }
);
