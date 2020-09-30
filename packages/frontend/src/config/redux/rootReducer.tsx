import { combineReducers } from "redux";
import { filtersReducer } from "../../features/filters/reducer/filtersReducer";

import { movieReducer } from "./videoPlayer/reducer";
import { videoTabsReducer } from "./videoTabs/videoTabsReducer";
import { popUpsReducer } from "./popups/popupsReducer";
import { newMovieReducer } from "./newVideoPlayer/reducer";

const rootReducer = combineReducers({
  movie: movieReducer,
  videoTabs: videoTabsReducer,
  newMovie: newMovieReducer,
  popUps: popUpsReducer,
  filters: filtersReducer,
});

export default rootReducer;
