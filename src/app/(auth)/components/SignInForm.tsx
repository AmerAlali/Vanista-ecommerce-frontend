"use client";

import { Button, Checkbox, Link as NextUiLink } from "@nextui-org/react";
import React, { useState } from "react";
import { BiLock } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";
import { TbMailFilled } from "react-icons/tb";
import { zodResolver } from "@hookform/resolvers/zod";

import Link from "next/link";
import { useForm } from "react-hook-form";
import {
  SignInCredentials,
  SignInValidator,
} from "../validators/signInValidator";
import ControllerInput from "./ControllerInput";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
const SignInForm = () => {
  const router = useRouter();

  const [error, setError] = useState<string>("");

  const {
    control,
    formState: { errors, isLoading },
    handleSubmit,
  } = useForm<SignInCredentials>({
    resolver: zodResolver(SignInValidator),
    mode: "onSubmit",
  });

  const handleSignin = async ({ email, password }: SignInCredentials) => {
    await signIn("credentials", {
      email,
      password,
      redirect: false,
    }).then((res: any) => {
      if (res?.error != null) {
        console.log(res);
        setError(res.error);
      } else {
        router.push("/");
      }
    });
  };
  return (
    <div className="w-full p-[30px] space-y-[20px]">
      <h1 className="text-[34px] font-bold">Sign In To Vanista</h1>

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
        control={control}
        name="password"
        endContent={
          <BiLock className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
        }
        label="Password"
        placeholder="Enter your password"
        type="password"
        variant="bordered"
      />
      <div className="flex py-2 px-1 justify-between">
        <Checkbox
          classNames={{
            label: "text-small",
          }}
        >
          Remember me
        </Checkbox>
        <NextUiLink as={Link} color="primary" href="/" size="sm">
          Forgot password?
        </NextUiLink>
      </div>

      <Button
        onClick={handleSubmit((data) => handleSignin(data))}
        radius="sm"
        isLoading={isLoading}
        color="primary"
        size="lg"
        fullWidth
      >
        Sign in
      </Button>
      {error && <p>{error}</p>}
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
          Don’t have an account?
        </p>
        <NextUiLink
          className="text-[16px] text-[#3C4242] font-normal"
          href="/signup"
        >
          Sign up
        </NextUiLink>
      </div>
    </div>
  );
};

export default SignInForm;
