import { RequestModelsType } from "./RequestModelsType"

export interface TableDataType
{
	TotalCount: number;
	TotalQueryCount: number;
	RequestModels: RequestModelsType[];
}