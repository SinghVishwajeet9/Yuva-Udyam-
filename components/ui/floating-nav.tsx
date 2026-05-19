"use client";
import React, { useState, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import { cn } from "@/lib/utils";

// ─── Card Nav Data ────────────────────────────────────────────────────────────
const cardNavItems = [
  {
    label: "For Students",
    bgColor: "#0D1B2A",
    textColor: "#fff",
    links: [
      { label: "Resume Scorer", href: "/student/resume" },
      { label: "Skill Gap & Roadmap", href: "/student/skill-gap" },
      { label: "AI Course Maker", href: "/student/courses" },
      { label: "Mock Interview", href: "/student/interview" },
    ],
  },
  {
    label: "For Organisations",
    bgColor: "#0A1F1A",
    textColor: "#fff",
    links: [
      { label: "Post a Job (PDF Upload)", href: "/org/post" },
      { label: "View Applications", href: "/org/applications" },
      { label: "Candidate Analytics", href: "/org/analytics" },
    ],
  },
  {
    label: "Platform",
    bgColor: "#1A0D2E",
    textColor: "#fff",
    links: [
      { label: "SWAYAM & NPTEL Courses", href: "/platform/courses" },
      { label: "WhatsApp Alerts", href: "/platform/alerts" },
      { label: "Google Meet Scheduler", href: "/platform/meet" },
    ],
  },
];

// ─── Card Nav Dropdown ────────────────────────────────────────────────────────
function CardNavDropdown({ onClose }: { onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -8, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -8, scale: 0.97 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="absolute top-[calc(100%+12px)] left-1/2 -translate-x-1/2 w-[700px] z-[6000]"
    >
      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-3 h-3 rotate-45 bg-zinc-900 border-l border-t border-white/10" />

      <div className="rounded-2xl border border-white/10 bg-zinc-900/95 backdrop-blur-xl shadow-2xl shadow-black/60 overflow-hidden">
        <div className="flex items-center justify-between px-5 py-3 border-b border-white/10">
          <span className="text-white font-bold text-sm tracking-widest uppercase">
            Yuva Udyam
          </span>
          <button
            onClick={onClose}
            className="text-zinc-400 hover:text-white transition-colors text-xs tracking-wide"
          >
            ✕ Close
          </button>
        </div>

        <div className="grid grid-cols-3 gap-0 divide-x divide-white/10">
          {cardNavItems.map((item) => (
            <div
              key={item.label}
              className="p-5 hover:bg-white/5 transition-colors duration-200"
              style={{ backgroundColor: item.bgColor + "cc" }}
            >
              <p className="text-zinc-400 text-xs font-semibold uppercase tracking-widest mb-4">
                {item.label}
              </p>
              <div className="flex flex-col gap-2">
                {item.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="flex items-center gap-2 text-sm text-zinc-300 hover:text-cyan-400 transition-colors group"
                  >
                    <svg
                      className="w-3 h-3 text-zinc-600 group-hover:text-cyan-400 transition-colors shrink-0"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="px-5 py-3 border-t border-white/10 flex items-center justify-between bg-black/30">
          <span className="text-zinc-500 text-xs">
            Empowering India's youth workforce
          </span>
          <a
            href="/register"
            className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            Get Started Free →
          </a>
        </div>
      </div>
    </motion.div>
  );
}

// FIXED HERE 👇
function NavContent({
  navItems,
  cardNavOpen,
  setCardNavOpen,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: React.ReactNode;
  }[];
  cardNavOpen: boolean;
  setCardNavOpen: (v: boolean) => void;
}) {
  return (
    <></>
  );
}