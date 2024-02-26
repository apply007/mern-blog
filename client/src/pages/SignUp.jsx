import { Button, Label, TextInput } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

export default function SignUp() {
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
          <form className="flex flex-col gap-4">
            <div>
              <Label value="Your User Name"></Label>
              <TextInput
                type="text"
                placeholder="username"
                id="username"
              ></TextInput>
            </div>
            <div>
              <Label value="Your Email"></Label>
              <TextInput
                type="email"
                placeholder="ashif@gmail.com"
                id="email"
              ></TextInput>
            </div>
            <div>
              <Label value="Your Password"></Label>
              <TextInput
                type="password"
                placeholder="password"
                id="password"
              ></TextInput>
            </div>{" "}
            <Button gradientDuoTone={"purpleToPink"} type="submit">
              Sign Up
            </Button>
          </form>
          <div className="flex items-center justify-between p-1">
            <span>
              Have an account
            </span>
            <Link to={'/sign-in'} className="text-sm text-blue-700"> Sign In</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
