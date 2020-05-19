import { ButtonTypes } from "../enums";

export const checkButtonType = (type: string, videoState: boolean) => {
    if (type === ButtonTypes.PLAY) {
        return videoState
    } else {
        return !videoState
    }
}