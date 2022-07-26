import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { BASE_URL } from "constants";
export default function Login() {
  const [form, setForm] = useState({ username: "", password: "" });
  const [token, setToken] = useState({ access: "", refresh: "" });
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post(`${BASE_URL}/auth/jwt/create`, form)
      .then((res) => console.log(res))
      .then(() => router.push("/"))
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
    <div className="login-form min-h-full flex items-center justify-center  py-12 px-4 ">
      <div>
        <h2 className="mt-6 text-center text-2xl font-extrabold text-gray-900">
          Sign in to your account
        </h2>
        <form action="" method="post" onSubmit={handleSubmit}>
          <p>
            <input
              className="p-2 mb-2 border border-gray-400"
              type="text"
              name="username"
              placeholder="Username"
              onChange={handleChange}
              required
            />
          </p>
          <p>
            <input
              className="p-2 mb-2 border border-gray-400"
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              required
            />
          </p>
          <input
            className="submit-button h-12 px-24 m-2 bg-green-400 text-gray-50 text-xl font-bold"
            type="submit"
            value="log in"
          />
        </form>
      </div>
    </div>
  );
}
