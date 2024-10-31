// import React from 'react';
// import './New1.css';
// import twitter from "../assets/twitter.png";
// import swift from '../assets/swift.png';
// import img1 from '../assets/Img (1).png';
// import bg from '../assets/bg.png';
// import arrow from '../assets/arrow.png';
// import decorative from '../assets/decorative.png';
// import decorativeline from '../assets/decorativeline.png';
// import man1 from '../assets/man1.png';

// const New1 = () => {
//   return (
//     <>
//       <nav className="navbar navbar-expand-md navbar-light">
//         <div className="container-fluid">
//           <img src={swift} alt="Logo" style={{ width: 160, height: 36 }} />
//           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//               <li className="nav-item"><a className="nav-link active" aria-current="page" href="#">Home</a></li>
//               <li className="nav-item"><a className="nav-link" href="#">About</a></li>
//               <li className="nav-item"><a className="nav-link" href="#">Roadmap</a></li>
//               <li className="nav-item"><a className="nav-link" href="#">Why</a></li>
//             </ul>
//             <div className="d-flex align-items-center gap-2">
//               <button className="border-0 rounded-5" style={{ backgroundColor: 'rgba(220,220,220,1)', color: 'rgba(0,208,210,1)' }}>
//                 <span style={{ color: 'rgba(0,208,210,1)', padding: '15px 5px', fontSize: '18px' }}>&#8595;</span>Download
//               </button>
//               <img src={twitter} alt="Twitter" style={{ width: '50px', backgroundColor: 'rgba(220,220,220,1)' }} />
//             </div>
//           </div>
//         </div>
//       </nav>

//       <div className="container ">
//         <div className="row align-items-center">
//           <div className="col-md-8">
//             <h1 className="display-5">Amplify your Impact in the Digital Economy.</h1>
//             <p style={{ color: 'rgba(143, 143, 143, 1)' }}>
//               Welcome to Our Trading Platform. Discover the efficiency of automated technical analysis for crypto and NFT trading. Our platform offers easy-to-use tools and a supportive community, making trading simpler and more successful for everyone.
//             </p>
//             <div className="d-flex gap-3">
//               <button className="border-0 rounded-pill text-white" style={{ width: '200px', backgroundColor: 'rgba(0,208,210,1)' }}>JOIN PRESALE</button>
//               <button className="border-0 rounded-pill text-white" style={{ width: '200px', backgroundColor: 'rgba(4,22,92,1)' }}>JOIN PRESALE</button>
//             </div>
//             <div className="d-flex gap-3 mt-5">
//               <div className="card border-0" style={{ boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)', width: '170px' }}>
//                 <div className="card-body">
//                   <h4>20+</h4>
//                   <p className="card-text">Presale Partnership</p>
//                 </div>
//               </div>
//               <div className="card border-0" style={{ boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)', width: '170px' }}>
//                 <div className="card-body">
//                   <h4>20+</h4>
//                   <p className="card-text">Token Holders</p>
//                 </div>
//               </div>
//               <div className="card border-0" style={{ boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)', width: '170px' }}>
//                 <div className="card-body">
//                   <h4>20+</h4>
//                   <p className="card-text">Secure Vaults</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="col-md-4 text-center">
//             <img src={img1} alt="nothing to show" className="img-fluid" style={{ maxWidth: '100%' }} />
//           </div>
//         </div>
//       </div>

//       <div className="text-center mt-5 position-relative">
//         <img src={bg} alt="background" className="img-fluid mx-5 mt-5" style={{ width: '90%', height: 'auto' }} />
//         <div className="position-absolute text-center" style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
//           <h2 className="text-white">UNLEASH YOUR TIME</h2>
//           <h2 className="text-white">SAY GOODBYE TO ENDLESS RESEARCH</h2>
//           <img src={arrow} alt="arrow" className="img-fluid mt-5" style={{ width: '170px', height: '75px' }} />
//         </div>
//       </div>

//       <div className="container my-5">
//         <div className="row align-items-center">
//           <div className="col-md-7">
//             <h1>Let Our AI Simplify Your Crypto and NFT Investment</h1>
//             <p style={{ color: 'rgba(143,143,143,1)' }}>
//               Effortless Investing with AI. Let our technology analyze hundreds of coins and NFTs, saving your time and guiding your decisions. Elevate your strategy effortlessly.
//             </p>
//             <button className="rounded-pill border-0" style={{ backgroundColor: 'rgba(0,208,210,1)', color: '#FFF', fontSize: '10px', width: '170px', height: '30px' }}>INVEST WITH OUR AI</button>
//           </div>
//           <div className="col-md-5 d-flex justify-content-around">
//             <img src={decorative} alt="decorative" style={{ width: '30px' }} />
//             <img src={decorativeline} alt="decorative line" style={{ width: '30px' }} />
//             <img src={man1} alt="man" className="img-fluid" style={{ width: '260px' }} />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default New1;
// @media (max-width: 768px) {
//   nav {
//     flex-direction: column;
//     align-items: flex-start;
//   }
// }
// @media (max-width: 768px) {
//   .d-flex {
//     flex-direction: column;
//     align-items: flex-start;
//   }
//   .card {
//     width: 100%; /* Allow cards to take full width on small screens */
//     margin-bottom: 15px; /* Space between cards */
//   }
// }
