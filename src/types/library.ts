export type LayerId =
  | "foundation"
  | "understanding"
  | "excavation"
  | "skills"
  | "integration";

export interface Video {
  id: string;
  title: string;
  duration: string;
  description: string;
  thumbnail?: string;
  layerId: LayerId;
  topicId: string;
  tags: string[];
  isStartHere?: boolean;
}

export interface Topic {
  id: string;
  title: string;
  description: string;
  layerId: LayerId;
  videoCount: number;
  totalTime: string;
  videos: Video[];
}

export interface Layer {
  id: LayerId;
  number: 1 | 2 | 3 | 4 | 5;
  title: string;
  subtitle: string;
  description: string;
  accentColor: string;
  topicCount: number;
  totalVideoCount: number;
  estimatedTime: string;
  topics: Topic[];
}

export interface ThematicPath {
  id: string;
  label: string;
  description: string;
  seriesIds: string[];
}
