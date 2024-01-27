import React from "react";
import Link from "next/link";
const Header = () => {
  return (
    <>
      <div className="h-8 px-5 bg-green-500 flex items-center justify-between">
        {/* <h2>{props.user}</h2> */}
        <h2>Logo</h2>
        <div className="flex gap-8">
          {/* using a tag will make the page to reload */}
          {/* <a href='/About'>About</a>
            <a href='/Career'>Career</a>
            <a href='/Blog'>Blog</a>
            <a href='/Account'>Account</a> */}

          <Link href="/About">About</Link>
          <Link href="/Career">Career</Link>
          <Link href="/Blog">Blog</Link>
          <Link href="/Account">Account</Link>
        </div>
      </div>
    </>
  );
};

export default Header;
