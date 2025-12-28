
export interface DailyMetric {
    id: string; // uuid
    date: string; // YYYY-MM-DD
    campaign_id: string;
    channel_id: string;
    spend: number;
    revenue: number;
    leads: number;
    customers: number;
    created_at: string;
}

export type AdjustableMetric = "revenue" | "spend";

export interface ManualAdjustment {
    id: string; // uuid
    date: string;
    metric: AdjustableMetric;
    amount: number; // positive or negative
    reason: string;
    created_by: string; // FK → users.id
    created_at: string;
}

export interface FunnelMetrics {
    visits: number;
    leads: number;
    customers: number;
}