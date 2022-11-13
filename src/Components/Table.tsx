import React from 'react'
import { useEffect, useState } from 'react'

export declare type TableProps<T> = {
	data: T[]
	defaultSort?: number
	columns: TableColumn<T>[]
}

export interface TableColumn<T> {
	name: string | React.ReactNode
	display: (row: T) => React.ReactNode
	sortFunction?: ColumnSortFunction<T>
}

export enum TableSortDirection {
	ASC = 'asc',
	DESC = 'desc',
}

export declare type ColumnSortFunction<T> = (a: T, b: T) => number

export function Table<T>(props: TableProps<T>) {
	const [tableData, setTableData] = useState(props.data)
	const [indexSorted, setIndexSorted] = useState(props.defaultSort)
	const [directionSorted, setDirectionSorted] = useState(
		TableSortDirection.DESC,
	)

	const handleSortingChange = (columnIndex: number) => {
		// Do nothing if column is not sortable
		if (!props.columns[columnIndex].sortFunction) {
			return
		}

		setDirectionSorted((previousValue) => {
			let newValue = TableSortDirection.DESC
			if (indexSorted === columnIndex) {
				// Flip the sort direction if it's not the first time we are clicking this column
				return previousValue === TableSortDirection.ASC
					? TableSortDirection.DESC
					: TableSortDirection.ASC
			}
			return newValue
		})

		setIndexSorted(columnIndex)
	}

	useEffect(() => {
		// Skip if no column is selected
		if (indexSorted === undefined || indexSorted < 0) {
			return
		}

		// Sort using the sort function
		let sorted = [...props.data].sort(props.columns[indexSorted].sortFunction)

		// Flip the sort if it's asc
		if (directionSorted === TableSortDirection.ASC) {
			sorted = sorted.reverse()
		}

		// Update the state
		setTableData(sorted)
	}, [props.data, indexSorted, directionSorted])

	let message = <div></div>
	if (tableData.length <= 0) {
		message = (
			<tr>
				<td className="table-message" colspan={props.columns.length}>
					No Results Selected
				</td>
			</tr>
		)
	}

	return (
		<div className="react-table">
			<table>
				<thead>
					<tr>
						{props.columns.map((column, columnIndex) => (
							<th
								key={columnIndex}
								onClick={() => handleSortingChange(columnIndex)}
								className={column.sortFunction ? 'sortable' : ''}
							>
								{columnIndex === indexSorted && (
									<span className="sort-indicator">
										{directionSorted === TableSortDirection.ASC ? '⭡' : '⭣'}
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
