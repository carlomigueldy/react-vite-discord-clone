import { User } from "@supabase/gotrue-js";
import React, { useEffect, useState } from "react";
import { supabase } from "../app/supabase";

export function useAuth(): User | null {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    setUser(supabase.auth.user());
  }, []);

  return user;
}
