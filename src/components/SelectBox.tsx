import { Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { SelectInputType } from "../types/SelectInputType";

interface SelectBoxProps
{
	onSelectChange: (e: SelectChangeEvent) => void;
	selectItems: SelectInputType[];
	text: string;
}

const SelectBox = (props: SelectBoxProps) =>
{
	return (
		<>
			<Box sx={{ minWidth: 180 }}>
				<FormControl fullWidth>
					<InputLabel id="select-situation-id">وضعیت</InputLabel>
					<Select
						value={props.text}
						label="وضعیت"
						onChange={props.onSelectChange}
						margin="dense"
						size="small"
					>
						{
							props.selectItems.map((item: SelectInputType, index: number) =>
								<MenuItem
									key={`SelectBox_key_${index}`}
									value={item.state}
								>
									{item.text}
								</MenuItem>
							)
						}
					</Select>
				</FormControl>
			</Box>

		</>
	);
}

export default SelectBox;