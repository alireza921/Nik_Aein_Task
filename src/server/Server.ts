import axios from "axios";
import { LoginRequestType } from "../types/LoginRequestType";
import { RequestType } from "../types/RequestType";

export class Server
{
	baseURl = "http://appapi.saminagent.ir:8082";
	headers = {
		headers: {
			'Accept-Language': 'fa-IR',
			'withCredentials': true,
		}
	}

	getLink(subdirectory: string, query?: RequestType)
	{
		let ans = this.baseURl + subdirectory;
		let index = 0;
		if (query)
			for (const [key, value] of Object.entries(query))
			{
				if (index === 0)
					ans += "?";
				else
					ans += "&";
				ans += `${key}=${value}`;
				index++;
			}
		return ans;
	}

	async get(subdirectory: string, query: RequestType)
	{
		let fullURL = this.getLink(subdirectory, query);
		debugger;
		return await axios.get(fullURL, this.headers);
	}

	async post(subdirectory: string, data: LoginRequestType)
	{
		let fullURL = this.getLink(subdirectory);
		return await axios.post(fullURL, data, this.headers);
	}

	async postLogin(data: LoginRequestType)
	{
		return await this.post("/Login", data)
	}

	async GetAllRequestList(query: RequestType)
	{
		return await this.get("/GetAllRequestList", query);
	}
}