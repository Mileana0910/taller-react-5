import React from "react";
//EJERCICIO 1
import ProfileCard from "./Components/ProfileCard.js";
import "./Styles/ProfileCard.css";

//EJERCICIO 2
// import ProductCard2 from "./Components/ProfileCard2.js";

//EJERCICIO 3
// import Card from "./Components/Card";
// import styles from './Styles/Card.module.css'


//1. Uso de CSS y className en React
const App = () => {
  return (
    <div>
      <h1 className="profile-h1">Mi Perfil</h1>
      <ProfileCard />
    </div>
  );
};

export default App;


//2. Styled-components
// const App1 = () => {
//     return (
//         <div>
//             <ProductCard2 />
//         </div>
//     );
// }

// export default App1;


//3. CSS Modules
// const App2 = () => {
//   return (
//       <div>
//           <h1 className={styles.h1}>Mi Perfil</h1>
//           <Card />
//       </div>
//   );
// }

// export default App2;
