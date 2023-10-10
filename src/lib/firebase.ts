import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyABGhnkP9TI0Npy70y8wOasP9ctx8SOg60',
  authDomain: 'tech-net-ba31f.firebaseapp.com',
  projectId: 'tech-net-ba31f',
  storageBucket: 'tech-net-ba31f.appspot.com',
  messagingSenderId: '348460085253',
  appId: '1:348460085253:web:19f2c17be5e90d192dec6c',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
