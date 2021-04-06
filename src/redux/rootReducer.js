import { combineReducers } from 'redux';
import currentWeatherReducer from './CurrentWeather/reducer';

const rootReducer = combineReducers({
    currentWeather: currentWeatherReducer,
});

export default rootReducer;
