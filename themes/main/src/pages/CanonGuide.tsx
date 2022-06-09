import DataTable, { TableColumn } from 'react-data-table-component';

import Canon, {CanonEntry, formatTimeline} from "../data/canon"
const columns: TableColumn<CanonEntry>[] = [
    {
        name: 'Name',
        cell: row => {
            let disneyPlus = <></>
            if (row.disneyPlus) {
                disneyPlus = <a href={row.disneyPlus} target="_blank" title="Watch on Disney+" className='disneyPlusLink'>
                    <i className="fa-solid fa-circle-play"></i>
                </a>
            }

            return <div>
                <a href={row.wookieepedia} target="_blank" title="View on Wookieepedia">
                    {row.name}
                </a>
                {disneyPlus}
            </div>
        },
        sortable: true,
    },
    {
        name: 'Type',
        selector: row => row.type,
        sortable: true,
    },

    {
        name: 'Timeline',
        cell: (row) => {
            return formatTimeline(row.timeline)
        },
        sortable: true,
        sortFunction: (rowA, rowB) => {
            return rowA.timeline > rowB.timeline ? 1 : -1
        },
    },
    {
        name: 'Released',
        selector: row => row.released.getFullYear(),
        sortable: true,
    },
];

export default function CanonGuide() {
    return <div>
        <DataTable
            columns={columns}
            data={Canon}
        />
    </div>
}
