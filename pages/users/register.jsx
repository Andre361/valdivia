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
    // await router.push("/");
  };
  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  return (
    <form method="post" onSubmit={handleSubmit}>
      <p className="form-field">
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          required
        />
      </p>
      <p className="form-field">
        <input
          type="text"
          name="username"
          placeholder="Username"
          onChange={handleChange}
          required
        />
      </p>
      <p className="form-field">
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          required
        />
      </p>

      <input type="submit" value="sign up" className="submit-button" />
    </form>
  );
}
