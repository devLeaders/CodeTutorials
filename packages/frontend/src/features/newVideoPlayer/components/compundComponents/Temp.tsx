import * as React from 'react';

export const VideoWrapper = React.forwardRef((props: any, ref: any) => {
    const videoRef = React.useRef<any>(null);
    React.useImperativeHandle(ref, () => ({
      play: () => {
        videoRef.current.play();
      }
    }));
    return (
      <div>
        <video
          ref={(ref) => {
            videoRef.current = ref;
          }}
          width="400"
          height="300"
          controls
        >
          <source
            src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    );
  });
  export const MyPlayer = () => {
    const ref = React.useRef<any>();
    return (
      <div>
        <VideoWrapper ref={ref} />
        <button
          onClick={() => {
            ref.current.play();
            console.log(ref);
          }}
        >
          Play
        </button>
      </div>
    );
  };