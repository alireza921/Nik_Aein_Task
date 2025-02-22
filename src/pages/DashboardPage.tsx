import { ChangeEvent, useState } from "react";
import { SelectInputType } from "../types/SelectInputType";
import SelectBox from "../components/SelectBox";
import { selectData } from "../data/SelectData";
import { SelectChangeEvent, Stack } from "@mui/material";
import StringBox from "../components/StringBox";

interface DashboardPageProps
{ }
interface DashboardPageState
{
	mobile: string;
	deviceSerial: string;
	customerName: string;
}


const DashboardPage = (props: DashboardPageProps) =>
{
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

	return (
		<>
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