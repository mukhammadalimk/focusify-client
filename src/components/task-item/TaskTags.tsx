import { isValidColor } from "@/utils";
import { TaskItemProps } from "./TaskItem";

const TaskTags = ({ tags }: TaskTagsProps) => {
  return (
    <div className="flex gap-1.5 break_600:gap-2.5 flex-wrap">
      {tags.map((tag) => (
        <span
          key={tag.name}
          className="tag-text"
          style={{ color: isValidColor(tag.color) ? tag.color : "#616161" }}
        >
          #{tag.name}
        </span>
      ))}
    </div>
  );
};

type TaskTagsProps = Pick<TaskItemProps, "tags">;

export default TaskTags;
