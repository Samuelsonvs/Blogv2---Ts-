import useTwitterUsername from "@/hooks/useTwitterUsername";
import React from "react";

export default function Twitterapp() {
  const { userName, setUserName, isloading, resData, error } =
    useTwitterUsername();

  return (
    <>
      <div>{userName}</div>
      <div>{resData}</div>
    </>
  );
}
