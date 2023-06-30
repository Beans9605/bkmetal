export interface ScrapType {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  price: number;
}

export interface CounslingItemType {
  itemInfo?: ScrapType;
  kgNumber?: number;
}
