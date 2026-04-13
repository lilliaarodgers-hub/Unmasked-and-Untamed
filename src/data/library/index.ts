import { layer1 } from "./layer1-foundation";
import { layer2 } from "./layer2-understanding";
import { layer3 } from "./layer3-excavation";
import { layer4 } from "./layer4-skills";
import { layer5 } from "./layer5-integration";
import type { Layer, ThematicPath } from "@/types/library";

export { layer1, layer2, layer3, layer4, layer5 };
export { startHereVideos } from "./start-here";

export const allLayers: Layer[] = [layer1, layer2, layer3, layer4, layer5];

export const thematicPaths: ThematicPath[] = [
  {
    id: "body-understanding",
    label: "I want to understand what is happening in my body",
    description: "Start with the biology and work forward.",
    seriesIds: ["perimenopause-basics", "hormone-emotion-cycle"],
  },
  {
    id: "identity-lost",
    label: "I do not know who I am anymore",
    description: "The identity and unmasking series.",
    seriesIds: ["unmasking", "nd-identity"],
  },
  {
    id: "exhausted-burnout",
    label: "I am exhausted and burned out",
    description: "The burnout, nervous system, and sleep series.",
    seriesIds: ["burnout-recovery", "sleep-fatigue"],
  },
  {
    id: "relationships-falling",
    label: "My relationships are falling apart",
    description: "The relationships and communication series.",
    seriesIds: ["relationships", "communication-boundaries"],
  },
  {
    id: "late-nd-diagnosis",
    label: "I just received a late ND diagnosis",
    description: "Start with identity, immediately.",
    seriesIds: ["nd-identity"],
  },
  {
    id: "what-i-want",
    label: "I want to know what I actually want",
    description: "Values excavation and the harmony framework.",
    seriesIds: ["authentic-self", "harmony-framework"],
  },
];
