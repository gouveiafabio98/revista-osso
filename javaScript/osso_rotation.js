content.addEventListener("wheel", function(event) {
    boneDirection.rotation.y += event.deltaY*0.01;

    window.requestAnimationFrame(boneTransition);
});