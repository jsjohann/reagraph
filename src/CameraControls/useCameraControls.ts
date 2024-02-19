import CameraControls from 'camera-controls';
import { createContext, useContext } from 'react';

export interface CameraControlsContextProps {
  /**
   * The camera controls object.
   */
  controls: CameraControls | null;

  /**
   * A function that resets the camera controls.
   * If the optional `animated` argument is true, the reset is animated.
   */
  resetControls: (animated?: boolean) => void;

  /**
   * A function that zooms in the camera.
   */
  zoomIn: () => void;

  /**
   * A function that zooms out the camera.
   */
  zoomOut: () => void;

  /**
   * A function that pans the camera to the left.
   */
  panLeft: () => void;

  /**
   * A function that pans the camera to the right.
   */
  panRight: () => void;

  /**
   * A function that pans the camera upwards.
   */
  panUp: () => void;

  /**
   * A function that pans the camera downwards.
   */
  panDown: () => void;
}

export const CameraControlsContext = createContext<CameraControlsContextProps>({
  controls: null,
  resetControls: () => undefined,
  zoomIn: () => undefined,
  zoomOut: () => undefined,
  panLeft: () => undefined,
  panRight: () => undefined,
  panUp: () => undefined,
  panDown: () => undefined
});

export const useCameraControls = () => {
  const context = useContext(CameraControlsContext);

  if (context === undefined) {
    throw new Error(
      '`useCameraControls` hook must be used within a `ControlsProvider` component'
    );
  }

  return context;
};
