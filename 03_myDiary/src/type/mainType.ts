export interface DiaryState {
  name: string;
  content: string;
  emotion: string;
}

export interface DiaryData extends DiaryState {
  id: number;
  created_date: string;
}

export interface DiaryProps {
  diaryList: DiaryData[];
}
export interface Diary {
  diary: DiaryData;
}

// export interface Diary {
//   id: number;
//   name: string;
//   content: string;
//   emotion: string;
//   created_date: string;
// }

// export interface DiaryProps {
//   diaryList: Diary[];
// }
