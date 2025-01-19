import PanelWrapper from "../panel/PanelWrapper";
import PanelHeader from "../panel/PanelHeader";
import { useMemo, useState } from "react";
import { CheckIcon, TagFillIcon } from "../icons";
import PanelButtons from "./PanelButtons";

interface Tag {
  id: string;
  label: string;
  color: string;
}

const tags: Tag[] = [
  { id: "1", label: "Urgent", color: "#F54336" },
  { id: "2", label: "Personal", color: "#4AAF57" },
  { id: "3", label: "Work", color: "#1A96F0" },
  { id: "4", label: "Home", color: "#00BCD3" },
  { id: "5", label: "Important", color: "#FF981F" },
  { id: "6", label: "Design", color: "#8BC255" },
  { id: "7", label: "Research", color: "#7A5548" },
  { id: "8", label: "Productive", color: "#9D28AC" },
];

const TagsPanel = ({ isPanelOpen, onClose }: TagsPanelProps) => {
  const [selectedTags, setSelectedTags] = useState<Tag[]>([]);

  const tagsMap = useMemo(() => {
    return new Map(tags.map((tag) => [tag.id, tag]));
  }, []);

  const onSelectTag = (id: string) => {
    // Find if the tag already exists
    const existingTag = selectedTags.find((item) => item.id === id);

    // If it's already existed, remove it
    if (existingTag) {
      setSelectedTags((prev) => prev.filter((item) => item.id !== id));
      return;
    }

    // Limit the number of selected tags to 5
    if (selectedTags.length >= 5) return;

    // If not previously selected, add the tag to state
    const selectedTag = tagsMap.get(id);
    if (selectedTag) setSelectedTags((prev) => [...prev, selectedTag]);
  };

  return (
    <PanelWrapper isPanelOpen={isPanelOpen} onClose={onClose}>
      <PanelHeader title="Tags" withIcon />

      <div className="overflow-y-auto no-scrollbar">
        {tags.map((item) => (
          <div
            className="grid items-center grid-cols-[max-content_1fr_max-content] gap-4 py-4 break_500:gap-6 break_500:py-5 cursor-pointer border-b border-[#EEEEEE] dark:border-[#35383F] last:border-b-0 select-none"
            key={item.id}
            onClick={() => onSelectTag(item.id)}
          >
            <TagFillIcon className="w-7 h-7" style={{ color: item.color }} />
            <h6 className="header-6 font-semibold">{item.label}</h6>
            {selectedTags?.find((tag) => tag.id === item.id) && (
              <CheckIcon className="w-7 h-7 text-[#FF6347]" />
            )}
          </div>
        ))}
      </div>

      <PanelButtons
        onCancel={onClose}
        onSave={onClose}
        texts={["Cancel", "OK"]}
      />
    </PanelWrapper>
  );
};

interface TagsPanelProps {
  isPanelOpen: boolean;
  onClose: () => void;
}

export default TagsPanel;
