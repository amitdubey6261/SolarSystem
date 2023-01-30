import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import * as dat from 'dat.gui'
import { DoubleSide } from 'three'
import { getProject , types } from '@theatre/core'
import studio from '@theatre/studio'

studio.initialize();

const project = getProject('myproject')
const sheet = project.sheet('scene')

const box = sheet.object("box" , {
    position : {
        x : 0 , 
        y : 0 ,
    }
})





//textures
import suntex from './assets/2k_sun.jpg'
import mertex from './assets/2k_mercury.jpg'
import ventex from './assets/2k_venus_surface.jpg'
import eartex from './assets/8k_earth_daymap.jpg'
import martex from './assets/8k_mars.jpg'
import juptex from './assets/8k_jupiter.jpg'
// import suntex from './assets/2k_sun.jpg'
import uratex from './assets/2k_uranus.jpg'
import neptex from './assets/2k_neptune.jpg'
import startex from './assets/8k_stars_milky_way.jpg'


// Debug
const gui = new dat.GUI()

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()
const textureLoader = new THREE.TextureLoader();
scene.background = textureLoader.load(startex)

// Objects

const planeGeo = new THREE.PlaneGeometry(10,10);
const sungeometry = new THREE.SphereGeometry(0.5, 32, 16 );
const mergeometry = new THREE.SphereGeometry(0.1, 32, 16 );
const vengeometry = new THREE.SphereGeometry(0.2, 32, 16 );
const eargeometry = new THREE.SphereGeometry(0.2, 32, 16 );
const margeometry = new THREE.SphereGeometry(0.2, 32, 16 );
const jupgeometry = new THREE.SphereGeometry(0.4, 32, 16 );
const satgeometry = new THREE.SphereGeometry(0.4, 32, 16 );
const urageometry = new THREE.SphereGeometry(0.2, 32, 16 );
const nepgeometry = new THREE.SphereGeometry(0.1, 32, 16 );

// Materials

const planeMaterial = new THREE.MeshBasicMaterial({
    side : DoubleSide ,
    color : 0xffaaee ,
    wireframe : false
})

const sunmaterial = new THREE.MeshBasicMaterial({
    map : textureLoader.load(suntex)
});
const mermaterial = new THREE.MeshStandardMaterial({
    map : textureLoader.load(mertex)
});
const venmaterial = new THREE.MeshStandardMaterial({
    map : textureLoader.load(ventex)
});
const earmaterial = new THREE.MeshStandardMaterial({
    map : textureLoader.load(eartex)
});
const marmaterial = new THREE.MeshStandardMaterial({
    map : textureLoader.load(martex)
});
const jupmaterial = new THREE.MeshStandardMaterial({
    map : textureLoader.load(juptex)
});
const satmaterial = new THREE.MeshStandardMaterial({
    map : textureLoader.load(eartex)
});
const uramaterial = new THREE.MeshStandardMaterial({
    map : textureLoader.load(uratex)
});
const nepmaterial = new THREE.MeshStandardMaterial({
    map : textureLoader.load(neptex)
});

// Mesh

const plane = new THREE.Mesh(planeGeo , planeMaterial);
plane.rotation.x = Math.PI * (-0.5) ;
// scene.add(plane)

const sun = new THREE.Mesh( sungeometry, sunmaterial );
scene.add( sun );

const mer = new THREE.Mesh( mergeometry, mermaterial );
const merObj = new THREE.Object3D();
merObj.add(mer)
mer.position.x = 1
scene.add(merObj)

const ven = new THREE.Mesh( vengeometry, venmaterial );
const venObj = new THREE.Object3D();
venObj.add(ven)
ven.position.x = 2
scene.add(venObj)

const ear = new THREE.Mesh( eargeometry, earmaterial );
const earObj = new THREE.Object3D();
earObj.add(ear)
ear.position.x = 3
scene.add(earObj)

const mar = new THREE.Mesh( margeometry, marmaterial );
const marObj = new THREE.Object3D();
marObj.add(mar)
mar.position.x = 4
scene.add(marObj)

const jup = new THREE.Mesh( jupgeometry, jupmaterial );
const jupObj = new THREE.Object3D();
jupObj.add(jup)
jup.position.x = 5
scene.add(jupObj)

const sat = new THREE.Mesh( satgeometry, satmaterial );
const satObj = new THREE.Object3D();
satObj.add(sat)
sat.position.x = 6
scene.add(satObj)

const ura = new THREE.Mesh( urageometry, uramaterial );
const uraObj = new THREE.Object3D();
uraObj.add(ura)
ura.position.x = 7
scene.add(uraObj)

const nep = new THREE.Mesh( nepgeometry, nepmaterial );
const nepObj = new THREE.Object3D();
nepObj.add(nep)
nep.position.x = 8
scene.add(nepObj)


// Lights

const light = new THREE.PointLight( 0xffffff, 5, 100 );
light.position.set( 0 , 0 , 0 );
scene.add( light );

//helpers

const axesHelper = new THREE.AxesHelper(10);
// scene.add(axesHelper);

const gridHelper = new THREE.GridHelper();
// scene.add(gridHelper);

/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height , 0.1 , 1000)
camera.position.x = 0
camera.position.y = 0
camera.position.z = 2
scene.add(camera)

// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))


/**
 * Animate
 */

const clock = new THREE.Clock()

const tick = () =>
{

    const elapsedTime = clock.getElapsedTime()

    // Update objects
    // sphere.rotation.y = .5 * elapsedTime
    sun.rotateY(0.009)
    mer.rotateY(0.009)
    ven.rotateY(0.009)
    ear.rotateY(0.009)
    mar.rotateY(0.009)
    jup.rotateY(0.009)
    sat.rotateY(0.009)
    ura.rotateY(0.009)
    nep.rotateY(0.009)

    merObj.rotateY(0.001)
    venObj.rotateY(0.008)
    earObj.rotateY(0.005)
    marObj.rotateY(0.002)
    jupObj.rotateY(0.003)
    satObj.rotateY(0.001)
    uraObj.rotateY(0.002)
    nepObj.rotateY(0.004)

    // Update Orbital Controls
    controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()