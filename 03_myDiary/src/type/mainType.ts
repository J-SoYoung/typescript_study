export interface DiaryState {
  name: string;
  content: string;
  emotion: string;
}

export interface DiaryData extends DiaryState {
  emotion: string;
  created_date: string;
}

export interface DiaryListProps extends Array<DiaryData>{
  diaryList: DiaryData[];
}
export interface DiaryItemProps {
  diary: DiaryData;
}
