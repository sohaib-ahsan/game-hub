import { Platform } from "../../hooks/useGames";
import { HStack, Icon } from "@chakra-ui/react";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
}
const PlatformListIcons = ({ platforms }: Props) => {
  const mapIcons: { [key: string]: IconType } = {
    pc: FaWindows,
    xbox: FaXbox,
    playstation: FaPlaystation,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    web: BsGlobe,
    ios: MdPhoneIphone,
    andriod: FaAndroid,
  };
  return (
    <>
      <HStack marginY={"10px"}>
        {platforms.map((platform) => (
          <Icon as={mapIcons[platform.slug]} color="gray.500" />
        ))}
      </HStack>
    </>
  );
};

export default PlatformListIcons;
