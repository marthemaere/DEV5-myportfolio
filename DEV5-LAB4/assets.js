import * as THREE from 'three'
import {FBXLoader} from 'three/examples/jsm/loaders/FBXLoader.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
export default class Assets{
    constructor(){
        this.group = new THREE.Group();
        this.createAssets();
    }

    createAssets(){
        let skull;
        let pumpkin;
        let witch;
        const gltfloader = new GLTFLoader();
        gltfloader.load('/assets/Skull/scene.gltf', (gltf) => {
            skull = gltf.scene;
            skull.position.set(2, 1, 2);
            skull.scale.set(0.01, 0.01, 0.01);
            this.group.add(skull);
        });

        const addPumpkin = (x, z) => {
        const gltfloader2 = new GLTFLoader();
        gltfloader2.load('/assets/Pumpkin/scene.gltf', (gltf) => {
            pumpkin = gltf.scene;
            pumpkin.position.set(x, -0.5, z);
            pumpkin.scale.set(0.001, 0.001, 0.001);
            this.group.add(pumpkin);
        });
    };

        for (let i=0; i<10; i++){
            let sign = Math.random() < 0.5 ? -1 : 1;
            let x = Math.random() * 10 * sign;
            sign = Math.random() < 0.5 ? -1 : 1;
            let z = Math.random() * 10 * sign;
            addPumpkin(x, z);
        }

        const gltfloader3 = new GLTFLoader();
        gltfloader3.load('/assets/Witch/scene.gltf', (gltf) => {
            witch = gltf.scene;
            witch.position.set(0, -0.6, 0);
            witch.scale.set(0.001, 0.001, 0.001);
            this.group.add(witch);
        });





    }
}