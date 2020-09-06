import { refsStore } from "../refs.store";
interface IVideoRef {
     current: HTMLVideoElement | null
}

export const handleVideoRef = (videoRef:IVideoRef, small?:string) => {
    if (videoRef.current !== null) {
        small ? (refsStore.VideoRefs[0] = videoRef.current) : (refsStore.VideoRefs[1] = videoRef.current);
      }
}