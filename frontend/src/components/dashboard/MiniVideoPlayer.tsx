"use client"

import * as React from "react"
import { Play, Pause, X, Maximize2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

export function MiniVideoPlayer() {
  const [isOpen, setIsOpen] = React.useState(true)
  const [isPlaying, setIsPlaying] = React.useState(false)

  if (!isOpen) {
    return (
      <Button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-20 md:bottom-6 right-4 md:right-6 z-50 rounded-full shadow-lg h-12 w-12"
        size="icon"
      >
        <Play className="h-5 w-5" />
      </Button>
    )
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="fixed bottom-20 md:bottom-6 right-4 md:right-6 z-50 w-72 sm:w-80 rounded-lg shadow-2xl overflow-hidden bg-black text-white border border-white/10"
      >
        <div className="relative aspect-video bg-zinc-900 group">
          {/* Mock Video Placeholder */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-zinc-500 font-medium text-sm">PiP Player: JS Basics</span>
          </div>
          
          {/* Controls Overlay */}
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-3 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity">
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/20 h-8 w-8" onClick={() => setIsPlaying(!isPlaying)}>
              {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
            </Button>
            <div className="flex-1 px-3">
              <div className="h-1 bg-white/30 rounded-full cursor-pointer">
                <div className="h-1 bg-primary w-1/3 rounded-full relative">
                  <div className="absolute -right-1.5 -top-1 w-3 h-3 bg-white rounded-full shadow" />
                </div>
              </div>
            </div>
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/20 h-8 w-8">
              <Maximize2 className="h-4 w-4" />
            </Button>
          </div>
          
          {/* Top Controls */}
          <div className="absolute top-2 right-2">
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-white bg-black/40 hover:bg-black/80 h-6 w-6 rounded-full"
              onClick={() => setIsOpen(false)}
            >
              <X className="h-3 w-3" />
            </Button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
