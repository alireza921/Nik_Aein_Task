import { Stack, SelectChangeEvent } from "@mui/material";
import StringBox from "./StringBox";
import { TextFiltersType } from "../types/TextFiltersType";
import { SelectInputType } from "../types/SelectInputType";
import SelectBox from "./SelectBox";
import DateBox from "./DateBox";
import { selectData } from "../data/SelectData";


interface FiltersProps
{
	textInput: TextFiltersType;
	selectInput: SelectInputType;
	onTextInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onSelectChange: (e: SelectChangeEvent) => void
}

const Filters = (props: FiltersProps) =>
{
	return (
		<>
			<Stack
				direction="row"
				flexWrap="wrap"
				alignItems="center"
				gap={1}
			>

				<StringBox
					lable="سریال دستگاه"
					name="deviceSerial"
					value={props.textInput.deviceSerial}
					onTextInputChange={props.onTextInputChange}
				/>
				<StringBox
					lable="نام مشتری"
					name="customerName"
					value={props.textInput.customerName}
					onTextInputChange={props.onTextInputChange}
				/>
				<SelectBox
					text={props.selectInput.text}
					selectItems={selectData}
					onSelectChange={props.onSelectChange}
				/>

				<DateBox />

				<StringBox
					lable="شماره موبایل"
					name="mobile"
					value={props.textInput.mobile}
					onTextInputChange={props.onTextInputChange}
				/>
			</Stack>
		</>
	);
}

export default Filters;