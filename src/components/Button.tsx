import { TouchableOpacity, Text, StyleSheet } from "react-native";

interface ButtonProps {
    onPress: () => void;
    title: string;
    isBlue?: boolean;
    isGray?: boolean;
};

export default function Button({title, onPress, isBlue, isGray} : ButtonProps) {
    return (
        <TouchableOpacity
             style={
                 isBlue 
                 ? styles.btnBlue 
                 : isGray 
                 ? styles.btnGray 
                 : styles.btnDark  
             }
            onPress={onPress}>
            <Text
                 style={
                     isBlue || isGray
                     ? styles.smallTextLight
                     : styles.smallTextLight
                 }
            >
                {title}
            </Text>
            </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    btnBlue: {
        width: 72,
        height: 72,
        borderRadius: 24,
        backgroundColor: "#4B5EFC",
        justifyContent: "center",
        alignItems: "center",
        margin: 8,
    },
    btnDark: {
        width: 72,
        height: 72,
        borderRadius: 24,
        backgroundColor: '#2E2F38',
        justifyContent: "center",
        alignItems: "center",
        margin: 8,
    },
    btnGray: {
        width: 72,
        height: 72,
        borderRadius: 24,
        backgroundColor: '#4E505F',
        justifyContent: "center",
        alignItems: "center",
        margin: 8,
    },
    smallTextLight: {
        fontSize: 32,
        color: '#FFFFFF',
    },
})