import styles from "./GoogleButton.module.css";
import GoogleIcon from "../../../../public/icons/google.svg";
import { googleAuthenticate } from "@/actions/google-login";
import { useActionState } from "react";

interface Props {
  title: string;
}

export default function GoogleButton({ title }: Props) {
  const [errorMsgGoogle, dispatchGoogle] = useActionState(
    googleAuthenticate,
    undefined
  );

  return (
    <form action={dispatchGoogle} className={styles.form}>
      <button type='submit' className={styles.googleBtn}>
        <GoogleIcon className={styles.google} />
        <span className={styles.googleBtnText}>Sign {title} with Google</span>
      </button>
      <p>{errorMsgGoogle}</p>
    </form>
  );
}
