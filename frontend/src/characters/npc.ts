import { DynamicTexture, MeshBuilder, SceneLoader, StandardMaterial } from "babylonjs";
export async function createNPC() {
    SceneLoader.ImportMeshAsync("", "/meshes/", "dummy3.babylon").then((result) => {
    result.meshes[1].position.x=1;
    result.meshes[1].scaling.setAll(0.5);
    

    });
}