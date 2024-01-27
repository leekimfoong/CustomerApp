import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import AuthScreen from './src/screens/AuthScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import CustomerListScreen from './src/screens/CustomerListScreen';
import { AuthProvider } from './src/context/AuthContext';

const mainFlow = createStackNavigator({
  CustomerList: CustomerListScreen
});

mainFlow.navigationOptions = {
  title: 'Customer'
};

const myApp = createSwitchNavigator(
  {
    Auth: AuthScreen,
    loginFlow: createStackNavigator({
      Login: LoginScreen,
      SignUp: SignUpScreen
    }),
    mainFlow
  }
);

const CustomerApp = createAppContainer(myApp);

export default () => {
  return (<AuthProvider><CustomerApp/></AuthProvider> );
};