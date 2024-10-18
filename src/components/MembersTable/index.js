import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import MembersTableRow from '@site/src/components/MembersTableRow';

function createData(
    name,
    calories,
    fat,
    carbs,
    protein,
  ) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];

export default function MembersTable() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('/api/greet');
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.statusText}`);
        }
        
        const data = await response.json(); // Parse JSON from response

        setGreetingString(data.value);
      } catch (error) {
        console.error('Error fetching greeting:', error);
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
          {rows.map((row) => (
            <MembersTableRow isHeader={false} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </section>
  );
}


