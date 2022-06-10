import { useEffect, useState } from "react";

export declare type TableProps<T> = {
    data: T[];
    defaultSort?: number;
    columns: TableColumn<T>[];
}

export interface TableColumn<T> {
    name: string | React.ReactNode;
    display: (row: T) => React.ReactNode;
    sortFunction?: ColumnSortFunction<T>;
}

enum TableSortDirection {
    ASC = "asc",
    DESC = "desc",
}

export declare type ColumnSortFunction<T> = (a: T, b: T) => number;

export function Table<T>(props: TableProps<T>) {
    const [tableData, setTableData] = useState(props.data);
    const [indexSorted, setIndexSorted] = useState(-1);
    const [directionSorted, setDirectionSorted] = useState(TableSortDirection.DESC);

    const handleSortingChange = (columnIndex: number) => {
        // Do nothing if column is not sortable
        if (!props.columns[columnIndex].sortFunction) {
            return
        }

        // Default first sort of column
        let newSortDirection = TableSortDirection.DESC
        if (indexSorted === columnIndex) {
            // Flip the sort direction if it's not the first time we are clicking this column
            newSortDirection = directionSorted === TableSortDirection.ASC ? TableSortDirection.DESC : TableSortDirection.ASC
        }

        let sorted = [...tableData].sort(props.columns[columnIndex].sortFunction)
        if (newSortDirection === TableSortDirection.ASC) {
            sorted = sorted.reverse()
        }

        // Update the state for the next run
        setDirectionSorted(newSortDirection);
        setIndexSorted(columnIndex)
        setTableData(sorted)
    };

    // Initial Load
    useEffect(() => {
        if (props.defaultSort) {
            handleSortingChange(props.defaultSort)
        }
    }, []);

    return <div className="react-table">
        <table>
            <thead>
                <tr>
                    {props.columns.map((column, columnIndex) => (
                        <th onClick={() => handleSortingChange(columnIndex)}>
                            {column.name} {columnIndex === indexSorted &&
                                (directionSorted === TableSortDirection.ASC ? "⭡" : "⭣")
                            }
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {tableData.map(row => (
                    <tr>
                        {props.columns.map(column => (
                            <td>{column.display(row)}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
}
