exports.Hash = class Hash {
  #stringIn

  constructor(string) {
    this.stringIn = string
  }

  /* 
  * @param {string} key
  * @return {string} output
  */

  InOrderHash(key) {
    if (!key) {
      console.error("\x1b[31mError: Key is not provided in InOrderHash\x1b[0m")
      return
    }
    let output = []
    this.stringIn = this.stringIn.split("")

    for (let i = 0; i < (this.stringIn.length + 1) / 2; i++) {
      if (i == (this.stringIn.length - 1) / 2 / 2) {

        output.push(this.stringIn[i] + key)

      }
      else {

        output.push(this.stringIn[i])
        output.push(this.stringIn[this.stringIn.length - 1 - i])

      }
    }
    return output.join("");

  }


  /*
  * @param {string} key
  * @param {boolean} randomize
  * @param {number[]} noise
  * @return {string} output
  */

  DoubleDisplace(flip = false, randomize = false, noiseLayer = [0, 1, 1, 0, 0, 1, 0, 1, 1, 0]) {
    // order = first, last, secondLast, second...


    let output = []

    this.stringIn.split("")
    for (let i = 0; i < (this.stringIn.length) / 2; i++) {

      if (flip) {
        if (i == (this.stringIn.length - 1) / 2) {
          output.push(this.stringIn[i])
          continue
        }
        output.push(this.stringIn[this.stringIn.length - 1 - i])
        output.push(this.stringIn[i])
      } else {
        if (i == (this.stringIn.length - 1) / 2) {
          output.push(this.stringIn[i])
          continue
        }

        output.push(this.stringIn[i])
        output.push(this.stringIn[this.stringIn.length - 1 - i])

      }

      flip = !flip

    }

    if (randomize) {
      let a = 0
      for (let j = 0; j < output.length; j++) {
        if (a > noiseLayer.length) a = 0
        if (noiseLayer[a] == 0) {
          output[j] = output[j].toLowerCase()
        }

        else if (noiseLayer[a] == 1) {
          output[j] = output[j].toUpperCase()
        }
        a++
      }
    }

    return output.join("")
  }

  /**
   * @param {number} step
   * @param {string} direction
   * @return {string} output
   */

  CaesarCipher(step = 1) {

    let lower = "abcdefghijkmnopqrstuvwxyz"
    let upper = lower.toUpperCase()
    let position = 0
    let output = []

    for (let i = 0; i < this.stringIn.length; i++) {

      if (lower.includes(this.stringIn[i])) {
        position = lower.indexOf(this.stringIn[i])
        if (position % 26 == 0) {
          position = 0
        } if (step % 26 == 0) {
          step = 0
        }

        output.push(lower[position + step])
      }

      else if (upper.includes(this.stringIn[i])) {
        position = upper.indexOf(this.stringIn[i])
        if (position % 26 == 0) {
          position = 0
        } if (step % 26 == 0) {
          step = 0
        }

        output.push(upper[position + step])
      } else {
        output.push(this.stringIn[i])
      }
      console.log(output.join(""))
    }

    return output.join("")

  }

  /**
   * @param {boolean} shift
   * @return {string} output
   */

  HexShift(shift = false) {
    let hex
    let output = []

    for (let i = 0; i < this.stringIn.length; i++) {
      hex = this.stringIn.charCodeAt(i).toString(16)
      output.push(("000" + hex).slice(-4))
    }
    if (shift){
      let split1 = output.slice(0, Math.ceil(output.length / 2))
      let split2 = output.slice(-Math.ceil(output.length / 2))
      output = [split2.join(""), split1.join("")]
    }

    return output.join("")
  }

}