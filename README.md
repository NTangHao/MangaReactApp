# NT118.M22_ReactMangaApp

<p align="center">
  <img src="https://user-images.githubusercontent.com/56221762/111880949-da1dd580-89e0-11eb-876c-a68752260d3b.png">
</p>

# Introduction
Ứng dụng đọc truyện tranh online 

## Member

|Order|    Member         |  ID        | Role 
|:---:| :-----------:     | :--:       | :--: 
|1    |   Trần Phi Long   | 19521804 | Member
|2    |   Đỗ Lê Anh Khoa   |  19520631	  | Member
|3    |   Thân Trung Hiếu	  |  19521513	  | Member
|3    |   Nguyễn Tăng Hảo		|  19521479		 | Member

## Status of repository
npm firebase@9.6.11
## Run Locally
```bash
  git clone https://github.com/hacco2801/MangaReactApp.git
```

Install dependencies

```bash
  npm install
```
After the installation is done. Replace the following to your (node_modules > react-native-viewport-unit > viewport-unit.js) file
```bash
  import { Dimensions } from 'react-native';
export const vw = number => Dimensions.get('window').width * (number / 100);
export const vh = number => Dimensions.get('window').height * (number / 100);
export const vmin = number => Math.min(Dimensions.get('window').width * (number / 100), Dimensions.get('window').height * (number / 100));
export const vmax = number => Math.max(Dimensions.get('window').width * (number / 100), Dimensions.get('window').height * (number / 100));
```
Start the app

```bash
  npx react-native run-android
```
