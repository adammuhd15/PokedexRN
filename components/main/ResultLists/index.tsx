import { FlatList, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";

// Local imports
import ResultListCell from "../ResultListCell";
import {
  onChangeData,
  onChangeInput
} from "../../../redux/slice/searchReducer";
import { AppDispatch, RootState } from "../../../redux/store";

interface AddressProps {
  name: string;
  country: string;
  country_code: string;
}

interface DataProps {
  place_id: string;
  osm_id: string;
  osm_type: string;
  licence: string;
  lat: string;
  lon: string;
  boundingbox: string[];
  class: string;
  type: string;
  display_name: string;
  display_place: string;
  display_address: string;
  address: AddressProps;
}

function ResultLists() {
  const data = useSelector<RootState, DataProps[]>((state) => state.search.data);
  const dispatch = useDispatch<AppDispatch>();
  const resetData = () => {
    dispatch(onChangeData([]));
    dispatch(onChangeInput(""));
  }
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <ResultListCell
          item={item}
          dispatch={dispatch}
          resetData={resetData}
        />
      )}
      keyExtractor={item => item.osm_id}
      showsVerticalScrollIndicator={false}
      style={styles.flexOne}
    />
  );
}

const styles = StyleSheet.create({
  flexOne: {
    flex: 1
  }
});

export default ResultLists;
