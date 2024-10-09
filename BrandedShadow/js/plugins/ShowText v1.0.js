//=============================================================================
// RPG Maker MZ - Show Text
//=============================================================================

/*:
 * @target MZ
 * @plugindesc My personal plugin for sandboxing
 * @auhtor Illya_Sora
 * 
 * @help SamplePlugin.js
 * 
 * This my personal plugin for sandboxing and trying out the newest features of RMMZ. 
 * I'll try to document everything I do, but in case you don't understand
 * somthing, don't hesitate to contact me/
 * 
 * Use it in the following procedure:
 *      Call the plugin command 'Show alert'
 * 
 * @command showText
 * @text Rich Text
 * @desc Shows text as PIXI rich text
 * 
 * @arg textFields
 * @text Text to display
 * @desc The text you want to display
 * @type struct<TextField>[]
 * 
 * @command deleteText
 * @desc Deltes the shown text from the screen
 * 
 * @arg _index
 * @text Index
 * @default 0
 * @type number
*/

/*~struct~TextField:
 * @param backgroundImage
 * @text Background Image
 * @desc The background image fot the text
 * @type struct<BackgroundImage>
 * 
 * @param richText
 * @type multiline_string
 * @text Text
 * @desc Shows text as PIXI text
 * 
 * @param fontName
 * @type text
 * @text Font Name
 * @desc The font you want to use. Uses currently Google fonts.
 * @default Arial
 * 
 * @param xPosition
 * @text X Position
 * @desc The x-position of the text
 * @type text
 * @default 0
 * 
 * @param yPosition
 * @text Y Position
 * @desc The y-position of the text
 * @type text
 * @default 0
 * 
 * @param style
 * @text Style
 * @desc The style of the text
 * @type struct<FontStyle>
*/

/*~struct~BackgroundImage:
 * @param image
 * @text Image File
 * @desc The file for the background Image
 * @type file
 * 
 * @param index
 * @text Index
 * @desc The index of the background image (drawing order)
 * @type number
 * @default 1
 * 
 * @param origin
 * @text Origin
 * @desc The origin of the image
 * @type select
 * @default Upper Left
 * @option Upper Left
 * @value Upper Left
 * @option Center
 * @value Center
 * 
 * @param xPos
 * @text X Position
 * @desc The x position of the image
 * @type text
 * @default 0
 * 
 * @param yPos
 * @text Y Position
 * @desc The y position of the image
 * @type text
 * @default 0
 * 
 * @param scaleX
 * @text Scale X (Width)
 * @desc The scale of the image in x direction in % (width)
 * @type number
 * @default 100
 * 
 * @param scaleY
 * @text Scale Y (Height)
 * @desc The scale of the image in y direction in % (Height)
 * @type number
 * @default 100
 * 
 * @param opacity
 * @text Opacity
 * @desc The opacity of the image
 * @type text
 * @default 255
 * 
 * @param blendMode
 * @text Blend Mode
 * @desc The blend mode of the image
 * @type select
 * @default Normal
 * @option Normal
 * @value Normal
 * @option Additve
 * @value Additive
 * @option Multiply
 * @value Multiply
 * @option Screen
 * @value Screen
*/

/*~struct~FontStyle:
 * @param fontSize
 * @text Font Size
 * @desc The size of the text
 * @type text
 * @default 36
 * 
 * @param fontStyle
 * @text Font Style
 * @desc The style pf the text
 * @type select
 * @default normal
 * @option Normal
 * @value normal
 * @option Italic
 * @value italic
 * @option Oblique
 * @value oblique
 * @option Initial
 * @value initial
 * 
 * @param fillColor1
 * @text Top grdient color
 * @desc Top color to fill the text
 * @type text
 * @default #ffffff
 * 
 * @param fillColor2
 * @text Bottom gradient color
 * @desc Bottom color to fill the text
 * @type text
 * @default #ffffff
 * 
 * @param stroke
 * @text Stroke Color
 * @desc The color for the stroke
 * @type text
 * @default #4a1850
 * 
 * @param strokeThickness
 * @text Stroke Thickness
 * @desc The thickness of the stroke
 * @type text
 * @default 5
 * 
 * @param dropShadow
 * @text Drop Shadow?
 * @desc Whether or not to drop a shadow
 * @default true
 * @type boolean
 * 
 * @param dropShadowColor
 * @text Drop-shadow color
 * @desc The color the drop-shadow will have
 * @type text
 * @default #000000
 * 
 * @param dropShadowBlur
 * @text Drop-shadow blur
 * @desc The blur of the drop-shadow
 * @type text
 * @default 4
 * 
 * @param dropShadowAngle
 * @text Drop-shadow angle
 * @desc The angle of the drop-shadow
 * @type text
 * @default Math.PI / 6
 * 
 * @param dropShadowDistance
 * @text Drop-shadow distance
 * @desc The distance of the drop-shadow
 * @type text
 * @default 6
 * 
 * @param wordWrap
 * @text Word-wrap?
 * @desc Whether or not to word-wrap
 * @default true
 * @type boolean
 * 
 * @param wordWrapWidth
 * @text Word-wrap width
 * @desc The width of which the word-wrap should take action
 * @type text
 * @default 440
*/

