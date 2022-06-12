import { useEffect, useState } from 'react';
import Canon, { CanonEntry, CanonEra, CanonType, formatTimeline } from '../data/canon';
import { Table, TableColumn } from '../scripts/Table';

const columns: TableColumn<CanonEntry>[] = [
	{
		name: 'Name',
		display: (row) => {
			let disneyPlus = <></>;
			if (row.disneyPlus) {
				disneyPlus = (
					<a href={row.disneyPlus} target="_blank" title="Watch on Disney+" className="disney-plus-link">
						<i className="fa-solid fa-circle-play"></i>
					</a>
				);
			}

			return (
				<div className="canon-title">
					<a href={row.wookieepedia} target="_blank" title="View on Wookieepedia">
						{row.name}
					</a>
					{disneyPlus}
				</div>
			);
		},
	},
	{
		name: 'Timeline',
		display: (row) => {
			return formatTimeline(row.timeline);
		},
		sortFunction: (rowA, rowB) => {
			return rowA.timeline > rowB.timeline ? 1 : -1;
		},
	},
	{
		name: 'Released',
		display: (row) => {
			if (!row.released) {
				return 'TDB';
			}
			let label = row.released.getFullYear().toString()
			if (row.released >= new Date()) {
				label = row.released.toLocaleDateString();
			}

			return <span title={row.released.toLocaleDateString()}>
				{label}
			</span>;
		},
		sortFunction: (a, b) => {
			let valueA = a.released || new Date('4000-01-01');
			let valueB = b.released || new Date('4000-01-01');

			return valueA > valueB ? 1 : -1;
		},
	},
	{
		name: 'Type',
		display: (row) => row.type,
	},
	{
		name: 'Era',
		display: (row) => row.era,
	},
];

export default function CanonGuide() {
	const [showBooks, setShowBooks] = useState(false);
	const [showGames, setShowGames] = useState(true);
	const [showShows, setShowShows] = useState(true);
	const [showFilms, setShowFilms] = useState(true);
	const [showSaga, setShowSaga] = useState(true);
	const [showEmpire, setShowEmpire] = useState(true);
	const [showFirstOrder, setShowFirstOrder] = useState(true);
	const [showRepublic, setShowRepublic] = useState(true);
	const [showNewRepublic, setShowNewRepublic] = useState(true);
	const [showHighRepublic, setShowHighRepublic] = useState(true);
	const [tableData, setTableData] = useState([...Canon]);

	const applyFilters = () => {
		const newItems = [...Canon].filter((item) => {
			if (item.era == CanonEra.empire && !showEmpire) {
				return false;
			}

			if (item.era == CanonEra.republic && !showRepublic) {
				return false;
			}

			if (item.era == CanonEra.newRepublic && !showNewRepublic) {
				return false;
			}

			if (item.era == CanonEra.highRepublic && !showHighRepublic) {
				return false;
			}

			if (item.era == CanonEra.firstOrder && !showFirstOrder) {
				return false;
			}

			if (item.type == CanonType.game && !showGames) {
				return false;
			}

			if (item.type == CanonType.show && !showShows) {
				return false;
			}

			if (item.type == CanonType.film && !showFilms) {
				return false;
			}
			if (item.type == CanonType.book && !showBooks) {
				return false;
			}

			if (item.type == CanonType.skywalkerSagaFilm && !showSaga) {
				return false;
			}

			return true;
		});

		setTableData([...newItems]);
	};

	useEffect(() => {
		applyFilters();
	}, [showGames, showBooks, showShows, showFilms, showSaga, showEmpire, showRepublic, showNewRepublic, showHighRepublic, showFirstOrder]);

	return (
		<div>
			<div className="filters">
				<h4>Eras</h4>
				<label>
					<input type="checkbox" checked={showHighRepublic} onChange={() => setShowHighRepublic(!showHighRepublic)} />
					{CanonEra.highRepublic}
				</label>
				<label>
					<input type="checkbox" checked={showRepublic} onChange={() => setShowRepublic(!showRepublic)} />
					{CanonEra.republic}
				</label>
				<label>
					<input type="checkbox" checked={showEmpire} onChange={() => setShowEmpire(!showEmpire)} />
					{CanonEra.empire}
				</label>
				<label>
					<input type="checkbox" checked={showNewRepublic} onChange={() => setShowNewRepublic(!showNewRepublic)} />
					{CanonEra.newRepublic}
				</label>
				<label>
					<input type="checkbox" checked={showFirstOrder} onChange={() => setShowFirstOrder(!showFirstOrder)} />
					{CanonEra.firstOrder}
				</label>
			</div>
			<div className="filters">
				<h4>Types</h4>
				<label>
					<input type="checkbox" checked={showSaga} onChange={() => setShowSaga(!showSaga)} />
					{CanonType.skywalkerSagaFilm}
				</label>
				<label>
					<input type="checkbox" checked={showFilms} onChange={() => setShowFilms(!showFilms)} />
					{CanonType.film}
				</label>
				<label>
					<input type="checkbox" checked={showShows} onChange={() => setShowShows(!showShows)} />
					{CanonType.show}
				</label>
				<label>
					<input type="checkbox" checked={showGames} onChange={() => setShowGames(!showGames)} />
					{CanonType.game}
				</label>
				<label>
					<input type="checkbox" checked={showBooks} onChange={() => setShowBooks(!showBooks)} />
					{CanonType.book}
				</label>
			</div>
			<Table data={tableData} columns={columns} defaultSort={1} />
		</div>
	);
}
