const React = require("react-native");
const { Platform, Dimensions, StatusBar } = React;
const { width: viewportWidth, height: viewportHeight } = Dimensions.get("window");
const aspectRatio = viewportHeight / viewportWidth;
import { COLOR, FAMILY, SIZE } from '../../theme/typography'

export default {
  container: {
    flex: 1,
  },
  buttonTakecamera: {
    flex: 0.3,
    marginHorizontal: 2,
    marginBottom: 5,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnImg: {
    marginBottom: 0,
  },
  autoFocusBox: {
    position: 'absolute',
    height: 64,
    width: 64,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: 'white',
    opacity: 0.4,
  },
  flipButton: {
    flex: 0.3,
    height: 40,
    marginHorizontal: 2,
    marginBottom: 20,
    marginTop: 20,
    borderRadius: 8,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },

  flipIcon: {
    flex: 0.3,
    height: 40,
    marginBottom: 3,
    alignItems: 'flex-start',
    marginLeft: 15,
  },
  flipIconCenter: {
    flex: 0.3,
    height: 40,
    marginBottom: 3,
    alignItems: 'center',
  },
  flipText: {
    color: 'white',
  },
  zoomText: {
    position: 'absolute',
    bottom: 70,
    zIndex: 2,
    left: 2,
  },
  picButton: {
    backgroundColor: 'darkseagreen',
  },
  modalContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#FFFFFF',
    borderRadius: 5
  },
  btnClenJob: {
    backgroundColor: '#dc3545',
    borderRadius: 10,
    width: 100,
    alignItems: 'center',
    marginRight: 4,
  },
  btnConfirm: {
    backgroundColor: '#3e8ef7',
    borderRadius: 10,
    width: 170,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  btnText: {
    color: '#FFFFFF',
    fontFamily: FAMILY.bold,
  },
  textAreaDetail: {
    fontFamily: FAMILY.regular,
    fontSize: 24,
    color: COLOR.dark,
    height: 120,
    borderWidth: 0,
    borderRadius: 0,
    width: '100%',
    borderColor: '#DDD',
    color: '#333',
    paddingTop: 5,
    paddingHorizontal: 10,
    paddingBottom: 0
  },
}
