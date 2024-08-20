import React from 'react'

function HobbyLinks() {

    const hobbyLinks = ['https://www.wikiwand.com/en/Cycling', 'https://www.wikiwand.com/en/swimming']

  return (
    <>
    <a href = {hobbyLinks[0]}>Hobby : Biking</a>
    <div></div>
    <a href = {hobbyLinks[1]}>Hobby 2 : Swimming</a>
    </>
  )
}

export default HobbyLinks