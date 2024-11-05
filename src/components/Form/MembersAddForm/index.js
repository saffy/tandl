import React, { useState, useEffect } from 'react';

import UsernameField from '@site/src/components/Form/UsernameField';
import WeaponSelect from '@site/src/components/Form/WeaponSelect';
import JoinDateSelect from '@site/src/components/Form/JoinDateSelect';
  
export default function MembersAddForm() {
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

  if (loading) {
    //grey out button?
  }

  return (
    <><h2>Add Members</h2>
    <form>
          <UsernameField />
          <WeaponSelect />
          <JoinDateSelect />
      </form></>
  );
}


