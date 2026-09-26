import type { ModelInfo } from "../types/model";

// Public base URL of the Supabase Storage bucket that hosts the .glb files
const SUPABASE_STORAGE_URL = import.meta.env.VITE_SUPABASE_STORAGE_URL;

export const models: ModelInfo[] = [
  {
    id: "colmapSanGiacomo",
    name: "San Giacomo COLMAP",
    glbUrl: `${SUPABASE_STORAGE_URL}/COLMAP/sanGiacomo.glb`,
    thumbnailPath: "/thumbnails/colmap_diogene.png",
  },
  {
    id: "colmapXXSettembre",
    name: "XX Settembre COLMAP",
    glbUrl: `${SUPABASE_STORAGE_URL}/COLMAP/xxSettembre.glb`,
    thumbnailPath: "/thumbnails/colmap_xx.png",
  },
  {
    id: "trellisDiogene",
    name: "Diogene TRELLIS",
    glbUrl: `${SUPABASE_STORAGE_URL}/TRELLIS/diogene%20v3.glb`,
    thumbnailPath: "/thumbnails/trellis_diogene.png",
  },
  {
    id: "trellisXXSettembre",
    name: "XX Settembre TRELLIS",
    glbUrl: `${SUPABASE_STORAGE_URL}/TRELLIS/xx%20v3.glb`,
    thumbnailPath: "/thumbnails/trellis_xx.png",
  },
];
