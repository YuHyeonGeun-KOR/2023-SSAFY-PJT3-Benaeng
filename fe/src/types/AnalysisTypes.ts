export interface MostCategory {
	foodCategoryId: number;
	consumer: number;
	waste: number;
}

export interface MonthlyReportData {
	countPurchase: number;
	countConsumer: number;
	countWaste: number;
	mostConsumer: MostCategory[];
	mostWaste: MostCategory[];
}

export interface CalendarData {
	foodCategoryId: number;
	foodName: string;
	purchaseRecords: string[];
	purchaseCycle: number;
}

export interface CalendarDataResponse {
	calData: CalendarData[];
}
