import React, { useState, useEffect } from 'react';

import UsernameField from '@site/src/components/Form/UsernameField';
import WeaponSelect from '@site/src/components/Form/WeaponSelect';
import JoinDateSelect from '@site/src/components/Form/JoinDateSelect';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
  
export default function MembersAddForm() {
  const [loading, setLoading] = useState(true);
  const [members, setMembers] = useState([]);
  const [formData, setFormData] = useState({
    username: '',
    weapons: [],
    joinDate: '',
    });
  

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

  const handleSubmit= (e) => {
    e.preventDefault();
    console.log(formData)
  };

  const handleInputChange = (e) => {
    
    const { name, value } = e.target;
    setFormData({...formData, [name]: value});
    };

  if (loading) {
    //grey out button?
  }

  return (
    <><h2>Add Members</h2>
    
    <form onSubmit={handleSubmit}>
    <Box component="fields" sx={{ p: 2, minHeight:200 }}>
          <UsernameField value={formData.username} onFormChange={handleInputChange}/>
          <WeaponSelect value={formData.weapons} onFormChange={handleInputChange}/>
          <JoinDateSelect value={formData.joinDate} onFormChange={handleInputChange}/>

          
          
            <Button type="submit" variant="contained">Submit</Button>
      </Box>
      </form>
      
      </>
  );
}


