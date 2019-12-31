export interface ISlide {
  id: string;
  name: string;
  position?: number;
  visible?: boolean;
}

export interface ISlideView {
  items: ISlide[];
  next: () => void;
  previous: () => void;
}

