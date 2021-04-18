import React from "react";
import { IconButton } from "@chakra-ui/button";
import { Tooltip } from "@chakra-ui/tooltip";

export type AppIconButtonProps = {
  ariaLabel: string;
  icon?: React.ReactElement;
  onClick?: VoidFunction;
  withBackground?: boolean;
  size?: (string & {}) | "sm" | "md" | "lg" | "xs" | undefined;
  tooltip?: string;
};

export default function AppIconButton({
  ariaLabel,
  icon,
  onClick,
  withBackground,
  size,
  tooltip,
}: AppIconButtonProps) {
  return (
    <Tooltip label={tooltip}>
      <IconButton
        aria-label={ariaLabel}
        icon={icon}
        onClick={onClick}
        borderRadius="50%"
        marginX="1px"
        size={size}
        backgroundColor={!withBackground ? "transparent" : ""}
        color={!withBackground ? "white" : ""}
        _active={
          !withBackground
            ? {
                background: "none",
              }
            : {}
        }
        _hover={
          !withBackground
            ? {
                background: "transparent",
              }
            : {}
        }
      ></IconButton>
    </Tooltip>
  );
}
