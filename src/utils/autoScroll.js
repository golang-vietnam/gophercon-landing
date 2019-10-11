const autoScroll = () => {
  var tickerLength = $('.container ul li').length
  var tickerHeight = $('.container ul li').outerHeight()
  $('.container ul li:last-child').prependTo('.container ul')
  $('.container ul').css('marginTop', -tickerHeight)
  function moveTop() {
    $('.container ul').animate(
      {
        top: -tickerHeight,
      },
      600,
      function() {
        $('.container ul li:first-child').appendTo('.container ul')
        $('.container ul').css('top', '')
      }
    )
  }
  setInterval(function() {
    moveTop()
  }, 3000)
}
export default autoScroll
