import { useEffect, useState } from "react";
import { supabase } from "../supabase/init";

export const useAuth = async () => {
  const [user, setUser] = useState({});
  async function getUser() {
    try {
      const { data, error } = await supabase.auth.getUser();
      if (error) return console.log(error);
      setUser(data.user);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    getUser();
  }, []);
  return user;
};
