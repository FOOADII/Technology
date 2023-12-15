// eslint-disable-next-line no-unused-vars
import styles from "./style";

import {Navbar,Stats,Business, CardDeal, Testimonials, Clients ,CTA ,Footer, Biling,Hero} from "./components";

// eslint-disable-next-line no-unused-vars
import React from "react";

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
   <div className="{`${styles.paddingX}`}">
    <div className="{`${styles.boxWidth}`}">
    <Navbar/> 
    </div>
   </div>
     
   <div className="{`${styles.paddingX}`}">
    <div className="{`${styles.boxWidth}`}">
    <Hero />

    </div> 
   </div>

  <div className="bg-primary $`{styles.paddingX}` w-full overflow-hidden">
   <div className="{`${styles.paddingX}`}">
    <div className="{`${styles.boxWidth}`}">
      <Stats/>
      <Business/>
      <CardDeal/>
      <Testimonials/>
      <Clients/>
      <CTA/>
      <Footer/> 
      <Biling/>

    </div>
   </div>
  </div>
  
  </div>
);

export default App;
