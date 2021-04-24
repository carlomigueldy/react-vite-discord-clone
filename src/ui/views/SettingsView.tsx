import React, { useEffect, useState } from "react";
import { supabase } from "../../app/supabase";

function SettingsView() {
  const [servers, setServers] = useState<any[] | null>([]);

  useEffect(() => {
    supabase.from("servers").then((res) => {
      setServers(res.data);
    });
  }, []);

  return (
    <>
      <h1>Settings View</h1>

      <pre>{JSON.stringify(servers, null, 2)}</pre>
    </>
  );
}

export default SettingsView;
