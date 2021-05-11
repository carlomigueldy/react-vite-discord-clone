import React, { createRef, useEffect, useState } from "react";
import { Box, Center, Link, Text } from "@chakra-ui/layout";
import AppPlaceholderItem from "./AppPlaceholderItem";
import AppChatInput from "./AppChatInput";
import { colors } from "../theme/colors";
import { supabase } from "../../app/supabase";
import { AppUser, Message } from "../../app/datamodels";
import { Avatar } from "@chakra-ui/avatar";
import { useToast } from "@chakra-ui/toast";
import { User } from "@supabase/gotrue-js";
import { SupabaseRealtimePayload } from "@supabase/supabase-js";
import { Spinner } from "@chakra-ui/spinner";

export type AppChatContainerProps = {
  channelId: string;
};

export default function AppChatContainer({ channelId }: AppChatContainerProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setLoading] = useState<boolean>(false);
  const toast = useToast();
  const bottom = createRef<any>();

  const hasMessages = () => messages.length > 0;

  const messagesSubscription = () => {
    supabase
      .from<Message>(`messages:channel_id=eq.${channelId}`)
      .on("*", async (payload) => {
        console.log(`\n\n messages:channel_id=eq.${channelId} \n\n`, payload);

        switch (payload.eventType) {
          case "INSERT":
            const message = payload.new;
            const { data, error } = await supabase
              .from<AppUser>("app_users")
              .select("*")
              .eq("id", message.sent_by)
              .single();

            if (error) {
              console.error(error);
              return;
            }

            console.log("user", data);
            const newMessage: Message = {
              ...message,
              app_users: data,
            };
            notifyNewMessage(payload);
            setMessages((old) => [newMessage, ...old]);
            break;

          case "DELETE":
            const index = messages.findIndex(
              (item) => item.id === payload.old.id
            );
            messages.splice(index, 1);
            setMessages(messages);
            break;

          default:
            break;
        }
      })
      .subscribe();
  };

  function notifyNewMessage(payload: SupabaseRealtimePayload<Message>) {
    toast({
      title: "New message",
      description: payload?.new?.text,
      status: "info",
      duration: 1000,
      position: "top",
      isClosable: true,
    });
  }

  const fetchMessages = async () => {
    setLoading(true);

    const { data, error } = await supabase
      .from<Message>("messages")
      .select("*, app_users (*)")
      .limit(50)
      .order("created_at", { ascending: false });

    if (error) {
      console.error(error);
      return;
    }

    console.log("\n\n fetchMessages \n\n", data);

    setMessages(data ?? []);
    setLoading(false);
  };

  function scrollToBottom() {
    bottom.current?.scrollIntoView({ behavior: "smooth" });
  }

  useEffect(() => {
    console.log("\n\n AppChatContainer mounted \n\n");
    fetchMessages().then(() => {
      scrollToBottom();
    });

    messagesSubscription();
  }, []);

  const MessageList = () => (
    <>
      {messages.map((message) => (
        <AppMessageContainer key={message.id} message={message} />
      ))}
    </>
  );

  return (
    <>
      <Box
        display="flex"
        flexGrow={1}
        flexDirection="column-reverse"
        height="0px"
        overflowY="scroll"
      >
        <div
          ref={bottom}
          style={{
            color: "blue",
            height: "100px",
            width: "100px",
            position: "relative",
          }}
        />

        {/* Messages */}
        {isLoading ? (
          <Center height="100%">
            <Spinner size="xl" color="white" />
          </Center>
        ) : hasMessages() ? (
          <MessageList />
        ) : (
          <Center height="100vh">
            <Text color="white">No messages</Text>
          </Center>
        )}
      </Box>

      <AppChatInput scrollToBottom={scrollToBottom} />
    </>
  );
}

type AppMessageContainerProps = {
  message: Message;
};

function AppMessageContainer({ message }: AppMessageContainerProps) {
  const isToday =
    new Date(message.created_at).toLocaleDateString() ===
    new Date().toLocaleDateString();

  const date = `${
    isToday ? "Today" : new Date(message.created_at).toLocaleDateString()
  } at ${new Date(message.created_at).toLocaleTimeString()}`;

  return (
    <Box position="relative" paddingY="5px">
      {/* Message Content */}
      <Box
        display="flex"
        paddingX="15px"
        paddingY="5px"
        _hover={{ backgroundColor: colors.darkLight }}
      >
        <Avatar
          src={message.app_users?.avatar}
          name={message.app_users?.name}
          marginRight="15px"
        />
        <Box>
          <Box justifyContent="start" alignItems="end" display="flex">
            <Text color="white" fontSize="xs" fontWeight="bold">
              <Link>{message.app_users?.name}</Link>
            </Text>
            <Box width="10px" />
            <Text fontSize="12px" color="whiteAlpha.500">
              {date}
            </Text>
          </Box>
          <Text fontSize="sm" color="white">
            {message.text}
          </Text>
        </Box>
      </Box>
      {/* Floating Button */}
      {/* <Box
        position="absolute"
        padding="5px"
        top="0"
        right="15px"
        backgroundColor={colors.darkMedium}
        color="white"
        border="solid"
        borderColor={"green" ?? colors.darker}
        borderRadius="sm"
        borderWidth="1px"
      >
        Carlo
      </Box> */}
    </Box>
  );
}
