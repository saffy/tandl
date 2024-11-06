import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };
  const weapons = [
    'Staff',
    'Sword/Shield',
    'Dagger',
    'Crossbow',
    'Bow',
    'Wand/Tome',
    'Greatsword',
  ];

export default function WeaponSelect({value, onFormChange}) {
  const [weapon, setWeapon] = useState([]);
  const [error, setError] = useState(false);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    // Requires exactly 2 weapons, don't allow more than 2 to be selected and don't allow 1 to be confirmed.
    if(value.length == 1 ) {
        setError(true);
        setWeapon(typeof value === 'string' ? value.split(',') : value,
        );
    } else if(value.length <= 2) {
        setError(false);
        setWeapon(typeof value === 'string' ? value.split(',') : value,
        );
        onFormChange(event);
    }
  }

  return (
    <><FormControl sx={{ width: 300 }} error={error}>
        <InputLabel id="weapon-chip-label" htmlFor="select-multiple-chip">Weapons</InputLabel>
        <Select
          labelId="weapon-chip-label"
          id="weapon-chip"
          name="weapons"
          multiple
          sx={{ width: 300 }}
          value={weapon}
          onChange={handleChange}
          input={<OutlinedInput id="select-multiple-chip" label="Weapons" />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {weapons.map((weapon) => (
            <MenuItem
              key={weapon}
              value={weapon}
            >
              {weapon}
            </MenuItem>
          ))}
        </Select>
        { error ? <FormHelperText>Must select 2 weapons</FormHelperText> : null }
        
        
      </FormControl>
      
      </> 
  );
}


