import React, { useEffect, useRef, useState } from "react";
import { Eye, EyeOff } from "lucide-react";
// Sign Up Modal (auto open without button)

export default function SignUpModalDemo({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) return null; // 👈 don't render if not open

  return <SignUpModal onClose={onClose} />;
}
function SignUpModal({ onClose }: { onClose: () => void }) {
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const firstNameRef = useRef<HTMLInputElement | null>(null);
    const [showPassword, setShowPassword] = useState(false);
const [showConfirmPassword, setShowConfirmPassword] = useState(false);


  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  useEffect(() => {
    firstNameRef.current?.focus();
  }, []);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [errors, setErrors] = useState<any>({});
  const [submitting, setSubmitting] = useState(false);

  const validate = () => {
    const next: any = {};
    if (!firstName.trim()) next.firstName = "First name required";
    if (!lastName.trim()) next.lastName = "Last name required";
    const emailOk = /[^@\s]+@[^@\s]+\.[^@\s]+/.test(email);
    if (!emailOk) next.email = "Enter a valid email";
    if (password.length < 6) next.password = "Password must be at least 6 characters";
    if (confirmPassword !== password) next.confirmPassword = "Passwords do not match";
    if (!acceptTerms) next.terms = "You must accept terms & conditions";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    try {
      await new Promise((r) => setTimeout(r, 900));
      console.log({ firstName, lastName, email, password });
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
      aria-labelledby="signup-title"
      className="fixed inset-0 z-[1000]"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      <div ref={dialogRef} className="absolute inset-0 grid place-items-center p-4">
        <div className="relative w-full max-w-md rounded-2xl bg-white text-black shadow-2xl ring-1 ring-black/5 dark:bg-neutral-900 dark:text-white">
          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute right-3 top-3 rounded-full p-2 text-sm hover:bg-black/5 dark:hover:bg-white/10"
          >
            ✕
          </button>

          <div className="px-6 pt-8 pb-6">
            <h2 id="signup-title" className="text-2xl font-semibold tracking-tight font-['Exo2] leading-[100%]">
              Sign Up
            </h2>
            <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">
              Create your account by filling the information below.
            </p>

            <form onSubmit={onSubmit} className="mt-6 space-y-4">
              {/* First Name */}
                <div className="flex items-center justify-between gap-5 max-[500px]:flex-col max-[500px]:items-start">
                                   <div className="max-[500px]:w-full">
                <label htmlFor="firstName" className="block text-sm font-normal mb-1 font-['Exo2] leading-[100%]">
                  First Name
                </label>
                <input
                  id="firstName"
                  ref={firstNameRef}
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full rounded-xl border border-neutral-200 bg-white px-3 py-2 text-sm outline-none focus:ring-4 focus:ring-black/10 dark:border-neutral-700 dark:bg-neutral-950"
                  placeholder="John"
                  required
                />
                {errors.firstName && <p className="mt-1 text-xs text-red-600">{errors.firstName}</p>}
              </div>

              {/* Last Name */}
              <div className="max-[500px]:w-full">
                <label htmlFor="lastName" className="block text-sm font-normal mb-1 font-['Exo2] leading-[100%]">
                  Last Name
                </label>
                <input
                  id="lastName"
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="w-full rounded-xl border border-neutral-200 bg-white px-3 py-2 text-sm outline-none focus:ring-4 focus:ring-black/10 dark:border-neutral-700 dark:bg-neutral-950"
                  placeholder="Doe"
                  required
                />
                {errors.lastName && <p className="mt-1 text-xs text-red-600">{errors.lastName}</p>}
              </div>
                </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-normal mb-2 font-['Exo2] leading-[100%]">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-xl border border-neutral-200 bg-white px-3 py-2 text-sm outline-none focus:ring-4 focus:ring-black/10 dark:border-neutral-700 dark:bg-neutral-950"
                  placeholder="you@example.com"
                  required
                />
                {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
              </div>

              {/* Password */}
                     
                      <div className="flex items-center justify-between max-[500px]:flex-col max-[500px]:items-start gap-5">
                                         <div className="max-[500px]:w-full relative">
  <label
    htmlFor="password"
    className="block text-sm font-medium mb-2 font-['Exo2] leading-[100%]"
  >
    Password
  </label>
  <input
    id="password"
    type={showPassword ? "text" : "password"} // 👈 toggle type
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    className="w-full rounded-xl border border-neutral-200 bg-white px-3 py-2 pr-10 text-sm outline-none focus:ring-4 focus:ring-black/10 dark:border-neutral-700 dark:bg-neutral-950"
    placeholder="••••••••"
    required
  />
  <button
    type="button"
    onClick={() => setShowPassword(!showPassword)}
    className="absolute right-3 top-8 text-white hover:text-black dark:hover:text-white"
  >
    {showPassword ? <Eye size={18} /> : <EyeOff size={18} />}
  </button>
  {errors.password && <p className="mt-1 text-xs text-red-600">{errors.password}</p>}
</div>

              {/* Confirm Password */}
              <div className="max-[500px]:w-full relative">
  <label
    htmlFor="confirmPassword"
    className="block text-sm font-medium mb-2 font-['Exo2] leading-[100%]"
  >
    Confirm Password
  </label>
  <input
    id="confirmPassword"
    type={showConfirmPassword ? "text" : "password"} // 👈 toggle type
    value={confirmPassword}
    onChange={(e) => setConfirmPassword(e.target.value)}
    className="w-full rounded-xl border border-neutral-200 bg-white px-3 py-2 pr-10 text-sm outline-none focus:ring-4 focus:ring-black/10 dark:border-neutral-700 dark:bg-neutral-950"
    placeholder="••••••••"
    required
  />
  <button
    type="button"
    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
    className="absolute right-3 top-8 text-white hover:text-black dark:hover:text-white"
  >
    {showConfirmPassword ? <Eye size={18} /> : <EyeOff size={18} />}
  </button>
  {errors.confirmPassword && <p className="mt-1 text-xs text-red-600">{errors.confirmPassword}</p>}
</div>

                      </div>



              {/* Terms and Conditions */}
              <div className="flex items-start gap-2 text-sm">
                <input
                  type="checkbox"
                  checked={acceptTerms}
                  onChange={(e) => setAcceptTerms(e.target.checked)}
                        className="size-4 rounded border-neutral-300 leading-[100%] font-['Exo2'] focus:ring-black/30 dark:border-neutral-600
                 accent-[#d3f85a]" // ✅ sets background + checkmark color
      style={{
        color: "#040914", // ✅ makes the check icon (tick) this color
      }}
                />
                <p>
                  I agree to the {" "}
                  <a href="#" className="underline underline-offset-2 hover:text-[#d3f85a]">
                    Terms and Conditions
                  </a>
                </p>
              </div>
              {errors.terms && <p className="mt-1 text-xs text-red-600">{errors.terms}</p>}

              <button
                type="submit"
                disabled={submitting}
                className="w-full rounded-xl bg-black px-4 py-2 text-sm font-semibold text-white shadow-md transition active:translate-y-[1px] disabled:opacity-60 dark:bg-[#d3f85a] hover:bg-[#d3f85a]/90 dark:text-black"
              >
                {submitting ? "Signing up…" : "Sign Up"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
