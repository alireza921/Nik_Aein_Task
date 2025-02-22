import axios from "axios";
import { LoginRequestType } from "../types/LoginRequestType";

export class Server
{
	baseURl = "http://appapi.saminagent.ir:8082";
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
		return await this.post("/login", data)
	}

	async GetAllRequestList()
	{
		return await this.get("/GetAllRequestList");
	}
}