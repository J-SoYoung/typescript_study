import { DiaryListProps } from "../type/mainType";
import { Title } from "./DiaryEdit";
import { DiaryItem } from "./DiaryItem";

export const DiaryList = ({ diaryList }: { diaryList: DiaryListProps|undefined }) => {
  if(diaryList ===undefined){
    return <></>
  }
    return (
      <>
        <Title>일기 리스트</Title>
        {diaryList.map((diary, index) => {
          return <DiaryItem diary={diary} key={index} />;
        })}
      </>
    );
};
