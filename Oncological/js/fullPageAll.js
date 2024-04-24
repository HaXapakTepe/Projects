$(document).ready(function () {
  function toggleScroll() {
    document.querySelector('body').onwheel = (e) => e.stopPropagation()
    setTimeout(() => {
      document.querySelector('body').onwheel = null
    }, 5000)
  }
  toggleScroll()

  if (window.innerWidth > 1200) {
    const video = document.getElementById('video'),
      reverse = document.getElementById('reverse'),
      timePoints = [4]
    timePointsReverse = [0]
    let currentSlideIndex = 0

    setTimeout(() => {
      video.pause()
    }, 4000)

    reverse.addEventListener('timeupdate', function () {
      const currentRounded = Math.round(reverse.currentTime)

      let stopTrigger = timePointsReverse[currentSlideIndex]
      if (currentSlideIndex == timePointsReverse.length - 1) {
        stopTrigger = timePointsReverse[timePoints.length - 1]
      }
      if (currentRounded == stopTrigger) {
        reverse.pause()
      }
    })

    video.addEventListener('timeupdate', function () {
      const currentRounded = Math.round(video.currentTime)
      let stopTrigger = timePoints[currentSlideIndex]
      if (currentSlideIndex == timePoints.length - 1) {
        stopTrigger = timePoints[timePoints.length - 1]
      } else {
        stopTrigger = timePoints[currentSlideIndex + 1]
      }
      if (currentRounded == stopTrigger) {
        video.pause()
      }
    })
    $('.one .content__inner').addClass('animate__animated animate__fadeInLeft').css({
      animationDelay: '2s',
    })
    $('.one .content__title').eq(0).addClass('animate__animated animate__fadeIn').css({
      animationDelay: '3.0s',
    })
    $('.one .content__text').eq(0).addClass('animate__animated animate__fadeIn').css({
      animationDelay: '3.3s',
    })
    $('.one .content__text--last').eq(0).addClass('animate__animated animate__fadeIn').css({
      animationDelay: '3.6s',
    })
    $('.one .content__box').eq(0).addClass('animate__animated animate__fadeIn').css({
      animationDelay: '3.9s',
    })

    $('#fullpage').fullpage({
      navigation: false,
      scrollingSpeed: 4000,
      onLeave: function (index, nextIndex, direction) {
        if (direction == 'up') {
          currentSlideIndex = nextIndex - 1
          video.classList.add('video--reverse')
          reverse.classList.remove('video--reverse')
          setTimeout(function () {
            reverse.currentTime = timePointsReverse[currentSlideIndex + 1]
            video.currentTime = timePoints[currentSlideIndex]
            reverse.play()
          }, 10)
        }
        if (direction == 'down') {
          currentSlideIndex = index - 1
          video.classList.remove('video--reverse')
          reverse.classList.add('video--reverse')
          toggleScroll()
          setTimeout(function () {
            video.currentTime = timePoints[currentSlideIndex]
            reverse.currentTime = timePointsReverse[currentSlideIndex + 1]
            video.play()
          }, 10)
        }
      },
    })
  }
})
