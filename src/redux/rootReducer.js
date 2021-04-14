import { combineReducers } from 'redux';
import currentWeatherReducer from './CurrentWeather/reducer';
import locationReducer from './Location/reducer';
import weatherDataReducer from './WeatherData/reducer';
import historicalDataReducer from './HistoricalData/reducer';

const rootReducer = combineReducers({
    location: locationReducer,
    weatherData: weatherDataReducer,
    currentWeather: currentWeatherReducer,
    historicalData: historicalDataReducer,
});

export default rootReducer;
