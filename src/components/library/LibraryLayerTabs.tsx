"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { LayerSection } from "./LayerSection";
import type { Layer, LayerId } from "@/types/library";

const layerColors: Record<LayerId, string> = {
  foundation: "border-deep-plum",
  understanding: "border-plum-muted",
  excavation: "border-ember-terracotta",
  skills: "border-warm-gold",
  integration: "border-warm-gold",
};

interface LibraryLayerTabsProps {
  layers: Layer[];
}

export function LibraryLayerTabs({ layers }: LibraryLayerTabsProps) {
  const [activeLayer, setActiveLayer] = useState<LayerId>(
    (layers[0]?.id as LayerId) ?? "foundation"
  );

  const currentLayer = layers.find((l) => l.id === activeLayer) ?? layers[0];

  return (
    <section className="bg-sacred-cream section-padding" aria-label="Video library layers">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Layer selector */}
        <div
          role="tablist"
          aria-label="Select a layer to explore"
          className="mb-10 flex gap-3 overflow-x-auto pb-2 scrollbar-none"
        >
          {layers.map((layer) => (
            <button
              key={layer.id}
              role="tab"
              id={`tab-${layer.id}`}
              aria-selected={activeLayer === layer.id}
              aria-controls={`panel-${layer.id}`}
              onClick={() => setActiveLayer(layer.id)}
              className={cn(
                "flex shrink-0 flex-col gap-1 rounded-xl border-2 bg-white px-5 py-4 text-left transition-all duration-200 hover:shadow-md min-w-[160px]",
                activeLayer === layer.id
                  ? `${layerColors[layer.id]} shadow-md`
                  : "border-border hover:border-plum-light"
              )}
            >
              <span
                className={cn(
                  "font-body text-xs uppercase tracking-wider font-semibold",
                  activeLayer === layer.id ? "text-warm-gold" : "text-plum-muted"
                )}
              >
                Layer {layer.number}
              </span>
              <span
                className={cn(
                  "font-heading text-base leading-snug",
                  activeLayer === layer.id ? "text-deep-plum" : "text-dark-plum/60"
                )}
              >
                {layer.title}
              </span>
              <span className="font-body text-xs text-plum-muted/70">
                {layer.totalVideoCount} videos
              </span>
            </button>
          ))}
        </div>

        {/* Layer content */}
        <div
          id={`panel-${activeLayer}`}
          role="tabpanel"
          aria-labelledby={`tab-${activeLayer}`}
        >
          <LayerSection layer={currentLayer} />
        </div>
      </div>
    </section>
  );
}
