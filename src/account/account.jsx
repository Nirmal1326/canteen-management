import { useEffect, useState } from "react";
import { db, database } from "./config"
import "./account.css"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { getDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
const Account = () => {
    useEffect(() => {
        const signUpButton = document.getElementById('signUp');
        const signInButton = document.getElementById('signIn');
        const container = document.getElementById('container');

        signUpButton.addEventListener('click', () => {
            container.classList.add("right-panel-active");
        });

        signInButton.addEventListener('click', () => {
            container.classList.remove("right-panel-active");
        });
    }, []);
    const history = useNavigate();
    const handleSubmit1 = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const username = e.target.username.value;
        createUserWithEmailAndPassword(database, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user, "authData");
                setDoc(doc(db, "users", user.uid), {
                    username: username,
                    email: email
                }).then(() => {
                    console.log("User information stored in Firestore");
                    alert("Account Created Successfully ! Go to signin page to login your account.")


                }).catch((error) => {
                    console.error("Error storing user information in Firestore: ", error);
                });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(`Error: ${errorCode}, Message: ${errorMessage}`);
            });
    }
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const handleLogin = (e) => {
        e.preventDefault();
        const emailInput = e.target.email.value;
        const passwordInput = e.target.password.value;
        const auth = getAuth();
        signInWithEmailAndPassword(auth, emailInput, passwordInput)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user, "authData");
                const docRef = doc(db, "users", user.uid);
                getDoc(docRef).then((docSnap) => {
                    if (docSnap.exists()) {
                        setUsername(docSnap.data().username);
                        setEmail(docSnap.data().email);
                    } else {
                        console.log("No such document!");
                    }
                });
                history('/home');
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(`Error: ${errorCode}, Message: ${errorMessage}`);
            });
    }
    return (
        <div>
            <div className="body">
                <h2>Sign In/Up</h2>
                <div className="container" id="container">
                    <div className="form-container sign-up-container">
                        <form action="#" onSubmit={(e) => handleSubmit1(e)}>
                            <h1>Create Account</h1>
                            <span>Use your College Email for registration</span>
                            <input type="text" name="username" placeholder="Username" />
                            <input type="email" name="email" placeholder="College Email" />
                            <input type="password" name="password" placeholder="Password" />
                            <button>Sign Up</button>
                        </form>
                    </div>
                    <div className="form-container sign-in-container">
                        <form action="#" onSubmit={handleLogin}>
                            <h1>Sign In</h1>
                            <input type="email" name="email" placeholder="College Email" />
                            <input type="password" name="password" placeholder="Password" />
                            <button>Sign In</button>
                        </form>
                    </div>
                    <div className="overlay-container">
                        <div className="overlay">
                            <div className="overlay-panel overlay-left">
                                <h1>Welcome Back!</h1>
                                <p>If you already have an account click the button below</p>
                                <button className="ghost" id="signIn">Sign In</button>
                            </div>
                            <div className="overlay-panel overlay-right">
                                <h1>Hello, Friend!</h1>
                                <p>If you dont have an account click the button below</p>
                                <button className="ghost" id="signUp">Sign Up</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Account;