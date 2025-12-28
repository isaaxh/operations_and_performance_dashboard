
export type DataSourceType = "marketing" | "revenue" | "manual";

export interface DataSource {
    id: string; // uuid
    name: string; // "Google Ads", "Stripe"
    type: DataSourceType;
    is_active: boolean;
    created_at: string;
}