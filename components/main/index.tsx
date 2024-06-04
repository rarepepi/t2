"use client";
import { Button } from "@nextui-org/react";
import toast from "react-hot-toast";

export const MainPage = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center mt-8">
        Welcome to the T2 template
      </h1>
      <Button
        onClick={() => {
          toast.success("Hello, world!");
        }}
        className="mt-8"
      >
        Click me
      </Button>
    </div>
  );
};
