"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "@/schemas";
import { z } from "zod";
import { useState } from "react";
import { login } from "@/actions/login";
import Link from "next/link";
import { useForm } from "react-hook-form";

export default function LoginForm() {
  const [loading, setLoading] = useState(false);
  const [formError, setFormError] = useState("");

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof LoginSchema>) => {
    setLoading(true);
    login(data).then((res) => {
      if (res?.error) {
        setFormError(res?.error);
        setLoading(false);
      } else {
        setFormError("");
        setLoading(false);
      }

      setLoading(false);
    });
  };

  return <div>LoginForm</div>;
}
