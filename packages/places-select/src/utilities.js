import { getGeocode, getLatLng } from 'use-places-autocomplete';

export const getFullAddressString = (addressObject) => {
    let fullAddress = '';

    if (addressObject.address) {
        fullAddress = addressObject.address;
    }

    if (addressObject.city) {
        fullAddress = `${fullAddress}, ${addressObject.city}`;
    }

    if (addressObject.state) {
        let state = addressObject.state;

        if (Number.isInteger(addressObject.state)) {
            state = getStateById(addressObject.state);
        }

        fullAddress = `${fullAddress}, ${state}`;
    }

    if (addressObject.zip) {
        fullAddress = `${fullAddress} ${addressObject.zip}`;
    }

    fullAddress = fullAddress.replace(/(^,)|(,$)/g, '');

    return fullAddress;
};

export const getLatLon = async (address) => {
    const geocodedAddress = await getGeocode({ address });

    const { lat, lng: lon } = await getLatLng(geocodedAddress[0]);

    return { lat, lon };
};
