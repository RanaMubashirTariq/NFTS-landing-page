import React, { useEffect, useRef, useState } from "react";
import { Eye, EyeOff } from "lucide-react";

// Sign In Modal (auto open without button)
export default function SignInModalDemo({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) return null; // Don’t render when closed

  return <SignInModal onClose={onClose} />;
}

function SignInModal({ onClose }: { onClose: () => void }) {
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  useEffect(() => {
    emailRef.current?.focus();
  }, []);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPwd, setShowPwd] = useState(false);
  const [remember, setRemember] = useState(true);
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
  const [submitting, setSubmitting] = useState(false);

  const validate = () => {
    const next: { email?: string; password?: string } = {};
    const emailOk = /[^@\s]+@[^@\s]+\.[^@\s]+/.test(email);
    if (!emailOk) next.email = "Enter a valid email";
    if (password.length < 6) next.password = "Min 6 characters";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    try {
      await new Promise((r) => setTimeout(r, 900));
      console.log({ email, password, remember });
      onClose();
    } catch (err) {
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="signin-title"
      className="fixed inset-0 z-[1000]"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm max-[500px]:bg-white/10" />

      <div ref={dialogRef} className="absolute inset-0 grid place-items-center p-4 ">
        <div className="relative w-full max-w-md rounded-2xl bg-[#040914] text-text shadow-2xl ring-1 ring-black/5 dark:bg-neutral-900 dark:text-white">
        <div className="absolute w-[278px] h-[273px] top-[200px] left-[32px] rounded-[139.16px/136.73px] rotate-[177.74deg] blur-[147.75px] bg-[linear-gradient(141deg,rgba(123,164,154,0.5)_0%,rgba(21,151,119,0.5)_100%)]" />
          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute right-3 top-3 rounded-full p-2 text-sm  text-white w-[40px] h-[40px] hover:bg-white/10"
          >
            ✕
          </button>

          <div className="px-6 pt-8 pb-6">
            <h2 id="signin-title" className="text-2xl font-semibold text-white tracking-tight leading-[100%] font-['Exo2']">
              Sign in
            </h2>
            <p className="mt-3 text-sm text-neutral-200  leading-[100%] font-['Exo2']">
              Welcome back! Please enter your details.
            </p>

            <form onSubmit={onSubmit} className="mt-6 space-y-4">
              <div>
                <label htmlFor="email" className="block text-[16px] text-white font-normal mb-3 leading-[100%] font-['Exo2']">
                  Email ID
                </label>
                <input
                  id="email"
                  ref={emailRef}
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-xl placeholder:text-white border border-neutral-200 bg-white/20 px-3 py-2 text-sm outline-none focus:ring-4 focus:ring-black/10 dark:border-neutral-700 dark:bg-neutral-950"
                  placeholder="you@example.com"
                  autoComplete="email"
                  required
                />
                {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="password" className="block text-[16px] text-white font-medium mb-3 leading-[100%] font-['Exo2']">
                  Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    type={showPwd ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full rounded-xl border placeholder:text-white  border-neutral-200 bg-white/20 px-3 py-2 pr-12 text-sm outline-none focus:ring-4 focus:ring-black/10 dark:border-neutral-700 dark:bg-neutral-950"
                    placeholder="••••••••"
                    autoComplete="current-password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPwd(!showPwd)}
                    className="absolute right-3 top-[10px] text-white  "
                  >
                    {showPwd ? <Eye size={18} /> : <EyeOff size={18} />}
                  </button>
                </div>
                {errors.password && <p className="mt-1 text-xs text-red-600">{errors.password}</p>}
              </div>

<div className="flex items-center justify-between">
  <label className="flex items-center gap-2   text-sm">
    <input
      type="checkbox"
      checked={remember}
      onChange={(e) => setRemember(e.target.checked)}
      className="size-4 rounded border-neutral-300 leading-[100%] font-['Exo2']   
                 accent-[#d3f85a]" // ✅ sets background + checkmark color
      style={{
        color: "#040914", // ✅ makes the check icon (tick) this color
      }}
    />
    <span className="text-white">
    Remember me
    </span>
  </label>

  <a
    href="#"
    className="text-sm underline-offset-4 hover:underline leading-[100%] text-white font-['Exo2']"
  >
    Forgot password?
  </a>
</div>


              <button
                type="submit"
                disabled={submitting}
                className="relative z-11 w-full rounded-xl  px-4 py-2 text-sm font-bold text-black shadow-md transition active:translate-y-[1px]  bg-[#d3f85a] hover:bg-[#d3f85a]/90  "
              >
                {submitting ? "Signing in…" : "Sign in"}
              </button>

              <div className="relative my-4">
                <div className="absolute inset-0 top-1/2 translate-y-1/2 border-t border-white dark:border-neutral-700" />
                <span className="relative mx-auto block w-max bg-[#040914] px-2 text-xs text-white bg-neutral-900  leading-[100%] font-['Exo2']">
                  or continue with
                </span>
              </div>

              <button
                type="button"
                onClick={() => alert("Hook up Google sign-in here")}
                className="z-11 w-full rounded-xl border border-neutral-200 text-white hover:text-black   bg-[#040914] px-4 py-2  mt-3 text-sm leading-[100%] font-['Exo2'] font-semibold shadow-sm hover:bg-[#d3f85a] hover:text-black active:translate-y-[1px] dark:border-neutral-700 dark:bg-neutral-950"
              >
                <span className="inline-flex items-center gap-2">
                  <GoogleIcon /> Sign in with Google
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

function GoogleIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="h-4 w-4">
      <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.6 31.6 29.2 35 24 35c-6.1 0-11-4.9-11-11s4.9-11 11-11c2.8 0 5.4 1.1 7.4 2.8l5.7-5.7C33.6 6.1 28.9 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.2-.4-3.5z"/><path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.3 16.2 18.8 13 24 13c2.8 0 5.4 1.1 7.4 2.8l5.7-5.7C33.6 6.1 28.9 4 24 4 16.1 4 9.5 8.5 6.3 14.7z"/><path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35 26.7 36 24 36c-5.1 0-9.4-3.3-11.1-7.8l-6.6 5.1C9.4 39.5 16.1 44 24 44z"/><path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-1.6 4.6-6 8-11.3 8-6.1 0-11-4.9-11-11s4.9-11 11-11c2.8 0 5.4 1.1 7.4 2.8l5.7-5.7C33.6 6.1 28.9 4 24 4c-7.9 0-14.7 4.6-17.7 11.2l6.6 4.8C14.3 16.2 18.8 13 24 13c2.8 0 5.4 1.1 7.4 2.8l5.7-5.7C33.6 6.1 28.9 4 24 4z"/>
    </svg>
  );
}
