export interface DiaryState {
  name: string;
  content: string;
  emotion: string;
}
export interface DiaryData extends DiaryState {
  id: number;
  created_date: string;
}