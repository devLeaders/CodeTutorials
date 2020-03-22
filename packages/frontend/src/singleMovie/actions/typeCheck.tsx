import { ButtonTypes } from "../enums";

export const typeCheck = (type: string, videoState: boolean) => {
    if (type === ButtonTypes.PLAY) {
        return videoState
    } else {
        return !videoState
    }
}