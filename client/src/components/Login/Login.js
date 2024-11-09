// src/components/LoginForm/LoginForm.js
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Login.module.css';

const Login = () => {
    return (
        <div className={styles.loginContainer}>
            <h2 className={styles.heading}>Login</h2>
            <form className={styles.form}>
                <label htmlFor="email" className={styles.label}>Email</label>
                <input type="email" id="email" name="email" className={styles.input} required />

                <label htmlFor="password" className={styles.label}>Password</label>
                <input type="password" id="password" name="password" className={styles.input} required />

                <button type="submit" className={styles.button}>Login</button>
            </form>
            <p className={styles.linkText}>
                Don’t have an account? <Link to="/register" className={styles.link}>Register</Link>
            </p>
        </div>
    );
};

export default Login;
