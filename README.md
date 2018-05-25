# Tarobot

_Tarot Bot_ 
基於Vue.js實作的塔羅牌App
![](https://media.giphy.com/media/5t3S5NGsvuViRfcp8R/giphy.gif)
線上版的塔羅牌App，提供“每日運勢”、“無牌陣抽牌”。
僅第一次使用需要聯網

## Progressive web application 

- 實測iPhone (ios 11.3 up) 可經由safari service worker去把程式cache下來  _ok!_
- 實測androind chrome service worker  _ok!_

## 桌面版(Chrome)

![](https://media.giphy.com/media/l2viTEfgVUPjqNA20b/giphy.gif)

## Introduce

- 每日運勢
每日運勢是24小時內，只能抽一次，會給予相對應的運勢結果。

- 抽牌機(無牌陣)
抽牌機可依照使用者選擇1、3、5張，自由抽取，但是無牌陣，
方便給在外沒有帶牌卻想占卜的人。

## 技術棧
- 透過Localstorage實作抽牌時間計算
- 採用Vux UI 
- 手機、豎屏 用戶優先
- service worker -> progressive web application
