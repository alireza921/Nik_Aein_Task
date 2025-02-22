import { ThemeProvider } from "@mui/material";
import { theme } from "./theme/theme";
import { useEffect } from "react";
import { Server } from "./server/Server";
import toast from "react-hot-toast";

function App()
{
	var server = new Server();

	useEffect(() =>
	{
		server.postLogin({ UserName: "", Password: "", UserType: 0 })
			.then(() => toast.success("خوش آمدید"))
			.catch(() => toast.error("ورود با خطا مواجه شد"))
	})
	return (
		<ThemeProvider theme={theme}>
				<div className="App">
					App Component !!!
				</div>
		</ThemeProvider>
	);
}

export default App;
