import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { RequestModelsType } from '../types/RequestModelsType';

interface FilteredTableProps
{
	filteredTableData: RequestModelsType[];
	paginate: number;
}

const FilteredTable = (props: FilteredTableProps) =>
{
	const columns: GridColDef[] = [
		{ field: 'name', headerName: 'نام درخواست/شماره ', width: 150 },
		{ field: 'device', headerName: 'دستگاه/ شماره سریال ', width: 250 },
		{ field: 'state', headerName: 'وضعیت', width: 90 },
		{ field: 'customerName', headerName: 'نام مشتری/آدرس', width: 130, },
		{ field: 'mobile', headerName: 'موبایل', width: 130, },
		{ field: 'requestDate', headerName: 'تاریخ درخواست', width: 130, },
		{ field: 'deliverUsername', headerName: 'بررسی کننده', width: 130, },
		{ field: 'deliverDate', headerName: 'تاریخ بررسی', width: 130, },
	];

	const rowProvider = (datas: RequestModelsType[]) =>
	{
		const rows = datas.map((data) =>
		{
			return {
				id: data.Id,
				name: data.Id,
				device: data.Serial,
				state: data.State,
				customerName: data.CustomerName,
				mobile: data.Mobile,
				requestDate: data.RequestDate,
				deliverUsername: data.DeliverUserName,
				deliverDate: data.DeliverDate,
			}
		})
		return rows;
	}

	const paginationModel = { page: props.paginate ?? 0, pageSize: 10 };
	const rows = rowProvider(props.filteredTableData);
	return (
		<>
			<Paper sx={{ height: 400, width: '100%' }}>
				<DataGrid
					rows={rows}
					columns={columns}
					initialState={{ pagination: { paginationModel } }}
					pageSizeOptions={[5, 10]}
					sx={{ border: 0 }}
					checkboxSelection
				/>
			</Paper>
		</>
	);
}

export default FilteredTable;