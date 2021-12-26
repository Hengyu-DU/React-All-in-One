function adapter(){
  const dip = document.documentElement.clientWidth
  const rootFontSize = dip / 375 * 100
  document.documentElement.style.fontSize = rootFontSize + 'px'
  }
  adapter()

  window.onresize = adapter 