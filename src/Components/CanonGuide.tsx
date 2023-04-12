import React from 'react'

import { useEffect, useState } from 'react'
import Canon, {
	CanonEntry,
	CanonEra,
	CanonType,
	formatTimeline,
	getMediaLinkResult,
} from '../Data/canon'
import { Table, TableColumn, TableSort, TableSortDirection } from './Table'

const columns: TableColumn<CanonEntry>[] = [
	{
		name: 'Name',
		display: (row) => {
			let mediaLink = <></>
			if (row.mediaLink) {
				const mediaLinkResult = getMediaLinkResult(row.mediaLink)
				mediaLink = (
					<a
						href={row.mediaLink}
						target="_blank"
						title={mediaLinkResult.tooltipText}
						className="media-link-icon"
					>
						<i className={mediaLinkResult.iconClass}></i>
					</a>
				)
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
					{mediaLink}
				</div>
			)
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
		display: (row) => {
			if (!row.released) {
				return 'TDB'
			}
			let label = row.released.getFullYear().toString()
			if (row.released >= new Date()) {
				label = row.released.toLocaleDateString()
			}

			return <span title={row.released.toLocaleDateString()}>{label}</span>
		},
		sortFunction: (a, b) => {
			let valueA = a.released || new Date('4000-01-01')
			let valueB = b.released || new Date('4000-01-01')

			return valueA > valueB ? 1 : -1
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
]

export default function CanonGuide() {
	const [allowedTypes, setAllowedTypes] = useState([
		CanonType.skywalkerSagaFilm as string,
		CanonType.film as string,
		CanonType.show as string,
		CanonType.game as string,
	])

	const [sort, setSort] = useState({
		columnIndex: 1,
		direction: TableSortDirection.DESC,
	} as TableSort)

	const [allowedEras, setAllowedEras] = useState([
		CanonEra.highRepublic as string,
		CanonEra.republic as string,
		CanonEra.empire as string,
		CanonEra.newRepublic as string,
		CanonEra.firstOrder as string,
	])

	const [tableData, setTableData] = useState([...Canon])

	const toggleCanonEra = (era: string) => {
		setAllowedEras((previousValue) => {
			let newValue = [...previousValue]

			if (previousValue.includes(era)) {
				newValue = previousValue.filter((e) => e !== era)
			} else {
				newValue.push(era)
			}

			return newValue
		})
	}

	const toggleCanonType = (type: string) => {
		setAllowedTypes((previousValue) => {
			let newValue = [...previousValue]
			if (previousValue.includes(type)) {
				newValue = previousValue.filter((e) => e !== type)
			} else {
				newValue.push(type)
			}

			return newValue
		})
	}

	useEffect(() => {
		setTableData(
			[...Canon].filter((item) => {
				if (!allowedTypes.includes(item.type)) {
					return false
				}

				if (!allowedEras.includes(item.era)) {
					return false
				}

				return true
			}),
		)
	}, [allowedEras, allowedTypes])

	return (
		<div className="container">
			<div className="filters">
				<h2>Sorting</h2>

				<label>
					<input
						checked={sort.columnIndex === 1}
						onClick={() => {
							setSort({
								columnIndex: 1,
								direction: TableSortDirection.DESC,
							} as TableSort)
						}}
						type="radio"
					/>
					Timeline
				</label>
				<label>
					<input
						checked={sort.columnIndex === 2}
						onClick={() => {
							setSort({
								columnIndex: 2,
								direction: TableSortDirection.DESC,
							} as TableSort)
						}}
						type="radio"
					/>
					Released
				</label>
			</div>
			<div className="filters">
				<h2>Eras</h2>
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
					)
				})}
			</div>
			<div className="filters">
				<h2>Types</h2>
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
						)
					},
				)}
			</div>
			<Table
				data={tableData}
				columns={columns}
				sort={sort}
				onSort={(newSort: TableSort) => {
					setSort(newSort)
				}}
			/>
			<p>
				Source:{' '}
				<a
					href="https://starwars.fandom.com/wiki/Timeline_of_canon_media"
					target="_blank"
				>
					Wookieepedia Timeline of canon media
				</a>
			</p>
			<p>
				Wookieepedia is a more extensive list of Star Wars Canon media, but is a
				bit more overwhelming.
			</p>
		</div>
	)
}
