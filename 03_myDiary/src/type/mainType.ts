export interface DiaryState {
  name: string;
  content: string;
  emotion: string;
}

export interface DiaryData extends DiaryState {
  name: string;
  content: string;
  emotion: string;
  id: number;
  today: string;
}

// export interface DiaryListProps extends Array<DiaryData> {
export interface DiaryListProps {
  diaryList: DiaryData[];
}
