
import Canon, {CanonEntry, formatTimeline} from "../data/canon"
import { Table,TableColumn } from '../scripts/Table';

const columns: TableColumn<CanonEntry>[] = [
    {
        name: 'Name',
        display: row => {
            let disneyPlus = <></>
            if (row.disneyPlus) {
                disneyPlus = <a href={row.disneyPlus} target="_blank" title="Watch on Disney+" className='disneyPlusLink'>
                    <i className="fa-solid fa-circle-play"></i>
                </a>
            }

            return <div className="canon-title">
                <a href={row.wookieepedia} target="_blank" title="View on Wookieepedia">
                    {row.name}
                </a>
                {disneyPlus}
            </div>
        },
    },
    {
        name: 'Type',
        display: row => row.type,
    },

    {
        name: 'Timeline',
        display: (row) => {
            return formatTimeline(row.timeline)
        },
        sortFunction: (rowA, rowB) => {
            return rowA.timeline > rowB.timeline ? 1 : -1
        },
    },
    {
        name: 'Released',
        display: row => row.released.getFullYear(),
        sortFunction: (a, b) => {
            return a.released > b.released ? 1 : -1
        }
    },
];

export default function CanonGuide() {
    return <div>
        <Table data={Canon} columns={columns} defaultSort={2} />
    </div>
}
