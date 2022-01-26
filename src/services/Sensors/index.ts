import axios from "axios"
import { API_ENDPOINT } from "config/env"
import { useAsync } from "hooks";

export const getHourlySensorData = async () => {
    const response = await axios.get<SensorReading[]>(`${API_ENDPOINT}/sensors/hourly`)
    return response.data;
}

export const useHourlySensorData = () => useAsync<SensorReading[]>(getHourlySensorData);