import {createStackNavigator, createAppContainer} from 'react-navigation';
import FortuneWheel from './FortuneWheel';
import Record from './Record';
import Rules from './Rules';

const MainNavigator = createStackNavigator({
    Home: {screen: FortuneWheel},
    Record: {screen: Record},
    Rules: {screen: Rules}
});

const App = createAppContainer(MainNavigator);

export default App;