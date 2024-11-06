import React from 'react';
import { TextField } from '@mui/material';

export default function UsernameField({value, onFormChange}) {

  return (
    <> 
            <TextField required autoComplete='off' id="username" name="username" label="Username" variant="filled" type="text" value={value} onChange={onFormChange} />
        
        </>
  );
}


