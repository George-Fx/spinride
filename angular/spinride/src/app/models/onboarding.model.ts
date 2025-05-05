export interface OnboardingModel {
  id: number;
  title1: string;
  title2: string;
  image: string;
  description1: string;
  description2: string;
}

export interface OnboardingResponse {
  onboarding: OnboardingModel[];
}
