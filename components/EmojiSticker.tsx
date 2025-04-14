import { View } from "react-native";
import { Image, ImageSource } from "expo-image";

interface Props {
  imageSize: number;
  stickerSource: ImageSource;
}

export const EmojiSticker = ({ imageSize, stickerSource }: Props) => {
  return (
    <View style={{ top: -350 }}>
      <Image
        source={stickerSource}
        style={{ width: imageSize, height: imageSize }}
      />
    </View>
  );
};
