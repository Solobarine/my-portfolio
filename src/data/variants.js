export const stagger = (index) => {
  return {
    hidden: {
      opacity: 0,
      scale: 0,
      x: '0vw'
    },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        type: 'spring',
        delay: .1 * index
      }
    }
  }
}

export const pop = {
  hidden: {
    opacity: 0,
    x: '-100vw',
    scale: 0
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      type: 'ease',
      delay: '0.3'
    }
  }
}

export const slideIn = {
  hidden: {
    opacity: 0,
    x: '-40vw'
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'ease-in-out',
      delay: '0.3'
    }
  }
}
