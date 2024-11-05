import React from 'react';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

export default function MembersTableRow({isHeader, row}) {
    if (isHeader) {
        return (<TableRow>
            <TableCell>Username</TableCell>
            <TableCell align="right">Class</TableCell>
            <TableCell align="right">Reputation</TableCell>
            <TableCell align="right">Join Date</TableCell>
            <TableCell align="right">Last Active</TableCell>
            <TableCell align="right">Last Updated</TableCell>
        </TableRow>);
        }
    return (
        <TableRow
        key={row.username}
        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
      >
        <TableCell component="th" scope="row">
          {row.username}
        </TableCell>
        <TableCell align="right">{row.class}</TableCell>
        <TableCell align="right">{row.reputation}</TableCell>
        <TableCell align="right">{row.joinDate}</TableCell>
        <TableCell align="right">{row.lastActive}</TableCell>
        <TableCell align="right">{row.lastUpdated}</TableCell>
      </TableRow>);

}
