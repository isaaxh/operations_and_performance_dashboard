
export interface Channel {
    id: string; // uuid
    name: string; // "Email", "Facebook Ads"
    source_id: string; // FK → data_sources.id
    is_active: boolean;
    created_at: string;
}

export interface ChannelPerformance {
    channelId: string;
    channelName: string;
    revenue: number;
    spend: number;
}