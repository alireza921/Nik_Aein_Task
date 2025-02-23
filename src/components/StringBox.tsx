import { TextField } from "@mui/material";

interface StringBoxProps
{
	onTextInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	value: string;
	lable: string;
	name: string;
}

const StringBox = (props: StringBoxProps) =>
{
	return (
		<>
			<TextField
				label={props.lable}
				name={props.name}
				value={props.value}
				onChange={props.onTextInputChange}
				type="string"
				sx={{ direction: "rtl" }}
				size="small"
			/>
		</>
	);
}

export default StringBox;