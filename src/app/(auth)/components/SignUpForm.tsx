"use client";

import { Button, Checkbox, Input, Link as NextUiLink } from "@nextui-org/react";
import React, { useState } from "react";
import { BiLock } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";
import { TbMailFilled } from "react-icons/tb";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import {
  SignUpCredentials,
  SignUpValidator,
} from "../validators/signUpValidator";
import { useRouter } from "next/navigation";
import API from "@/lib/API";
import { apiRoutes } from "@/apiRoutes";
import ControllerInput from "./ControllerInput";
const SignUpForm = () => {
  const [error, setError] = useState<string>("");
  const router = useRouter();
  const {
    control,
    formState: { errors, isLoading },
    handleSubmit,
  } = useForm<SignUpCredentials>({
    resolver: zodResolver(SignUpValidator),
    mode: "onSubmit",
  });

  const handleSignUp = async ({ email, password, name }: SignUpCredentials) => {
    try {
      await API.post(apiRoutes.signup, { email, password, name });
      await signIn("credentials", {
        email,
        password,
        redirect: false,
      }).then((res) => {
        if (res?.error != null) {
          setError(res.error);
        } else {
          router.push("/");
        }
      });
    } catch (error: any) {
      setError(error?.message);
    }
  };
  return (
    <div className="w-full p-[30px] space-y-[20px]">
      <h1 className="text-[34px] font-bold">Sign Up To Vanista</h1>
      <ControllerInput
        control={control}
        name="name"
        allowWhiteSpace
        autoFocus
        endContent={
          <TbMailFilled className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
        }
        label="Name"
        placeholder="Enter your name"
        variant="bordered"
      />
      <ControllerInput
        control={control}
        name="email"
        autoFocus
        endContent={
          <TbMailFilled className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
        }
        label="Email"
        placeholder="Enter your email"
        variant="bordered"
      />
      <ControllerInput
        name="password"
        control={control}
        endContent={
          <BiLock className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
        }
        label="Password"
        placeholder="Enter your password"
        type="password"
        variant="bordered"
      />
      <Button
        onClick={handleSubmit((data) => handleSignUp(data))}
        radius="sm"
        color="primary"
        size="lg"
        fullWidth
      >
        Sign Up
      </Button>
      <div className="flex flex-row justify-center items-center">
        <div className="h-[2px] w-full bg-gray-100" />
        <div className="mx-4">OR</div>
        <div className="h-[2px] w-full bg-gray-100" />
      </div>
      <div>
        <Button
          startContent={<FcGoogle size={20} />}
          variant="bordered"
          radius="sm"
          size="lg"
          fullWidth
        >
          Continue With Google
        </Button>
      </div>
      <div className="flex flex-row items-center justify-center gap-x-1">
        <p className="text-[16px] text-[#3C4242] font-normal">
          Already have an account?
        </p>
        <NextUiLink
          className="text-[16px] text-[#3C4242] font-normal"
          color="primary"
          href="/signin"
        >
          Sign in
        </NextUiLink>
      </div>
    </div>
  );
};

export default SignUpForm;
