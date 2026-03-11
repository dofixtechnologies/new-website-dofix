"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { isLoggedIn } from "@/utils/auth";

export default function HeaderAccount() {

  const [logged, setLogged] = useState(false);

  useEffect(() => {

    const checkLogin = () => {
      if (isLoggedIn()) {
        setLogged(true);
      } else {
        setLogged(false);
      }
    };

    checkLogin();

    // listen for storage changes
    window.addEventListener("storage", checkLogin);

    return () => {
      window.removeEventListener("storage", checkLogin);
    };

  }, []);

  return (

    <div>

      {logged ? (

        <Link href="/account">
          Account
        </Link>

      ) : (

        <Link href="/signin">
          Sign In
        </Link>

      )}

    </div>

  );
}