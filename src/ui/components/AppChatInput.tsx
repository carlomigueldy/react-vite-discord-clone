import React, { useState } from "react";
import { Box, Text } from "@chakra-ui/layout";
import { IconButton } from "@chakra-ui/button";
import { AddIcon, AtSignIcon, CalendarIcon, LinkIcon } from "@chakra-ui/icons";
import { Input } from "@chakra-ui/input";
import AppIconButton from "./AppIconButton";
import { colors } from "../theme/colors";
import { supabase } from "../../app/supabase";
import { Message } from "../../app/datamodels";
import { useAuth } from "../../hooks/useAuth";

const CHANNEL_ID = "4caf111f-ed31-4e81-8735-f92d5860c878";

const GUEST_USER_ID = "78085bee-8de6-4d20-afa7-4375d9971064";

type SendMessageDto = {
  channelId: string;
  message: string;
};

export type AppChatInputProps = {
  scrollToBottom: VoidFunction;
};

export default function AppChatInput({ scrollToBottom }: AppChatInputProps) {
  const [message, setMessage] = useState<string>("");
  const [isLoading, setLoading] = useState<boolean>(false);
  const user = useAuth();

  async function sendMessage({
    channelId,
    message,
  }: SendMessageDto): Promise<Message | null | undefined> {
    setLoading(true);

    if (!user) {
      return null;
    }

    const { data, error } = await supabase
      .from<Message>("messages")
      .insert([
        {
          channel_id: channelId,
          text: message,
          sent_by: user?.id || GUEST_USER_ID,
        },
      ]);

    if (error) {
      console.log(error);

      return null;
    }

    setMessage("");
    scrollToBottom();
    setLoading(false);
    return data?.shift();
  }

  function onKeyPress({ key }: any) {
    if (!message) {
      return;
    }

    if (key === "Enter") {
      console.log("onKeyPress", { key, message });

      sendMessage({
        channelId: CHANNEL_ID,
        message,
      });
    }
  }

  function onInput(event: any) {
    if (!event) {
      return;
    }

    setMessage(event?.target?.value);
  }

  return (
    <Box paddingX="15px" backgroundColor={colors.grayLight}>
      <Box
        display="flex"
        justifyContent="space-around"
        alignItems="center"
        backgroundColor={colors.darkLight}
        padding="5px"
        borderRadius="8px"
      >
        <AppIconButton
          ariaLabel="Attach files"
          size="sm"
          withBackground
          icon={<AddIcon />}
        />
        <Box marginX="3px" />
        <Input
          height="35px"
          backgroundColor="transparent"
          color="white"
          value={message}
          borderColor="transparent"
          placeholder="Message 💬-general"
          onInput={onInput}
          onKeyPress={onKeyPress}
          disabled={isLoading}
        />
        <AppIconButton ariaLabel="Attach files" icon={<CalendarIcon />} />
        <AppIconButton ariaLabel="Select giphy" icon={<LinkIcon />} />
        <AppIconButton ariaLabel="Select emoji" icon={<AtSignIcon />} />
      </Box>
      <Box
        marginY="5px"
        display="flex"
        justifyContent="start"
        alignItems="center"
      >
        <Text color="white" fontSize="sm" marginRight="5px" fontWeight="bold">
          carlomigueldy
        </Text>
        <Text color="white" fontSize="sm">
          is typing...
        </Text>
      </Box>
    </Box>
  );
}
