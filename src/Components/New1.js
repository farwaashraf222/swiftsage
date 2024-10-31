
import "./New1.css"
import swift from '../assets/swift.png';
import img1 from '../assets/Img (1).png';
import bg from '../assets/bg.png';
import arrow from '../assets/arrow.png';
import decorative from '../assets/decorative.png';
import decor from '../assets/decor.png';
import man1 from '../assets/man1.png';
import discord from '../assets/discord.png';
// import icon from '../assets/icon.png';
import table from '../assets/table.png';
import chatbox from '../assets/chatbox.png';
import CountUp from 'react-countup';
import about from '../assets/about.png'
import analysis from '../assets/analysis.png'
import trade from '../assets/trade.png'
import community from '../assets/community.png'



const New1 = () => {

  return (
    <>
      <div className='container-fluid '>
        <nav className="navbar navbar-expand-md navbar-light">
          <div className="container">
            <img src={swift} alt="Logo" className='img-fluid' style={{ width: 160, height: 36 }} />
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto ">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">  Home </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Roadmap
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Why
                  </a>
                </li>
              </ul>
              <div className="d-flex align-items-center gap-2">
                <button className="btn border-0 rounded-5" style={{ backgroundColor: "rgba(220,220,220,1)", color: "rgba(0,208,210,1)", }} >
                  <span style={{ color: "rgba(0,208,210,1)", padding: "15px 5px", fontSize: "18px" }}>&#8595;
                  </span> Download
                </button>
                <img src={discord} alt="discord" className='img-fluid' style={{ width: "25px", backgroundColor: "rgba(220,220,220,1)", borderRadius: "8px" }}
                />
                {/* <img src={icon} alt="icon" className='img-fluid' style={{ width: "25px", backgroundColor: "rgba(220,220,220,1)", borderRadius: "8px" }} /> */}
              </div>
            </div>
          </div>
        </nav>

        <div className="container mt-4 d-flex  felx-column flex-md-row align-items-center justify-content-between">
          <div className="row">
            <div className="col-md-8  col-sm-12 col-12">
              <h1 className="display-6">Amplify your Impact in <br /> the Digital Economy.</h1>
              <p style={{ color: 'rgba(143, 143, 143, 1)' }}>
                Welcome to Our Trading Platform. Discover automated technical analysis for crypto and NFT trading. Our platform offers easy-to-use tools and a supportive community, making trading simpler and more successful for everyone.
              </p>
              <div className="d-flex  gap-3 ">
                <button className="btn  border-0 text-white rounded-pill" style={{ backgroundColor: 'rgba(0,208,210,1)', width: '200px' }}>JOIN PRESALE</button>
                <button className="btn  border-0 text-white rounded-pill" style={{ backgroundColor: 'rgba(4,22,92,1)', width: '200px' }}>JOIN PRESALE</button>
              </div>
            </div>
            <div className="d-flex gap-3 flex-wrap">
              <div className="card border-0 " style={{ width: '170px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)' }}>
                <div className="card-body text-center">
                  <h4>
                    <CountUp
                      start={0}
                      end={20}></CountUp></h4>
                  <p>Presale Partnership</p>
                </div>
              </div>
              <div className="card border-0" style={{ width: '170px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)' }}>
                <div className="card-body text-center">
                  <h4>
                    <CountUp
                      start={20}
                      end={31}
                      suffix='K+'
                    /></h4>
                  <p>Token Holders</p>
                </div>
              </div>
              <div className="card border-0" style={{ width: '170px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)' }}>
                <div className="card-body text-center">
                  <h4><CountUp
                    start={0.1}
                    end={1}
                    suffix='m'
                  /></h4>
                  <p>Secure Vaults</p>
                </div>
              </div>
            </div>
          </div>
          <div className=" text-center col-md-4 col-sm-12 col-12">
            <img src={img1} alt="Amplify your Impact" className="img-fluid" style={{ maxWidth: '100%' }} />
          </div>
        </div>
      </div>

      <div className='container-fluid position-relative text-center mt-5  col-lg-12 col-sm-12'>
        <img src={bg} alt="background" style={{ width: '85%', height: 'auto' }} className=' img-fluid mx-5 mt-5' />

        <div className='d-flex flex-column text-center position-absolute' style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)', gap: '10px' }}>
          <h2 className='text-white'>UNLEASH YOUR TIME</h2>
          <h2 className='text-white'>SAY GOODBYE TO ENDLESS RESEARCH</h2>
          <img src={arrow} alt='arrow' style={{ width: '170px', height: '75px', position: 'relative', left: '190px', top: '133px' }} className='img-fluid' />
        </div>
      </div>
      <div className='  container d-flex justify-content-between align-items-center gap-5 ' style={{ margin: '90px' }}>
        <div className='col-md-6  ms-3 '>
          <h1 className='display-5' >Let Our AI Simplify Your <br />Crypto and NFT <br /> Investment </h1>
          <p style={{ color: 'rgba(143,143,143,1)' }}>Effortless Investing with AI.Let our technology analyze hundred of coins NFTs.<br />Saving your time and guiding your decisions.Elevate your strategy effortlessly.</p>
          <button className='btn rounded-pill border-0 text-white' style={{ backgroundColor: 'rgba(0,208,210,1)', color: 'rgba(255,255,255,1)', fontSize: '10px', width: '170px', height: '30px' }}>INVEST WITH OUR ALL</button>
        </div>
        <div className=' text-center'>
          <img src={decorative} alt='decorative' style={{ width: '970px', height: '200px', position: 'relative', top: '140px' }} className='img-fluid ' />
          <img src={decor} alt='decor' style={{ width: '170px', height: '330px', position: 'relative', bottom: '70px' }} className='img-fluid' />
        </div>
        <div className='col-md-6'>
          <img src={man1} alt="women" style={{ width: '350px' }} className='img-fluid' />
        </div>

      </div>
      <div className="d-flex flex-column align-items-center text-center col-lg-12 col-sm-12 ">
        <h1>Revolutionize Workflow with Our A.I. Powered platform</h1>
        <p style={{ color: 'rgba(143, 143, 143, 1)', maxWidth: '600px' }}>
          Experience efficiency with our sleek platform. Seamlessly integrated features await.Revolutionize your productivity.
        </p>
      </div>
      <div className="container-fluid d-flex justify-content-center">
        <div className="deco d-flex align-items-center mt-5" style={{ maxWidth: '1600px' }}>
          <img src={decorative} alt="decorative" style={{ height: '120px', width: '60px' }} />
          <img src={decor} alt="decor" style={{ height: '80px', width: '60px' }} />
          <img src={table} alt="bgchart" style={{ width: '80%', height: '500px', position: 'relative', right: '40px' }} className="img-fluid" />
          <img src={chatbox} alt="chatbox" className="img-fluid"
            style={{ width: '50%', height: '470px', position: 'relative', top: '30px', right: '170px' }} />
        </div>
      </div>




      <div className='text-center'>
        <h1>Thrive the Community,<br />Thrive in Trading </h1>
        <div className="container d-flex justify-content-center gap-0 align-items-center flex-wrap images">
          <img src={about} alt="about" className="img-fluid" style={{ width: '260px' }} />
          <img src={analysis} alt="analysis" className="img-fluid" style={{ width: '260px' }} />
          <img src={trade} alt="trade" className="img-fluid" style={{ width: '260px' }} />
          <img src={community} alt="community" className="img-fluid" style={{ width: '260px' }} />
        </div>

      </div>
      <div className='d-flex justify-content-center'>
  <div>
    <h1>The Swift Sage <br /> Roadmap to Crypto <br /> Prosperity</h1>
    <p style={{ color: 'rgba(143, 143, 143, 1)' }}>
      Plan your journey to success with our comprehensive roadmap and features list. Our detailed<br />
      roadmap provides a clear path forward, while the features list outlines the capabilities that will drive your project's success
    </p>
  </div>

  <div>
    {/* Box 1 */}
    <div className="box" style={{ color: 'rgba(143,143,143,1)', border: '1px solid rgba(143,143,143,1)', borderRadius: '10px', padding: '4px', height: 'fit-content', overflow: 'hidden', marginBottom: '10px' }}>
      <div className="d-flex gap-1">
        <b style={{ color: 'black' }}>Digital Launch Components</b>
      </div>
      <div>
        <span>Website Launch</span>
        <span>Discord</span>
        <span>Twitter Page</span>
      </div>
      <div className="d-flex gap-1">
        <span>Marketing Campaigns</span>
        <span>Initial Feature</span>
      </div>
    </div>

    {/* Box 2 */}
    <div className="box" style={{ color: 'rgba(143,143,143,1)', border: '1px solid rgba(143,143,143,1)', borderRadius: '10px', padding: '4px', height: 'fit-content', overflow: 'hidden' , marginBottom:'10px' }}>
      <div className="d-flex gap-1">
        <b style={{ color: 'black' }}>NFT Launch & Community</b>
      </div>
      <div>
        <span>NFT Launch</span>
        <span>Casanovo | Launch-coins</span>
        <span>Discord Mods</span>
      </div>
      <div className="d-flex gap-1">
        <span>Daily Summary Report Launch</span>
        <span>Community building</span>
      </div>
    </div>

    {/* Box 3 */}
    <div className="box" style={{ color: 'rgba(143,143,143,1)', border: '1px solid rgba(143,143,143,1)', borderRadius: '10px', padding: '4px', height: 'fit-content', overflow: 'hidden' ,marginBottom:'10px'}}>
      <div className="d-flex gap-1">
        <b style={{ color: 'black' }}>Launches & Deployments</b>
      </div>
      <div>
        <span>Casanovo | Launch-coins</span>
        <span>Risk Manager A.I Launch</span>
      </div>
      <div className="d-flex gap-1">
        <span>Analyst Onboarding</span>
        <span>Meta Alert Launch</span>
      </div>
      <div className="d-flex gap-1">
        <span>Notification Beta</span>
      </div>
    </div>

    {/* Box 4 */}
    <div className="box" style={{ color: 'rgba(143,143,143,1)', border: '1px solid rgba(143,143,143,1)', borderRadius: '10px', padding: '4px', height: 'fit-content', overflow: 'hidden', marginBottom:'10px' }}>
      <div className="d-flex gap-1">
        <b style={{ color: 'black' }}>Launches & Strategies</b>
      </div>
      <div>
        <span>Strategies Launch</span>
      </div>
      <div className="d-flex gap-1">
        <span>Holders & Exclusive Utilities</span>
        <span>Gem Finder Launch</span>
      </div>
      <div className="d-flex gap-1">
        <span>Aggregator Bot</span>
      </div>
    </div>

    {/* Box 5 */}
    <div className="box" style={{ color: 'rgba(143,143,143,1)', border: '1px solid rgba(143,143,143,1)', borderRadius: '10px', padding: '4px', height: 'fit-content', overflow: 'hidden' , marginBottom:'10px'}}>
      <div className="d-flex gap-1">
        <b style={{ color: 'black' }}>Evolution & Investment</b>
      </div>
      <div>
        <span>Community Adding Features</span>
        <span>Discord</span>
        <span>Twitter Page</span>
      </div>
      <div className="d-flex gap-1">
        <span>Marketing Campaigns</span>
        <span>Initial Feature</span>
      </div>
    </div>
  </div>
</div>


         
                  </>
                  )

}

                  export default New1
