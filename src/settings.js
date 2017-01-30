export default {
  xvg: {
    xvgCpSize: '0.75%',
    xvgCpStroke: '#ff41b4',
    xvgCpFill: '#fff',
    xvgOutlineSize: '1%',
    xvgOutlineColour: '#5e2ca5',
    xvgHandleSize: '0.5%',
    xvgHandleColour: '#ff41b4',
    xvgArcGuideSize: '0.25%',
    xvgArcGuideColour: '#96CCFF',
    xvgZoom: true,
  },

  set: function setXvgSetting(newSettings) {
    this.xvg = newSettings;
  },
};
