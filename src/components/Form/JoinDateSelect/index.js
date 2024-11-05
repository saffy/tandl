import React, { useState, useEffect } from 'react';
import { TextField } from '@mui/material';

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
        setDate(getDateText(new Date(event.target.value)));
    }

    

  return (
    <><TextField id="outlined-basic" label="Join Date" type="date" value={date} onChange={handleChange} variant="filled" /></>
  );
}


