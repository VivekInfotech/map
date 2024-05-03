import UsercontextProvider from "./components/UsercontextProvider";
import Login from "./login/Login";
import Profile from "./login/Profile";
import Map from "./map/Map";
import MapWithAMarker from "./map/MapApi";
function App() {
  return (
  // <UsercontextProvider>

  //   <Login />
  //   <Profile />
  // </UsercontextProvider>
  
  <div style={{ height: '100vh', width: '100%' }}>
      {/* <Map /> */}
      <MapWithAMarker />
    </div>
  );
}

export default App;
