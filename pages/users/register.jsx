import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
export default function Register() {
  const [form, setForm] = useState({
    username: "",
    password: "",
    email: "",
  });
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:8000/auth/users/", form, {
        withCredentials: true,
      })
      .then((res) => (res.status == 201 ? router.push("/users/login/") : {}))
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
    <div className="signup-form min-h-full flex items-center justify-center  py-12 px-4 ">
      <div>
        <h2 className="mt-6 text-center text-2xl font-extrabold text-gray-900">
          Create your account
        </h2>
        <form method="post" onSubmit={handleSubmit}>
          <p>
            <input
              className="p-2 mb-2 border border-gray-400"
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              required
            />
          </p>
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
          <p>
            <input
              type="submit"
              value="sign up"
              className="submit-button h-12 px-28 m-2 bg-green-400 text-gray-50 text-xl font-bold"
            />
          </p>
        </form>
      </div>
    </div>
  );
}
