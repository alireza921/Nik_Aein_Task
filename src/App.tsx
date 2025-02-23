import { useEffect, useState } from "react";
import { Server } from "./server/Server";
import toast from "react-hot-toast";
import DashboardPage from "./pages/DashboardPage";
// import Cookies from "js-cookie";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { theme } from "./theme/theme";


const USER_NAME = "09115787681";
const PASSWORD = "906475";
const USER_TYPE = 1;

function App()
{
	var server = new Server();
	const [isLogin, setIsLogin] = useState<boolean>(false);
	// const token = Cookies.get("X-Access-Token");
	const token = true;

	useEffect(() =>
	{
		if (!token)
			server.postLogin({ UserName: USER_NAME, Password: PASSWORD, UserType: USER_TYPE })
				.then(() => 
				{
					setIsLogin(true);
					toast.success("خوش آمدید")
				})
				.catch((error) =>
				{
					console.log(error)
					setIsLogin(false);
					toast.error("ورود با خطا مواجه شد")
				})
	});

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />

			<div className="App">
				<main>
					<DashboardPage isLogin={isLogin} server={server} />
				</main>
			</div>
		</ThemeProvider>

	);
}

export default App;
