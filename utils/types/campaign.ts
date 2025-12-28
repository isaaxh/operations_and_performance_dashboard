
export type CampaignStatus = "active" | "paused" | "completed";

export interface Campaign {
    id: string; // uuid
    name: string;
    channel_id: string; // FK → channels.id
    start_date: string; // YYYY-MM-DD
    end_date: string | null;
    status: CampaignStatus;
    created_at: string;
}

export interface CampaignPerformanceRow {
    campaignId: string;
    campaignName: string;
    channelName: string;
    spend: number;
    revenue: number;
    leads: number;
    customers: number;
    conversionRate: number;
    roi: number;
    status: CampaignStatus;
}