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

    <section>
      <div className='container'>
        <div className='row'>
          <div className='col-md-2'></div>
          <div className='col-md-8'>
          <h2 className='s2ht'> MEET NICE LOOKING SINGLE MAMA's AROUND YOU</h2>
          </div>
          <div className='col-md-2'></div>
        </div>
      </div>
    </section>
    {/* ends here */}

    {/* section 3 */}
    <section className='section3'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6'>
            <p align='justify' className='txts3'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p align='justify' className='txts3'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <input type='submit' className='btn btn-warning form-control btn-lg explore' value='EXPLORE' />
          </div>
          <div className='col-md-6'>
            <iframe width="100%" height="500" src="https://www.youtube.com/embed/N-x0tk23DkM" title="YouTube video player" 
            frameborder="0" allow="accelerometer; autoplay; 
            clipboard-write; encrypted-media; gyroscope; 
            picture-in-picture" allowfullscreen></iframe>

          </div>
        </div>
      </div>
    </section>
   
    <section className="newsletter">
<div className="container">
<div className="row">
<div className="col-sm-12">
	<div className="content">
		<h2 id='newsletterHtext'>SUBSCRIBE TO OUR NEWSLETTER</h2>
	<div className="input-group">
         <input type="email" className="form-control" placeholder="Enter your email" />
         <span className="input-group-btn" id='btn-subscribe'>
         <button className="btn" type="submit">Subscribe Now</button>
         </span>
          </div>
	</div>
</div>
</div>
</div>
</section>

<footer className="bg-dark text-center text-white">

  <div className="container p-4 pb-0 adjust-footer">
   
    <section className="mb-4">
      <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i className="fab fa-facebook"></i></a>
      <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i className="fab fa-twitter"></i></a>
      <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i className="fab fa-google"></i></a>
      <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i className="fa fa-instagram"></i></a>
      <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i className="fab fa-linkedin-in"></i></a>
      <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i className="fab fa-github"></i></a>
    </section>
    
  </div>

  <div className="text-center p-3"> <p className='footer-text'>
  © 2022 Copyright:
  </p>
  <a className="text-white" href="https://web.facebook.com/ridowu2/"> codeTechs</a>
  </div>
 
</footer>


    </>
  );
}

export default App;
