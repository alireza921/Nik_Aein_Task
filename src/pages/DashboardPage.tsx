import { ChangeEvent, useEffect, useState } from "react";
import { SelectInputType } from "../types/SelectInputType";
import SelectBox from "../components/SelectBox";
import { selectData } from "../data/SelectData";
import { Icon, SelectChangeEvent, Stack, Typography } from "@mui/material";
import StringBox from "../components/StringBox";
import { Server } from "../server/Server";


interface DashboardPageProps
{
	server: Server;
}
interface DashboardPageState
{
	mobile: string;
	deviceSerial: string;
	customerName: string;
}


const DashboardPage = (props: DashboardPageProps) =>
{
	console.log(props);

	const [selectInput, setSelectInput] = useState<SelectInputType>({
		text: "",
		state: 0
	});
	const [textInput, setTextInput] = useState<DashboardPageState>({
		mobile: "",
		deviceSerial: "",
		customerName: ""
	});

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
	// const onDateChange = () => { }

	useEffect(() =>
	{
		props.server.GetAllRequestList({
			PersonId: 37,
			PageNumber: 1,
			PageSize: 10
		})
			.then((res) => console.log(res))
			.catch((error) => console.log(error));
	})
	return (
		<>
			<Typography variant="h2">
				<Icon > 

				</Icon>
			</Typography> 
			<Stack
				direction="row"
				flexWrap="wrap"
				alignItems="center"
			>
				<StringBox
					lable="سریال دستگاه"
					name="deviceSerial"
					value={textInput.deviceSerial}
					onTextInputChange={onTextInputChange}
				/>
				<StringBox
					lable="نام مشتری"
					name="customerName"
					value={textInput.customerName}
					onTextInputChange={onTextInputChange}
				/>
				<SelectBox
					text={selectInput.text}
					selectItems={selectData}
					onSelectChange={onSelectChange}
				/>

				<StringBox
					lable="شماره موبایل"
					name="mobile"
					value={textInput.mobile}
					onTextInputChange={onTextInputChange}
				/>
			</Stack>
		</>
	);
}

export default DashboardPage;