const _0x4d12=['stroke','showText','wordWrap','scaleY','yPosition','origin','_index','Multiply','TextStyle','deleteText','getDate','yPos','dropShadowDistance','Text','getMilliseconds','ShowText\x20v1.0','Upper\x20Left','backgroundImage','showPicture','findIndex','dropShadow','addChild','push','fillColor2','image','forEach','children','Arial','parse','getFullYear','style','length','fontStyle','Additive','log','blendMode','textFields','splice','wordWrapWidth','Screen','opacity','load','_scene','getTime','richText','fontName'];(function(_0x22cb73,_0x4d12d8){const _0x39effe=function(_0x3b3cbf){while(--_0x3b3cbf){_0x22cb73['push'](_0x22cb73['shift']());}};_0x39effe(++_0x4d12d8);}(_0x4d12,0xf6));const _0x39ef=function(_0x22cb73,_0x4d12d8){_0x22cb73=_0x22cb73-0x0;let _0x39effe=_0x4d12[_0x22cb73];return _0x39effe;};(()=>{const _0x1b3dd4=_0x39ef('0x2d'),_0x25efd9=[],_0x45b434=[];PluginManager['registerCommand'](_0x1b3dd4,_0x39ef('0x1f'),function(_0x4aea03){const _0x5b127f=_0x19735c(_0x4aea03);_0x1a0801(_0x5b127f);});function _0x19735c(_0x4776e8){const _0x3c46dd=JSON[_0x39ef('0xc')](_0x4776e8[_0x39ef('0x14')]),_0x4b0a88=_0x3c46dd['map'](_0x14c33a=>{let _0x442f20=JSON[_0x39ef('0xc')](_0x14c33a);const _0x45a977=JSON[_0x39ef('0xc')](_0x442f20[_0x39ef('0xe')]);_0x442f20[_0x39ef('0xe')]=_0x45a977;if(_0x442f20[_0x39ef('0x1')]){const _0x1a027f=JSON['parse'](_0x442f20[_0x39ef('0x1')]);_0x442f20[_0x39ef('0x1')]=_0x1a027f;}return _0x45b434[_0x39ef('0x6')](_0x442f20[_0x39ef('0x1d')]),_0x442f20;});return console[_0x39ef('0x12')](_0x4b0a88[0x0]),_0x4b0a88;}PluginManager['registerCommand'](_0x1b3dd4,_0x39ef('0x27'),function(_0x4a38e7){let _0x5375ea=Number(_0x4a38e7[_0x39ef('0x24')]);_0x5375ea===0x0?(_0x25efd9[_0x39ef('0x9')](_0x14a514=>{_0x127d05()[_0x39ef('0xa')][_0x39ef('0x15')](_0x127d05()['children'][_0x39ef('0x3')](_0x1b707c=>_0x14a514['id']===_0x1b707c),0x1);}),_0x25efd9[_0x39ef('0x15')](0x0)):_0x127d05()[_0x39ef('0xa')][_0x39ef('0x15')](_0x5375ea,0x1);});function _0x1a0801(_0x1eb4ec){try{WebFont[_0x39ef('0x19')]({'active':()=>{_0x1eb4ec[_0x39ef('0x9')]((_0x47d5d7,_0x38f88a)=>{_0x249f04(_0x47d5d7),_0x36c5fd(_0x47d5d7[_0x39ef('0x1c')],_0x47d5d7[_0x39ef('0x1d')],_0x47d5d7[_0x39ef('0xe')],_0x1eb4ec[_0x38f88a]);});},'google':{'families':_0x45b434}});}catch(_0x23cf46){_0x1eb4ec[_0x39ef('0x9')]((_0x2c87c5,_0x98ef1d)=>{_0x36c5fd(_0x2c87c5[_0x39ef('0x1c')],_0x39ef('0xb'),_0x2c87c5[_0x39ef('0xe')],_0x1eb4ec[_0x98ef1d]);}),console[_0x39ef('0x12')](_0x23cf46);}}function _0x36c5fd(_0x2b940b,_0x452389='Arial',_0x8546e,_0x6386d){const _0x4ad06f=new PIXI[(_0x39ef('0x26'))]({'fontFamily':_0x452389,'fontSize':eval(_0x8546e['fontSize']),'fontStyle':_0x8546e[_0x39ef('0x10')],'fill':[''+_0x8546e['fillColor1'],''+_0x8546e[_0x39ef('0x7')]],'stroke':''+_0x8546e[_0x39ef('0x1e')],'strokeThickness':eval(_0x8546e['strokeThickness']),'dropShadow':eval(_0x8546e[_0x39ef('0x4')]),'dropShadowColor':''+_0x8546e['dropShadowColor'],'dropShadowBlur':eval(_0x8546e['dropShadowBlur']),'dropShadowAngle':eval(_0x8546e['dropShadowAngle']),'dropShadowDistance':eval(_0x8546e[_0x39ef('0x2a')]),'wordWrap':eval(_0x8546e[_0x39ef('0x20')]),'wordWrapWidth':eval(_0x8546e[_0x39ef('0x16')])}),_0x4b9116=new PIXI[(_0x39ef('0x2b'))](_0x2b940b,_0x4ad06f);_0x4b9116['x']=eval(_0x6386d['xPosition']),_0x4b9116['y']=eval(_0x6386d[_0x39ef('0x22')]);const _0x46fff2=_0x50642c();_0x127d05()[_0x39ef('0x5')](_0x4b9116),_0x127d05()['children'][_0x127d05()[_0x39ef('0xa')][_0x39ef('0xf')]-0x1]['id']=_0x46fff2,_0x25efd9[_0x39ef('0x6')](_0x46fff2);}function _0x249f04(_0x2848dc){if(_0x2848dc[_0x39ef('0x1')]&&_0x2848dc[_0x39ef('0x1')][_0x39ef('0x8')]){const _0x415b28=_0x2848dc['backgroundImage'],_0x4b1c94=_0x415b28[_0x39ef('0x8')]['split']('/'),_0x1802d8=_0x4b1c94[_0x4b1c94[_0x39ef('0xf')]-0x1];console[_0x39ef('0x12')](_0x1802d8),$gameScreen[_0x39ef('0x2')](0xa,_0x1802d8,_0x8270f(_0x415b28[_0x39ef('0x23')]),eval(_0x415b28['xPos']),eval(_0x415b28[_0x39ef('0x29')]),_0x415b28['scaleX'],_0x415b28[_0x39ef('0x21')],eval(_0x415b28[_0x39ef('0x18')]),_0x24e9ba(_0x415b28[_0x39ef('0x13')]));}}function _0x24e9ba(_0x34bb51){switch(_0x34bb51){case'Normal':return 0x0;case _0x39ef('0x11'):return 0x1;case _0x39ef('0x25'):return 0x2;case _0x39ef('0x17'):return 0x3;}}function _0x8270f(_0x378b2f){switch(_0x378b2f){case _0x39ef('0x0'):return 0x0;case'Center':return 0x1;}}function _0x127d05(){return SceneManager[_0x39ef('0x1a')];}function _0x50642c(){let _0x493ae7=new Date();return _0x493ae7[_0x39ef('0x1b')]()+_0x493ae7[_0x39ef('0x2c')]()+_0x493ae7[_0x39ef('0x28')]()+_0x493ae7[_0x39ef('0xd')]();}})();