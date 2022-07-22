import { useState } from "react";
import { useRouter } from "next/router";
export default function Login() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch("http://localhost:8000/auth/users/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({
        email,
        password,
        username,
      }),
    })
      .then((res) => res.json())
      .catch((err) => console.error("there was an error", err));

    await router.push("/accounts/login");
  };
  return (
    <form onSubmit={handleSubmit} method="post">
      <input
        type="email"
        name=""
        id=""
        placeholder="E-mail"
        required
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="name"
        name=""
        id=""
        placeholder="username"
        required
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        name=""
        id=""
        placeholder="password"
        required
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Sign up</button>
    </form>
  );
}
