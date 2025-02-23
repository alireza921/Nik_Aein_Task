import { useEffect } from "react";
import { Server } from "./server/Server";
import toast from "react-hot-toast";
import DashboardPage from "./pages/DashboardPage";

const USER_NAME = "09115787681";
const PASSWORD = "906475";
const USER_TYPE = 1;

function App()
{
	var server = new Server();
	let isAuth = true; // todo -> fix it 
	useEffect(() =>
	{
		if (!isAuth)
			server.postLogin({ UserName: USER_NAME, Password: PASSWORD, UserType: USER_TYPE })
				.then(() => toast.success("خوش آمدید"))
				.catch((error) =>
				{
					console.log(error);
					toast.error("ورود با خطا مواجه شد")
				})
	})
	return (
		<div className="App">
			<main>
				<DashboardPage server={server} />
			</main>
		</div>
	);
}

export default App;
