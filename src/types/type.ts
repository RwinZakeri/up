// Existing interfaces

export interface HeaderItemType {
  id: number;
  title: string;
  linkAddress: string;
  subMenuHeader?: Array<{
    id: number;
    title: string;
    linkAddress: string;
  }>;
}

export interface PopularSearch {
  id: number;
  title: string;
  linkAddress: string;
}

export interface CommentSliderItem {
  id: number;
  title: string;
  description: string;
  profileAddress: string;
}

export interface Freelancer {
  id: number;
  title: string;
  imgAddress: string;
  rate: number;
  jobPosition: string;
  rateMoney: string;
  description: string;
}

export interface InnerTitleInfo {
  title: string;
  mainRouteTitle: string;
  mainRouteAddress: string;
  current: string;
  currentAddress: string;
}

// Blog Post Interfaces and Types

export interface BlogPost {
  id: number;
  title: string;
  content: string;
  publishedDate: string;
  slug: string;
  userId: number;
  postPictureUrl: string;
  postCategoryId: number;
}

type Category = {
  id: number;
  categoryName: string;
  categoryDescription: string;
};

type Author = {
  id: number;
  username: string;
  profilePictureUrl: string | null;
};

type Comment = {
  // Define the structure of comments if there are any fields
};

type BlogPostDetail = {
  id: number;
  title: string;
  content: string;
  slug: string;
  postPictureUrl: string;
  publishedDate: string;
  category: Category;
  author: Author;
  comments: Comment[];
};

// com

export interface commentsSwiper {
  id: number;
  title: string;
  description?: string;
  profileAddress?: string;
}

// Correcting the type to accept a 1D array
export interface myCommentComponentTypes {
  data: commentsSwiper[]; // Now accepts a 1D array of commentsSwiper
}
