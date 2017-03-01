


var container, stats;

var camera, scene, renderer, composer;

var mesh, group1, group2, group3, light, sphere, lightMesh, quaternion, ring, ring2;

var mouseX = 0, mouseY = 0;

var SCREEN_WIDTH = window.innerWidth;
var SCREEN_HEIGHT = window.innerHeight;
/*var windowHalfX = window.innerWidth / 2;
var windowHalfY = window.innerHeight / 2;*/

function init(){

    gl.colorMask(true, true, true, true);
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.colorMask(true, true, true, false);

    scene = new THREE.Scene();

    //camera
    camera = new THREE.PerspectiveCamera( 20, SCREEN_WIDTH / SCREEN_HEIGHT, 1, 8000 );
    camera.position.z = 2000;

    //light
    light = new THREE.DirectionalLight( 0xffffff );
    light.position.set( .5, .5, .5 );
    scene.add( light );
    scene.fog = new THREE.Fog( 0x000000, 100, 1 );


    sphere = new THREE.SphereGeometry( 10, 16, 8, 1 );
    lightMesh = new THREE.Mesh( sphere, new THREE.MeshBasicMaterial( { transparent: true, color: 0x000000, opacity: 0.8 } ) );
    scene.add( lightMesh );


    var faceIndices = [ 'a', 'b', 'c', 'd' ];
    var color, f, p, n, vertexIndex,
        radius = 100,
        geometry  = new THREE.IcosahedronGeometry( radius, 3 );

    var materials = [
        new THREE.MeshLambertMaterial( { color: 0xffffff, shading: THREE.FlatShading, vertexColors: THREE.VertexColors } )

    ];

    group1 = THREE.SceneUtils.createMultiMaterialObject( geometry, materials );
    group1.position.x = 0;
    scene.add( group1 );


    ring = new THREE.TorusGeometry( 210, 1, 100, 50 );
    var ringMaterial = new THREE.MeshLambertMaterial( {transparent: true, color: 0xffffff, shading: THREE.SmoothShading, vertexColors: THREE.VertexColors, side: THREE.DoubleSide, opacity: 1.0 } );
    group2 = new THREE.Mesh( ring, ringMaterial );
    scene.add( group2 );

    ring2 = new THREE.TorusGeometry( 210, 1, 100, 50 );
    var ringMaterial = new THREE.MeshLambertMaterial( {transparent: true, color: 0xffffff, shading: THREE.SmoothShading, vertexColors: THREE.VertexColors, side: THREE.DoubleSide, opacity: 1.0 } );
    group3 = new THREE.Mesh( ring, ringMaterial );
    scene.add( group3 );

    /*    ring3 = new THREE.TorusGeometry( 210, 1, 100, 50 );
     var ringMaterial = new THREE.MeshLambertMaterial( {transparent: true, color: 0xffffff, shading: THREE.SmoothShading, vertexColors: THREE.VertexColors, side: THREE.DoubleSide, opacity: 1.0} );
     group4 = new THREE.Mesh( ring, ringMaterial );
     scene.add( group4 );*/

    var renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );
    renderer.setClearColor( 0x000000, 0);
    var r = 1;
    var g = 0;
    var b = 0;
    var a = 0;
    gl.clearColor(r * a, g * a, b * a, a);
    gl.blendFuncSeparate(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA, gl.ZERO, gl.ONE);
    renderer.setSize( window.innerWidth, window.innerHeight );
    renderer.setPixelRatio( window.devicePixelRatio / 2);
    $('.glitch').append( renderer.domElement );

    // postprocessing

    composer = new THREE.EffectComposer( renderer );
    composer.addPass( new THREE.RenderPass( scene, camera ) );

    var effect = new THREE.ShaderPass( THREE.DotScreenShader );
    effect.uniforms[ 'scale' ].value = 150;
    composer.addPass( effect );

    var effect = new THREE.ShaderPass( THREE.RGBShiftShader );
    effect.uniforms[ 'amount' ].value = 0.05;
    effect.renderToScreen = true;

    composer.addPass( effect );
    composer.addPass( effect );

    var glitch = new THREE.GlitchPass(5000);
    glitch.renderToScreen = true;
    composer.addPass(glitch);

    //

    window.addEventListener( 'resize', onWindowResize, false );

    //

}

function render() {


    var timer = Date.now() * 0.0010;
    camera.lookAt( scene.position );

    /*group1.rotation.x = timer;*/
    /*group1.rotation.y = timer / 2;*/
    group1.rotation.z = (timer / 2) + 45;

    group2.rotation.x = timer;
    group2.rotation.y = 25;

    group3.rotation.y = timer;
    group3.rotation.x = 45;

    /*    group4.rotation.y = timer;
     group4.rotation.x = 175;*/

    /*
     group3.rotation.x = timer;
     group3.rotation.y = 25;
     */

    composer.render();

    ;


    /*  renderer.render( scene, camera );*/
}

window.addEventListener( 'resize', onWindowResize, false );

function onWindowResize(){

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );

}

function animate() {

    requestAnimationFrame( animate );
    render();

}

init();
animate();

gl.colorMask(true, true, true, true);