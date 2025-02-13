import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useRouter } from "next/router";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = useContext(AuthContext);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    await auth?.login(email, password);
    router.push("/dashboard");
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form onSubmit={handleLogin} className="bg-white p-6 rounded shadow-md w-96">
        <h2 className="text-xl font-bold mb-4">Login</h2>
        <input className="w-full p-2 border rounded mb-2" type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        <input className="w-full p-2 border rounded mb-2" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        <button className="bg-blue-500 text-white w-full p-2 rounded" type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
