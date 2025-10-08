"use client";
import { Spinner as HeroUISpinner } from "@heroui/react";

export interface ISpinnerProps {
  size?: "sm" | "md" | "lg";
}

export const Spinner = ({ size = "lg" }: ISpinnerProps) => {
  return (
    <div className="flex justify-center items-center py-8">
      <HeroUISpinner size={size} />
    </div>
  );
};
