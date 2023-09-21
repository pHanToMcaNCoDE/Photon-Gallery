import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDp8jvqO6SdAKXsHYWxQJEoL5Wt4jgBGUI",
  authDomain: "photon-gallery.firebaseapp.com",
  projectId: "photon-gallery",
  storageBucket: "photon-gallery.appspot.com",
  messagingSenderId: "771973253517",
  appId: "1:771973253517:web:81a72a0164c8481fb655c4",
  measurementId: "G-8SWR2DZ83G"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;