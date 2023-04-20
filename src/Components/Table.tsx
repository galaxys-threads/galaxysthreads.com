import React from 'react'
import { useEffect, useState } from 'react'

export declare type TableProps<T> = {
	data: T[]
	sort: TableSort
	onSort?: OnSort
	columns: TableColumn<T>[]
}

export interface TableColumn<T> {
	name: string | React.ReactNode
	display: (row: T) => React.ReactNode
	sortFunction?: ColumnSortFunction<T>
}

export interface TableSort {
	columnIndex: number
	direction: TableSortDirection
}

export enum TableSortDirection {
	ASC = 'asc',
	DESC = 'desc',
}

export declare type OnSort = (newSort: TableSort) => void
export declare type ColumnSortFunction<T> = (a: T, b: T) => number

export function Table<T>(props: TableProps<T>) {
	const [tableData, setTableData] = useState(props.data)
	const [sort, setSort] = useState(props.sort)

	const handleSortingChange = (columnIndex: number) => {
		// Do nothing if column is not sortable
		if (!props.columns[columnIndex].sortFunction) {
			return
		}
		setSort((previousValue: TableSort) => {
			let newValue = {
				columnIndex: columnIndex,
				direction: TableSortDirection.DESC,
			} as TableSort
			if (previousValue.columnIndex === columnIndex) {
				// Flip the sort direction if it's not the first time we are clicking this column
				newValue.direction =
					previousValue.direction === TableSortDirection.ASC
						? TableSortDirection.DESC
						: TableSortDirection.ASC
			}
			return newValue
		})
	}

	useEffect(() => {
		// Skip if no column is selected
		if (sort.columnIndex === undefined || sort.columnIndex < 0) {
			return
		}

		// Sort using the sort function
		let sorted = [...props.data].sort(
			props.columns[sort.columnIndex].sortFunction,
		)

		// Flip the sort if it's asc
		if (sort.direction === TableSortDirection.ASC) {
			sorted = sorted.reverse()
		}

		// Update the state
		setTableData(sorted)
	}, [props.data, sort])

	useEffect(() => {
		props.onSort(sort)
	}, [sort])

	useEffect(() => {
		setSort(props.sort)
	}, [props.sort])

	let message = <></>
	if (tableData.length <= 0) {
		message = (
			<tr>
				<td className="table-message" colSpan={props.columns.length}>
					No Results Selected
				</td>
			</tr>
		)
	}

	return (
		<div className="react-table">
			<div className="table-caption">{tableData.length} Items</div>
			<table>
				<thead>
					<tr>
						{props.columns.map((column, columnIndex) => (
							<th
								key={columnIndex}
								onClick={() => handleSortingChange(columnIndex)}
								className={column.sortFunction ? 'sortable' : ''}
							>
								{columnIndex === sort.columnIndex && (
									<span className="sort-indicator">
										{sort.direction === TableSortDirection.ASC ? '⭡' : '⭣'}
									</span>
								)}
								{column.name}
							</th>
						))}
					</tr>
				</thead>
				<tbody>
					{tableData.map((row, rowIndex) => (
						<tr key={rowIndex}>
							{props.columns.map((column, columnIndex) => (
								<td key={columnIndex}>{column.display(row)}</td>
							))}
						</tr>
					))}
					{message}
				</tbody>
			</table>
		</div>
	)
}
