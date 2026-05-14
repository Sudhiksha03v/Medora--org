"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { decryptKey, encryptKey } from "@/lib/utils";

export default function AdminAccessPage() {
  const router = useRouter();
  const [isVerified, setIsVerified] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [passkey, setPasskey] = useState("");
  const [error, setError] = useState("");

  // Manual verification only - auto-redirect removed as per user request
  useEffect(() => {
    setIsLoading(false);
  }, []);

  if (isVerified) return null;

  const validatePasskey = (e: React.FormEvent) => {
    e.preventDefault();
    if (passkey === process.env.NEXT_PUBLIC_ADMIN_PASSKEY) {
      const encrypted = encryptKey(passkey);
      localStorage.setItem("accessKey", encrypted);
      router.push("/admin");
    } else {
      setError("Invalid passkey. Please try again.");
      setPasskey("");
    }
  };

  return (
    <div className="min-h-screen bg-dark-300 flex flex-col items-center justify-center relative overflow-hidden px-4">

      {/* Checker background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          opacity: 0.04,
        }}
      />

      {/* Glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[700px] rounded-full bg-green-500/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -right-32 size-[400px] rounded-full bg-green-500/5 blur-3xl"
      />

      {/* Logo */}
      <div className="relative z-10 mb-10">
        <Link href="/">
          <Image
            src="/assets/icons/logo-full.png"
            width={140}
            height={40}
            alt="Medora"
            className="h-9 w-auto opacity-80 hover:opacity-100 transition-opacity"
            style={{ height: 'auto' }}
          />
        </Link>
      </div>

      {/* Card */}
      <div className="relative z-10 w-full max-w-md bg-dark-400 border border-dark-500/70 rounded-3xl p-8 shadow-2xl">

        {/* Header */}
        <div className="flex flex-col gap-2 mb-8">
          <div className="size-12 rounded-xl bg-green-500/10 flex items-center justify-center text-green-500 mb-2">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="size-6">
              <rect x="3" y="11" width="18" height="11" rx="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
          </div>
          <h1 className="font-display text-[22px] font-bold text-white">Admin Access</h1>
          <p className="text-[14px] text-dark-600 leading-relaxed">
            Enter your 6-digit passkey to access the admin dashboard.
          </p>
        </div>

        {/* OTP Form */}
        <form onSubmit={validatePasskey} className="flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <label className="text-[13px] font-medium text-dark-700">Passkey</label>
            <InputOTP
              maxLength={6}
              value={passkey}
              pattern="^[0-9]+$"
              onChange={(value) => {
                setPasskey(value);
                setError("");
              }}
            >
              <InputOTPGroup className="flex w-full justify-between gap-3">
                <InputOTPSlot className="shad-otp-slot flex-1" index={0} />
                <InputOTPSlot className="shad-otp-slot flex-1" index={1} />
                <InputOTPSlot className="shad-otp-slot flex-1" index={2} />
                <InputOTPSlot className="shad-otp-slot flex-1" index={3} />
                <InputOTPSlot className="shad-otp-slot flex-1" index={4} />
                <InputOTPSlot className="shad-otp-slot flex-1" index={5} />
              </InputOTPGroup>
            </InputOTP>

            {error && (
              <p className="text-[13px] text-red-400 text-center">{error}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={passkey.length < 6}
            className="w-full py-3.5 rounded-xl bg-green-500 text-white font-display font-semibold text-[15px] hover:brightness-110 transition-all duration-200 shadow-lg shadow-green-500/20 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Verify & Enter
          </button>
        </form>

        {/* Back link */}
        <div className="mt-6 text-center">
          <Link
            href="/"
            className="text-[13px] text-dark-600 hover:text-white transition-colors"
          >
            ← Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}
