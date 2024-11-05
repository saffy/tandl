import React, { useState, useEffect } from 'react';
import { TextField } from '@mui/material';
import FormControl from '@mui/material/FormControl';

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

export default function UsernameField() {
  const [loading, setLoading] = useState(true);
  const [members, setMembers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('/api/members/members', {method:'POST'});
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.statusText}`);
        }
        
        const data = await response.json(); // Parse JSON from response

        setMembers(data);
      } catch (error) {
        console.error('Error fetching members:', error);
      } finally {
        setLoading(false); // Stop loading once fetch is complete
      }
    }

    fetchData();
  }, []);

  return (
    <> <FormControl>
            <TextField required autoComplete='off' id="username" label="Username" variant="filled" type="text" />
        </FormControl>
        </>
  );
}


