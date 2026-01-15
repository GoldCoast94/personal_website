import { TechDetail } from '../../../types';

export const gsapDataEn: TechDetail = {
  name: "GSAP",
  description: "Professional JavaScript animation library",
  icon: "/images/gsap-logo.png",
  color: "from-indigo-500 to-violet-500",
  officialLink: "https://greensock.com/gsap/",
  content: [
    {
      title: "GSAP Core Concepts",
      items: [
        {
          id: "tweens",
          name: "Tweens",
          link: "https://greensock.com/docs/v3/GSAP/gsap.to()",
          description: "Tweens are GSAP's core animation methods used to change object properties over a specified time.",
          content: `Tweens are the most fundamental and commonly used feature in GSAP. They allow element properties to smoothly transition from one value to another, creating fluid animation effects.

**Three Core Methods**:

1. **gsap.to()**: Animates from the current state to a target state
   - The most commonly used method
   - Specifies the target state, GSAP automatically calculates the starting state

2. **gsap.from()**: Animates from a specified state to the current state
   - Used for element entrance animations
   - Specifies the starting state, animates to the element's current state

3. **gsap.fromTo()**: Complete control over both start and end states
   - Specifies both starting and ending states
   - Provides maximum control flexibility

**Common Properties**:
- **Position**: x, y (based on transform)
- **Rotation**: rotation, rotationX, rotationY
- **Scale**: scale, scaleX, scaleY
- **Opacity**: opacity
- **Duration**: duration (duration in seconds)
- **Delay**: delay (delay time in seconds)
- **Repeat**: repeat (repeat count, -1 for infinite), repeatDelay
- **Yoyo**: yoyo (whether to reverse animation)

**Tween Control Methods**:
- **play()**: Play animation
- **pause()**: Pause animation
- **reverse()**: Reverse playback
- **restart()**: Restart
- **kill()**: Terminate animation`,
          codeExample: `// 1. gsap.to() - Most commonly used method
gsap.to(".box", {
  x: 200,              // Move 200px to the right
  y: 100,              // Move 100px down
  rotation: 360,       // Rotate 360 degrees
  duration: 2,         // Duration of 2 seconds
  ease: "power2.out"   // Easing function
});

// 2. gsap.from() - From specified state to current state
gsap.from(".hero", {
  opacity: 0,          // Start from transparent
  y: -100,             // Start from 100px above
  duration: 1.5,
  ease: "bounce.out"
});

// 3. gsap.fromTo() - Complete control
gsap.fromTo(".card",
  { // Starting state
    scale: 0,
    rotation: -180
  },
  { // Ending state
    scale: 1,
    rotation: 0,
    duration: 1,
    ease: "back.out(1.7)"
  }
);

// 4. Multiple property animation
gsap.to(".element", {
  x: 300,
  y: 200,
  scale: 1.5,
  rotation: 45,
  opacity: 0.8,
  backgroundColor: "#ff0000",
  duration: 2,
  ease: "power3.inOut"
});

// 5. Delay and repeat
gsap.to(".pulse", {
  scale: 1.2,
  opacity: 0.5,
  duration: 0.8,
  delay: 0.5,          // Delay 0.5 seconds
  repeat: -1,          // Infinite repeat
  yoyo: true,          // Reverse animation
  ease: "power1.inOut"
});

// 6. Stagger - Staggered animations
gsap.to(".item", {
  x: 100,
  opacity: 1,
  duration: 1,
  stagger: 0.2,        // Each element delays by 0.2 seconds
  ease: "power2.out"
});

// More complex stagger configuration
gsap.to(".grid-item", {
  scale: 1,
  opacity: 1,
  duration: 0.5,
  stagger: {
    each: 0.1,         // Each interval 0.1 seconds
    from: "center",    // Start from center
    grid: [5, 5],      // 5x5 grid
    ease: "power2.in"
  }
});

// 7. Tween control
const tween = gsap.to(".box", {
  x: 200,
  duration: 2,
  paused: true         // Create but don't play
});

// Control animation
tween.play();          // Play
tween.pause();         // Pause
tween.reverse();       // Reverse
tween.restart();       // Restart
tween.kill();          // Kill

// 8. Callback functions
gsap.to(".element", {
  x: 300,
  duration: 2,
  onStart: () => console.log("Started"),
  onUpdate: () => console.log("Updating"),
  onComplete: () => console.log("Completed"),
  onReverseComplete: () => console.log("Reverse completed")
});`,
        },
        {
          id: "timelines",
          name: "Timeline",
          link: "https://greensock.com/docs/v3/GSAP/Timeline",
          description: "Timeline is used to create complex animation sequences with precise control over timing and order.",
          content: `Timeline is a powerful tool in GSAP for organizing and controlling multiple animations. It allows you to create complex animation sequences with precise control over when each animation starts and executes.

**Timeline Advantages**:

1. **Sequence Control**: Easily create animations that execute in order
2. **Time Management**: Unified control over playback, pause, speed of entire animation sequence
3. **Position Parameter**: Precise control over animation insertion position and timing
4. **Reusability**: Control the entire timeline like a single tween

**Creating a Timeline**:
\`\`\`javascript
const tl = gsap.timeline();
\`\`\`

**Timeline Configuration Options**:
- **paused**: Pause when created
- **repeat**: Repeat count (-1 for infinite)
- **yoyo**: Reverse playback
- **delay**: Overall delay
- **onComplete**: Callback on completion

**Position Parameter**:
The position parameter determines where an animation is inserted in the timeline, one of Timeline's most powerful features.

- **Default**: Added to end of timeline
- **Number**: "+=1" or "-=1" (relative to previous animation's end time)
- **Label**: "myLabel" or "myLabel+=0.5"
- **"<"**: Start at the same time as previous animation
- **">"**: Start after previous animation ends (default)
- **"<50%"**: Start when previous animation is 50% complete

**Timeline Control Methods**:
- **play()**, **pause()**, **resume()**, **reverse()**
- **restart()**, **seek()**, **progress()**
- **timeScale()**: Adjust playback speed`,
          codeExample: `// 1. Basic Timeline - Sequential animations
const tl = gsap.timeline();

tl.to(".box1", { x: 200, duration: 1 })
  .to(".box2", { y: 200, duration: 1 })
  .to(".box3", { rotation: 360, duration: 1 });

// 2. Timeline configuration
const tl2 = gsap.timeline({
  repeat: 2,              // Repeat 2 times
  yoyo: true,            // Reverse animation
  delay: 0.5,            // Delay 0.5 seconds
  onComplete: () => console.log("Complete!")
});

// 3. Position parameter - Start simultaneously
const tl3 = gsap.timeline();
tl3.to(".circle", { x: 200, duration: 2 })
   .to(".square", { y: 200, duration: 2 }, "<")  // Start with previous
   .to(".triangle", { rotation: 360, duration: 2 }, "<");

// 4. Position parameter - Start earlier
const tl4 = gsap.timeline();
tl4.to(".item1", { x: 100, duration: 1 })
   .to(".item2", { x: 100, duration: 1 }, "-=0.5")  // Start 0.5s earlier
   .to(".item3", { x: 100, duration: 1 }, "-=0.5");

// 5. Position parameter - Percentage
const tl5 = gsap.timeline();
tl5.to(".hero", { scale: 1.5, duration: 2 })
   .to(".text", { opacity: 1, duration: 1 }, "<50%")  // Start at 50%
   .to(".button", { y: 0, duration: 1 }, "<75%");     // Start at 75%

// 6. Labels - Named time points
const tl6 = gsap.timeline();
tl6.add("start")                                    // Add label
   .to(".logo", { scale: 1.2, duration: 1 })
   .add("middle")                                   // Middle label
   .to(".nav", { x: 0, duration: 1 })
   .to(".content", { opacity: 1, duration: 1 }, "middle")  // Start from label
   .add("end");

// 7. Complex page load animation
const pageLoad = gsap.timeline({ paused: true });

pageLoad
  .from(".header", { y: -100, opacity: 0, duration: 0.8 })
  .from(".nav-item", {
    y: -50,
    opacity: 0,
    duration: 0.5,
    stagger: 0.1
  }, "-=0.4")
  .from(".hero-title", {
    scale: 0.5,
    opacity: 0,
    duration: 1,
    ease: "back.out(1.7)"
  }, "-=0.3")
  .from(".hero-text", { y: 30, opacity: 0, duration: 0.6 })
  .from(".cta-button", {
    scale: 0,
    rotation: 180,
    duration: 0.8,
    ease: "elastic.out(1, 0.5)"
  }, "-=0.2");

// Trigger animation
pageLoad.play();

// 8. Timeline control
const controlTl = gsap.timeline();
controlTl.to(".box", { x: 300, duration: 3 });

// Control methods
controlTl.pause();              // Pause
controlTl.play();               // Play
controlTl.reverse();            // Reverse
controlTl.restart();            // Restart
controlTl.seek(1.5);           // Jump to 1.5 seconds
controlTl.progress(0.5);       // Jump to 50% progress
controlTl.timeScale(2);        // 2x speed playback

// 9. Nested Timeline
const masterTl = gsap.timeline();
const section1 = gsap.timeline();
const section2 = gsap.timeline();

section1
  .to(".s1-item1", { x: 100, duration: 1 })
  .to(".s1-item2", { y: 100, duration: 1 });

section2
  .to(".s2-item1", { rotation: 360, duration: 1 })
  .to(".s2-item2", { scale: 1.5, duration: 1 });

masterTl
  .add(section1)
  .add(section2, "-=0.5");  // section2 starts 0.5s earlier

// 10. Reusable animation function
function createFadeIn(element, delay = 0) {
  return gsap.from(element, {
    opacity: 0,
    y: 30,
    duration: 0.8,
    delay: delay
  });
}

const tl10 = gsap.timeline();
tl10.add(createFadeIn(".section1"))
    .add(createFadeIn(".section2"), "-=0.4")
    .add(createFadeIn(".section3"), "-=0.4");`,
        },
        {
          id: "scrolltrigger",
          name: "ScrollTrigger",
          link: "https://greensock.com/docs/v3/Plugins/ScrollTrigger",
          description: "ScrollTrigger is one of GSAP's most powerful plugins for creating scroll-based animation effects.",
          content: `ScrollTrigger is a core GSAP plugin that triggers and controls animations based on page scroll position. This plugin makes creating scroll-driven animations incredibly simple and powerful.

**Core Concepts**:

1. **Trigger**:
   - Defines the element that triggers the animation
   - Triggers animation when element enters viewport

2. **Trigger Points**:
   - **start**: Where the animation begins
   - **end**: Where the animation ends
   - Format: "trigger-position viewport-position"
   - Example: "top center" triggers when element top reaches viewport center

3. **Scrub (Follow Scroll)**:
   - Animation progress syncs with scroll position
   - Can be true or a number (smooth transition time)

4. **Pin (Fixed Element)**:
   - Fixes element during animation
   - Commonly used for parallax effects and content display

5. **Markers**:
   - Shows trigger points during development
   - Helps debug and understand trigger timing

**Common Configuration Options**:
- **trigger**: Trigger element
- **start/end**: Trigger point positions
- **scrub**: Whether to follow scroll
- **pin**: Whether to fix element
- **snap**: Whether to snap to specified positions
- **toggleActions**: Behavior on enter/leave
- **anticipatePin**: Optimize pin performance

**Toggle Actions**:
Format: "onEnter onLeave onEnterBack onLeaveBack"
Actions: play, pause, resume, reset, restart, complete, reverse, none`,
          codeExample: `// First register the plugin
gsap.registerPlugin(ScrollTrigger);

// 1. Basic ScrollTrigger
gsap.to(".fade-in", {
  opacity: 1,
  y: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".fade-in",
    start: "top 80%",      // Trigger when element top reaches 80% of viewport
    end: "top 20%",        // End when element top reaches 20% of viewport
    markers: true          // Show markers (development use)
  }
});

// 2. Scrub - Follow scroll
gsap.to(".parallax", {
  y: 200,
  scrollTrigger: {
    trigger: ".parallax",
    start: "top bottom",
    end: "bottom top",
    scrub: true            // Animation syncs with scroll
  }
});

// 3. Scrub with smoothing
gsap.to(".smooth-parallax", {
  y: 300,
  scrollTrigger: {
    trigger: ".smooth-parallax",
    start: "top bottom",
    end: "bottom top",
    scrub: 1               // 1 second smooth transition
  }
});

// 4. Pin - Fix element
gsap.to(".pinned-section", {
  scrollTrigger: {
    trigger: ".pinned-section",
    start: "top top",
    end: "+=500",          // Pin for 500px of scroll
    pin: true,             // Fix element
    scrub: 1
  }
});

// 5. Toggle Actions - Control animation behavior
gsap.from(".reveal", {
  opacity: 0,
  x: -100,
  duration: 1,
  scrollTrigger: {
    trigger: ".reveal",
    start: "top 80%",
    end: "top 20%",
    toggleActions: "play none none reverse"
    // onEnter play, onLeave none, onEnterBack none, onLeaveBack reverse
  }
});

// 6. Batch - Process multiple elements
ScrollTrigger.batch(".batch-item", {
  onEnter: batch => gsap.to(batch, {
    opacity: 1,
    y: 0,
    stagger: 0.15,
    duration: 1
  }),
  start: "top 90%",
  once: true               // Trigger only once
});

// 7. Timeline with ScrollTrigger
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".animation-section",
    start: "top top",
    end: "+=3000",         // 3000px of scroll distance
    scrub: 1,
    pin: true
  }
});

tl.to(".box1", { x: 400, rotation: 360 })
  .to(".box2", { y: 300, scale: 2 })
  .to(".box3", { opacity: 0, x: -400 });

// 8. Horizontal scroll
gsap.to(".horizontal-sections", {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".horizontal-container",
    pin: true,
    scrub: 1,
    snap: 1 / (sections.length - 1),
    end: () => "+=" + document.querySelector(".horizontal-sections").offsetWidth
  }
});

// 9. Parallax effect
gsap.to(".background", {
  y: (i, target) => -ScrollTrigger.maxScroll(window) * target.dataset.speed,
  ease: "none",
  scrollTrigger: {
    start: 0,
    end: "max",
    invalidateOnRefresh: true,
    scrub: 0
  }
});

// 10. Progress bar
gsap.to(".progress-bar", {
  scaleX: 1,
  ease: "none",
  scrollTrigger: {
    trigger: "body",
    start: "top top",
    end: "bottom bottom",
    scrub: 0.3
  }
});

// 11. Snap - Snap effect
gsap.to(".snap-section", {
  scrollTrigger: {
    trigger: ".snap-container",
    start: "top top",
    end: "bottom bottom",
    snap: {
      snapTo: 1 / 3,       // Snap to multiples of 33.33%
      duration: 0.5,
      ease: "power2.inOut"
    }
  }
});

// 12. Text line-by-line reveal
gsap.from(".line", {
  opacity: 0,
  y: 50,
  duration: 1,
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".text-container",
    start: "top 70%",
    toggleActions: "play none none reverse"
  }
});

// 13. Image sequence animation
const canvas = document.querySelector("#image-sequence");
const context = canvas.getContext("2d");
const frameCount = 148;
const images = [];
const imageSeq = { frame: 0 };

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = \`./frames/frame\${i.toString().padStart(4, '0')}.jpg\`;
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: "none",
  scrollTrigger: {
    trigger: ".image-sequence-section",
    start: "top top",
    end: "+=3000",
    scrub: 0.5,
    pin: true
  },
  onUpdate: render
});

function render() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.drawImage(images[imageSeq.frame], 0, 0);
}

// 14. Refresh ScrollTrigger (responsive design)
ScrollTrigger.refresh();

// 15. Clear all ScrollTriggers
ScrollTrigger.getAll().forEach(trigger => trigger.kill());`,
        },
        {
          id: "easing",
          name: "Easing Functions",
          link: "https://greensock.com/docs/v3/Eases",
          description: "Easing functions control the animation curve, making animations look more natural and interesting.",
          content: `Easing functions define how animation changes over time. Appropriate easing functions make animations look more natural and appealing. GSAP provides a rich set of built-in easing functions.

**Why Do We Need Easing?**
- Linear animations (no easing) look mechanical and unnatural
- Real-world motion always has acceleration and deceleration
- Different easing gives different feelings and emotions

**GSAP Built-in Easing Types**:

1. **Power Eases** (most common):
   - power1, power2, power3, power4
   - Each has .in, .out, .inOut variants
   - Higher numbers create steeper curves

2. **Back**:
   - Overshoots target then returns
   - Suitable for bouncy, fun effects
   - back.in, back.out, back.inOut

3. **Elastic**:
   - Spring-like elastic effect
   - Suitable for playful, lively animations
   - elastic.in, elastic.out, elastic.inOut

4. **Bounce**:
   - Bouncing effect
   - Suitable for falling or collision animations
   - bounce.in, bounce.out, bounce.inOut

5. **Circ**:
   - Circular curve
   - Smooth acceleration/deceleration
   - circ.in, circ.out, circ.inOut

6. **Expo**:
   - Exponential curve
   - Very fast acceleration/deceleration
   - expo.in, expo.out, expo.inOut

7. **Sine**:
   - Sine curve
   - Smoothest easing
   - sine.in, sine.out, sine.inOut

**Easing Variants**:
- **.in**: Start slow, end fast
- **.out**: Start fast, end slow (most common)
- **.inOut**: Slow at start and end, fast in middle

**Custom Easing**:
- Use CustomEase plugin to create fully custom easing curves
- Import easing curves from SVG paths`,
          codeExample: `// 1. Power Eases - Most commonly used
gsap.to(".box1", { x: 300, duration: 2, ease: "power1.out" });
gsap.to(".box2", { x: 300, duration: 2, ease: "power2.out" });
gsap.to(".box3", { x: 300, duration: 2, ease: "power3.out" });
gsap.to(".box4", { x: 300, duration: 2, ease: "power4.out" });

// 2. Back - Overshoot and return
gsap.to(".back-demo", {
  x: 300,
  duration: 1.5,
  ease: "back.out(1.7)"    // Parameter controls overshoot amount
});

// Common for entrance animations
gsap.from(".card", {
  scale: 0,
  rotation: -180,
  duration: 1,
  ease: "back.out(1.7)"
});

// 3. Elastic - Elastic effect
gsap.to(".elastic-demo", {
  y: 200,
  duration: 2,
  ease: "elastic.out(1, 0.3)"  // (amplitude, period)
});

// Button bounce effect
gsap.from(".button", {
  scale: 0,
  duration: 1.5,
  ease: "elastic.out(1, 0.5)"
});

// 4. Bounce - Bounce effect
gsap.to(".ball", {
  y: 300,
  duration: 2,
  ease: "bounce.out"
});

// Drop animation
gsap.from(".drop-item", {
  y: -500,
  duration: 1.5,
  ease: "bounce.out",
  stagger: 0.1
});

// 5. Easing comparison
const eases = [
  "none",              // Linear
  "power1.out",
  "power2.out",
  "power3.out",
  "power4.out",
  "back.out(1.7)",
  "elastic.out(1, 0.3)",
  "bounce.out",
  "circ.out",
  "expo.out",
  "sine.out"
];

eases.forEach((ease, i) => {
  gsap.to(\`.box-\${i}\`, {
    x: 500,
    duration: 2,
    ease: ease,
    delay: i * 0.2
  });
});

// 6. In, Out, InOut comparison
// .in - Start slow, end fast
gsap.to(".in-box", {
  x: 300,
  duration: 2,
  ease: "power2.in"
});

// .out - Start fast, end slow (most natural)
gsap.to(".out-box", {
  x: 300,
  duration: 2,
  ease: "power2.out"
});

// .inOut - Slow at start and end
gsap.to(".inout-box", {
  x: 300,
  duration: 2,
  ease: "power2.inOut"
});

// 7. Custom parameters
// Back with custom overshoot
gsap.to(".custom-back", {
  rotation: 360,
  duration: 2,
  ease: "back.inOut(3)"    // Larger overshoot value
});

// Elastic with custom parameters
gsap.to(".custom-elastic", {
  y: 200,
  duration: 2,
  ease: "elastic.out(2, 0.5)"  // Larger amplitude
});

// 8. Real application - Page element entrance
// Title
gsap.from(".hero-title", {
  y: -100,
  opacity: 0,
  duration: 1,
  ease: "power3.out"
});

// Cards
gsap.from(".card", {
  scale: 0.8,
  opacity: 0,
  duration: 0.8,
  stagger: 0.1,
  ease: "back.out(1.4)"
});

// Button
gsap.from(".cta-button", {
  scale: 0,
  duration: 1.2,
  ease: "elastic.out(1, 0.5)",
  delay: 0.5
});

// 9. Menu animation
const menuTl = gsap.timeline({ paused: true });
menuTl.to(".menu-overlay", {
  opacity: 1,
  duration: 0.3,
  ease: "none"
})
.from(".menu-item", {
  x: -100,
  opacity: 0,
  duration: 0.5,
  stagger: 0.1,
  ease: "power2.out"
}, "-=0.1");

// 10. Hover effect
const button = document.querySelector(".hover-button");

button.addEventListener("mouseenter", () => {
  gsap.to(button, {
    scale: 1.1,
    duration: 0.3,
    ease: "back.out(1.7)"
  });
});

button.addEventListener("mouseleave", () => {
  gsap.to(button, {
    scale: 1,
    duration: 0.3,
    ease: "power2.out"
  });
});

// 11. Loading animation
gsap.from(".loader-bar", {
  scaleX: 0,
  duration: 2,
  ease: "power3.inOut",
  transformOrigin: "left center"
});

// 12. CustomEase example (requires CustomEase plugin)
// Register plugin
gsap.registerPlugin(CustomEase);

// Create custom easing from SVG path
CustomEase.create("customBounce", "M0,0 C0.14,0 0.242,0.438 0.272,0.561 0.313,0.728 0.354,0.963 0.362,1 0.37,0.985 0.414,0.873 0.455,0.811 0.51,0.726 0.573,0.753 0.586,0.762 0.662,0.812 0.719,0.981 0.726,1.001 0.733,0.98 0.76,0.887 0.811,0.811 0.864,0.733 0.936,0.792 0.946,0.8 1.002,0.847 1.01,0.992 1.013,1 ");

gsap.to(".custom-ease-box", {
  x: 500,
  duration: 2,
  ease: "customBounce"
});

// 13. Recommended easing for different scenarios
// Entrance animation
gsap.from(".entrance", {
  opacity: 0,
  y: 50,
  ease: "power2.out"
});

// Exit animation
gsap.to(".exit", {
  opacity: 0,
  y: -50,
  ease: "power2.in"
});

// Elastic button
gsap.to(".elastic-button", {
  scale: 1.2,
  ease: "elastic.out(1, 0.3)"
});

// Smooth scroll
gsap.to(window, {
  scrollTo: ".section",
  ease: "power3.inOut"
});`,
        },
        {
          id: "plugins",
          name: "Plugins System",
          link: "https://greensock.com/docs/v3/Plugins",
          description: "GSAP plugins extend core functionality, providing advanced features like scroll, drag, and path animations.",
          content: `GSAP's plugin system greatly extends its core functionality, allowing you to easily implement complex animation effects. Plugins need to be registered separately before use.

**Core Plugins** (Free):

1. **ScrollTrigger**:
   - Scroll-based animation triggering
   - One of the most popular plugins
   - Supports pin, scrub, snap features

2. **Draggable**:
   - Makes elements draggable
   - Supports drag bounds, inertia, collision detection
   - Can combine with other animations

3. **EaselPlugin**:
   - Adds animation to EaselJS/CreateJS objects
   - Used for Canvas animations

4. **PixiPlugin**:
   - Adds animation to Pixi.js objects
   - WebGL high-performance animations

5. **MotionPathPlugin**:
   - Motion along SVG paths
   - Supports auto rotation
   - Path alignment and offset

6. **TextPlugin**:
   - Text content animation effects
   - Character-by-character text display

**Premium Plugins** (Requires Club GreenSock membership):

1. **ScrollSmoother**:
   - Smooth scroll effects
   - Enhances user experience

2. **SplitText**:
   - Splits text into characters, words, or lines
   - Used for text animation effects

3. **MorphSVG**:
   - SVG shape morphing
   - Smooth shape transitions

4. **DrawSVG**:
   - SVG path stroke animations
   - Drawing effects

**Register and Use Plugins**:
Must register plugins before use:
\`\`\`javascript
gsap.registerPlugin(ScrollTrigger, Draggable);
\`\`\``,
          codeExample: `// 1. ScrollTrigger plugin (detailed above)
gsap.registerPlugin(ScrollTrigger);

gsap.to(".scroll-element", {
  x: 400,
  scrollTrigger: {
    trigger: ".scroll-element",
    start: "top 80%",
    end: "top 20%",
    scrub: true
  }
});

// 2. Draggable plugin
gsap.registerPlugin(Draggable);

// Basic drag
Draggable.create(".draggable", {
  type: "x,y",           // Draggable directions
  bounds: ".container",  // Drag boundaries
  inertia: true,        // Inertia effect
  onDrag: function() {
    console.log("Dragging", this.x, this.y);
  },
  onDragEnd: function() {
    console.log("Drag ended");
  }
});

// Horizontal drag only
Draggable.create(".horizontal-drag", {
  type: "x",
  bounds: { minX: 0, maxX: 500 }
});

// Vertical drag only
Draggable.create(".vertical-drag", {
  type: "y",
  bounds: { minY: 0, maxY: 300 }
});

// Rotation drag
Draggable.create(".rotation-drag", {
  type: "rotation",
  inertia: true
});

// 3. MotionPath plugin
gsap.registerPlugin(MotionPathPlugin);

// Motion along SVG path
gsap.to(".path-follower", {
  duration: 5,
  repeat: -1,
  ease: "none",
  motionPath: {
    path: "#motion-path",      // SVG path selector
    align: "#motion-path",     // Align to path
    autoRotate: true,          // Auto rotate to face motion direction
    alignOrigin: [0.5, 0.5]    // Align origin
  }
});

// Define path using array
gsap.to(".custom-path", {
  duration: 3,
  motionPath: {
    path: [
      { x: 0, y: 0 },
      { x: 100, y: 50 },
      { x: 200, y: 0 },
      { x: 300, y: 100 }
    ],
    curviness: 1.5,           // Curve amount
    autoRotate: 90            // Rotation offset
  }
});

// 4. Text plugin
gsap.registerPlugin(TextPlugin);

// Character-by-character display
gsap.to(".text-content", {
  duration: 3,
  text: {
    value: "This text will appear character by character!",
    delimiter: ""            // Empty string for character-by-character
  },
  ease: "none"
});

// Word-by-word display
gsap.to(".text-words", {
  duration: 3,
  text: {
    value: "Each word will appear sequentially",
    delimiter: " "           // Space as delimiter
  },
  ease: "none"
});

// 5. EaselPlugin - Canvas animation
gsap.registerPlugin(EaselPlugin);

const stage = new createjs.Stage("canvas");
const circle = new createjs.Shape();
circle.graphics.beginFill("red").drawCircle(0, 0, 50);
stage.addChild(circle);

gsap.to(circle, {
  duration: 2,
  x: 400,
  y: 300,
  rotation: 360,
  ease: "power2.inOut"
});

// 6. PixiPlugin - Pixi.js animation
gsap.registerPlugin(PixiPlugin);

const sprite = new PIXI.Sprite.from("image.png");

gsap.to(sprite, {
  duration: 2,
  pixi: {
    x: 400,
    y: 300,
    rotation: 360,
    alpha: 0.5,
    tint: 0xff0000
  }
});

// 7. Combined example - Drag + MotionPath
gsap.registerPlugin(Draggable, MotionPathPlugin);

const draggableElement = document.querySelector(".drag-to-path");

// Return along path after drag ends
Draggable.create(draggableElement, {
  type: "x,y",
  onDragEnd: function() {
    gsap.to(draggableElement, {
      duration: 2,
      motionPath: {
        path: "#return-path",
        align: "#return-path",
        autoRotate: true
      },
      ease: "power2.inOut"
    });
  }
});

// 8. ScrollTrigger + MotionPath
gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

gsap.to(".scroll-path-element", {
  motionPath: {
    path: "#scroll-path",
    align: "#scroll-path",
    autoRotate: true
  },
  scrollTrigger: {
    trigger: ".path-section",
    start: "top top",
    end: "bottom bottom",
    scrub: 1,
    pin: true
  }
});

// 9. Multiple plugins combined - Interactive cards
gsap.registerPlugin(Draggable, ScrollTrigger);

const cards = gsap.utils.toArray(".interactive-card");

// ScrollTrigger entrance
cards.forEach(card => {
  gsap.from(card, {
    y: 100,
    opacity: 0,
    scrollTrigger: {
      trigger: card,
      start: "top 80%",
      end: "top 50%",
      scrub: 1
    }
  });

  // Drag functionality
  Draggable.create(card, {
    type: "x,y",
    bounds: ".cards-container",
    inertia: true,
    onPress: function() {
      gsap.to(card, {
        scale: 1.1,
        duration: 0.2,
        ease: "back.out(1.7)"
      });
    },
    onRelease: function() {
      gsap.to(card, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out"
      });
    }
  });
});

// 10. Text animation sequence
gsap.registerPlugin(TextPlugin);

const textTl = gsap.timeline();

textTl
  .to(".title", {
    duration: 2,
    text: "Welcome to the GSAP World!",
    ease: "none"
  })
  .to(".subtitle", {
    duration: 2,
    text: "Powerful animation library, infinite possibilities.",
    ease: "none"
  }, "+=0.5")
  .from(".description", {
    opacity: 0,
    y: 30,
    duration: 1,
    ease: "power2.out"
  }, "-=0.5");

// 11. Real example: Draggable progress bar
gsap.registerPlugin(Draggable);

const progressBar = document.querySelector(".progress-bar");
const progressFill = document.querySelector(".progress-fill");

Draggable.create(progressBar, {
  type: "x",
  bounds: ".progress-container",
  onDrag: function() {
    const progress = this.x / this.maxX;
    gsap.to(progressFill, {
      scaleX: progress,
      duration: 0.1
    });
  }
});

// 12. Real example: Image sequence + drag control
gsap.registerPlugin(Draggable);

const imageSequence = { frame: 0 };
const totalFrames = 100;

Draggable.create(".sequence-control", {
  type: "x",
  bounds: { minX: 0, maxX: 500 },
  onDrag: function() {
    const progress = this.x / this.maxX;
    imageSequence.frame = Math.floor(progress * (totalFrames - 1));
    renderFrame(imageSequence.frame);
  }
});

function renderFrame(frameNumber) {
  // Render corresponding frame image
  console.log("Rendering frame:", frameNumber);
}`,
        },
      ],
    },
    {
      title: "Practical Examples",
      items: [
        {
          id: "gsap-examples",
          name: "GSAP Practical Examples",
          link: "https://greensock.com/showcase/",
          description: "Learn GSAP animations, timelines, and ScrollTrigger through practical examples.",
          content: "These examples demonstrate the application of GSAP in real-world development, including scroll animations, timeline sequences, and interactive effects. Each example contains complete code implementation and detailed explanations to help you quickly master the essence of GSAP."
        },
      ],
    },
  ],
};
