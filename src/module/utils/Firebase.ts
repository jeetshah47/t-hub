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

export const uploadFiles = async (file: File) => {
  const fileName = file.name + new Date().getTime();
  const storage = getStorage(app);
  const Sref = ref(storage, fileName);
  try {
    const snapshot = await uploadBytes(Sref, file);
    console.log(snapshot);
    return snapshot.metadata.fullPath;
  } catch (error) {
    console.log(error);
  }
  return null;
};

export { app };
