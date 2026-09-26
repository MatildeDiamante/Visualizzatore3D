// Manages the clickable thumbnails
import type { ModelInfo } from "../types/model";

interface ModelThumbnailProps {
  model: ModelInfo;
  isActive: boolean;
  onSelect: (id: string) => void;
}

export default function ModelThumbnail({
  model,
  isActive,
  onSelect,
}: ModelThumbnailProps) {
  return (
    <button
      className={`thumbnail-btn ${isActive ? "thumbnail-btn--active" : ""}`}
      onClick={() => onSelect(model.id)}
      aria-pressed={isActive}
      aria-label={`Mostra ${model.name}`}
    >
      <img src={model.thumbnailPath} alt={model.name} />
      <span>{model.name}</span>
    </button>
  );
}