import {
  Text,
  TextInput,
  StyleSheet
} from "react-native";
import { useSelector } from "react-redux";

// Local imports
import { RootState } from "../../redux/store";

interface LocationTextFieldProps {
  onChangeInnerText: (text: string) => void;
}

const LocationTextField: React.FC<LocationTextFieldProps> = ({
  onChangeInnerText,
}) => {
  const input = useSelector<RootState, string>((state) => state.search.input);
  return (
    <>
      <Text style={styles.textLabel}>Search Location</Text>
      <TextInput
        placeholder='Find Location'
        value={input}
        onChangeText={onChangeInnerText}
        style={styles.textField}
        clearTextOnFocus
      />
    </>
  );
}

const styles = StyleSheet.create({
  textLabel: {
    marginLeft: 12,
    marginVertical: 5,
    fontSize: 12,
    fontWeight: "500"
  },
  textField: {
    height: 40,
    marginHorizontal: 12,
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginBottom: 10
  }
});

export default LocationTextField;