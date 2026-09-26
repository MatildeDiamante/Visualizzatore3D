// Type to describe every model available
export interface ModelInfo {
  id: string;
  name: string;
  glbUrl: string; // full public URL of the .glb file hosted on Supabase Storage
  thumbnailPath: string; // local path in public/thumbnails
}