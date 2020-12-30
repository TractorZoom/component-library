import usePlacesAutocomplete, { getGeocode, getLatLng } from 'use-places-autocomplete';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Grid from '@material-ui/core/Grid';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PropTypes from 'prop-types';
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import parse from 'autosuggest-highlight/parse';
import useStyles from './styles';

const PlacesSelect = (props) => {
    const classes = useStyles();
    const { address, setAddress } = props;

    const {
        clearSuggestions,
        suggestions: { status, data },
        setValue,
    } = usePlacesAutocomplete({ debounce: 300 });

    const handleInput = (e, newInputValue) => {
        setValue(newInputValue);
    };

    const handleSelect = async (e, val) => {
        setValue(val, false);

        let address = {};

        if (val) {
            address = { fullAddress: val.description };

            const geocodedAddress = await getGeocode({ address: val.description });
            const { lat, lng } = await getLatLng(geocodedAddress[0]);

            geocodedAddress[0].address_components.forEach((component) => {
                if (component.types.includes('street_number')) {
                    address.streetNumber = component.long_name;
                }

                if (component.types.includes('route')) {
                    address.street = component.short_name;
                }

                if (component.types.includes('locality')) {
                    address.city = component.short_name;
                }

                if (component.types.includes('administrative_area_level_1')) {
                    address.state = component.short_name;
                }

                if (component.types.includes('country')) {
                    address.country = component.short_name;
                }

                if (component.types.includes('postal_code')) {
                    address.zip = component.short_name;
                }
            });

            address = { ...address, address: `${address.streetNumber} ${address.street}`, lat, lng };
        }

        setAddress(address);
        clearSuggestions();
    };

    return (
        <Autocomplete
            {...props}
            getOptionLabel={(option) => (typeof option === 'string' ? option : option.description)}
            filterOptions={(x) => x}
            options={status === 'OK' ? [...data, { addPoweredByGoogle: true }] : []}
            autoComplete
            includeInputInList
            filterSelectedOptions
            value={address?.fullAddress}
            onChange={handleSelect}
            onInputChange={handleInput}
            renderInput={(params) => <TextField {...params} label='Location' variant='outlined' fullWidth />}
            renderOption={(option) => {
                if (option.addPoweredByGoogle) {
                    return (
                        <Grid key='poweredByGoogle' container justify='flex-end'>
                            <Grid item>
                                <img
                                    src='https://developers.google.com/maps/documentation/images/powered_by_google_on_white.png'
                                    alt='Powered by Google'
                                />
                            </Grid>
                        </Grid>
                    );
                }

                const matches = option.structured_formatting.main_text_matched_substrings;
                const parts = parse(
                    option.structured_formatting.main_text,
                    matches.map((match) => [match.offset, match.offset + match.length])
                );

                return (
                    <Grid container alignItems='center'>
                        <Grid item>
                            <LocationOnIcon className={classes.icon} />
                        </Grid>
                        <Grid item xs>
                            {parts.map((part, index) => (
                                <span key={index} style={{ fontWeight: part.highlight ? 700 : 400 }}>
                                    {part.text}
                                </span>
                            ))}

                            <Typography variant='body2' color='textSecondary'>
                                {option.structured_formatting.secondary_text}
                            </Typography>
                        </Grid>
                    </Grid>
                );
            }}
        />
    );
};

PlacesSelect.propTypes = {
    address: PropTypes.string.isRequired,
    setAddress: PropTypes.func.isRequired,
};

export default PlacesSelect;
