export interface headerItemType {
  id: number;
  title: string;
  linkAddress: string;
  subMenuHeader?: {
    id: number;
    title: string;
    linkAddress: string;
  }[];
}
