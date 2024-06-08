import { Dispatch, SetStateAction } from "react"

// import { Id } from "@/convex/_generated/dataModel";

export type EmptyStateProps = {
   title: string
   search?: boolean
   buttonText?: string
   buttonLink?: string
}

export type TopPodcastersProps = {}

export type CarouselProps = {
   fansLikeDetail: TopPodcastersProps[]
}

export type PodcastProps = {}

export type ProfilePodcastProps = {}

export type ProfileCardProps = {
   podcastData: ProfilePodcastProps
   imageUrl: string
   userFirstName: string
}

export type GeneratePodcastsProps = {}

export type GenerateThumbnailProps = {}

export type LatestPodcastCardProps = {}

export type PodcastDetailPlayerProps = {}

export type AudioProps = {
   title: string
   audioUrl: string
   author: string
   imageUrl: string
   podcastId: string
}

export type AudioContextType = {
   audio: AudioProps | undefined
   setAudio: React.Dispatch<React.SetStateAction<AudioProps | undefined>>
}

export type PodcastCardProps = {}

export type UseDotButtonType = {
   selectedIndex: number
   scrollSnaps: number[]
   onDotButtonClick: (index: number) => void
}
