import { ChangeEvent, useEffect, useState } from "react";
import { SelectInputType } from "../types/SelectInputType";
import { Box, Button, SelectChangeEvent, Stack, Typography } from "@mui/material";
import { Server } from "../server/Server";
import FilteredTable from "../components/FilteredTable";
import { TextFiltersType } from "../types/TextFiltersType";
import Filters from "../components/Filters";
import { TableDataType } from "../types/TableDataType";

const PERSON_ID: number = 37;

interface DashboardPageProps
{
	server: Server;
	isLogin: boolean;
}

const DashboardPage = (props: DashboardPageProps) =>
{
	const [selectInput, setSelectInput] = useState<SelectInputType>({
		text: "",
		state: 0
	});
	const [textInput, setTextInput] = useState<TextFiltersType>({
		mobile: "",
		deviceSerial: "",
		customerName: ""
	});
	const [paginate, setPaginate] = useState<number>(0);
	const [tableData, setTableData] = useState<TableDataType>();

	useEffect(() =>
	{
		props.server.GetAllRequestList({
			PersonId: PERSON_ID,
			PageNumber: 1,
			PageSize: 10
		})
			.then((res) =>
			{
				//todo -> Back end fix Types
				// if (response)
				// 	if (response.data)
				// 		setTableData(response?.data)
				console.log(res);
			})
			.catch((error) => console.log(error));
	}, [props.isLogin]);

	const onSelectChange = (e: SelectChangeEvent) =>
	{
		e.preventDefault();
		setSelectInput(prevState => ({ ...prevState, text: e.target.value, state: parseInt(e.target.value) }));
	}

	const onTextInputChange = (e: ChangeEvent<HTMLInputElement>) =>
	{
		const { name, value } = e.target;
		setTextInput((prevState) => ({
			...prevState, [name]: value
		}));

	}

	const onConfirmFilter = () =>
	{
		props.server.GetAllRequestList({
			PersonId: PERSON_ID,
			PageNumber: paginate,
			PageSize: 10,
			Mobile: textInput.mobile,
			Serial: textInput.deviceSerial,
			CustomerName: textInput.customerName,
			state: selectInput.state,
		})
			.then((response) =>
			{
				//todo -> Back end fix Types
				// if (response)
				// 	if (response.data)
				// 		setTableData(response?.data)
				console.log(response)
			})
			.catch((error) => console.log(error))
	}

	const onCancelFilter = () =>
	{
		setPaginate(0);
		setSelectInput({ state: 0, text: "" });
		setTextInput({ customerName: "", deviceSerial: "", mobile: "" });
	}

	return (
		<>
			<div style={{
				display: "flex",
				flexDirection: "row",
				alignItems: "center",
				gap: "8px",
				marginBottom: "12px"
			}} >
				<figure style={{ margin: 0 }} >
					<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M15 24H22V26H15V24ZM15 20H25V22H15V20ZM15 16H25V18H15V16ZM27 12H22.82C22.4 10.84 21.3 10 20 10C18.7 10 17.6 10.84 17.18 12H13C12.86 12 12.73 12.01 12.6 12.04C12.21 12.12 11.86 12.32 11.59 12.59C11.41 12.77 11.26 12.99 11.16 13.23C11.06 13.46 11 13.72 11 14V28C11 28.27 11.06 28.54 11.16 28.78C11.26 29.02 11.41 29.23 11.59 29.42C11.86 29.69 12.21 29.89 12.6 29.97C12.73 29.99 12.86 30 13 30H27C28.1 30 29 29.1 29 28V14C29 12.9 28.1 12 27 12ZM20 11.75C20.41 11.75 20.75 12.09 20.75 12.5C20.75 12.91 20.41 13.25 20 13.25C19.59 13.25 19.25 12.91 19.25 12.5C19.25 12.09 19.59 11.75 20 11.75ZM27 28H13V14H27V28Z" fill="#0B6BCB" />
					</svg>
				</figure>
				<Typography variant="body1" >
					لیست سفارشات
				</Typography>
			</div>

			<Stack
				direction="row"
				flexWrap="wrap"
				justifyContent="space-between"
				alignItems="center"
				gap={1}
			>
				<Filters
					textInput={textInput}
					selectInput={selectInput}
					onTextInputChange={onTextInputChange}
					onSelectChange={onSelectChange}
				/>

				<Stack gap={1} direction="row">
					<Button variant="contained" onClick={onConfirmFilter} >تایید</Button>
					<Button variant="outlined" onClick={onCancelFilter}>انصراف</Button>
				</Stack>
			</Stack>
			<Box sx={{ mt: 4 }} >
				<FilteredTable
					filteredTableData={tableData?.RequestModels}
					paginate={paginate}
				/>
			</Box>
		</>
	);
}

export default DashboardPage;