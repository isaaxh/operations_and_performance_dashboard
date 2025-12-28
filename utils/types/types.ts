
export interface DateRange {
    from: string; // YYYY-MM-DD
    to: string;   // YYYY-MM-DD
}

export interface DashboardFilters {
    dateRange: DateRange;
    channelIds?: string[];
    campaignIds?: string[];
}
