export interface Status {
  status: string;
}
export interface Goal {
  id: string;
  name: string;
  description?: string;
  completed: boolean;
  duration: string;
  reminder?: string;
  skip: number[];
  reviewTime: string;
  createdAt?: string;
  action: { name: string; description: string; time: string };
  state: Array<Status>;
}
