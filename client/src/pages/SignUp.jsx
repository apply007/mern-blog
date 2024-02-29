import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInStart,signInFailure,signInSuccess } from "../redux/user/userSlice";
import {  useDispatch } from "react-redux";

export default function SignUp() {
  const [formData, setFormData] = useState({});
  // const [loading, setLoading] = useState(false);
  // const [errorMessage, setError] = useState(null);

  const dispatch=useDispatch()

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      formData.username === "" ||
      formData.email === "" ||
      formData.password === "" ||
      !formData.username ||
      !formData.email ||
      !formData.password
    ) {
      setLoading(false);
      setError("Please fill all fields");
    }

    try {
      setLoading(true);
      setError(null);
      const res = await fetch(`/api/auth/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.success === false) {
        setLoading(false);

        return setError(data.message);
      }
      if (res.ok) {
        navigate("/sign-in");
      }
    } catch (error) {
      setLoading(false);
      return setError(error.message);
    }
  };

  console.log(formData);

  return (
    <div className="min-h-screen mt-20">
      <div className="gap-5 flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center">
        {/* left */}
        <div className="flex-1">
          <Link to={"/"} className="text-4xl font-bold dark:text-white">
            <span className="px-2 py-1 rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
              Ashif's
            </span>
            Blog
          </Link>

          <p className="text-sm mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            omnis modi asperiores! Incidunt animi enim eaque reprehenderit
            eligendi fuga necessitatibus ea? Nihil quae quas qui iusto sit rem
            dolor nam.
          </p>
        </div>
        {/* right */}
        <div className="flex-1">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div>
              <Label value="Your User Name"></Label>
              <TextInput
                type="text"
                placeholder="username"
                id="username"
                onChange={handleChange}
              ></TextInput>
            </div>
            <div>
              <Label value="Your Email"></Label>
              <TextInput
                type="email"
                placeholder="ashif@gmail.com"
                id="email"
                onChange={handleChange}
              ></TextInput>
            </div>
            <div>
              <Label value="Your Password"></Label>
              <TextInput
                type="password"
                placeholder="password"
                onChange={handleChange}
                id="password"
              ></TextInput>
            </div>{" "}
            <Button
              gradientDuoTone={"purpleToPink"}
              type="submit"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Spinner className="" size="sm" color="white"></Spinner>{" "}
                  <span className="pl-3">Loading...</span>
                </>
              ) : (
                "Sign Up"
              )}
            </Button>
          </form>
          <div className="flex items-center justify-between p-1">
            <span>Have an account</span>
            <Link to={"/sign-in"} className="text-sm text-blue-700">
              {" "}
              Sign In
            </Link>
          </div>

          {errorMessage && (
            <Alert className="mt-5" color={"failure"}>
              {errorMessage}
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
}
