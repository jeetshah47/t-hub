import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAbPxBNmgQ4NfthpjIyqAHAtmI1aETp-IU",
  authDomain: "doorhub-2bd7c.firebaseapp.com",
  projectId: "doorhub-2bd7c",
  storageBucket: "doorhub-2bd7c.appspot.com",
  messagingSenderId: "566142120152",
  appId: "1:566142120152:web:f524add0cc9237ea8667ad",
  measurementId: "G-X9TVGB4R1H",
};

const app = initializeApp(firebaseConfig);

export const uploadFiles = (file: File) => {
  const storage = getStorage();
  const sRef = ref(storage, "products/");

  uploadBytes(sRef, file).then((snapshot) => {
    console.log("Upload Successfull", snapshot);
  });
};

export { app };
