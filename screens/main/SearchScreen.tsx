import { useRef, useEffect } from "react";
import {
  View,
  TouchableWithoutFeedback,
  Keyboard,
  StyleSheet,
  Text
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import MapView, { Marker } from 'react-native-maps';

// Local imports
import { SearchStackNavProps } from "../../navigation/stacks/main/SearchStackParamList";
import LocationTextField from "../../components/main/LocationTextField";
import ResultLists from "../../components/main/ResultLists";
import {
  onChangeInput,
  onChangeData,
  onChangeError
} from "../../redux/slice/searchReducer";
import { getAutoCompleteData } from "../../services/api/autocomplete";
import { AppDispatch, RootState } from "../../redux/store";

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

const SearchScreen: React.FC<SearchStackNavProps<"Search">> = () => {
  const mapRef = useRef<MapView | null>(null);
  const data = useSelector<RootState, DataProps[]>((state) => state.search.data);
  const selected = useSelector<RootState, DataProps | null>((state) => state.search.selected);
  const isError = useSelector<RootState, boolean>((state) => state.search.isError);
  const dispatch = useDispatch<AppDispatch>();
  const safeInsets = useSafeAreaInsets();

  const INITIAL_REGION = {
    latitude: 37.33,
    longitude: -122,
    latitudeDelta: 2,
    longitudeDelta: 2
  };

  const focusMap = () => {
    const SelectedDestination = {
      latitude: selected ? parseInt(selected?.lat) : 37.33,
      longitude: selected ? parseInt(selected?.lon) : -122,
      latitudeDelta: 1,
      longitudeDelta: 1
    };
    mapRef.current?.animateToRegion(SelectedDestination);
  }

  const onChangeInnerText = async (text: string) => {
    dispatch(onChangeInput(text));
    if (text.length === 0) return dispatch(onChangeData([]));
    if (text.length > 2) {
      try {
        let response = await getAutoCompleteData(text);
        if (response) {
          if (isError) {
            dispatch(onChangeError(false));
          }
          dispatch(onChangeData(response));
        }
      }
      catch (error) {
        dispatch(onChangeError(true));
      }
    } else {
      dispatch(onChangeData([]));
    }
  }

  useEffect(() => {
    if (selected) {
      focusMap();
    }
  }, [selected])
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={[styles.flexOne, { marginTop: safeInsets.top }]}>
        {/* Custom TextField Component */}
        <LocationTextField
          onChangeInnerText={onChangeInnerText}
        />
        {/* Results List */}
        {data.length > 0 && !isError && (
          <ResultLists />
        )}
        {/* Result in Text */}
        {selected && data.length === 0 && (
          <Text style={styles.textLabel}>Searched Result: {selected?.address.name}</Text>
        )}
        {/* Maps */}
        <View style={styles.flexOne}>
          <MapView
            style={StyleSheet.absoluteFill}
            // provider="google"
            initialRegion={INITIAL_REGION}
            ref={mapRef}
          >
            {selected && (
              <Marker
                key={selected?.osm_id ?? 0}
                coordinate={{
                  longitude: selected ? parseInt(selected?.lon) : 37.33,
                  latitude: selected ? parseInt(selected?.lat) : -122
                }}
                title={selected ? selected?.address.name : "San Francisco"}
                description={selected ? selected?.address.country : "United States of America"}
              />
            )}
          </MapView>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
};

const styles = StyleSheet.create({
  flexOne: {
    flex: 1
  },
  textLabel: {
    marginLeft: 12,
    marginVertical: 5,
    fontSize: 12,
    fontWeight: "500"
  }
});

export default SearchScreen;
