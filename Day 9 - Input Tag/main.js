var btn = document.querySelector('button')
      var el = document.querySelector('#email')
      var pl = document.querySelector('#pass')
      btn.addEventListener('click', () => {
        if (el.getAttribute('placeholder') && el.value === '') {
          if (pl.getAttribute('placeholder') && pl.value === '') {
            el.classList.add('shackclass')
            pl.classList.add('shackclass')
            setTimeout(() => {
              el.classList.remove('shackclass')
              pl.classList.remove('shackclass')
            }, 400)
          } else {
            el.classList.add('shackclass')
            setTimeout(() => {
              el.classList.remove('shackclass')
            }, 400)
          }
        } else {
          if (el.getAttribute('placeholder') && el.value != '') {
            if (pl.getAttribute('placeholder') && pl.value != '') {
              console.log('both are written')
            } else {
              pl.classList.add('shackclass')
              setTimeout(() => {
                pl.classList.remove('shackclass')
              }, 400)
            }
          }
        }
      })