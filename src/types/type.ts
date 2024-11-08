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

export interface popularSearch {
  id: number;
  title: string;
  linkAddress: string;
}
[];

export interface CommentSliderItem {
  id: number;
  title: string;
  description: string;
  profileAddress: string;
}
