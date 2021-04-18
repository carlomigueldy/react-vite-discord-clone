import { Avatar } from "@chakra-ui/avatar";
import { Box, Divider } from "@chakra-ui/layout";
import React from "react";
import { colors } from "../theme/colors";

const DISCORD_ICON_URL =
  "https://icon-library.com/images/blue-discord-icon/blue-discord-icon-15.jpg";
const ANGULAR_ICON_URL =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png";
const FLUTTER_ICON_URL =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAt1BMVEX///9B0P1A0P0JWp0fvP0OUZkszf36/v8AU5pa1f3b9v6IosSV4v4Auf153P5x2/4AVpscv/8fwv/m+P/w+/9J0v0PSZK26/6l5/71/f981P4PSpMATpdU1P3N8f+/7v6H3/6U2/5sz/5Xyf00puEkltXj7PMejc2btdFkj7rL8f6d5f6D1v5Jzf1v0P4/xv3N2+gZYqHm7fQmaKQ6c6uazOoAP45BeK2Rr81OgLKlvdZnkby5y94p6fsnAAAE00lEQVR4nO3dCVvaQBAG4BDDWQ8Ih1LBo9Vqta09bbX+/99VQtASyO5OJsSdGeb7ATz7PvMthCxHEGg0Go1Go9FoNBqNhkma+PheOiy70zYu0/bA99pB2W3UcAnDvu+1g6JAI3AoHSh+ggqkkRLAju+1g4IG1qQDtaJEohU1+hrCgeInKB4o/klG9yCRlKjoie+1g1KiouKBWlESUaARKH8PSgeGN77XDkqJCYoHakVJRCuqQOIpATz1vXZQFKhA4lGgAomnBPDQ99pBUaACiUeBCiQeBZqBR77XDgr++Ew6UPwExQPFV1Q8UHxFxQPFV7TWuPW9dlBKVFQ4UPwEtwC463vtoOgEt3iCCiQRBW4x8Mz32kFRoBmoFSURBSqQeBSoQOIpAdz3vXZQFKhA4lGgAolHgWbgge+1g6JAM3CfxS+rlZmgeKD1gccddDb6i3TVAacNbDZajcoqOmiHyGz22as64JQ/0PrAgyEauNEriOomKAA4tj1wHw+kUtG2dYL9Go0JdhphNcAO1rdhYBCcIomNtrWidIBBcIgihpUBK7iKxxAdFT0hNEEc0VHRkwYtYEIsBnRUtMQEK3ujeVRoig7gDUFgMWJo34M35Cqa5hZcVMcET4kC4cRwan1jWgJY+c0e2OVbOLVO8JDsBKFE1kAI0VHREsBXuh955iCGQ+ZAFzEcWit6RLyiaWxER0V5AINg30h0AM9j7Fv61z4TODAQHXvwfC9CEl//0CN/ig7gp70oimLMfQsP53LNvCk6/lHjPAFGUa/4FP0cPK4TYUAE0de5XLuxCnRXdEEsVlRvR8crRYUDZylC9Hg2Pm6H4IpmgUWIXo+Om9MXouMPJ1aBUfSZA3BpimForejbNSCU6P3jG4OU6KhoHhBG9A6cn/05K5oPhBBJfHxjfjiGArqJBCaYZEa0Ar8YgS4iEWAQ9K2/BW8DRtGd5fKGDNAeO9BGJLEH3XnnAEZ7d4bXfiYTdAKNRDlAA1FKRRdZJzIBvgcC14mSKrpI9uaNQGCWKK6iq0QmEywK/H/zhgewWRz4TOQBREzwmchkD96hgLMw+ULGGDfB+RR5THAQY4W9i52vvlcPyhhJnAG7XSZE1EacAWeZ8CAOEFsxBe7siJ1i76K7EDLZi82CxOcJJkQmUyx2WbMEnBFbH3yvHpQixAyQT1HhlzYrwBnxG48pQi9P14DJXuRBhBU1XgcmReVBhEwxvuzmCAUVNb48rvMmOm7XxJejet1A5FJUKzEFmogCpphUNE0rn/jd9+JhMR4/9RYT5E80HALHS0BjUZkQc6eYBZqIP/gS46vjejb5ReVCXCtq72pUhwj5FHXlQ1HxKrCVW9J0ihv91YTqkpniyh4085K0fvKbYmaCdt6cyGWKL8QlYNfJS4nWLzjQyeJDwi9AGC8tKpMpzokLoLucWSKLX7dJv42QAIvxeBGjq1FxHivir3sMb078zYT451g88XqCJnIp6vUWTHGEJj5wIeKLymaKJYi+1w4Mvqj1B99rB6bMXvS9dmAe0UVlM0U8kc8U8Xvxo++1A/OIf+lnQ6zrFI2ZsCHi9+Jf32sHBv+MymeK8olP6KJO2BQV/3TDhfiEftHgQ5y0kLlnQ3yDDpOPwGk0Go1Go9FoNBoNg/wD3zy1H66aaH0AAAAASUVORK5CYII=";
const VUE_ICON_URL =
  "https://devopedia.org/images/article/167/6446.1555250902.png";
const REACT_ICON_URL =
  "https://icons-for-free.com/iconfiles/png/512/design+development+facebook+framework+mobile+react+icon-1320165723839064798.png";
const NUXT_ICON_URL = "https://nuxtjs.org/logos/nuxt-icon-white.png";
const LARAVEL_ICON_URL =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1200px-Laravel.svg.png";
const NESTJS_ICON_URL =
  "https://symbols.getvecta.com/stencil_89/37_nestjs-icon.a6a65b8873.jpg";
const FIREBASE_ICON_URL = "https://img.icons8.com/color/452/firebase.png";

export default function AppMainSidebar() {
  return (
    <Box
      width="100px"
      paddingX="5px"
      paddingTop="15px"
      overflowX="hidden"
      backgroundColor={colors.grayDarkest}
      display="flex"
      flexDirection="column"
      alignItems="center"
      overflowY="hidden"
    >
      <Avatar height="45px" width="45px" src={DISCORD_ICON_URL} />
      <Divider marginY="15px" width="30px" />
      <Avatar
        size="md"
        cursor="pointer"
        backgroundColor="transparent"
        src={ANGULAR_ICON_URL}
        marginY="5px"
      />
      <Avatar
        size="md"
        cursor="pointer"
        backgroundColor="transparent"
        src={FLUTTER_ICON_URL}
        marginY="5px"
      />
      <Avatar
        size="md"
        cursor="pointer"
        backgroundColor="transparent"
        src={VUE_ICON_URL}
        marginY="5px"
      />
      <Avatar
        size="md"
        cursor="pointer"
        backgroundColor="transparent"
        src={REACT_ICON_URL}
        marginY="5px"
      />
      <Avatar
        size="md"
        cursor="pointer"
        backgroundColor="transparent"
        src={NUXT_ICON_URL}
        marginY="5px"
      />
      <Avatar
        size="md"
        cursor="pointer"
        backgroundColor="transparent"
        src={LARAVEL_ICON_URL}
        marginY="5px"
      />
      <Avatar
        size="md"
        cursor="pointer"
        backgroundColor="transparent"
        src={NESTJS_ICON_URL}
        marginY="5px"
      />
      <Avatar
        size="md"
        cursor="pointer"
        backgroundColor="transparent"
        src={FIREBASE_ICON_URL}
        marginY="5px"
      />
    </Box>
  );
}
