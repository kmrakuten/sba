import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ProfileScreen from './components/ProfileScreen';
import CatalogScreen from './components/CatalogScreen';
import CartScreen from './components/CartScreen';
import {store} from './redux/store';
import {Provider} from 'react-redux';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator initialRouteName="Catalog">
          <Tab.Screen name="Catalog" component={CatalogScreen} />
          <Tab.Screen name="Cart" component={CartScreen} />
          <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
