import { createCollection } from "./index";
import { Chose } from "./collections.type";
import { getDocs, query } from "firebase/firestore";

export const chosesCollection = createCollection<Chose>("choses");
export const getAllChoses = async (): Promise<Chose[]> => {
  const q = query(chosesCollection);
  const snapshot = await getDocs(q);

  return snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
};
