const portrait = document.querySelector<HTMLDivElement>("#portrait")!;
const spin = document.querySelector<HTMLButtonElement>("#spin")!;

// The prototype grew inline. Keep it this way until the refactoring checkpoint.
const face = document.createElementNS("http://www.w3.org/2000/svg", "svg");
face.setAttribute("viewBox", "0 0 200 200");
face.setAttribute("role", "img");
face.setAttribute(
  "aria-label",
  "A sunny face with a ring of orange spikes and a beaded smile",
);

const head = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
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

for (let i = 0; i < 13; i++) {
  const angle = (30 + i * 10) * Math.PI / 180;
  const bead = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  bead.setAttribute("cx", String(100 + 30 * Math.cos(angle)));
  bead.setAttribute("cy", String(108 + 30 * Math.sin(angle)));
  bead.setAttribute("r", "2.5");
  bead.setAttribute("fill", "#302c29");
  face.append(bead);
}

for (let i = 0; i < 120; i++) {
  const angle = (i / 120) * Math.PI * 2;
  const length = i % 2 === 0 ? 8 : 4;
  const spike = document.createElementNS("http://www.w3.org/2000/svg", "line");
  spike.setAttribute("x1", String(100 + 82 * Math.cos(angle)));
  spike.setAttribute("y1", String(100 + 90 * Math.sin(angle)));
  spike.setAttribute("x2", String(100 + (82 + length) * Math.cos(angle)));
  spike.setAttribute("y2", String(100 + (90 + length) * Math.sin(angle)));
  spike.setAttribute("stroke", "#f08a24");
  spike.setAttribute("stroke-width", "2");
  spike.setAttribute("stroke-linecap", "round");
  face.append(spike);
}

portrait.append(face);

spin.addEventListener("click", () => {
  // Restart rather than accumulate simultaneous animations on repeated clicks.
  for (const animation of face.getAnimations()) animation.cancel();
  face.animate(
    [{ transform: "rotate(0deg)" }, { transform: "rotate(360deg)" }],
    { duration: 800, easing: "ease-in-out" },
  );
});
