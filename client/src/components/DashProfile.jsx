import { Button, TextInput } from "flowbite-react";
import React from "react";
import { useSelector } from "react-redux";
export default function DashProfile() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div className=" max-w-lg md:mx-60 p-3 w-full">
      <h1 className="my-7 text-center font-semibold text-3xl">Profile</h1>
      <form className="flex flex-col gap-4">
        <div className="w-32 h-32 self-center cursor-pointer shadow-md overflow-hidden rounded-full">
          <img
            src={currentUser.profilePicture}
            alt="user"
            className="object-cover rounded-full border-8 h-full w-full border-[lightgray]"
          />
        </div>
        <TextInput
          type="text"
          id="username"
          placeholder="username"
          defaultValue={currentUser.username}
        ></TextInput>
        <TextInput
          type="email"
          id="email"
          placeholder="email"
          defaultValue={currentUser.email}
        ></TextInput>
        <TextInput
          type="password"
          id="username"
          placeholder="password"
        ></TextInput>
        <Button gradientDuoTone="purpleToPink" outline>
          Submit
        </Button>
        <div className="text-red-500 flex justify-between mt-5">
          <span className="cursor-pointer font-semibold">Delete Account</span>
          <span className="cursor-pointer font-semibold">Sign Out</span>
        </div>
      </form>
    </div>
  );
}
