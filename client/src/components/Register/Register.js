// src/components/RegisterForm/RegisterForm.js
import styles from './Register.module.css';

// import { useRef, useState, useEffect, useContext } from 'react'
// import AuthContext from "../../../context/AuthProvider";
// import axios from 'axios'
import {  Link } from "react-router-dom";

const RegisterForm = () => {
    // const [title, setTitle] = useState('');

    // const handleTitleSelect = (selectedTitle) => {
    //     setTitle(selectedTitle);
    // };

    // const { auth, setAuth } = useContext(AuthContext);

    // const [firstName, setFirstName] = useState('')
    // const [lastName, setIsLastName] = useState('')
    // const [email, setEmail] = useState('')
    // const [password, setPassword] = useState('')
    // const [rePass, setRepass] = useState('')

    // const [errorMessage, setErrorMessage] = useState('')
    // const [success, setSuccess] = useState('')

    // useEffect(() => {
    //     setErrorMessage('')
    // }, [email, password, firstName, lastName, rePass])

    let title;

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log(email, password, firstName, lastName, rePass)

    //     try {
    //         if (password === '' || rePass === '' || email === '') {
    //             setErrorMessage("All fields are required")
    //         }

    //         if (password === rePass) {
    //             fetch('http://localhost:3030/api/users/register', {
    //                 method: 'POST',
    //                 body: JSON.stringify({
    //                     email,
    //                     password,
    //                     firstName,
    //                     lastName, rePass
    //                 }),
    //                 headers: {
    //                     'Content-type': 'application/json; charset=UTF-8',
    //                 },
    //             })
    //                 .then((response) => response.json())
    //                 .then((data) => {
    //                     console.log(data)
    //                     const emailData = data.user?.email
    //                     const nameData = `${data.user?.firstName} ${data.user?.lastName}`
    //                     const idData = data.user?._id
    //                     const accessTokenData = data.token || ''

    //                     console.log(idData)

    //                     localStorage.setItem('email', emailData)
    //                     localStorage.setItem('name', nameData)
    //                     localStorage.setItem('accessToken', accessTokenData)
    //                     localStorage.setItem('id', idData)

    //                     const email = localStorage.getItem('email')
    //                     const name = localStorage.getItem('name')
    //                     const id = localStorage.getItem('id')
    //                     const accessToken = localStorage.getItem('accessToken')

    //                     if (email && name && id && accessToken) {
    //                         setAuth({
    //                             email, name, id, accessToken
    //                         })

    //                     } else {
    //                         setErrorMessage(data.message)
    //                     }


    //                 })
    //                 .catch((err) => {
    //                     setErrorMessage(err.message)
    //                 });
    //         } else {
    //             setErrorMessage('Passwords must be equal')
    //         }


    //     } catch (err) {
    //         console.log(err)
    //     }


    //     setPassword('')
    //     setSuccess(true)
    // }

    return (
        <div className={styles.registerContainer}>
            <h2 className={styles.heading}>Register</h2>
            <form className={styles.form}>
                <label htmlFor="country" className={styles.label}>Country</label>
                <select id="country" name="country" className={styles.input} required>
                    <option value="us">🇺🇸 United States</option>
                    <option value="uk">🇬🇧 United Kingdom</option>
                    <option value="ca">🇨🇦 Canada</option>
                    <option value="de">🇩🇪 Germany</option>
                    <option value="fr">🇫🇷 France</option>
                    <option value="es">🇪🇸 Spain</option>
                    <option value="in">🇮🇳 India</option>
                    <option value="cn">🇨🇳 China</option>
                    <option value="jp">🇯🇵 Japan</option>
                    <option value="br">🇧🇷 Brazil</option>
                    <option value="au">🇦🇺 Australia</option>
                    <option value="za">🇿🇦 South Africa</option>
                </select>

                <label htmlFor="register-email" className={styles.label}>Email</label>
                <input type="email" id="register-email" name="email" className={styles.input} required />

                <label htmlFor="first-name" className={styles.label}>First Name</label>
                <input type="text" id="first-name" name="first-name" className={styles.input} required />

                <label htmlFor="last-name" className={styles.label}>Last Name</label>
                <input type="text" id="last-name" name="last-name" className={styles.input} required />

                <label htmlFor="username" className={styles.label}>Username</label>
                <input type="text" id="username" name="username" className={styles.input} required />

                <label className={styles.label}>Title</label>
                <div className={styles.titleSelectContainer}>
                    <button
                        type="button"
                        className={`${styles.titleButton} ${title === 'Ms' ? styles.selected : ''}`}
                        // onClick={() => handleTitleSelect('Ms')}
                    >
                        Ms
                    </button>
                    <button
                        type="button"
                        className={`${styles.titleButton} ${title === 'Mr' ? styles.selected : ''}`}
                        // onClick={() => handleTitleSelect('Mr')}
                    >
                        Mr
                    </button>
                </div>

                <label htmlFor="birth-date" className={styles.label}>Birth Date</label>
                <input type="date" id="birth-date" name="birth-date" className={styles.input} required />

                <label htmlFor="tel" className={styles.label}>Phone Number</label>
                <input type="tel" id="tel" name="tel" placeholder="+1" className={styles.input} required />

                <label htmlFor="password" className={styles.label}>Password</label>
                <input type="password" id="password" name="password" className={styles.input} required />

                <label htmlFor="repeat-password" className={styles.label}>Repeat Password</label>
                <input type="password" id="repeat-password" name="repeat-password" className={styles.input} required />

                <button type="submit" className={styles.button} 
                // onClick={handleSubmit}
                >Register</button>
            </form>
            <p className={styles.linkText}>
                Already have an account? <Link to="/login" className={styles.link}>Login</Link>
            </p>
        </div>
    );
};

export default RegisterForm;
