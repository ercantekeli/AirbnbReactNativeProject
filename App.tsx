import React from 'react';

import 'react-native-gesture-handler';
import Router from './src/navigation/Router';
import {withAuthenticator} from 'aws-amplify-react-native';
// import DestinationSearch from './src/screens/DestinationSearch';

// import HomeScreen from './src/screens/Home';
// import SearchResultsScreen from './src/screens/SearchResults';
// import Post from './src/components/Post';
// import feed from './assets/data/feed';

function App(): JSX.Element {
  return <Router />;
}

export default withAuthenticator(App);
