import React, { createRef, useEffect, useState } from "react";
import { Box, Text } from "@chakra-ui/layout";
import AppPlaceholderItem from "./AppPlaceholderItem";
import AppChatInput from "./AppChatInput";
import { colors } from "../theme/colors";
import { supabase } from "../../app/supabase";
import { Message } from "../../app/datamodels";
import { Avatar } from "@chakra-ui/avatar";
import { useToast } from "@chakra-ui/toast";

const CHANNEL_ID = "72399b52-0093-4522-b3b0-eae663805c73";

export default function AppChatContainer() {
  const [messages, setMessages] = useState<Message[]>([]);
  const toast = useToast();
  const bottom = createRef<any>();

  function scrollToBottom() {
    bottom.current?.scrollIntoView({ behavior: "smooth" });
  }

  const messagesSubscription = () =>
    supabase
      .from<Message>("messages")
      .on("INSERT", (payload) => {
        toast({
          title: "New message",
          description: payload?.new?.text,
          status: "info",
          duration: 1000,
          position: "top",
          isClosable: true,
        });

        setMessages((old) => [...old, payload.new]);
      })
      .subscribe();
  const fetchMessages = async () => {
    const { data, error } = await supabase
      .from<Message>("messages")
      .select("*");

    setMessages(data ?? []);
  };

  useEffect(() => {
    fetchMessages();

    messagesSubscription();
  }, []);

  return (
    <Box
      width="100%"
      display="flex"
      justifyContent="space-between"
      flexDirection="column"
      backgroundColor={colors.grayLight}
    >
      <Box
        display="flex"
        flexGrow={1}
        flexDirection="column"
        height="0px"
        overflowY="scroll"
        paddingX="15px"
      >
        {/* <AppPlaceholderItem />
        <AppPlaceholderItem />
        <AppPlaceholderItem />
        <AppPlaceholderItem />
        <AppPlaceholderItem /> */}

        {messages.map((message) => (
          <Box display="flex" marginY="10px" key={message.id}>
            <Avatar marginRight="15px" />
            <Box>
              <Text color="white" fontSize="xs" fontWeight="bold">
                {message.sent_by}
              </Text>
              <Text fontSize="sm" color="white">
                {message.text}
              </Text>
            </Box>
          </Box>
        ))}

        <div ref={bottom} />
      </Box>

      <AppChatInput scrollToBottom={scrollToBottom} />
    </Box>
  );
}
