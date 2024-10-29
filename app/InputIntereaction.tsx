import { useState } from "react"
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet } from "react-native"

const InputInteraction = () => {
    const [value, setValue] = useState<string>("");
    const [submittedValue, setSubmittedValue] = useState<string>("")

    const handleSubmit = () => {
        // Enregistrer la value du Input
        setSubmittedValue(value);
        // Réinitialiser la value du Input
        setValue("");
    }

    const handlePress = () => {
        alert("TouchableOpacity appuyé !")
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Interaction avec l'utilisateur</Text>

            <TextInput
                placeholder="Tapez quelque chose..."
                value={value}
                // Met à jour l'état lorsque le texte change
                onChangeText={setValue}
                style={styles.textInput}
                />

            <Button 
                title="Soumettre"
                onPress={handleSubmit}
                color={"#6b6b6b"}
                />

            <Text style={styles.text}>
                {/* {submittedValue ? "Valeur soumise : " + submittedValue : "Aucune valeur soumise."} */}
                {submittedValue ? `Valeur soumise :  ${submittedValue}` : "Aucune valeur soumise."}
            </Text>

            <TouchableOpacity onPress={handlePress}>
                <Text>Appuyez sur moi !</Text>
            </TouchableOpacity>
        </View>
    )
}

export default InputInteraction;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },
    title: {
        fontSize: 30
    },
    textInput: {
        height: 60,
        width: "80%",
        fontSize: 16, 
        borderWidth: 1,
        paddingHorizontal: 40,
        margin: 20,
        borderRadius: 10
    }, 
    text: {
        fontSize: 16,
        margin: 10
    }
})