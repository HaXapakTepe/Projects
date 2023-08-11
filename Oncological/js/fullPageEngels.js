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
      timePoints = [4, 9, 13, 17, 21, 25, 29],
      timePointsReverse = [27, 23, 18, 15, 11, 6, 2]
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
    $('.one .link').eq(0).addClass('animate__animated animate__fadeIn').css({
      animationDelay: '3.6s',
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
        // if (index == 1 && nextIndex == 2) {
        //   $('.two .content__inner--right').addClass('animate__animated animate__fadeInRight').css({
        //     animationDelay: '2s',
        //   })
        //   $('.two .content__title').eq(0).addClass('animate__animated animate__fadeIn').css({
        //     animationDelay: '3.0s',
        //   })
        //   $('.two .content__text').eq(0).addClass('animate__animated animate__fadeIn').css({
        //     animationDelay: '3.3s',
        //   })
        //   $('.two .link').eq(0).addClass('animate__animated animate__fadeIn').css({
        //     animationDelay: '3.6s',
        //   })
        // }

        // // third animation
        // else if ((index == 1 || index == 2) && nextIndex == 3) {
        //   $('.three .content__inner').addClass('animate__animated animate__fadeInLeft').css({
        //     animationDelay: '2s',
        //   })
        //   $('.three .content__title').eq(0).addClass('animate__animated animate__fadeIn').css({
        //     animationDelay: '3.0s',
        //   })
        //   $('.three .content__text').eq(0).addClass('animate__animated animate__fadeIn').css({
        //     animationDelay: '3.3s',
        //   })
        //   $('.three .link').eq(0).addClass('animate__animated animate__fadeIn').css({
        //     animationDelay: '3.6s',
        //   })
        // }
        // // four animation
        // else if ((index == 1 || index == 2 || index == 3) && nextIndex == 4) {
        //   $('.four .content__inner--right').addClass('animate__animated animate__fadeInRight').css({
        //     animationDelay: '2s',
        //   })
        //   $('.four .content__title').eq(0).addClass('animate__animated animate__fadeIn').css({
        //     animationDelay: '3.0s',
        //   })
        //   $('.four .content__text').eq(0).addClass('animate__animated animate__fadeIn').css({
        //     animationDelay: '3.3s',
        //   })
        //   $('.four .link').eq(0).addClass('animate__animated animate__fadeIn').css({
        //     animationDelay: '3.6s',
        //   })
        // }
        // // five animation
        // else if ((index == 1 || index == 2 || index == 3 || index == 4) && nextIndex == 5) {
        //   $('.five .content__inner').addClass('animate__animated animate__fadeInRight').css({
        //     animationDelay: '2s',
        //   })
        //   $('.five .content__title').eq(0).addClass('animate__animated animate__fadeIn').css({
        //     animationDelay: '3.0s',
        //   })
        //   $('.five .content__text').eq(0).addClass('animate__animated animate__fadeIn').css({
        //     animationDelay: '3.3s',
        //   })
        //   $('.five .link').eq(0).addClass('animate__animated animate__fadeIn').css({
        //     animationDelay: '3.6s',
        //   })
        // }
        // // six animation
        // else if (
        //   (index == 1 || index == 2 || index == 3 || index == 4 || index == 5) &&
        //   nextIndex == 6
        // ) {
        //   $('.six .content__inner').addClass('animate__animated animate__fadeInLeft').css({
        //     animationDelay: '2s',
        //   })
        //   $('.six .content__title').eq(0).addClass('animate__animated animate__fadeIn').css({
        //     animationDelay: '3.0s',
        //   })
        //   $('.six .content__text').eq(0).addClass('animate__animated animate__fadeIn').css({
        //     animationDelay: '3.3s',
        //   })
        //   $('.six .link').eq(0).addClass('animate__animated animate__fadeIn').css({
        //     animationDelay: '3.6s',
        //   })
        // }
        // // seven animation
        // else if (
        //   (index == 1 || index == 2 || index == 3 || index == 4 || index == 5 || index == 6) &&
        //   nextIndex == 7
        // ) {
        //   $('.seven .content__inner').addClass('animate__animated animate__fadeInLeft').css({
        //     animationDelay: '2s',
        //   })
        //   $('.seven .content__title').eq(0).addClass('animate__animated animate__fadeIn').css({
        //     animationDelay: '3.0s',
        //   })
        //   $('.seven .content__text').eq(0).addClass('animate__animated animate__fadeIn').css({
        //     animationDelay: '3.3s',
        //   })
        //   $('.seven .link').eq(0).addClass('animate__animated animate__fadeIn').css({
        //     animationDelay: '3.6s',
        //   })
        // }
      },
    })
  }
})
