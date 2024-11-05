import React, { useState, useEffect } from 'react';
import { TextField } from '@mui/material';
import FormControl from '@mui/material/FormControl';

const getDateText = (date) => {
    // yyyy-MM-dd
    let dayOfMonth = date.getDate() > 9 ? date.getDate() : '0' + date.getDate();
    let month = date.getMonth() > 9 ? date.getMonth() : '0' + date.getMonth();
    return '' + date.getFullYear() + '-' + month + '-' + dayOfMonth;
}

export default function JoinDateSelect() {
    let defaultDate = new Date();
    const [date, setDate] = useState(getDateText(defaultDate));


    const handleChange = (event) => {
        const {
            target: { value },
          } = event;
        
          if(!value) {
            setDate(getDateText(defaultDate));
          } else {
            setDate(getDateText(new Date(value)));
          }
        
        console.log(value);
    }

    

  return (
    <>
    <FormControl>
    <TextField id="joindate" required label="Join Date" type="date" value={date} onChange={handleChange} variant="filled" />
    </FormControl>
    
    </>
  );
}


