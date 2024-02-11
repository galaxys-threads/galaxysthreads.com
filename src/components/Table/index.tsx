import React from "react"
import classes from "./Table.module.scss"

export declare type TableProps<T> = {
	data: T[]
	sort: TableSort
	setSort: SetTableSort
	columns: TableColumn<T>[]
}

export type TableColumn<T> = {
	name: string | React.ReactNode
	display: (row: T) => React.ReactNode
	sortFunction?: ColumnSortFunction<T>
}

export type TableSort = {
	columnIndex: number
	direction: TableSortDirection
}

export enum TableSortDirection {
	ASC = "asc",
	DESC = "desc",
}

export declare type SetTableSort = (newSort: TableSort) => void
export declare type ColumnSortFunction<T> = (a: T, b: T) => number

export function Table<T>(props: TableProps<T>) {
	const handleSortingChange = (columnIndex: number) => {
		// Do nothing if column is not sortable
		if (!props.columns[columnIndex].sortFunction) {
			return
		}

		const newValue = {
			columnIndex: columnIndex,
			direction: TableSortDirection.DESC,
		} as TableSort
		if (props.sort.columnIndex === columnIndex) {
			// Flip the sort direction if it's not the first time we are clicking this column
			newValue.direction =
				props.sort.direction === TableSortDirection.ASC
					? TableSortDirection.DESC
					: TableSortDirection.ASC
		}

		props.setSort(newValue)
	}

	const sortTableData = (tableData: T[]): T[] => {
		// Skip if no column is selected
		if (props.sort.columnIndex === undefined || props.sort.columnIndex < 0) {
			return tableData
		}

		// Sort using the sort function
		let sorted = [...tableData].sort(
			props.columns[props.sort.columnIndex].sortFunction,
		)

		// Flip the sort if it's asc
		if (props.sort.direction === TableSortDirection.ASC) {
			sorted = sorted.reverse()
		}

		return sorted
	}

	const tableData = sortTableData(props.data)

	let message = <></>
	if (tableData.length <= 0) {
		message = (
			<tr>
				<td className={classes.message} colSpan={props.columns.length}>
					No Results Selected
				</td>
			</tr>
		)
	}

	return (
		<figure className={classes.main}>
			<div className={classes.caption}>{tableData.length} Items</div>
			<table>
				<thead>
					<tr>
						{props.columns.map((column, columnIndex) => {
							const key = columnIndex
							return (
								<th
									key={key}
									onClick={() => handleSortingChange(columnIndex)}
									className={column.sortFunction ? classes.sortable : ""}
								>
									{columnIndex === props.sort.columnIndex && (
										<span className={classes.sortIndicator}>
											{props.sort.direction === TableSortDirection.ASC
												? "⭡"
												: "⭣"}
										</span>
									)}
									{column.name}
								</th>
							)
						})}
					</tr>
				</thead>
				<tbody>
					{tableData.map((row, rowIndex) => {
						const key = rowIndex
						return (
							<tr key={key}>
								{props.columns.map((column, columnIndex) => {
									const key = columnIndex
									return <td key={key}>{column.display(row)}</td>
								})}
							</tr>
						)
					})}
					{message}
				</tbody>
			</table>
		</figure>
	)
}
