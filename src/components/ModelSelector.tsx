// Manages the thumbnails of all four models, whit the one active highlighted
import type { ModelInfo } from "../types/model";
import ModelThumbnail from "./ModelThumbnail";

interface ModelSelectorProps {
  models: ModelInfo[];
  activeId: string;
  onSelect: (id: string) => void;
}

export default function ModelSelector({
  models,
  activeId,
  onSelect,
}: ModelSelectorProps) {
  const visibleModels = models;

  return (
    <div className="model-selector">
      {visibleModels.map((model) => (
        <ModelThumbnail
          key={model.id}
          model={model}
          isActive={model.id === activeId}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
}
