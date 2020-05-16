const calcEndWidth = ( elementWidth:number, numOfFullMoves:number, additionalVideosNum: number, move: number, margin: number) => {
    const endWidth =   additionalVideosNum !== 0 ? 
    numOfFullMoves * move -(move -  (additionalVideosNum * elementWidth + margin))
    : numOfFullMoves * move;
    return -endWidth
}

const calcLastMove = (videosNum: number, videoWidth:number, margin: number) => {
    return videosNum * (videoWidth + margin) 
}


const calcElementsOnScreen = (elementWidth: number, wrapperWidth: number) => {
    const minMargin = 15;
    return Math.floor(wrapperWidth/ (elementWidth + (minMargin * 2)));
}

export const calcMargins = (elementWidth: number, wrapperWidth: number) => {
        const minMargin = 15;
        const elementsOnScreen = calcElementsOnScreen(elementWidth, wrapperWidth)
        const freeSpace = wrapperWidth- (elementWidth * elementsOnScreen)
        return (freeSpace) / (elementsOnScreen + 1)
}


export const handleCalculations = (elementWidth: number, wrapperWidth: number, numOfElements: number, margin: number) => {
    const elementsOnScreen = calcElementsOnScreen( elementWidth, wrapperWidth)
    const additionalVideosNum = numOfElements % elementsOnScreen
    const move = wrapperWidth - margin
    const numOfFullMoves = Math.ceil((numOfElements / elementsOnScreen) - 1)

    const lastMove = calcLastMove(additionalVideosNum, elementWidth, margin)
    const end = calcEndWidth(elementWidth, numOfFullMoves, additionalVideosNum, move, margin)

    return{
        lastMove,
        end,
        move,
        additionalVideosNum
    }
}