'use client'

import React from 'react'

import Canon, {
	CanonEntry,
	CanonEra,
	CanonType,
	formatTimeline,
	getMediaLinkResult,
} from '@/data/canon'

import {
	Table,
	TableColumn,
	TableSort,
	TableSortDirection,
} from '@/components/Table'

import { useQueryState } from '@/modules/hooks/useQueryState'

import classes from './CanonGuide.module.scss'

const defaultEras = [
	CanonEra.highRepublic as string,
	CanonEra.republic as string,
	CanonEra.empire as string,
	CanonEra.rebellion as string,
	CanonEra.newRepublic as string,
	CanonEra.firstOrder as string,
]

const defaultTypes = [
	CanonType.skywalkerSagaFilm as string,
	CanonType.film as string,
	CanonType.show as string,
]

const defaultSort = {
	columnIndex: 1,
	direction: TableSortDirection.DESC,
} as TableSort

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
				return 'TBD'
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

type Config = {
	allowedTypes: string[]
	allowedEras: string[]
	sort: TableSort
}

const defaultConfig = {
	allowedEras: defaultEras,
	allowedTypes: defaultTypes,
	sort: defaultSort,
}

export default function CanonGuide() {
	const [config, setConfig] = useQueryState<Config>('config', defaultConfig)

	const toggleCanonEra = (era: string) => {
		setConfig((previousValue) => {
			let newValue = JSON.parse(JSON.stringify(previousValue)) as Config

			if (previousValue?.allowedEras.includes(era)) {
				newValue.allowedEras = previousValue.allowedEras.filter(
					(e) => e !== era,
				)
			} else {
				newValue.allowedEras.push(era)
			}

			return newValue
		})
	}

	const toggleCanonType = (type: string) => {
		setConfig((previousValue) => {
			let newValue = JSON.parse(JSON.stringify(previousValue)) as Config

			if (previousValue?.allowedTypes.includes(type)) {
				newValue.allowedTypes = previousValue.allowedTypes.filter(
					(e) => e !== type,
				)
			} else {
				newValue.allowedTypes.push(type)
			}

			return newValue
		})
	}

	const setSort = (sort: TableSort) => {
		setConfig((previousValue) => {
			let newValue = JSON.parse(JSON.stringify(previousValue)) as Config
			newValue.sort = sort

			return newValue
		})
	}

	const tableData = [...Canon].filter((item) => {
		if (!config.allowedTypes.includes(item.type)) {
			return false
		}

		if (!config.allowedEras.includes(item.era)) {
			return false
		}

		return true
	})

	return (
		<section>
			<div className={classes.filters}>
				<div className={classes.filter}>
					<h2>Sorting</h2>

					<label>
						<input
							checked={config.sort.columnIndex === 1}
							readOnly
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
							checked={config.sort.columnIndex === 2}
							readOnly
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
				<div className={classes.filter}>
					<h2>Eras</h2>
					{Object.values(CanonEra).map((era: string, eraIndex: Number) => {
						return (
							<label key={`${eraIndex}`}>
								<input
									type="checkbox"
									checked={config.allowedEras.includes(era)}
									onChange={() => toggleCanonEra(era)}
								/>
								{era}
							</label>
						)
					})}
				</div>
				<div className={classes.filter}>
					<h2>Types</h2>
					{Object.values(CanonType).map(
						(canonType: string, canonTypeIndex: Number) => {
							return (
								<label key={`${canonTypeIndex}`}>
									<input
										type="checkbox"
										checked={config.allowedTypes.includes(canonType)}
										onChange={() => toggleCanonType(canonType)}
									/>
									{canonType}
								</label>
							)
						},
					)}
				</div>
			</div>
			<div className={classes.filter}>
				<input
					type="button"
					value="Reset Filters"
					onClick={() => {
						setConfig(defaultConfig)
					}}
				/>
			</div>
			<Table
				data={tableData}
				columns={columns}
				sort={config.sort}
				setSort={setSort}
			/>
		</section>
	)
}
