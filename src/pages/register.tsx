import CautionIcon from "@/components/ui/caution-icon";
import { unprotectedRoutes } from "@/config/routes";
import { RegisterSchema, type RegisterType } from "@/types/dtos/auth.dto";
import { toastr } from "@/utils/toast";
import { useState } from "react";
import { Link, useNavigate } from "react-router";
import z from "zod";

const Register: React.FC = () => {
  
  const navigate = useNavigate();
  
  const [registerData, setRegisterData] = useState<RegisterType>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState<RegisterType>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError({ 
      name: "", 
      email: "", 
      password: "", 
      confirmPassword: "" 
    });
    // Zod validation,,, its so clean
    const result = RegisterSchema.safeParse(registerData);
    if (!result.success) {
      const tree = z.treeifyError(result.error);
      setError({
        name: tree.properties?.name?.errors[0] || "",
        email: tree.properties?.email?.errors[1] || tree.properties?.email?.errors[0] || "",
        password: tree.properties?.password?.errors[0] || "",
        confirmPassword: tree.properties?.confirmPassword?.errors[0] || "",
      });
      return;
    }
    try {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 1500));
      toastr.success("Account created successfully!");
      setRegisterData({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
      navigate(unprotectedRoutes.LOGIN);
    } catch (err) {
      toastr.error("Something went wrong.");
      console.error("Register failed:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-5 w-full items-center">
      <span className="text-2xl font-semibold">Register</span>
      <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-full">
        {/* Name */}
        <div className="flex flex-col gap-1">
          <p className="text-sm text-gray-500 after:content-['*'] after:text-red-500">Name </p>
          <input
            type="text"
            placeholder="Name"
            value={registerData.name}
            onChange={(e) =>
              setRegisterData({ ...registerData, name: e.target.value })
            }
            className="border border-gray-600 bg-[#201936] rounded-md p-2 text-white focus:outline-none focus:ring-2 
              focus:ring-[#40ffaa] focus:border-transparent transition duration-200"
          />
          {error.name && (
            <div className="flex items-center gap-1">
              <CautionIcon color="red" />
              <p className="text-red-500 text-sm">{error.name}</p>
            </div>
          )}
        </div>
        {/* Email */}
        <div className="flex flex-col gap-1">
          <p className="text-sm text-gray-500 after:content-['*'] after:text-red-500">Email </p>
          <input
            type="email"
            placeholder="Email"
            value={registerData.email}
            onChange={(e) =>
              setRegisterData({ ...registerData, email: e.target.value })
            }
            className="border border-gray-600 bg-[#201936] rounded-md p-2 text-white focus:outline-none focus:ring-2 
              focus:ring-[#40ffaa] focus:border-transparent transition duration-200"
          />
          {error.email && (
            <div className="flex items-center gap-1">
              <CautionIcon color="red" />
              <p className="text-red-500 text-sm">{error.email}</p>
            </div>
          )}
        </div>
        {/* Password */}
        <div className="flex flex-col gap-1">
          <p className="text-sm text-gray-500 after:content-['*'] after:text-red-500">Password </p>
          <input
            type="password"
            placeholder="Password"
            value={registerData.password}
            onChange={(e) =>
              setRegisterData({ ...registerData, password: e.target.value })
            }
            className="border border-gray-600 bg-[#201936] rounded-md p-2 text-white focus:outline-none 
              focus:ring-2 focus:ring-[#40ffaa] focus:border-transparent transition duration-200"
          />
          {error.password && (
            <div className="flex items-center gap-1">
              <CautionIcon color="red" />
              <p className="text-red-500 text-sm">{error.password}</p>
            </div>
          )}
        </div>
        {/* Confirm Password */}
        <div className="flex flex-col gap-1">
          <p className="text-sm text-gray-500 after:content-['*'] after:text-red-500">Confirm Password </p>
          <input
            type="password"
            placeholder="Confirm Password"
            value={registerData.confirmPassword}
            onChange={(e) =>
              setRegisterData({
                ...registerData,
                confirmPassword: e.target.value,
              })
            }
            className="border border-gray-600 bg-[#201936] rounded-md p-2 text-white focus:outline-none 
              focus:ring-2 focus:ring-[#40ffaa] focus:border-transparent transition duration-200"
          />
          {error.confirmPassword && (
            <div className="flex items-center gap-1">
              <CautionIcon color="red" />
              <p className="text-red-500 text-sm">{error.confirmPassword}</p>
            </div>
          )}
        </div>
        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className={`rounded-md p-2 bg-[#4079ff] ${
            loading
              ? "opacity-30 cursor-not-allowed"
              : "text-white hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#40ffaa] transition duration-200 cursor-pointer"
          }`}
        >
          {loading ? "Registering..." : "Register"}
        </button>
      </form>
      <div className="flex items-center gap-2 text-sm">
        <CautionIcon />
        <p className="text-gray-400">Already have an account?</p>
        <Link to="/login" className="text-[#40ffaa] hover:underline">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Register;
