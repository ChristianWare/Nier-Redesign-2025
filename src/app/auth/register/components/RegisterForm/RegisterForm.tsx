"use client";

import styles from "./RegisterForm.module.css";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterScehma } from "@/schemas";
// import GoogleIcon from "../../../../../../public/icons/google.svg";
import LayoutWrapper from "@/components/shared/LayoutWrapper";
import Image from "next/image";
import Img1 from "../../../../../../public/images/casaGrandeii.jpg";
import FalseButton from "@/components/shared/FalseButton/FalseButton";
import Link from "next/link";
import FinalCTA from "@/components/shared/FinalCTA/FinalCTA";
import Footer from "@/components/shared/Footer/Footer";
import * as z from "zod";
import { register as registerAction } from "@/actions/register";
import { useState } from "react";

export default function RegisterForm() {
  /* ---------------------------------------------------------------------- */
  /* 1. react‑hook‑form setup                                               */
  /* ---------------------------------------------------------------------- */
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<z.infer<typeof RegisterScehma>>({
    resolver: zodResolver(RegisterScehma),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      passwordConfirmation: "",
    },
  });

  /* ---------------------------------------------------------------------- */
  /* 2. UI state                                                            */
  /* ---------------------------------------------------------------------- */
  const [loading, setLoading] = useState(false);
  const [formError, setFormError] = useState("");
  const [formSuccess, setFormSuccess] = useState("");

  /* ---------------------------------------------------------------------- */
  /* 3. submit handler                                                      */
  /* ---------------------------------------------------------------------- */
  const onSubmit = async (data: z.infer<typeof RegisterScehma>) => {
    setLoading(true);
    const res = await registerAction(data);

    if (res.error) {
      setFormError(res.error);
      setFormSuccess("");
    } else if (res.success) {
      setFormSuccess(res.success);
      setFormError("");
      reset();
    }

    setLoading(false);
  };

  return (
    <div className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.left}>
            <div className={styles.imgContainer}>
              <Image src={Img1} alt='' fill className={styles.img} />
            </div>
          </div>

          <div className={styles.right}>
            {/* Header */}
            <div className={styles.topText}>
              <h1 className={styles.heading}>Create An Account</h1>
              <p className={styles.copy}>
                Let&rsquo;s get started with your free account
              </p>
            </div>

            <button type='button' className={styles.googleBtn}>
              {/* <GoogleIcon className={styles.google} /> */}
              <span className={styles.googleBtnText}>Sign up with Google</span>
            </button>

            <p className={styles.or}>or</p>

            <form
              className={styles.form}
              onSubmit={handleSubmit(onSubmit)}
              noValidate
            >
              {/* Name */}
              <div className={styles.formGroup}>
                <label htmlFor='name' className={styles.label}>
                  Full Name
                </label>
                <input
                  id='name'
                  type='text'
                  placeholder='John Doe'
                  {...register("name")}
                  className={errors.name ? styles.inputError : styles.input}
                />
                {errors.name && (
                  <p className={styles.errorText}>{errors.name.message}</p>
                )}
              </div>

              {/* Email */}
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

              {/* Password */}
              <div className={styles.formGroup}>
                <label htmlFor='password' className={styles.label}>
                  Password
                </label>
                <input
                  id='password'
                  type='password'
                  placeholder='••••••••'
                  {...register("password")}
                  className={errors.password ? styles.inputError : styles.input}
                />
                {errors.password && (
                  <p className={styles.errorText}>{errors.password.message}</p>
                )}
              </div>

              {/* Confirm Password */}
              <div className={styles.formGroup}>
                <label htmlFor='passwordConfirmation' className={styles.label}>
                  Confirm Password
                </label>
                <input
                  id='passwordConfirmation'
                  type='password'
                  placeholder='••••••••'
                  {...register("passwordConfirmation")}
                  className={
                    errors.passwordConfirmation
                      ? styles.inputError
                      : styles.input
                  }
                />
                {errors.passwordConfirmation && (
                  <p className={styles.errorText}>
                    {errors.passwordConfirmation.message}
                  </p>
                )}
              </div>

              {/* Submit */}
              <div className={styles.btnContainer}>
                <FalseButton
                  text={loading ? "Creating account..." : "Create account"}
                  disabled={loading}
                  btnType='black'
                />
              </div>

              {/* Success / Error banner */}
              {formError && <p className={styles.errorBanner}>{formError}</p>}
              {formSuccess && (
                <p className={styles.successBanner}>{formSuccess}</p>
              )}

              {/* Footer */}
              <div className={styles.cardFooter}>
                <p className={styles.footerText}>
                  Already have an account?{" "}
                  <Link href='/auth/login' className={styles.link}>
                    Sign in
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </LayoutWrapper>

      <FinalCTA />
      <Footer />
    </div>
  );
}
