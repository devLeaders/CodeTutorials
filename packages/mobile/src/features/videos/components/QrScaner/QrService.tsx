import queryString from 'query-string';

export const getYoutubeId = (url:string) =>{
    const checkValue = url.includes('youtube.com')
    if(checkValue){
        const searchQuestionMark = url.lastIndexOf('?')
        const findObj = url.substring(searchQuestionMark,url.length)
        const parsed = queryString.parse(findObj);
        return parsed.v
    } else{
        return null;
    }
}
  
 