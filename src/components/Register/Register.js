// src/components/RegisterForm/RegisterForm.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Register.module.css';

const RegisterForm = () => {
    const [title, setTitle] = useState('');

    const handleTitleSelect = (selectedTitle) => {
        setTitle(selectedTitle);
    };

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
                        onClick={() => handleTitleSelect('Ms')}
                    >
                        Ms
                    </button>
                    <button
                        type="button"
                        className={`${styles.titleButton} ${title === 'Mr' ? styles.selected : ''}`}
                        onClick={() => handleTitleSelect('Mr')}
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

                <button type="submit" className={styles.button}>Register</button>
            </form>
            <p className={styles.linkText}>
                Already have an account? <Link to="/login" className={styles.link}>Login</Link>
            </p>
        </div>
    );
};

export default RegisterForm;
