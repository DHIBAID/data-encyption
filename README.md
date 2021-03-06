# EncryptData

A lightweight package that allows you to encrypt your strings or data.

## Installation

Install EncryptData with npm

```bash
  npm install encryptdata
```
    
## Functions

| Function | Return type     | Parameters                |
| :-------- | :------- | :------------------------- |
| `InOrderHash` | `string` | Key?: string |
| `DoubleDisplace` | `string` | Flip, Randomize?: Boolean |
| `CaesarCipher` | `string` | Step?: Number|
| `HexShift` | `string` | shift?: Boolean |


## Usage/Examples

```javascript
const Hashtag = require("encryptdata")

let string = new Hashtag.Hash("sample text!").DoubleDisplace(true, true, [1,0,0,1])
console.log(string)

Returns:
>> !saTxMpeTlE

```


## Authors

- [@DHIBAID](https://www.github.com/DHIBAID)

