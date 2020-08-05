import { NotificationDto } from './notification.dto';
import { Injectable} from '@nestjs/common';
import admin from "firebase-admin"

@Injectable()
export class NotificationsService {
    async notify(res, req){
        const notification_config = {
            priority: "high",
            timeToLive: 60 * 60 * 24
        }

        const registrationToken = req.body.registrationToken
        const message = req.body.message
        
        console.log(registrationToken, message)
        try{
            const res = await admin.messaging().sendToDevice(registrationToken, message, notification_config)
            return res
            console.log(res)
        }catch(err){
            console.log(err)
        }
        

    }
}
