"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Eye, EyeOff, Lock, User } from "lucide-react";

export default function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    
    const res = await signIn("credentials", {
      redirect: false,
      username,
      password,
    });

    if (res?.error) {
      setError("Invalid username or password");
      setIsLoading(false);
    } else {
      router.push("/admin/blog");
      router.refresh();
    }
  };

  return (
    <div className="min-h-screen bg-white flex">
      {/* Left Side - Branding (Hidden on mobile) */}
      <div className="hidden lg:flex w-1/2 bg-[#00B8FF] flex-col justify-between p-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 -left-1/4 w-full h-full bg-white rounded-full mix-blend-overlay filter blur-3xl transform scale-150"></div>
          <div className="absolute bottom-0 -right-1/4 w-full h-full bg-[#FFE800] rounded-full mix-blend-overlay filter blur-3xl transform scale-150"></div>
        </div>
        
        <div className="relative z-10">
          <div className="bg-white p-4 rounded-2xl inline-block shadow-lg mb-8">
            <Image
              src="/images/logo.png"
              alt="Enterprise Cleaning Corporation"
              width={240}
              height={80}
              className="h-12 w-auto object-contain"
              priority
            />
          </div>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-white leading-tight mt-12">
            Manage your <br/>
            <span className="text-[#FFE800]">digital presence</span> <br/>
            with ease.
          </h1>
          <p className="text-white/80 text-lg mt-6 max-w-md leading-relaxed">
            Access your secure admin dashboard to manage blog posts, services, customer submissions, and more.
          </p>
        </div>
        
        <div className="relative z-10 flex items-center gap-4 text-white/60 text-sm font-medium">
          <span>&copy; {new Date().getFullYear()} Enterprise Cleaning Corp.</span>
          <span className="w-1 h-1 rounded-full bg-white/40"></span>
          <span>All rights reserved.</span>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12 bg-slate-50 relative">
        <div className="w-full max-w-md bg-white p-8 sm:p-10 rounded-3xl shadow-xl border border-slate-100">
          
          <div className="lg:hidden flex justify-center mb-8">
             <div className="bg-slate-50 p-3 rounded-2xl border border-slate-100 shadow-sm">
              <Image
                src="/images/logo.png"
                alt="Enterprise Cleaning Corporation"
                width={200}
                height={60}
                className="h-10 w-auto object-contain"
              />
            </div>
          </div>

          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Welcome Back</h2>
            <p className="text-slate-500 mt-2 font-medium">Please sign in to your account</p>
          </div>
          
          {error && (
            <div className="bg-red-50 text-red-600 text-sm p-4 rounded-xl mb-6 border border-red-100 flex items-start gap-3">
              <div className="w-5 h-5 shrink-0 mt-0.5 rounded-full bg-red-100 flex items-center justify-center text-red-600 font-bold">!</div>
              {error}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-5">
            <div className="space-y-1.5">
              <label className="block text-sm font-bold text-slate-700">Username</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-slate-400" />
                </div>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#00B8FF]/50 focus:border-[#00B8FF] transition-all text-slate-900 font-medium placeholder:text-slate-400"
                  placeholder="Enter your username"
                  required
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="block text-sm font-bold text-slate-700">Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-slate-400" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-11 pr-12 py-3.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#00B8FF]/50 focus:border-[#00B8FF] transition-all text-slate-900 font-medium placeholder:text-slate-400"
                  placeholder="••••••••"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-slate-600 transition-colors"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>

            <button 
              type="submit" 
              disabled={isLoading}
              className="w-full bg-[#0090c8] hover:bg-[#00B8FF] text-white font-bold text-lg py-3.5 rounded-xl shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/30 transition-all flex items-center justify-center gap-2 mt-4 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isLoading ? "Signing in..." : "Sign In"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
