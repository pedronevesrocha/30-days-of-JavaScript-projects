let items = document.querySelectorAll('.items')
      let mains = document.querySelector('.mains')
      function main(x) {
        console.log(x)
      }
      items[0].addEventListener('click', () => {
        mains.setAttribute(
          'style',
          ' background-image: linear-gradient(-150deg,#515bd4, #8134af,#dd2a7b,#f58529, #feda77);',
        )
        main((a = 0))
      })
      items[1].addEventListener('click', () => {
        mains.setAttribute(
          'style',
          'background-color:#29487d; background-image:none;',
        )
        main((b = 1))
        console.log(container)
      })
      items[2].addEventListener('click', () => {
        mains.setAttribute(
          'style',
          'background-color:#08a0e9; background-image:none;',
        )
        main((c = 2))
        console.log(container)
      })
      items[3].addEventListener('click', () => {
        mains.setAttribute(
          'style',
          'background-color:black; background-image:none;',
        )
        main((d = 3))
        console.log(container)
      })