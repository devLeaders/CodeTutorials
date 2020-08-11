import { Injectable } from '@nestjs/common';
import * as fs from 'fs';

@Injectable()
export class VideoStreamService {
  getVideo(res: any, req: any) {
    const path = 'uploads/video/p720-angular-cli-dla-programistow-java-angular-w-45-min.mp4';
    const stat = fs.statSync(path);
    const range = req.headers.range;
    const fileSize = stat.size;
    console.log(range);
    try {
      if (range) {
        const parts = range.replace(/bytes=/, '').split('-');
        console.log(parts);
        const start = parseInt(parts[0], 10);
        const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;
        const chunksize = end - start + 1;
        const VideoReadStream = fs.createReadStream(path, { start, end });
        const head = {
          'Content-Range': `bytes ${start}-${end}/${fileSize}`,
          'Accept-Ranges': 'bytes',
          'Content-Length': chunksize,
          'Content-Type': 'video/mp4',
        };
        res.writeHead(206, head);
        VideoReadStream.pipe(res);
      } else {
        const head = {
          'Content-length': fileSize,
          'Content-Type': 'video/mp4',
        };
        res.writeHead(200, head);
        fs.createReadStream(path).pipe(res);
      }
    } catch (err) {
      return err;
    }
  }
}
