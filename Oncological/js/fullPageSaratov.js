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
      timePoints = [4, 9, 13, 17, 21, 25, 30, 34, 38, 42, 46, 50, 54, 58]
    timePointsReverse = [56, 53, 48, 44, 40, 36, 31, 27, 23, 19, 15, 11, 9, 4]
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
        // if (index == 1 && nextIndex == 2) {
        //   $('.two .content__inner').addClass('animate__animated animate__fadeInLeft').css({
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
        //   $('.three .content__inner--right')
        //     .addClass('animate__animated animate__fadeInRight')
        //     .css({
        //       animationDelay: '2s',
        //     })
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
        //   $('.four .content__inner').addClass('animate__animated animate__fadeInLeft').css({
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
        //   $('.seven .content__inner--right')
        //     .addClass('animate__animated animate__fadeInRight')
        //     .css({
        //       animationDelay: '2s',
        //     })
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
        // // eight animation
        // else if (
        //   (index == 1 ||
        //     index == 2 ||
        //     index == 3 ||
        //     index == 4 ||
        //     index == 5 ||
        //     index == 6 ||
        //     index == 7) &&
        //   nextIndex == 8
        // ) {
        //   $('.eight .content__inner--right')
        //     .addClass('animate__animated animate__fadeInRight')
        //     .css({
        //       animationDelay: '2s',
        //     })
        //   $('.eight .content__title').eq(0).addClass('animate__animated animate__fadeIn').css({
        //     animationDelay: '3.0s',
        //   })
        //   $('.eight .content__text').eq(0).addClass('animate__animated animate__fadeIn').css({
        //     animationDelay: '3.3s',
        //   })
        //   $('.eight .link').eq(0).addClass('animate__animated animate__fadeIn').css({
        //     animationDelay: '3.6s',
        //   })
        // }
        // // nin animation
        // else if (
        //   (index == 1 ||
        //     index == 2 ||
        //     index == 3 ||
        //     index == 4 ||
        //     index == 5 ||
        //     index == 6 ||
        //     index == 7 ||
        //     index == 8) &&
        //   nextIndex == 9
        // ) {
        //   $('.nine .content__inner--right').addClass('animate__animated animate__fadeInRight').css({
        //     animationDelay: '2s',
        //   })
        //   $('.nine .content__title').eq(0).addClass('animate__animated animate__fadeIn').css({
        //     animationDelay: '3.0s',
        //   })
        //   $('.nine .content__text').eq(0).addClass('animate__animated animate__fadeIn').css({
        //     animationDelay: '3.3s',
        //   })
        //   $('.nine .link').eq(0).addClass('animate__animated animate__fadeIn').css({
        //     animationDelay: '3.6s',
        //   })
        // }
        // // ten animation
        // else if (
        //   (index == 1 ||
        //     index == 2 ||
        //     index == 3 ||
        //     index == 4 ||
        //     index == 5 ||
        //     index == 6 ||
        //     index == 7 ||
        //     index == 8 ||
        //     index == 9) &&
        //   nextIndex == 10
        // ) {
        //   $('.ten .content__inner').addClass('animate__animated animate__fadeInLeft').css({
        //     animationDelay: '2s',
        //   })
        //   $('.ten .content__title').eq(0).addClass('animate__animated animate__fadeIn').css({
        //     animationDelay: '3.0s',
        //   })
        //   $('.ten .content__text').eq(0).addClass('animate__animated animate__fadeIn').css({
        //     animationDelay: '3.3s',
        //   })
        //   $('.ten .link').eq(0).addClass('animate__animated animate__fadeIn').css({
        //     animationDelay: '3.6s',
        //   })
        // }
        // // eleven animation
        // else if (
        //   (index == 1 ||
        //     index == 2 ||
        //     index == 3 ||
        //     index == 4 ||
        //     index == 5 ||
        //     index == 6 ||
        //     index == 7 ||
        //     index == 8 ||
        //     index == 9 ||
        //     index == 10) &&
        //   nextIndex == 11
        // ) {
        //   $('.eleven .content__inner').addClass('animate__animated animate__fadeInLeft').css({
        //     animationDelay: '2s',
        //   })
        //   $('.eleven .content__title').eq(0).addClass('animate__animated animate__fadeIn').css({
        //     animationDelay: '3.0s',
        //   })
        //   $('.eleven .content__text').eq(0).addClass('animate__animated animate__fadeIn').css({
        //     animationDelay: '3.3s',
        //   })
        //   $('.eleven .link').eq(0).addClass('animate__animated animate__fadeIn').css({
        //     animationDelay: '3.6s',
        //   })
        // }
        // // twelve animation
        // else if (
        //   (index == 1 ||
        //     index == 2 ||
        //     index == 3 ||
        //     index == 4 ||
        //     index == 5 ||
        //     index == 6 ||
        //     index == 7 ||
        //     index == 8 ||
        //     index == 9 ||
        //     index == 10 ||
        //     index == 11) &&
        //   nextIndex == 12
        // ) {
        //   $('.twelve .content__inner').addClass('animate__animated animate__fadeInRight').css({
        //     animationDelay: '2s',
        //   })
        //   $('.twelve .content__title').eq(0).addClass('animate__animated animate__fadeIn').css({
        //     animationDelay: '3.0s',
        //   })
        //   $('.twelve .content__text').eq(0).addClass('animate__animated animate__fadeIn').css({
        //     animationDelay: '3.3s',
        //   })
        //   $('.twelve .link').eq(0).addClass('animate__animated animate__fadeIn').css({
        //     animationDelay: '3.6s',
        //   })
        // }
        // // thirteen animation
        // else if (
        //   (index == 1 ||
        //     index == 2 ||
        //     index == 3 ||
        //     index == 4 ||
        //     index == 5 ||
        //     index == 6 ||
        //     index == 7 ||
        //     index == 8 ||
        //     index == 9 ||
        //     index == 10 ||
        //     index == 11 ||
        //     index == 12) &&
        //   nextIndex == 13
        // ) {
        //   $('.thirteen .content__inner').addClass('animate__animated animate__fadeInLeft').css({
        //     animationDelay: '2s',
        //   })
        //   $('.thirteen .content__title').eq(0).addClass('animate__animated animate__fadeIn').css({
        //     animationDelay: '3.0s',
        //   })
        //   $('.thirteen .content__text').eq(0).addClass('animate__animated animate__fadeIn').css({
        //     animationDelay: '3.3s',
        //   })
        //   $('.thirteen .link').eq(0).addClass('animate__animated animate__fadeIn').css({
        //     animationDelay: '3.6s',
        //   })
        // }
        // // fourteen animation
        // else if (
        //   (index == 1 ||
        //     index == 2 ||
        //     index == 3 ||
        //     index == 4 ||
        //     index == 5 ||
        //     index == 6 ||
        //     index == 7 ||
        //     index == 8 ||
        //     index == 9 ||
        //     index == 10 ||
        //     index == 11 ||
        //     index == 12 ||
        //     index == 13) &&
        //   nextIndex == 14
        // ) {
        //   $('.fourteen .content__inner').addClass('animate__animated animate__fadeInLeft').css({
        //     animationDelay: '2s',
        //   })
        //   $('.fourteen .content__title').eq(0).addClass('animate__animated animate__fadeIn').css({
        //     animationDelay: '3.0s',
        //   })
        //   $('.fourteen .content__text').eq(0).addClass('animate__animated animate__fadeIn').css({
        //     animationDelay: '3.3s',
        //   })
        //   $('.fourteen .link').eq(0).addClass('animate__animated animate__fadeIn').css({
        //     animationDelay: '3.6s',
        //   })
        // }
      },
    })
  }
})
