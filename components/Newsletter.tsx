import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Image from "next/image";

import Mail from "@/public/svg/mail.svg";

interface Inputs {
  email: string;
  example: string;
  exampleRequired: string;
}

export default function Newsletter(): JSX.Element {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <div className="overflow-hidden mt-20 relative py-10 px-6 sm:px-12 bg-indigo-600 dark:bg-indigo-800 rounded-2xl border border-gray-700 dark:border-gray-400 shadow-xl">
      <div
        aria-hidden="true"
        className="absolute inset-0 -mt-72 sm:-mt-32 md:mt-0"
      >
        <svg
          className="absolute inset-0 w-full h-full"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 1463 360"
        >
          <path
            className="text-indigo-500 dark:text-indigo-700 text-opacity-40"
            fill="currentColor"
            d="M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z"
          ></path>
          <path
            className="text-indigo-700 dark:text-indigo-900 text-opacity-40"
            fill="currentColor"
            d="M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z"
          ></path>
        </svg>
      </div>
      <div className="text-white relative z-10 px-2">
        <h3 className="text-3xl font-extrabold">Subscribe to my newsletter.</h3>
        <p className="mt-5 text-base font-semibold">
          I love to share what I see and discover. If you want to be informed
          about them, stay tuned.
        </p>
        <form className="mt-10" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col sm:flex-row">
            <input
              className="py-3 px-5 w-full rounded text-gray-500 border border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-900 focus:border-transparent dark:bg-gray-50"
              type="text"
              placeholder="Enter your email"
              {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
            />
            {/* errors will return when field validation fails  */}
            <input
              className="button-active-effect mt-5 sm:mt-0 sm:ml-5 py-3 px-7 rounded bg-indigo-500 cursor-pointer"
              value="Submit Button"
              type="submit"
            />
          </div>
          {errors.email && (
            <div className="text-red-300 mt-2">Email is required</div>
          )}
        </form>
      </div>
      <div className="mt-10 text-gray-100 flex">
        <span>
          <Image
            layout="fixed"
            src={Mail}
            alt="mail-icon"
            width={22}
            height={22}
          />
        </span>
        <div className="ml-2 relative z-10">Sub count</div>
      </div>
    </div>
  );
}
