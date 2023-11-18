// import React from "react";

// const About = () => {
//   return (
//     <div>
//       <section id="about">
//         <div className="container  my-5 py-5">
//           <div className="row">
//             <div className="col-md-6">
//               <img src="what-we-do.png" alt="about" className="w-75 mt-5" />
//             </div>
//             <div className="col-md-6">
//               <h3 className="fs-5">About Us</h3>
//               <h1 className="display-6 mb-2">
//                 Who <b>We</b> Are
//               </h1>
//               <hr className="w-50" />
//               <p className="load mb=-4">
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
//                 modi. Quos atque aut explicabo fugiat facere et ut nulla
//                 suscipit dolore, quisquam, facilis labore minus, provident cum
//                 dolorum earum ex quo reiciendis voluptatum. Odio impedit cum
//                 nemo nihil nesciunt aspernatur sit atque laborum, doloribus qui
//                 perferendis minus at nostrum natus? Doloribus odio magnam
//                 perspiciatis rerum unde expedita aspernatur similique assumenda
//                 autem in numquam fugiat nobis, incidunt consequatur ut facere
//                 soluta!
//               </p>
//               <button className="btn btn-primary rounded-pill px-4 py-2">
//                 Get Started
//               </button>
//               <button className="btn btn-outline-primary rounded-pill px-4 py-2 ms-2">
//                 Contact Us
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default About;

import React from "react";

const About = () => {
  return (
    <div>
      <section id="about">
        <div className="container my-5 py-5">
          <div className="row">
            <div className="col-md-6">
              <img
                src="what-we-do.png"
                alt="about"
                className="w-75 h-75 mt-5"
              />
            </div>
            <div className="col-md-6">
              <h3 className="fs-5">About Us</h3>
              <h1 className="display-6 mb-2">
                Who <b>We</b> Are
              </h1>
              <hr className="w-50" />
              <p className="lead mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
                modi. Quos atque aut explicabo fugiat facere et ut nulla
                suscipit dolore, quisquam, facilis labore minus, provident cum
                dolorum earum ex quo reiciendis voluptatum. Odio impedit cum
                nemo nihil nesciunt aspernatur sit atque laborum, doloribus qui
                perferendis minus at nostrum natus? Doloribus odio magnam
                perspiciatis rerum unde expedita aspernatur similique assumenda
                autem in numquam fugiat nobis, incidunt consequatur ut facere
                soluta!
              </p>
              <button className="btn btn-primary rounded-pill px-4 py-2">
                Get Started
              </button>
              <button className="btn btn-outline-primary rounded-pill px-4 py-2 ms-2">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
