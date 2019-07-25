import Reactotron, { trackGlobalErrors } from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';

export default Reactotron.configure({ host: '192.168.0.11' })
    //.configure({ host: '192.168.0.12' })
    .useReactNative(trackGlobalErrors()) // add all built-in react native plugins
    .use(reactotronRedux())
    .connect(); // let's connect!

console.tron = Reactotron;
