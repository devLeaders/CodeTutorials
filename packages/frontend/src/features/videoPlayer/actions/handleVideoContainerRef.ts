import { refsStore } from "../refs.store";
interface IVideoContainerRef {
    current: HTMLDivElement | null
}

export const handleVideoContainerRef = (videoContainerRef:IVideoContainerRef, small?:string) => {
    if (videoContainerRef.current !== null) {
        small
          ? (refsStore.ContainerRefs[0] = videoContainerRef.current)
          : (refsStore.ContainerRefs[1] = videoContainerRef.current);
      }
}