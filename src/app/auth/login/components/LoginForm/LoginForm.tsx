"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { LoginSchema } from "@/schemas";
import { login as loginAction } from "@/actions/login";

import LayoutWrapper from "@/components/shared/LayoutWrapper";
import FalseButton from "@/components/shared/FalseButton/FalseButton";
import FinalCTA from "@/components/shared/FinalCTA/FinalCTA";
import Footer from "@/components/shared/Footer/Footer";
import GoogleIcon from "../../../../../../public/icons/google.svg";
import Img1 from "../../../../../../public/images/casaGrandeii.jpg";
import styles from "./LoginForm.module.css";
import Link from "next/link";
import Image from "next/image";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: { email: "", password: "" },
  });

  const [loading, setLoading] = useState(false);
  const [formError, setFormError] = useState("");

  const onSubmit = async (data: z.infer<typeof LoginSchema>) => {
    setLoading(true);
    const res = await loginAction(data);

    if (res.error) {
      setFormError(res.error);
    } else {
      setFormError("");
      // TODO: redirect on success, e.g. router.push("/dashboard")
    }

    setLoading(false);
  };

  return (
    <div className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.left}>
            <div className={styles.topText}>
              <h1 className={styles.heading}>Welcome Back</h1>
              <p className={styles.copy}>
                Enter your email and password to access your account
              </p>
            </div>

            <button type='button' className={styles.googleBtn}>
              <GoogleIcon className={styles.google} />
              <span className={styles.googleBtnText}>Sign in with Google</span>
            </button>

            <p className={styles.or}>or</p>

            <form
              onSubmit={handleSubmit(onSubmit)}
              autoComplete='off'
              noValidate
              className={styles.form}
            >
              {formError && (
                <div className={styles.errorAlert}>
                  <p>{formError}</p>
                </div>
              )}

              {/* email */}
              <div className={styles.formGroup}>
                <label htmlFor='email' className={styles.label}>
                  Email
                </label>
                <input
                  id='email'
                  type='email'
                  placeholder='john@example.com'
                  {...register("email")}
                  className={errors.email ? styles.inputError : styles.input}
                />
                {errors.email && (
                  <p className={styles.errorText}>{errors.email.message}</p>
                )}
              </div>

              {/* password */}
              <div className={styles.formGroup}>
                <div className={styles.labelWithLink}>
                  <label htmlFor='password' className={styles.label}>
                    Password
                  </label>
                  <Link
                    href='/forgot-password'
                    className={styles.forgotPasswordLink}
                  >
                    Forgot password?
                  </Link>
                </div>
                <input
                  id='password'
                  type='password'
                  placeholder='••••••••'
                  autoComplete='off'
                  {...register("password")}
                  className={errors.password ? styles.inputError : styles.input}
                />
                {errors.password && (
                  <p className={styles.errorText}>{errors.password.message}</p>
                )}
              </div>

              {/* submit */}
              <div className={styles.btnContainer}>
                <FalseButton
                  text={loading ? "Loading..." : "Sign in"}
                  disabled={loading}
                  btnType='black'
                />
              </div>
            </form>

            <footer className={styles.cardFooter}>
              <p className={styles.footerText}>
                Don’t have an account?{" "}
                <Link href='/auth/register' className={styles.link}>
                  Sign up
                </Link>
              </p>
            </footer>
          </div>

          <div className={styles.right}>
            <div className={styles.imgContainer}>
              <Image src={Img1} fill alt='' className={styles.img} />
            </div>
          </div>
        </div>
      </LayoutWrapper>

      <FinalCTA />
      <Footer />
    </div>
  );
}
