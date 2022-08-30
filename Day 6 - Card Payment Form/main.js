let array = []
      let inputt = document.querySelector('.cardno')
      let output = document.querySelector('.card-number')
      inputt.addEventListener('input', () => {
        let card = document.querySelector('.card')
        card.setAttribute(
          'style',
          'transform: translateY(-190px) rotateY(0deg);',
        )

        for (var i = 0; i <= 16; i++) {
          array[i] = inputt.value[i]

          a1 = array.slice(0, 4)
          aw1 = a1.join(' ')
          a1mini = array.slice(0, 2)
          aw1mini = a1mini.join(' ')
          a2 = array.slice(4, 8)
          aw2 = a2.join(' ')
          a3 = array.slice(8, 12)
          aw3 = a3.join(' ')
          a4 = array.slice(12, 16)
          aw4 = a4.join(' ')
        }
        output.innerHTML = `${aw1} &nbsp; ${aw2} &nbsp;${aw3} &nbsp; ${aw4}`

        type(a1)
      })

      
      function type(a) {
        let type = document.querySelector('.card-type')
        let visa = document.querySelector('.visa')
        let master = document.querySelector('.master')
        aa = a.join('')
        console.log(`a is ${aa}`)
        if (aa[0] == 4) {
          master.setAttribute('style', 'display:none')
        } else if ((aa >= 2221 && aa <= 2720) || (aa >= 51 && aa <= 55)) {
          visa.setAttribute('style', 'display:none')
        }
      }

      let month = document.querySelector('.month')
      let cardmonth = document.querySelector('.cardmonth')
      cardmonth.addEventListener('input', () => {
        let card = document.querySelector('.card')
        card.setAttribute(
          'style',
          'transform: translateY(-190px) rotateY(0deg);',
        )
        month.innerHTML = cardmonth.value
      })
      
      let year = []
      let years = document.querySelector('.year')
      let cardyear = document.querySelector('.cardyear')
      cardyear.addEventListener('input', () => {
        let card = document.querySelector('.card')
        card.setAttribute(
          'style',
          'transform: translateY(-190px) rotateY(0deg);',
        )
        for (var i = 0; i <= 4; i++) {
          year[i] = cardyear.value[i]

          y1 = year.slice(2, 4)
          yw1 = y1.join(' ')
        }
        years.innerHTML = yw1
      })
      
      let cardhodername = document.querySelector('.cardhoder-name')
      let cardno = document.querySelector('.cardholdername')
      cardno.addEventListener('input', () => {
        let card = document.querySelector('.card')
        card.setAttribute(
          'style',
          'transform: translateY(-190px) rotateY(0deg);',
        )
        cardhodername.innerHTML = cardno.value
      })

      
      let cvc = document.querySelector('.cvc')
      let cardcvc = document.querySelector('.card-cvc')
      let card = document.querySelector('.card')
      cardcvc.addEventListener('input', () => {
        card.setAttribute(
          'style',
          'transform: translateY(-190px) rotateY(180deg);',
        )
        cvc.innerHTML = cardcvc.value
      })