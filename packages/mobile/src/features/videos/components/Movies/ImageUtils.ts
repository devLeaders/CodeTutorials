import Global from "../../../../features/common/models/Global";

export class ImageUtil {
    static getImageFromServer(imageName){
     return Global.env.API_URL + '/files/' + 's1920-' + imageName
    }

}