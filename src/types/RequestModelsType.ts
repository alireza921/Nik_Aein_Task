export interface RequestModelsType
{
	Id: number;
	RequestType: number;
	RequestTypeStr: string;
	DeviceType: number;
	DeviceTypeStr: string;
	Serial: string;
	CustomerName: string;
	Mobile: string;
	AgentId: number;
	AgentName: string;
	CustomerId: number;
	Address: string;
	State: number;
	StateStr: string;
	RequestDate: Date;
	RequestDatePersian: string;
	RequestTime: string;
	DeliverUserId: number;
	DeliverUserName: string;
	DeliverDate: Date;
	DeliverDatePersian: string;
	DeliverTime: string;
	Amount: number;
}