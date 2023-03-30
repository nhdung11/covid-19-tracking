import { FormControl, FormHelperText, InputLabel, NativeSelect } from '@mui/material'
import React from 'react'

export default function countrySelector({ value, handleOnchange, countries }) {
    return (
        <FormControl sx={{ mt: 2 }}>
            <InputLabel htmlFor="country-selector" shrink>Quốc gia</InputLabel>
            <NativeSelect
                sx ={{pl: 2}}
                value={value}
                onChange={handleOnchange}
                inputProps={{
                    id: 'country-selector',
                    name: 'country'
                }}

            >
                {countries.map((country) => {
                    return <option key={country.ISO2} value={country.ISO2.toLowerCase()}>{country.Country}</option>
                })}
            </NativeSelect>
            <FormHelperText>Lựa chọn quốc gia</FormHelperText>
        </FormControl>
    )
}
