import { StyleSheet } from "react-native";
import { Image, ImageSource } from "expo-image";

interface Props {
  imgSource: ImageSource;
  selectedImage?: string;
}

export const ImageViewer = ({ imgSource, selectedImage }: Props) => {
  const imageSource = selectedImage ? { uri: selectedImage } : imgSource;

  return <Image source={imageSource} style={styles.image} />;
};

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
