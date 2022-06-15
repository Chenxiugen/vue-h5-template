/*
 * @Author: chenxiugen@zuoyebang.com
 * @Date: 2022-06-14 22:20:13
 * @LastEditTime: 2022-06-14 22:20:13
 * @LastEditors: 陈秀根
 * @Description: 
 * 
 */
function resetFontSize() {
  const d = window.document.createElement('div');
  d.style.cssText = "width:1rem;height:0;overflow: hidden;position:absolute;z-index:-1;visibility: hidden;";
  window.document.body.appendChild(d);
  const dw = d.offsetWidth; // 1rem的实际展示px值
  window.document.body.removeChild(d);
  const html = window.document.querySelector('html');
  const fz = html.style.fontSize.slice(0, -2) * 1 || 0; //正常计算出来的rem基准值 , 可自行修改为rem计算好的值
  let realRem = fz
  if (dw != fz) { //不相等 则被缩放了
    realRem = Math.pow(fz, 2) / dw;
  }
  html.style.fontSize = realRem + 'px';
}

/**
 * @description 屏幕展示方向常量
 */
export const PAGE_ORIENTATION = {
  // 竖屏计算（高度基准）
  PORTRAIT: 0,
  // 横屏计算（宽度计算）
  LANDSCAPE: 1
};

/**
 * @description 初始化rem值，通过 landscapeType 参数强制控制屏幕方向，即初始化的基准
 * @param  {Document} doc 文档对象 
 * @param  {Window} win 宿主对象
 * @return {void} 空
 */
export function initRem(doc, win) {
  const docEl = doc.documentElement;
  const resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
  const recalc = function() {
    const clientWidth = docEl.clientWidth;
    if (!clientWidth) return;
    docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
    resetFontSize();
  };

  recalc();

  if (!doc.addEventListener) return;

  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener('DOMContentLoaded', recalc, false);
}

initRem(document, window);