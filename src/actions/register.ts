/* eslint-disable @typescript-eslint/no-unused-vars */
"use server";

import * as z from "zod";
import { prisma } from "../../prisma/prisma";
import bcrypt from "bcryptjs";
import { RegisterScehma } from "@/schemas";

export const register = async (data: z.infer<typeof RegisterScehma>) => {
  try {
    const validatedData = RegisterScehma.parse(data);

    if (!validatedData) {
      return { error: "Invalid input data" };
    }

    const { email, name, password, passwordConfirmation } = validatedData;

    if (password !== passwordConfirmation) {
      return { error: "Passwords do not match" };
    }

    const hashedPasssword = await bcrypt.hash(password, 10);

    const userExists = await prisma.user.findFirst({
      where: {
        email,
      },
    });

    if (userExists) {
      return { error: "User already exists" };
    }

    const lowercaseEmail = email.toLowerCase();

    const user = await prisma.user.create({
      data: {
        email: lowercaseEmail,
        password: hashedPasssword,
        name,
      },
    });

    return { success: "User created successfully" };
  } catch (error) {
    console.error(error);
    return { error: "An error has occured" };
  }
};
