import React from "react";
import { Stack } from "expo-router";

export default function AuthLayout() {
  return (
    <Stack>
      {pages.map((val, i) => (
        <Stack.Screen
          name={val.name}
          options={{
            title: val.title,
            headerShown: false,
          }}
        />
      ))}
    </Stack>
  );
}

const pages: { title: string; name: string }[] = [
  {
    title: "Create New Reset Password Screen",
    name: "reset-password/create-new",
  },
  { title: "Reset Password OTP Screen", name: "reset-password/otp" },
  { title: "Reset Password Success Screen", name: "reset-password/success" },
  { title: "Reset Password Screen", name: "reset-password/index" },
  { title: "BVN Success", name: "signup/bvn-success" },
  { title: "BVN Screen", name: "signup/bvn" },
  { title: "Create Password", name: "signup/password" },
  { title: "Enter OTP", name: "signup/otp" },
  { title: "Sign up", name: "signup/index" },
  { title: "Login", name: "login/index" },
];
