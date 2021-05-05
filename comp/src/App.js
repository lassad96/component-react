import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import FullName from './component/profile/FullName';
import Adress from './component/profile/Adress';
import ProfilePhoto from './component/profile/ProfilePhoto';

function App(){

return(
<div className="App">
  
  <div>
  <FullName />
  <br/>
  <ProfilePhoto/>
  <br/>
  <Adress/>
  <br/>

  
</div>
</div>

   
  );
}

export default App;
