import { Navigate } from "react-router-dom";
import { useAuth } from "../AuthContext";
import { ReactNode } from "react";

export default function ProtectedRoute({ children }: { children: ReactNode }) {
  const auth = useAuth();
  if (!auth?.user) return <Navigate to="/login" />;
  return <>{children}</>;
}
