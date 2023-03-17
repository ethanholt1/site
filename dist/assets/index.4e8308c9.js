const R=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function o(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerpolicy&&(n.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?n.credentials="include":r.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(r){if(r.ep)return;r.ep=!0;const n=o(r);fetch(r.href,n)}};R();function v(e){const t=p(e),o=L(e),i=_(e),r=b(e);return{position:t,normal:r,textureCoord:o,indices:i}}function p(e){const t=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,t);const o=[-1,-1,1,1,-1,1,1,1,1,-1,1,1,-1,-1,-1,-1,1,-1,1,1,-1,1,-1,-1,-1,1,-1,-1,1,1,1,1,1,1,1,-1,-1,-1,-1,1,-1,-1,1,-1,1,-1,-1,1,1,-1,-1,1,1,-1,1,1,1,1,-1,1,-1,-1,-1,-1,-1,1,-1,1,1,-1,1,-1];return e.bufferData(e.ARRAY_BUFFER,new Float32Array(o),e.STATIC_DRAW),t}function _(e){const t=e.createBuffer();e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t);const o=[0,1,2,0,2,3,4,5,6,4,6,7,8,9,10,8,10,11,12,13,14,12,14,15,16,17,18,16,18,19,20,21,22,20,22,23];return e.bufferData(e.ELEMENT_ARRAY_BUFFER,new Uint16Array(o),e.STATIC_DRAW),t}function L(e){const t=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,t);const o=[0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1];return e.bufferData(e.ARRAY_BUFFER,new Float32Array(o),e.STATIC_DRAW),t}function b(e){const t=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,t);const o=[0,0,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0];return e.bufferData(e.ARRAY_BUFFER,new Float32Array(o),e.STATIC_DRAW),t}function B(e,t,o,i,r){e.clearColor(.111,.111,.111,1),e.clearDepth(1),e.enable(e.DEPTH_TEST),e.depthFunc(e.LEQUAL),e.clear(e.COLOR_BUFFER_BIT|e.DEPTH_BUFFER_BIT);const n=45*Math.PI/180,c=e.canvas.clientWidth/e.canvas.clientHeight,s=.1,m=100,f=mat4.create();mat4.perspective(f,n,c,s,m);const a=mat4.create();mat4.translate(a,a,[-0,0,-6]),mat4.rotate(a,a,r,[0,0,1]),mat4.rotate(a,a,r*.7,[0,1,0]),mat4.rotate(a,a,r*.3,[1,0,0]);const u=mat4.create();mat4.invert(u,a),mat4.transpose(u,u),F(e,o,t),l(e,o,t),e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,o.indices),U(e,o,t),e.useProgram(t.program),e.uniformMatrix4fv(t.uniformLocations.projectionMatrix,!1,f),e.uniformMatrix4fv(t.uniformLocations.modelViewMatrix,!1,a),e.uniformMatrix4fv(t.uniformLocations.normalMatrix,!1,u),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,i),e.uniform1i(t.uniformLocations.uSampler,0);{const E=e.UNSIGNED_SHORT,h=0;e.drawElements(e.TRIANGLES,36,E,h)}}function F(e,t,o){const r=e.FLOAT,n=!1,c=0,s=0;e.bindBuffer(e.ARRAY_BUFFER,t.position),e.vertexAttribPointer(o.attribLocations.vertexPosition,3,r,n,c,s),e.enableVertexAttribArray(o.attribLocations.vertexPosition)}function l(e,t,o){const r=e.FLOAT,n=!1,c=0,s=0;e.bindBuffer(e.ARRAY_BUFFER,t.textureCoord),e.vertexAttribPointer(o.attribLocations.textureCoord,2,r,n,c,s),e.enableVertexAttribArray(o.attribLocations.textureCoord)}function U(e,t,o){const r=e.FLOAT,n=!1,c=0,s=0;e.bindBuffer(e.ARRAY_BUFFER,t.normal),e.vertexAttribPointer(o.attribLocations.vertexNormal,3,r,n,c,s),e.enableVertexAttribArray(o.attribLocations.vertexNormal)}let d=0,x=0;P();function P(){const t=document.querySelector("#glcanvas").getContext("webgl");if(t===null){alert("Unable to initialize WebGL. Your browser or machine may not support it.");return}t.clearColor(1,1,1,1),t.clear(t.COLOR_BUFFER_BIT);const r=S(t,`
  attribute vec4 aVertexPosition;
  attribute vec3 aVertexNormal;
  attribute vec2 aTextureCoord;

  uniform mat4 uNormalMatrix;
  uniform mat4 uModelViewMatrix;
  uniform mat4 uProjectionMatrix;

  varying highp vec2 vTextureCoord;
  varying highp vec3 vLighting;

  void main(void) {
    gl_Position = uProjectionMatrix * uModelViewMatrix * aVertexPosition;
    vTextureCoord = aTextureCoord;

    // Apply lighting effect

    highp vec3 ambientLight = vec3(0.3, 0.3, 0.3);
    highp vec3 directionalLightColor = vec3(1, 1, 1);
    highp vec3 directionalVector = normalize(vec3(0.85, 0.8, 0.75));

    highp vec4 transformedNormal = uNormalMatrix * vec4(aVertexNormal, 1.0);

    highp float directional = max(dot(transformedNormal.xyz, directionalVector), 0.0);
    vLighting = ambientLight + (directionalLightColor * directional);
  }
`,`
  varying highp vec2 vTextureCoord;
  varying highp vec3 vLighting;

  uniform sampler2D uSampler;

  void main(void) {
    highp vec4 texelColor = texture2D(uSampler, vTextureCoord);

    gl_FragColor = vec4(texelColor.rgb * vLighting, texelColor.a);
  }
`),n={program:r,attribLocations:{vertexPosition:t.getAttribLocation(r,"aVertexPosition"),vertexNormal:t.getAttribLocation(r,"aVertexNormal"),textureCoord:t.getAttribLocation(r,"aTextureCoord")},uniformLocations:{projectionMatrix:t.getUniformLocation(r,"uProjectionMatrix"),modelViewMatrix:t.getUniformLocation(r,"uModelViewMatrix"),normalMatrix:t.getUniformLocation(r,"uNormalMatrix"),uSampler:t.getUniformLocation(r,"uSampler")}},c=v(t),s=C(t,"./img/cubetexture_old.png");t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!0);let m=0;function f(a){a*=.001,x=a-m,m=a,B(t,n,c,s,d),d+=x,requestAnimationFrame(f)}requestAnimationFrame(f)}function S(e,t,o){const i=T(e,e.VERTEX_SHADER,t),r=T(e,e.FRAGMENT_SHADER,o),n=e.createProgram();return e.attachShader(n,i),e.attachShader(n,r),e.linkProgram(n),e.getProgramParameter(n,e.LINK_STATUS)?n:(alert(`Unable to initialize the shader program: ${e.getProgramInfoLog(n)}`),null)}function T(e,t,o){const i=e.createShader(t);return e.shaderSource(i,o),e.compileShader(i),e.getShaderParameter(i,e.COMPILE_STATUS)?i:(alert(`An error occurred compiling the shaders: ${e.getShaderInfoLog(i)}`),e.deleteShader(i),null)}function C(e,t){const o=e.createTexture();e.bindTexture(e.TEXTURE_2D,o);const i=0,r=e.RGBA,n=1,c=1,s=0,m=e.RGBA,f=e.UNSIGNED_BYTE,a=new Uint8Array([0,0,255,255]);e.texImage2D(e.TEXTURE_2D,i,r,n,c,s,m,f,a);const u=new Image;return u.onload=()=>{e.bindTexture(e.TEXTURE_2D,o),e.texImage2D(e.TEXTURE_2D,i,r,m,f,u),A(u.width)&&A(u.height)?e.generateMipmap(e.TEXTURE_2D):(e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR))},u.src=t,o}function A(e){return(e&e-1)===0}
