import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import { useFormStatus } from "react-dom";

export default function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-[--color-purple-dark] text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-[--color-purple-light] active:scale-105  disabled:scale-100 disabled:bg-opacity-65 dark:border-[--color-purple-dark] mb-10 ml-2"
      disabled={pending}
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
      ) : (
        <>
          Submit{" "}
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />{" "}
        </>
      )}
    </button>
  );
}