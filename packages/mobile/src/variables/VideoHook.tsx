import React, { useState, useCallback } from 'react';
import * as AuthConnectors from '@project/common/features/videos/connector'
import { IVideosRespons } from '@project/common/features/videos/models';
import { useFocusEffect } from '@react-navigation/native';

export const useVideo = (id) =>{

    const [ video, setVideo] = useState<IVideosRespons>()
    const getVideo = useFocusEffect(
        React.useCallback(() => {
          let isCancelled = false;
          (async ()=>{
            try{
              const req = await AuthConnectors.getVideo(id);
              if(!isCancelled){
                setVideo(req.data)
              }
            } catch (err) {
                return err
            }
          })();
          return () => {
            isCancelled = true;
          }
        }, [id])
    );
    return {
        getVideo,
        video
    };
}