import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import Paper from '@mui/material/Paper';

import MembersTableRow from '@site/src/components/Table/MembersTableRow';

function createData(
    name,
    calories,
    fat,
    carbs,
    protein,
  ) {
    return { name, calories, fat, carbs, protein };
  }

export default function MembersTable() {
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
    return <div>Table data loading...</div>;
  }

  return (
    <section>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <MembersTableRow isHeader={true}/>
        </TableHead>
        <TableBody>
          {members.map((member) => (
            <MembersTableRow key={member.username} isHeader={false} row={member} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </section>
  );
}


