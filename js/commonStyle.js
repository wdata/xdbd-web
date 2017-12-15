// 文本样式
function textHtml () {
    var text = `
            <div class="text-attr-box">
            <div class="title-box">
                <h3>文本</h3>
                <div class="set-text-attr">
                    <p>字体段落</p>
                    <div class="set-text-attr-wrap">
                        <div class="set-text-color">
                            <div class="color-row">
                                <input type="hidden" name="unique-name-1" data-palette='["#D50000","#304FFE","#00B8D4","#69F0AE","#FFFF00"]' value="#00B8D4">
                            </div>
                        </div>
                        <div class="set-text-size sc-color">
                            <select>
                                <option value="1">9</option>
                                <option value="2">10</option>
                                <option selected value="3">12</option>
                                <option value="4">14</option>
                                <option value="5">16</option>
                                <option value="6">20</option>
                                <option value="7">24</option>
                            </select>
                            <i class="fa fa-caret-down"></i>
                        </div>
                        <div class="set-text-family sc-color">
                            <select name="">
                                <option value="微软雅黑">微软雅黑</option>
                                <option value="中易宋体">中易宋体</option>
                                <option value="Helvetica">Helvetica</option>
                                <option value="Arial">Arial</option>
                                <option value="Lucida Family">Lucida Family</option>
                                <option value="Verdana">Verdana</option>
                                <option value="Tahoma">Tahoma</option>
                            </select>
                            <i class="fa fa-caret-down"></i>
                        </div>
                        <div class="set-text-weight wa-text">
                            <span>样式</span>
                            <img src="images/t_bold.png" alt="" title="font-size:bold" class="bold"/>
                            <img src="images/t_italic.png" alt="" title="fotn-style:italic"  class="italic" />
                            <img src="images/t_underline.png" alt="" title="text-decoration:underline" class="underline" />
                        </div>
                        <div class="set-text-align wa-text">
                            <span>对齐</span>
                            <img src="images/t_left.png" alt="" title="left" class="active justifyLeft"/>
                            <img src="images/t_center.png" alt="" title="center" class="justifyCenter" />
                            <img src="images/t_right.png" alt="" title="right" class="justifyRight" />
                        </div>
                        <div class="set-text-scroll wa-text">
                            <span>滚动条</span>
                            <div>
                                <label>显示</label>
                                <span class="radio_btn" onclick="radioBtn()"></span>
                            </div>
                        </div>
                        <div class="set-text-img">
                            <span>背景</span>
                            <input id="backColor"/>
                        </div>
                        <div class="set-text-border">
                            <span>边框</span>
                            <div class="border-img">
                                <input id="borderImg"/>
                            </div>
                            <div class="border-wire sc-color">
                                <select>
                                    <option value="solid">实线</option>
                                    <option value="dashed">虚线</option>
                                    <option value="dotted">点线</option>
                                    <option value="double">双线</option>
                                </select>
                                <i class="fa fa-caret-down" style="top: 15px;"></i>
                            </div>
                            <div class="border-size sc-color">
                                <select>
                                    <option value="0">0</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                                <i class="fa fa-caret-down" style="top: 15px;"></i>
                            </div>
                        </div>
                        <div class="set-text-radius wa-text">
                            <span>圆角</span>
                            <div class="radius-size">
                                <input type="text" value="0" class="text-radius"/>
                                <span class="radius-add" onclick="radiusAdd()">+</span>
                                <span class="radius-lessen" onclick="radiusLessen()">-</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    return text;
}