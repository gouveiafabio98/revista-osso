// -- OSSO SCROLL -- //

var content = document.getElementById("content");

var osso = document.getElementById("osso_model");

var boneDirection = {
    rotation: { x: 0, y: 0, z: 0 },
    position: { x: 0, y: 0, z: 0 }
};

var width = window.innerWidth;
var totalWidth = document.body.scrollWidth;
var scale = totalWidth / width;

//console.log("screen: " + width + " total: " + totalWidth + " scale: " + scale);

var mapping = [{
    scroll: 0,
    rotation: { x: 0, y: 0, z: 0 },
    position: { x: 0, y: 0, z: 0 }
}, {
    scroll: width,
    rotation: { x: 0, y: degreesToRadians(360), z: 0 },
    position: { x: -6, y: 0, z: 0 }
}, {
    scroll: totalWidth - width,
    rotation: { x: 0, y: degreesToRadians(720), z: 0 },
    position: { x: 6, y: 0, z: 0 }
}];

//console.log(mapping);

var positionBone = 0;

function boneTransition() {
    osso.object3D.position.x = lerp(osso.object3D.position.x, boneDirection.position.x, 0.001);
    osso.object3D.position.y = lerp(osso.object3D.position.y, boneDirection.position.y, 0.001);
    osso.object3D.position.z = lerp(osso.object3D.position.z, boneDirection.position.z, 0.001);

    osso.object3D.rotation.x = lerp(osso.object3D.rotation.x, boneDirection.rotation.x, 0.001);
    osso.object3D.rotation.y = lerp(osso.object3D.rotation.y, boneDirection.rotation.y, 0.001);
    osso.object3D.rotation.z = lerp(osso.object3D.rotation.z, boneDirection.rotation.z, 0.001);

    window.requestAnimationFrame(boneTransition);
}

window.requestAnimationFrame(boneTransition);