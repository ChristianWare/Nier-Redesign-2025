"use client";

import styles from "./Register.module.css";
import { useState } from "react";
import Link from "next/link";
import { signIn } from "next-auth/react";
import Image from "next/image";
import LayoutWrapper from "@/components/shared/LayoutWrapper";
import FinalCTA from "@/components/shared/FinalCTA/FinalCTA";
import FalseButton from "@/components/shared/FalseButton/FalseButton";
import Img1 from "../../../../public/images/casaGrandeii.jpg";
import Footer from "@/components/shared/Footer/Footer";
import Nav from "@/components/shared/Nav/Nav";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [generalError, setGeneralError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => {
      const errs = { ...prev };
      delete errs[name];
      if (name === "password" || name === "confirmPassword") {
        delete errs.passwordMatch;
      }
      return errs;
    });
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name || formData.name.length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.password || formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.passwordMatch = "Passwords do not match";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    setGeneralError(null);
    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password,
        }),
      });
      const data = await res.json();
      if (res.ok) {
        await signIn("credentials", {
          email: formData.email,
          password: formData.password,
          callbackUrl: "/account",
          redirect: true,
        });
      } else {
        setGeneralError(
          data.message || "Registration failed. Please try again."
        );
      }
    } catch (err) {
      console.error(err);
      setGeneralError("An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <Nav
        logoColor='var(--red)'
        navItemColor='var(--red)'
        signUpBtnType='navRedOutline'
      />
      <LayoutWrapper>
        <h1 className={styles.heading}>
          Create <br /> An Account
        </h1>
        <div className={styles.content}>
          <div className={styles.left}>
            <form onSubmit={handleSubmit} className={styles.form}>
              {generalError && (
                <div className={styles.errorAlert}>
                  <p>{generalError}</p>
                </div>
              )}
              <div className={styles.formGroup}>
                <label htmlFor='name' className={styles.label}>
                  Full Name
                </label>
                <input
                  id='name'
                  name='name'
                  type='text'
                  value={formData.name}
                  onChange={handleChange}
                  placeholder='John Doe'
                  className={errors.name ? styles.inputError : styles.input}
                  required
                />
                {errors.name && (
                  <p className={styles.errorText}>{errors.name}</p>
                )}
              </div>
              <div className={styles.formGroup}>
                <label htmlFor='email' className={styles.label}>
                  Email
                </label>
                <input
                  id='email'
                  name='email'
                  type='email'
                  value={formData.email}
                  onChange={handleChange}
                  placeholder='john@example.com'
                  className={errors.email ? styles.inputError : styles.input}
                  required
                />
                {errors.email && (
                  <p className={styles.errorText}>{errors.email}</p>
                )}
              </div>
              <div className={styles.formGroup}>
                <label htmlFor='password' className={styles.label}>
                  Password
                </label>
                <input
                  id='password'
                  name='password'
                  type='password'
                  value={formData.password}
                  onChange={handleChange}
                  placeholder='••••••••'
                  className={errors.password ? styles.inputError : styles.input}
                  required
                />
                {errors.password && (
                  <p className={styles.errorText}>{errors.password}</p>
                )}
              </div>
              <div className={styles.formGroup}>
                <label htmlFor='confirmPassword' className={styles.label}>
                  Confirm Password
                </label>
                <input
                  id='confirmPassword'
                  name='confirmPassword'
                  type='password'
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder='••••••••'
                  className={
                    errors.confirmPassword || errors.passwordMatch
                      ? styles.inputError
                      : styles.input
                  }
                  required
                />
                {errors.confirmPassword && (
                  <p className={styles.errorText}>{errors.confirmPassword}</p>
                )}
                {errors.passwordMatch && (
                  <p className={styles.errorText}>{errors.passwordMatch}</p>
                )}
              </div>
              <div className={styles.btnContainer}>
                <FalseButton
                  text={loading ? "Creating account..." : "Create account"}
                  disabled={loading}
                  btnType='black'
                />
              </div>
            </form>
          </div>
          <div className={styles.right}>
            <div className={styles.imgContainer}>
              <Image src={Img1} alt='' fill className={styles.img} />
            </div>
          </div>
        </div>
        <div className={styles.cardFooter}>
          <p className={styles.footerText}>
            Already have an account?{" "}
            <Link href='/auth/login' className={styles.link}>
              Sign in
            </Link>
          </p>
        </div>
      </LayoutWrapper>
      <FinalCTA />
      <Footer />
    </div>
  );
}
