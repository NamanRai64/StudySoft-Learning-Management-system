// @ts-nocheck
"use client"

import React, { useState, useEffect } from 'react'
import ReactPlayer from 'react-player'
import { Card } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

interface VideoPlayerProps {
  url: string;
  onEnded?: () => void;
  onProgress?: (state: { played: number, playedSeconds: number, loaded: number, loadedSeconds: number }) => void;
}

export function VideoPlayer({ url, onEnded, onProgress }: VideoPlayerProps) {
  const [mounted, setMounted] = useState(false)

  // Avoid hydration mismatches for ReactPlayer
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <Skeleton className="w-full aspect-video rounded-xl" />
  }

  return (
    <Card className="overflow-hidden bg-black aspect-video relative rounded-xl border-none shadow-xl">
      <ReactPlayer
        url={url}
        width="100%"
        height="100%"
        controls={true}
        playing={false}
        onEnded={onEnded}
        onProgress={onProgress as any}
        config={{
          youtube: {
            playerVars: { 
              showinfo: 1,
              modestbranding: 1,
              rel: 0
            }
          } as any
        }}
        style={{ position: 'absolute', top: 0, left: 0 }}
      />
    </Card>
  )
}
