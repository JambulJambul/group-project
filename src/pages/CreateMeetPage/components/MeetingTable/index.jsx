import classes from './style.module.scss'
import { Button } from '@mui/material';

const MeetingTable = () => {
    return (
        <table className={classes["table-wrapper"]}>
            <tr>
                <th>
                    No.
                </th>
                <th>
                    Meeting Creator
                </th>
                <th>
                    Schedule
                </th>
                <th>
                    Location
                </th>
                <th>
                    Description
                </th>
                <th>
                    Duration
                </th>
                <th>
                    Contact Phone
                </th>
                <th></th>
            </tr>
            <tr>
                <td>
                    No.
                </td>
                <td>
                    Meeting Creator
                </td>
                <td>
                    Schedule
                </td>
                <td>
                    Location
                </td>
                <td>
                    Description
                </td>
                <td>
                    Duration
                </td>
                <td>
                    Contact Phone
                </td>
                <td><Button>Test</Button><Button>Test</Button></td>
            </tr>
        </table>
    )
}

export default MeetingTable;