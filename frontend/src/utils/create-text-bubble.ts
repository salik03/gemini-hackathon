import { DynamicTexture, MeshBuilder, StandardMaterial } from "babylonjs";
import { getResponse } from "./response-generator";
export async function createTextBubble(question:string){
    const text = await getResponse(question);
    //text bubble testing
    var font_size = 30;
	var font = "bold " + font_size + "px Arial";

    var planeHeight = 0.1;

    //Dynamic Texture
    var DTHeight = 1.5* font_size;

    var ratio = planeHeight/DTHeight;


    //temporary texture for calculating length of text
    var temp = new DynamicTexture('DT',64)
    var tmpctx = temp.getContext();
    console.log(tmpctx);
    tmpctx.font = font;
    var DTWidth = tmpctx.measureText(text).width + 8;

    var planeWidth = DTWidth * ratio;

    var DT = new DynamicTexture('DT',{width:DTWidth,height:DTHeight});
    var mat = new StandardMaterial('mat');
    mat.diffuseTexture = DT;
    DT.drawText(text,null,null,font,'#000000','#ffffff',true);

    var plane = MeshBuilder.CreatePlane("plane",{width:planeWidth,height:planeHeight});
    plane.material = mat;
    plane.position.y = 1;}