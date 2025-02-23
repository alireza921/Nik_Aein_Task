import axios from "axios";
import { LoginRequestType } from "../types/LoginRequestType";
import { RequestType } from "../types/RequestType";

export class Server
{
	baseURl = "http://appapi.saminagent.ir:8082";
	PersonId = 37;

	async get(subdirectory: string)
	{
		let fullURL = this.baseURl + subdirectory;
		return await axios.get(fullURL);
	}
	async post(subdirectory: string, data: LoginRequestType)
	{
		let fullURL = this.baseURl + subdirectory;
		return await axios.post(fullURL, data)
	}
	async postLogin(data: LoginRequestType) 
	{
		return await this.post("/Login", data)
	}

	async GetAllRequestList(query: RequestType)
	{
		return await this.get(`
			/GetAllRequestList?PersonId=${this.PersonId}&PageNumber=${query.PageNumber}&PageSize=${query.PageSize}
			`);
	}
}