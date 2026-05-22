"use client";

import { useState, createContext, useEffect } from "react";
import config from "@/config/config";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(
          `${config.api.baseUrl}${config.api.endpoints.auth.me}`,
          {
            method: "GET",
            credentials: "include",
          },
        );

        const data = await response.json();

        if (data?.user) {
          setUser(data.user);
        }
      } catch (error) {
        console.log("Fetch user Error");
      }
    };
    fetchUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
