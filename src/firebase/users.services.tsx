import { db } from "./firestoreServiceWorkers";
import { collection, getDocs, getDoc, addDoc, updateDoc, deleteDoc, doc } from "firebase/firestore";

const usersCollectionRef = collection(db, "users")
interface IUserProps {
    email?:string,
    mobile?:string,
    name?:string,
}
class UserDataService {
    addUsers = (newUser: IUserProps) => {
        return addDoc(usersCollectionRef, newUser);
    };

    updateUser = (id:string, updatedUser:any) => {
        const userDoc = doc(db, "users", id);
        return updateDoc(userDoc,updatedUser)
    };
    deleteUser = (id:string) => {
        const userDoc = doc(db, "users", id);
        return deleteDoc(userDoc)
    };
    getAllUsers = () => {
        return getDocs(usersCollectionRef)
    };
    getUser = (id:string) => {
        const userDoc = doc(db, "users", id);
        return getDoc(userDoc)
    };
}

export default new UserDataService()