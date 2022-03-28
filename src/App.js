import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
    <nav className="navbar navbar-inverse navbar-fixed-top">
    <div className="container-fluid">
      <div className="navbar-header">
        <a className="navbar-brand" href="#">WebSiteName</a>
      </div>
      <ul className="nav navbar-nav">
        <li className="active"><a href="#">Home</a></li>
        <li><a href="#">Page 1</a></li>
        <li><a href="#">Page 2</a></li>
      </ul>
      <ul className="nav navbar-nav navbar-right">
        <li><a href="#"><span className="glyphicon glyphicon-user"></span> Sign Up</a></li>
        <li><a href="#"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
      </ul>
    </div>
  </nav>
  
  {/* header image and text starts here */}
    <header>
    <div id='backgroundImg' className='container-fluid'>
      <div className='contents-headPage'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-3'></div>
          <div className='col-md-6 text-intro'>
          <div className='row'>
            <div>
            <div className='contents-landPage'>
              <h1 className='head-text'>FOTOGRAME CHAT ROOMS</h1>
              <p className=''>Free International Chat Rooms For Guest Without registrations or sign up</p>
              <input className='btn btn-warning btn-lg enterChat' type='submit' value='ENTER CHAT RROMS' /> 
              <input className='btn btn-warning btn-lg contactUs' type='submit' value='CONTACT US' />
            </div>
            </div>
            </div>
          </div>
          <div className='col-md-3'></div>
        </div>
      </div>
    </div>
    </div>
    </header>
    {/* header stops here */}

  </>
  );
}

export default App;
