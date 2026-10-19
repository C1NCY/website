/*
    Edit this array to update the team members. Add/remove members freely —
    the grid reflows automatically. 
*/
import { DataGrid } from '@mui/x-data-grid';

const MEMBERS = [
    { name: "Saxton Short", subteam: "Coding", year: "2nd year", major: "Computer Science", href: "https://www.linkedin.com/in/saxtonshort" },
];

const columns = [
    { field: 'name', headerName: 'Name' },
    { field: 'year', headerName: 'Year', },
    { field: 'major', headerName: 'Major' },
    { field: 'subteam', headerName: 'Subteam' },
];

function MemberTable() {
    return (
        <div style={{ height: 300, width: '100%' }}>
            <DataGrid rows={MEMBERS} columns={columns} />
        </div>
    );
}
export default MemberTable;