class Cube{
    constructor(color){
      this.type = "cube";
      this.color = color;
      this.matrix = new Matrix4();
      this.textureNum = -1;
    }
  
    render() {
      var rgba = this.color;

      gl.uniform1i(u_whichTexture, this.textureNum);
      gl.uniform4f(u_FragColor, rgba[0], rgba[1], rgba[2], rgba[3]);
      gl.uniformMatrix4fv(u_ModelMatrix, false, this.matrix.elements);
      //front
      drawTriangle3DUV( [0,0,0, 1,1,0, 1,0,0], [0,0, -1, 1,-1,0] )
      drawTriangle3DUV( [0,0,0, 0,1,0, 1,1,0], [0,0, 0, 1, -1,1] )
      //top
      drawTriangle3DUV( [0,1,0, 1,1,1, 1,1,0], [0,0, 1, -1, 1,0] )
      drawTriangle3DUV( [0,1,0, 0,1,1, 1,1,1], [0,0, 0, -1, 1,-1] )
      //right side
      drawTriangle3DUV( [1,0,0, 1,1,1, 1,1,0], [0,-1,-1, 0, 0,0] )
      drawTriangle3DUV( [1,0,0, 1,0,1, 1,1,1], [0,-1, -1, -1,-1, 0] )
      //left side
      drawTriangle3DUV( [0,0,0, 0,0,1, 0,1,1], [-1,0, 0, 0,0, 1] )
      drawTriangle3DUV( [0,0,0, 0,1,1, 0,1,0], [-1,0,0, 1, -1,1] )
      //back
      drawTriangle3DUV( [0,0,1, 0,1,1, 1,1,1], [0,0, 0, 1, 1,1] )
      drawTriangle3DUV( [0,0,1, 1,1,1, 1,0,1], [0,0, 1, 1, 1,0] )
      //bottom
      drawTriangle3DUV( [0,0,0, 0,0,1, 1,0,1], [0,0, 0, -1, -1,-1] )
      drawTriangle3DUV( [0,0,0, 1,0,1, 1,0,0], [0,0, -1, -1, -1,0] )
    }

    renderFast() {
      var rgba = this.color;
      gl.uniform1i(u_whichTexture, this.textureNum);
      gl.uniform4f(u_FragColor, rgba[0], rgba[1], rgba[2], rgba[3]);
      gl.uniformMatrix4fv(u_ModelMatrix, false, this.matrix.elements);
      var allverts = [];
      var alluvs = [];
      allverts = allverts.concat([0,0,0, 1,1,0, 1,0,0]);
      allverts = allverts.concat([0,0,0, 0,1,0, 1,1,0]);
      allverts = allverts.concat([0,1,0, 1,1,1, 1,1,0]);
      allverts = allverts.concat([0,1,0, 0,1,1, 1,1,1]);
      allverts = allverts.concat([1,0,0, 1,1,1, 1,1,0]);
      allverts = allverts.concat([1,0,0, 1,0,1, 1,1,1]);
      allverts = allverts.concat([0,0,0, 0,0,1, 0,1,1]);
      allverts = allverts.concat([0,0,0, 0,1,1, 0,1,0]);
      allverts = allverts.concat([0,0,1, 0,1,1, 1,1,1]);
      allverts = allverts.concat([0,0,1, 1,1,1, 1,0,1]);
      allverts = allverts.concat([0,0,0, 0,0,1, 1,0,1]);
      allverts = allverts.concat([0,0,0, 1,0,1, 1,0,0]);
      alluvs = alluvs.concat([0,0, -1, 1,-1,0])
      alluvs = alluvs.concat([0,0, 0, 1, -1,1])
      alluvs = alluvs.concat([0,0, 1, -1, 1,0])
      alluvs = alluvs.concat([0,0, 0, -1, 1,-1])
      alluvs = alluvs.concat([0,-1,-1, 0, 0,0])
      alluvs = alluvs.concat([0,-1, -1, -1,-1, 0])
      alluvs = alluvs.concat([-1,0, 0, 0,0, 1])
      alluvs = alluvs.concat([-1,0,0, 1, -1,1])
      alluvs = alluvs.concat([0,0, 0, 1, 1,1])
      alluvs = alluvs.concat([0,0, 1, 1, 1,0])
      alluvs = alluvs.concat([0,0, 0, -1, -1,-1])
      alluvs = alluvs.concat([0,0, -1, -1, -1,0])
      drawTriangle3DUV(allverts, alluvs);
    }

    renderFaster() {
      var rgba = this.color;
      gl.uniform1i(u_whichTexture, -2);
      gl.uniform4f(u_FragColor, rgba[0], rgba[1], rgba[2], rgba[3]);
      gl.uniformMatrix4fv(u_ModelMatrix, false, this.matrix.elements);
      
    }
}
