export declare type TableProps<T> = {
    data: T[];
    columns: TableColumn<T>[];
}

export interface TableColumn<T> {
    name: string | React.ReactNode;
    display: (row: T) => React.ReactNode;
    sortFunction?: ColumnSortFunction<T>;
}

export declare type ColumnSortFunction<T> = (a: T, b: T) => number;

export function Table<T>(props: TableProps<T>) {
    return <div>
        <table>
            <thead>
                <tr>
                    {props.columns.map(column => (
                        <th>{column.name}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {props.data.map(row => (
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
