const portrait = document.querySelector<HTMLDivElement>("#portrait")!;
const spin = document.querySelector<HTMLButtonElement>("#spin")!;

function buildFace() {
  const face = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  face.setAttribute("viewBox", "0 0 200 200");
  face.setAttribute("role", "img");
  face.setAttribute("aria-label", "Face with shy smile and blushing");

  const head = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "ellipse",
  );
  head.setAttribute("cx", "100");
  head.setAttribute("cy", "100");
  head.setAttribute("rx", "78");
  head.setAttribute("ry", "86");
  head.setAttribute("fill", "#f3cf87");
  head.setAttribute("stroke", "#302c29");
  head.setAttribute("stroke-width", "4");
  face.append(head);

  const leftEye = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "ellipse",
  );
  leftEye.setAttribute("cx", "72");
  leftEye.setAttribute("cy", "82");
  leftEye.setAttribute("rx", "6");
  leftEye.setAttribute("ry", "9");
  leftEye.setAttribute("fill", "#302c29");
  face.append(leftEye);

  const rightEye = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "ellipse",
  );
  rightEye.setAttribute("cx", "128");
  rightEye.setAttribute("cy", "82");
  rightEye.setAttribute("rx", "6");
  rightEye.setAttribute("ry", "9");
  rightEye.setAttribute("fill", "#302c29");
  face.append(rightEye);

  const nose = document.createElementNS("http://www.w3.org/2000/svg", "line");
  nose.setAttribute("x1", "100");
  nose.setAttribute("y1", "96");
  nose.setAttribute("x2", "96");
  nose.setAttribute("y2", "112");
  nose.setAttribute("stroke", "#302c29");
  nose.setAttribute("stroke-width", "4");
  nose.setAttribute("stroke-linecap", "round");
  face.append(nose);

  const mouth = document.createElementNS("http://www.w3.org/2000/svg", "path");
  mouth.setAttribute("d", "M 78 132 Q 100 152 122 132");
  mouth.setAttribute("fill", "none");
  mouth.setAttribute("stroke", "#302c29");
  mouth.setAttribute("stroke-width", "4");
  mouth.setAttribute("stroke-linecap", "round");
  face.append(mouth);

  const defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
  const blush = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "radialGradient",
  );
  blush.setAttribute("id", "blush");

  const pinkStop = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "stop",
  );
  pinkStop.setAttribute("offset", "0%");
  pinkStop.setAttribute("stop-color", "#ec7a8c");
  blush.append(pinkStop);

  const tanStop = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "stop",
  );
  tanStop.setAttribute("offset", "100%");
  tanStop.setAttribute("stop-color", "#f3cf87");
  blush.append(tanStop);

  defs.append(blush);
  face.append(defs);

  const leftCheek = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "ellipse",
  );
  leftCheek.setAttribute("cx", "58");
  leftCheek.setAttribute("cy", "110");
  leftCheek.setAttribute("rx", "16");
  leftCheek.setAttribute("ry", "10");
  leftCheek.setAttribute("fill", "url(#blush)");
  face.append(leftCheek);

  const rightCheek = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "ellipse",
  );
  rightCheek.setAttribute("cx", "142");
  rightCheek.setAttribute("cy", "110");
  rightCheek.setAttribute("rx", "16");
  rightCheek.setAttribute("ry", "10");
  rightCheek.setAttribute("fill", "url(#blush)");
  face.append(rightCheek);

  return face;
}

const face = buildFace();
portrait.append(face);

spin.addEventListener("click", () => {
  // Restart rather than accumulate simultaneous animations on repeated clicks.
  for (const animation of face.getAnimations()) animation.cancel();
  face.animate(
    [{ transform: "rotate(0deg)" }, { transform: "rotate(360deg)" }],
    { duration: 800, easing: "ease-in-out" },
  );
});
