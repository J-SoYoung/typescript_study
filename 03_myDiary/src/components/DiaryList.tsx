import { DiaryListProps } from "../type/mainType";
import { Title } from "./DiaryEdit";
import { DiaryItem } from "./DiaryItem";

export const DiaryList = ({
  diaryList,
  onRemove,
  onEdit,
}: {
  diaryList: DiaryListProps | undefined;
  onRemove: (id: number) => void;
  onEdit: ({
    id,
    editContent,
  }: {
    id: number;
    editContent:string
  }) => void;
}) => {
  if (diaryList === undefined) {
    return <></>;
  }
  return (
    <>
      <Title>일기 리스트</Title>
      {diaryList?.diaryList.map((diary, index) => {
        return <DiaryItem diary={diary} key={index} onRemove={onRemove} onEdit={onEdit} />;
      })}
    </>
  );
};
