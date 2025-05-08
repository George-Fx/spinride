export interface ReviewModel {
  id: number;
  name: string;
  rating: number;
  date: string;
  photo: string;
  comment: string;
}

export interface ReviewsResponse {
  reviews: ReviewModel[];
}
