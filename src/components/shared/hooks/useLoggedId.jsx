import { useState, useEffect } from "react";

export const useLoggedUserId = () => {
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setUserId(parsedUser.id || null); // 👈 CAMBIO AQUÍ
      } catch (error) {
        console.error("Error parsing user from localStorage", error);
        setUserId(null);
      }
    }
  }, []);

  return userId;
};
