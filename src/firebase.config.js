 
// import { initializeApp } from "firebase/app";
 
  
// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_apiKey,
//   authDomain: import.meta.env.VITE_authDomain,
//   projectId: import.meta.env.VITE_projectId,
//   storageBucket: import.meta.env.VITE_storageBucket,
//   messagingSenderId: import.meta.env.VITE_messagingSenderId,
//   appId: import.meta.env.VITE_appId,
// };


//  export const app = initializeApp(firebaseConfig);


 
import { initializeApp } from "firebase/app";
 
const firebaseConfig = {
  apiKey: "AIzaSyAUVxMcBaUoBwG2PpSecqZjSo9Az2L_PgE",
  authDomain: "photo-school-2f7ad.firebaseapp.com",
  projectId: "photo-school-2f7ad",
  storageBucket: "photo-school-2f7ad.appspot.com",
  messagingSenderId: "79742457240",
  appId: "1:79742457240:web:f2f21ce866190f3aa987ed"
};

 
export const app = initializeApp(firebaseConfig);