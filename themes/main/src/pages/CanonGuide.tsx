
import Canon, {CanonEntry, formatTimeline} from "../data/canon"
import { Table,TableColumn } from '../scripts/Table';

const columns: TableColumn<CanonEntry>[] = [
    {
        name: 'Name',
        display: row => {
            let disneyPlus = <></>
            if (row.disneyPlus) {
                disneyPlus = <a href={row.disneyPlus} target="_blank" title="Watch on Disney+" className='disney-plus-link'>
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
        display: row => {
            if (!row.released) {
                return "TDB"
            }

            if (row.released >= new Date()) {
                return row.released.toLocaleDateString()
            }

            return row.released.getFullYear()
        },
        sortFunction: (a, b) => {
            let valueA = a.released || new Date("4000-01-01")
            let valueB = b.released || new Date("4000-01-01")

            return valueA > valueB ? 1 : -1
        }
    },
    {
        name: 'Type',
        display: row => row.type,
    },
    {
        name: 'Era',
        display: row => row.era,
    },

];

export default function CanonGuide() {
    return <div>
        <Table data={Canon} columns={columns} defaultSort={1} />
    </div>
}
