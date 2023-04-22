const React = require("react-native");
import { Platform, Dimensions, PixelRatio } from "react-native";

const SCREEN_HEIGHT = Dimensions.get("window").height;
const SCREEN_WIDTH = Dimensions.get("window").width;
const platform = Platform.OS;

const overlayColor = "rgba(0,0,0,0.5)"; // this gives us a black color with a 50% transparency

const rectDimensions = SCREEN_WIDTH * 0.75; // this is equivalent to 255 from a 393 device width

const rectBorderWidth = SCREEN_WIDTH * 0.005; // this is equivalent to 2 from a 393 device width
const rectBorderColor = "transparent";

const scanBarWidth = SCREEN_WIDTH * 0.46; // this is equivalent to 180 from a 393 device width
const scanBarHeight = SCREEN_HEIGHT * 0.0025; //this is equivalent to 1 from a 393 device width

const scanBarWidthT = SCREEN_WIDTH * 0.36; // this is equivalent to 180 from a 393 device width
const scanBarHeightT = SCREEN_HEIGHT * 0.0050; //this is equivalent to 1 from a 393 device width

const scanBarColor = "#22ff00";

export default {
  layoutContent: {
    flex: 1,
  },
  slider: {
    flex: 1,
    paddingBottom: 10,
  },
  rectangleContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent"
  },

  rectangle: {
    height: rectDimensions,
    width: rectDimensions,
    borderWidth: rectBorderWidth,
    borderColor: rectBorderColor,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  topOverlay: {
    width: SCREEN_WIDTH,
    ...Platform.select({
      ios: {
        marginTop: 0.5 * SCREEN_HEIGHT,
      },
      android: {
        marginTop: 10,
      },
    }),
    marginLeft: 10,
    alignItems: 'center'
  },
  topOverlay2: {
    flex: 1,
    height: SCREEN_WIDTH,
    width: SCREEN_WIDTH,
    justifyContent: "center",
    alignItems: "center"
  },

  bottomOverlay: {
    flex: 1,
    height: SCREEN_WIDTH,
    width: SCREEN_WIDTH,
    paddingBottom: SCREEN_WIDTH * 0.25
  },

  bottomOverlayTop: {
    flex: 0.3,
    flexDirection: 'row',
    height: SCREEN_WIDTH,
    width: SCREEN_WIDTH,
    marginLeft: 5,
    justifyContent: 'space-between',
  },

  leftAndRightOverlay: {
    height: SCREEN_WIDTH * 0.80,
    width: SCREEN_WIDTH,
  },

  scanBar: {
    width: scanBarWidth,
    height: scanBarHeight,
    backgroundColor: scanBarColor
  },
  scanBarT: {
    width: scanBarWidthT,
    height: scanBarHeightT,
    backgroundColor: scanBarColor
  },
  flipIcon: {
    flex: 0.3,
    height: 40,
    marginBottom: 3,
    marginTop: 20,
    alignItems: 'flex-start',

  }
}