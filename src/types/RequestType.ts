export interface RequestType
{
	DeviceId?: number;
	DeviceType?: number;
	RequestId?: number;
	CustomerId?: number;
	DateFrom?: string;
	DateTo?: string;
	state?: number;
	Mobile?: string;
	RequestType?: number;
	Serial?: string;
	PersonId: number;
	PageNumber: number;
	PageSize: number;
	SearchTerm?: string;
	SortBy?: string;
}