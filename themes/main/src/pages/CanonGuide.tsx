import { useEffect, useState } from 'react';
import Canon, {
	CanonEntry,
	CanonEra,
	CanonType,
	formatTimeline,
} from '../data/canon';
import { Table, TableColumn } from '../scripts/Table';

const columns: TableColumn<CanonEntry>[] = [
	{
		name: 'Name',
		display: (row) => {
			let disneyPlus = <></>;
			if (row.disneyPlus) {
				disneyPlus = (
					<a
						href={row.disneyPlus}
						target="_blank"
						title="Watch on Disney+"
						className="disney-plus-link"
					>
						<i className="fa-solid fa-circle-play"></i>
					</a>
				);
			}

			return (
				<div className="canon-title">
					<a
						href={row.wookieepedia}
						target="_blank"
						title="View on Wookieepedia"
					>
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
			let label = row.released.getFullYear().toString();
			if (row.released >= new Date()) {
				label = row.released.toLocaleDateString();
			}

			return <span title={row.released.toLocaleDateString()}>{label}</span>;
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
	const [allowedTypes, setAllowedTypes] = useState([
		CanonType.skywalkerSagaFilm as string,
		CanonType.film as string,
		CanonType.show as string,
		CanonType.game as string,
	]);

	const [allowedEras, setAllowedEras] = useState([
		CanonEra.highRepublic as string,
		CanonEra.republic as string,
		CanonEra.empire as string,
		CanonEra.newRepublic as string,
		CanonEra.firstOrder as string,
	]);

	const [tableData, setTableData] = useState([...Canon]);

	const toggleCanonEra = (era: string) => {
		setAllowedEras((previousValue) => {
			let newValue = [...previousValue];

			if (previousValue.includes(era)) {
				newValue = previousValue.filter((e) => e !== era);
			} else {
				newValue.push(era);
			}

			return newValue;
		});
	};

	const toggleCanonType = (type: string) => {
		setAllowedTypes((previousValue) => {
			let newValue = [...previousValue];
			if (previousValue.includes(type)) {
				newValue = previousValue.filter((e) => e !== type);
			} else {
				newValue.push(type);
			}

			return newValue;
		});
	};

	useEffect(() => {
		setTableData(
			[...Canon].filter((item) => {
				if (!allowedTypes.includes(item.type)) {
					return false;
				}

				if (!allowedEras.includes(item.era)) {
					return false;
				}

				return true;
			})
		);
	}, [allowedEras, allowedTypes]);

	return (
		<div>
			<div className="filters">
				<h4>Eras</h4>
				{Object.values(CanonEra).map((era: string, eraIndex: Number) => {
					return (
						<label key={`${eraIndex}`}>
							<input
								type="checkbox"
								checked={allowedEras.includes(era)}
								onChange={() => toggleCanonEra(era)}
							/>
							{era}
						</label>
					);
				})}
			</div>
			<div className="filters">
				<h4>Types</h4>
				{Object.values(CanonType).map(
					(canonType: string, canonTypeIndex: Number) => {
						return (
							<label key={`${canonTypeIndex}`}>
								<input
									type="checkbox"
									checked={allowedTypes.includes(canonType)}
									onChange={() => toggleCanonType(canonType)}
								/>
								{canonType}
							</label>
						);
					}
				)}
			</div>
			<Table data={tableData} columns={columns} defaultSort={1} />
		</div>
	);
}
