import Image from '../components/image/index'
import Dot from '../components/dot/index'
import { useState, useEffect } from 'react'
import { hasSelectionSupport } from '@testing-library/user-event/dist/utils'
import './home.css'

function Home() {
  const [posX, setPosX] = useState(100)
  const [posY, setPosY] = useState(400)
  const [figure, setFigure] = useState('square')
  const [render, setRender] = useState(0)
  const [qtd, setQtd] = useState(500)
  const [corner, setCorner] = useState(0)
  const auxArr = Array(5).fill(0)
  const [pos, setPos] = useState({ x: 350, y: 20 })
  const sleep = ms => new Promise(r => setTimeout(r, ms))

  useEffect(() => {
    for (let i = 0; i < 100; i++) {
      rows.push(i)
      if (render >= qtd || render < 3) {
        break
      }
      setRender(render + 2)
    }
    // console.log(render)
  }, [render])
  let rows = []
  for (let i = 0; i < render; i++) {
    rows.push(i)
  }
  async function childToParentX(data) {
    setPosX(data)
    // await sleep(300)
    // console.log(posX)
  }

  async function childToParentY(data) {
    setPosY(data)
    // await sleep(300)
    // console.log(posY)
  }

  function handleClick(e) {
    e.preventDefault()
    if (render < qtd) {
      setRender(render + 3)
    }
  }
  function handleChange(e) {
    e.preventDefault()
    if (e.target.id == 'qtd') {
      setQtd(e.target.value)
    }
  }

  const handleClear = () => {
    setRender(0)
    setQtd(500)
    setPosX(100)
    setPosY(400)
    setRender(0)
    setQtd(500)
    setPosX(100)
    setPosY(400)
  }

  const handleFigure = () => {
    if (figure == 'triangle') {
      setFigure('square')
    } else {
      setFigure('triangle')
    }
    setRender(0)
    setQtd(500)
    setPosX(100)
    setPosY(400)
  }

  // useEffect(() => {}, [posX, posY])

  return (
    <div className="home">
      <div className="image">
        {/* <Image /> */}
        {figure == 'triangle' ? (
          <Dot
            posY={20}
            posX={350}
            childToParentX={childToParentX}
            childToParentY={childToParentY}
            key="1"
          />
        ) : (
          <Dot
            posY={20}
            posX={600}
            childToParentX={childToParentX}
            childToParentY={childToParentY}
            key="1"
          />
        )}

        <Dot
          posY={400}
          posX={600}
          childToParentX={childToParentX}
          childToParentY={childToParentY}
          key="2"
        />
        <Dot
          posY={400}
          posX={100}
          childToParentX={childToParentX}
          childToParentY={childToParentY}
          key="3"
        />
        {figure == 'triangle' ? (
          ''
        ) : (
          <Dot
            posY={20}
            posX={100}
            childToParentX={childToParentX}
            childToParentY={childToParentY}
            key="4"
          />
        )}

        {rows.map((element, index) => {
          let aux = Math.random()

          // console.log(xPos)
          // console.log(yPos)
          // sleep
          return (
            <Dot
              aux={aux}
              posX={posX}
              posY={posY}
              figure={figure}
              childToParentX={childToParentX}
              childToParentY={childToParentY}
              key={element + 15}
            />
          )
        })}
      </div>
      {/* <input type="text"></input>*/}
      Quantidade de pontos <br />
      <input value={qtd} id="qtd" onChange={handleChange}></input>
      <button onClick={handleClick}>Renderizar</button>
      Renderizando:{' '}
      {(render / qtd) * 100 >= 99.99 ? 100 : ((render / qtd) * 100).toFixed(2)}%
      <br />
      <button onClick={handleClear}>Limpar</button>
      <button onClick={handleFigure}>
        {figure == 'triangle' ? 'Mudar para Quadrado' : 'Mudar para Triângulo'}
      </button>
    </div>
  )
}

export default Home
