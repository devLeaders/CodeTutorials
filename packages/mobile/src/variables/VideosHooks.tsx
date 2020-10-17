import React, { useState, useCallback } from 'react';
import * as AuthConnectors from '@project/common/features/videos/connector'
import { IVideosRespons } from '@project/common/features/videos/models';


export const useVideos = () =>{
    const [videos, setVideos] = useState<Array<IVideosRespons>>([])
    const getVideos = useCallback(async() => {
      let isCancelled = false;
      (async ()=>{
        try{
          const response = await AuthConnectors.getVideos();
          if(!isCancelled){
            setVideos(response.data)
          }
        } catch (err) {
            return err
        }
      })();
      return () => {
        isCancelled = true;
      }
    },[]);
    return {
        getVideos,
        videos
    };
}