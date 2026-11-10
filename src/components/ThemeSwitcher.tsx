"use client";

import { useState, useEffect } from "react";
import { Palette, Check, Sparkles } from "lucide-react";

export interface ThemeOption {
  id: string;
  name: string;
  shortName: string;
  emoji: string;
  bg: string;
  card: string;
  primary: string;
  primaryText: string;
  secondary: string;
  border: string;
}

export const THEMES: ThemeOption[] = [
  {
    id: "cyber-emerald",
    name: "Cyber Emerald & Cyan",
    shortName: "Emerald",
    emoji: "🌿",
    bg: "#08090d",
    card: "rgba(18, 19, 26, 0.7)",
    primary: "#10b981",
    primaryText: "#08090d",
    secondary: "#06b6d4",
    border: "rgba(39, 39, 42, 0.8)",
  },
  {
    id: "electric-indigo",
    name: "Electric Indigo & Violet",
    shortName: "Indigo",
    emoji: "⚡",
    bg: "#0a0b10",
    card: "rgba(19, 20, 31, 0.7)",
    primary: "#6366f1",
    primaryText: "#ffffff",
    secondary: "#a855f7",
    border: "rgba(45, 47, 69, 0.8)",
  },
  {
    id: "midnight-teal",
    name: "Midnight Teal & Amber",
    shortName: "Teal",
    emoji: "🌊",
    bg: "#090d12",
    card: "rgba(17, 24, 39, 0.7)",
    primary: "#14b8a6",
    primaryText: "#090d12",
    secondary: "#f59e0b",
    border: "rgba(31, 41, 55, 0.8)",
  },
  {
    id: "oled-stealth",
    name: "OLED Stealth & Sky",
    shortName: "OLED",
    emoji: "⬛",
    bg: "#000000",
    card: "rgba(15, 15, 18, 0.8)",
    primary: "#38bdf8",
    primaryText: "#000000",
    secondary: "#e4e4e7",
    border: "rgba(34, 34, 39, 0.8)",
  },
  {
    id: "neo-cobalt",
    name: "Neo Cobalt & Lime",
    shortName: "Cobalt",
    emoji: "🚀",
    bg: "#0b0f19",
    card: "rgba(19, 28, 46, 0.7)",
    primary: "#3b82f6",
    primaryText: "#ffffff",
    secondary: "#84cc16",
    border: "rgba(36, 51, 77, 0.8)",
  },
];

export default function ThemeSwitcher() {
  const [activeTheme, setActiveTheme] = useState<string>("neo-cobalt");
  const [isOpen, setIsOpen] = useState(false);

  const applyTheme = (themeId: string) => {
    setActiveTheme(themeId);
    const theme = THEMES.find((t) => t.id === themeId);
    if (!theme) return;

    const root = document.documentElement;
    root.setAttribute("data-theme", theme.id);
    root.style.setProperty("--bg-page", theme.bg);
    root.style.setProperty("--bg-card", theme.card);
    root.style.setProperty("--primary", theme.primary);
    root.style.setProperty("--primary-text", theme.primaryText);
    root.style.setProperty("--secondary", theme.secondary);
    root.style.setProperty("--border-color", theme.border);

    // Dynamic style update on body
    document.body.style.backgroundColor = theme.bg;
  };

  useEffect(() => {
    applyTheme("neo-cobalt");
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <div className="flex flex-col items-end gap-2">
        {isOpen && (
          <div className="p-3 rounded-2xl border border-zinc-800 bg-zinc-950/95 backdrop-blur-xl shadow-2xl space-y-2 animate-fadeIn w-64">
            <div className="flex items-center justify-between pb-2 border-b border-zinc-800">
              <span className="text-xs font-bold text-zinc-200 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span>Paletas de Color</span>
              </span>
              <span className="text-[10px] text-zinc-500 font-mono">5 opciones</span>
            </div>

            <div className="space-y-1.5">
              {THEMES.map((theme) => {
                const isActive = activeTheme === theme.id;
                return (
                  <button
                    key={theme.id}
                    onClick={() => applyTheme(theme.id)}
                    className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-xl text-xs font-medium transition-all ${
                      isActive
                        ? "bg-zinc-800 text-white border border-zinc-700 shadow"
                        : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900/60"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span>{theme.emoji}</span>
                      <span>{theme.name}</span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <div
                        className="w-3 h-3 rounded-full border border-black/40"
                        style={{ backgroundColor: theme.primary }}
                      />
                      <div
                        className="w-3 h-3 rounded-full border border-black/40"
                        style={{ backgroundColor: theme.secondary }}
                      />
                      {isActive && <Check className="w-3.5 h-3.5 text-emerald-400 ml-1" />}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 px-3.5 py-2.5 rounded-full border border-zinc-700 bg-zinc-900/90 text-zinc-200 hover:text-white hover:bg-zinc-800 shadow-xl backdrop-blur-md text-xs font-semibold transition-all hover:scale-105"
        >
          <Palette className="w-4 h-4 text-emerald-400" />
          <span>Cambiar Paleta</span>
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        </button>
      </div>
    </div>
  );
}
