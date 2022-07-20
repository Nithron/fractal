import './index.css'
import { useState, useEffect, useRef } from 'react'

function Dot(props) {
  const [posX, setPosX] = useState(props.posX)
  const [posY, setPosY] = useState(props.posY)
  const dragItem = useRef()
  const dragOverItem = useRef()

  // useEffect(() => {

  //   handlePosX()
  // }, [posX])
  // useEffect(() => {

  //   handlePosY()
  // }, [posY])

  const handlePosY = figure => {
    // setCorner(Math.random)
    let aPos = 0
    let nPos = 0
    // console.log('veio pro inicio')
    // console.log(aux)
    let fig = {
      triangle: function () {
        if ((props.aux >= 0) & (props.aux < 1 / 3)) {
          aPos = Math.abs(posY - 20) / 2 + (posY > 20 ? 20 : posY)
          nPos = aPos
          // setPosY(nPos)
        }
        if ((props.aux >= 1 / 3) & (props.aux < 2 / 3)) {
          aPos = Math.abs(400 - posY) / 2 + (posY > 400 ? 400 : posY)
          nPos = aPos
          // console.log(posY)
          // setPosY(nPos)
        }
        if (props.aux >= 2 / 3) {
          aPos = Math.abs(400 - posY) / 2 + (posY > 400 ? 400 : posY)
          nPos = aPos
          // setPosY(nPos)
        }
        // console.log('mexeu aqui o npos')
        // setPosY(nPos)
        // console.log(nPos)
        // setPosY(posY=>(nPos))
        props.childToParentY(nPos)
      },

      square: function () {
        if ((props.aux >= 0) & (props.aux < 0.25)) {
          aPos = (Math.abs(posY - 20) * 3) / 6 + (posY > 20 ? 20 : posY)
          nPos = aPos
        }
        if ((props.aux >= 0.25) & (props.aux < 0.5)) {
          aPos = (Math.abs(400 - posY) * 3) / 6 + (posY > 400 ? 400 : posY)
          nPos = aPos
        }
        if ((props.aux >= 0.5) & (props.aux < 0.75)) {
          aPos = (Math.abs(400 - posY) * 3) / 6 + (posY > 400 ? 400 : posY)
          nPos = aPos
        }
        if (props.aux >= 0.75) {
          aPos = (Math.abs(20 - posY) * 3) / 6 + (posY > 20 ? 20 : posY)
          nPos = aPos
        }

        props.childToParentY(nPos)
      }
    }
    const figFunction = fig[figure]
    figFunction()
    return nPos
  }

  const handlePosX = figure => {
    let aPos = 0
    let nPos = 0
    let fig = {
      triangle: function () {
        if ((props.aux >= 0) & (props.aux < 1 / 3)) {
          aPos = Math.abs(350 - posX) / 2 + (posX > 350 ? 350 : posX)
          nPos = aPos
        }
        if ((props.aux >= 1 / 3) & (props.aux < 2 / 3)) {
          aPos = Math.abs(600 - posX) / 2 + (posX > 600 ? 600 : posX)
          nPos = aPos
        }
        if (props.aux >= 2 / 3) {
          aPos = Math.abs(100 - posX) / 2 + (posX > 100 ? 100 : posX)
          nPos = aPos
        }
        props.childToParentX(nPos)
      },

      square: function () {
        if ((props.aux >= 0) & (props.aux < 0.25)) {
          aPos = (Math.abs(600 - posX) * 3) / 6 + (posX > 600 ? 600 : posX)
          nPos = aPos
        }
        if ((props.aux >= 0.25) & (props.aux < 0.5)) {
          aPos = (Math.abs(600 - posX) * 3) / 6 + (posX > 600 ? 600 : posX)
          nPos = aPos
        }
        if ((props.aux >= 0.5) & (props.aux < 0.75)) {
          aPos = (Math.abs(100 - posX) * 3) / 6 + (posX > 100 ? 100 : posX)
          nPos = aPos
        }
        if (props.aux >= 0.75) {
          aPos = (Math.abs(100 - posX) * 3) / 6 + (posX > 100 ? 100 : posX)
          nPos = aPos
        }
        props.childToParentX(nPos)
      }
    }

    const figFunction = fig[figure]
    figFunction()
    return nPos
  }

  const dragStart = (e, position) => {
    dragItem.current = position
    console.log(e.target.innerHTML)
  }

  const dragEnter = (e, position) => {
    dragOverItem.current = position
    console.log(e.target.innerHTML)
  }

  return (
    <>
      {props.aux ? (
        <div
          className="dot"
          style={{
            top: handlePosY(props.figure) + 'px',
            left: handlePosX(props.figure) + 'px'
          }}
        >
          {/* {console.log(a + '----' + b + ' --- ' + props.aux)}  */}
        </div>
      ) : (
        <div
          className="dot"
          style={{ top: props.posY + 'px', left: props.posX + 'px' }}
        >
          {/* {console.log(props.posY + ' - ' + props.posX)} */}
        </div>
      )}
    </>
  )
}

export default Dot
