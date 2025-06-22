import { useAuth } from "../AuthContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Login() {
  const auth = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (auth?.user) {
      navigate("/");
    }
  }, [auth?.user, navigate]);

  const handleLogin = async () => {
    try {
      await auth?.signInWithGoogle();
    } catch (error) {
      console.error("登录失败:", error);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-black text-white">
      <button
        onClick={handleLogin}
        className="px-4 py-2 bg-blue-500 rounded-md"
      >
        Sign in with Google
      </button>
    </div>
  );
}
