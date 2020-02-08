import { VideosService } from './videos.service';
export declare class VideosController {
    private videosService;
    constructor(videosService: VideosService);
    showAllVideos(): Promise<any>;
}
