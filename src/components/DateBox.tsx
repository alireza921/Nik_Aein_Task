import DatePicker from "react-multi-date-picker"
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"

interface DateBoxProps
{

}

const DateBox = (props: DateBoxProps) =>
{
	console.log(props);

	return (
		<>
			<div style={{ direction: "rtl" }}>
				<DatePicker
					calendar={persian}
					locale={persian_fa}
					calendarPosition="bottom-right"
					inputClass="input_date"
				/>
			</div>
		</>
	);
}

export default DateBox;