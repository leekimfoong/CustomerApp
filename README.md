React Native app that has the functionality to display customer lists.
This app also support login and register functionality as well. 
Connects and retrieves data from API services ( https://reqres.in/ )

Login screen
- Validation for proper email when the user presses the login/register button.
- Navigate to CustomerListScreen, after getting Success on LOGIN REST API.
- Navigate to LoginScreen, after getting Success on REGISTER REST API.
- Display Message Popup on REST API errors.
- Navigate to RegisterScreen while pressing the “register” link button.
- Navigate to LoginScreen while pressing the “login” link button.
- Auto logged in next time when open the app.

CustomerListScreen
- Calling customer list API and display customer list on screen.
- Navigate to LoginScreen while pressing the “logout” button.
- Search work on local data.
