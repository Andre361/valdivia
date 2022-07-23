import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
export default function Login() {
  const [form, setForm] = useState({ username: "", password: "" });
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:8000/auth/jwt/create", form)
      .then((res) => console.log(res))
      // .then((res) => (res.status == 200 ? router.push("/") : {}))
      .catch((err) => {
        if (err.response) {
          console.log(err.response);
        } else if (err.request) {
          console.log(err.request);
        }
      });
  };
  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  return (
    <form action="" method="post" onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        placeholder="Username"
        onChange={handleChange}
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={handleChange}
        required
      />
      <input type="submit" value="log in" />
    </form>
  );
}
