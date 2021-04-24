import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Route, Switch } from "react-router-dom";
import { supabase } from "../../app/supabase";
import AppChatContainer from "../components/AppChatContainer";

function IndexView() {
  const [servers, setServers] = useState<any[] | null>([]);
  const { channelId } = useParams<{ channelId: string }>();

  useEffect(() => {}, []);

  return (
    <>
      <Switch>
        <Route path="/">
          <AppChatContainer channelId={channelId} />
        </Route>
      </Switch>
    </>
  );
}

export default IndexView;
