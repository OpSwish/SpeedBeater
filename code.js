var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["9df5e08a-7353-4095-b4d1-e68ed83578e3","ded1f961-c8f2-45ba-94e3-7d01a2d30c67","62643c78-3eb3-4d80-a1f7-7f2c04bce08e","89595b76-28e6-49fb-8328-5412ca935ab5","1ff0957e-1e33-4b1b-8821-4e951b52aeaa","a8d72e6d-84f5-4d5b-9caa-c2f5e2eb4197","dca15074-1f55-446e-bb4e-d75093b7e95e"],"propsByKey":{"9df5e08a-7353-4095-b4d1-e68ed83578e3":{"name":"kid_15_side_1","sourceUrl":null,"frameSize":{"x":12,"y":22},"frameCount":1,"looping":true,"frameDelay":12,"version":"H7ZWd_z45minNkraf4.hGfdXIQj1ZFbS","categories":["characters"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":12,"y":22},"rootRelativePath":"assets/9df5e08a-7353-4095-b4d1-e68ed83578e3.png"},"ded1f961-c8f2-45ba-94e3-7d01a2d30c67":{"name":"kid_15_walking_1","sourceUrl":null,"frameSize":{"x":217,"y":380},"frameCount":1,"looping":true,"frameDelay":12,"version":"7uRuNh0vYs_PB1hihvVy4Oxb_jDGZefO","categories":["characters"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":217,"y":380},"rootRelativePath":"assets/ded1f961-c8f2-45ba-94e3-7d01a2d30c67.png"},"62643c78-3eb3-4d80-a1f7-7f2c04bce08e":{"name":"cave","sourceUrl":"assets/api/v1/animation-library/gamelab/noi6SU.ST7VfqHGoH6ijJX1cNwdcFcZM/category_backgrounds/background_cave.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"noi6SU.ST7VfqHGoH6ijJX1cNwdcFcZM","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/noi6SU.ST7VfqHGoH6ijJX1cNwdcFcZM/category_backgrounds/background_cave.png"},"89595b76-28e6-49fb-8328-5412ca935ab5":{"name":"animation_1","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"peD7802i4ikWxCdaPCtBieQEOYAxGOXD","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/89595b76-28e6-49fb-8328-5412ca935ab5.png"},"1ff0957e-1e33-4b1b-8821-4e951b52aeaa":{"name":"cardDiamonds5_1","sourceUrl":"assets/api/v1/animation-library/gamelab/HPvOVNjZUhS_O8wcdkEiSmNoEPi97BE7/category_gameplay/cardDiamonds5.png","frameSize":{"x":140,"y":190},"frameCount":1,"looping":true,"frameDelay":2,"version":"HPvOVNjZUhS_O8wcdkEiSmNoEPi97BE7","categories":["gameplay"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":140,"y":190},"rootRelativePath":"assets/api/v1/animation-library/gamelab/HPvOVNjZUhS_O8wcdkEiSmNoEPi97BE7/category_gameplay/cardDiamonds5.png"},"a8d72e6d-84f5-4d5b-9caa-c2f5e2eb4197":{"name":"animation_2","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"CwJS52D_iIBPOQjZQ0HuwjPMNu6OaQxA","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/a8d72e6d-84f5-4d5b-9caa-c2f5e2eb4197.png"},"dca15074-1f55-446e-bb4e-d75093b7e95e":{"name":"animation_3","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"UQzA7JOCamhrOQIduuDi4SW1VkOidVsj","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/dca15074-1f55-446e-bb4e-d75093b7e95e.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var speedBeater = createSprite(40,222,15,15);

var deathCounter = 0;
var gameState = "serve";

var crystal = createSprite(22,68,15,15);
crystal.shapeColor = "red";

var shape1 = createSprite(2,144,888,0.5);
shape1.shapeColor = "white";
var shape2 = createSprite(2,300,888,0.5);
shape2.shapeColor = "white";
var shape3 = createSprite(2,-5,888,45);
shape3.shapeColor = "white";

var nonOpenDoor = createSprite(10,224,20,150);
nonOpenDoor.shapeColor = "red";

var door1 = createSprite(320,85,21,126);
door1.shapeColor = "blue";
var door2 = createSprite(220,85,21,126);
door2.shapeColor = "blue";
var door3 = createSprite(140,85,21,126);
door3.shapeColor = "blue";
var door4 = createSprite(50,85,21,126);
door4.shapeColor = "blue";

var button1 = createSprite(354,23,30,20);
button1.shapeColor = "green";
var button2 = createSprite(254,133,30,20);
button2.shapeColor = "green";
var button3 = createSprite(180,30,30,20);
button3.shapeColor = "green";
var button4 = createSprite(78,133,30,20);
button4.shapeColor = "green";

var teleport1 = createSprite(390,224,20,150);
teleport1.shapeColor = "yellow";
var teleport2 = createSprite(390,94,20,150);
teleport2.shapeColor = "yellow";

var killer1 = createSprite(102,160,15,15);
killer1.velocityY = 8;
killer1.shapeColor = "orange";
var killer2 = createSprite(148,286,15,15);
killer2.velocityY = -8;
killer2.shapeColor = "orange";
var killer3 = createSprite(198,158,15,15);
killer3.velocityY = 8;
killer3.shapeColor = "orange";
var killer4 = createSprite(248,284,15,15);
killer4.velocityY = -8;
killer4.shapeColor = "orange";
var killer5 = createSprite(284,156,15,15);
killer5.velocityY = 8;
killer5.shapeColor = "orange";
var killer6 = createSprite(332,284,15,15);
killer6.velocityY = -8;
killer6.shapeColor = "orange";

var killer7 = createSprite(266,126,25,25);
killer7.shapeColor = "orange";
killer7.velocityY = -8;
var killer8 = createSprite(176,40,25,25);
killer8.shapeColor = "orange";
killer8.velocityY = 8;
var killer9 = createSprite(84,38,25,25);
killer9.shapeColor = "orange";
killer9.velocityY = -8;

function draw() {
  if(gameState === "serve"){
    background("black");
    stroke("green");
    textSize(25);
    text("Welcome to speedBeater",48,200);
    textSize(15);
    text("Press Enter to play",260,366);
    text("INSTRUCTION",22,22);
    text("*Press A,D to use you power",8,74);
    text("*touch the crystal You will be back to a human ",8,44);
    text("*Press arrow keys to walk normal",8,60);
    text("Fun Fact: you can phase throught stuff.",8,90);
    if(keyDown("enter")){
      gameState = "play";
      
    }
  }
  if(gameState ==="play"){
    background("black");
    drawSprites();
    textSize(15);
    text("Deaths"+deathCounter,44,362);
    createEdgeSprites();
    speedBeater.collide(edges);
    killer1.bounceOff(shape1);
    killer1.bounceOff(shape2);
    killer2.bounceOff(shape1);
    killer2.bounceOff(shape2);
    killer3.bounceOff(shape1);
    killer3.bounceOff(shape2);
    killer4.bounceOff(shape1);
    killer4.bounceOff(shape2);
    killer5.bounceOff(shape1);
    killer5.bounceOff(shape2);
    killer6.bounceOff(shape1);
    killer6.bounceOff(shape2);
    speedBeater.collide(shape1);
    speedBeater.collide(shape2);
    speedBeater.collide(shape3);
    speedBeater.collide(door1);
    speedBeater.collide(door2);
    speedBeater.collide(door3);
    speedBeater.collide(door4);
    killer7.bounceOff(shape1);
    killer7.bounceOff(shape3);
    killer8.bounceOff(shape1);
    killer8.bounceOff(shape3);
    killer9.bounceOff(shape1);
    killer9.bounceOff(shape3);
    
    
    if(keyDown("left")){
      speedBeater.velocityX = -3.5;
    }
    else if(keyDown("right")){
      speedBeater.velocityX = 3.5;
    }
    else if (keyDown("d")){
      speedBeater.velocityX = 25;
      playSound("assets/category_tap/vibrant_power_orb_touch_1.mp3");
    }
    else if(keyDown("a")){
      speedBeater.velocityX = -25;
      playSound("assets/category_tap/vibrant_power_orb_touch_1.mp3");
    }
    else if(keyDown("up")){
        speedBeater.velocityY = -3.5;
        
    }
    else if(keyDown("down")){
        speedBeater.velocityY = 3.5;
    }
    else{
      speedBeater.velocityX = 0;
      speedBeater.velocityY = 0;
    }
    
    if(speedBeater.isTouching(killer1)){
      deathCounter = deathCounter + 1;
      checkPoint1();
    }
    if(speedBeater.isTouching(killer2)){
      deathCounter = deathCounter + 1;
      checkPoint1();
    }
    if(speedBeater.isTouching(killer3)){
      deathCounter = deathCounter + 1;
      checkPoint1();
    }
    if(speedBeater.isTouching(killer4)){
      deathCounter = deathCounter + 1;
      checkPoint1();
    }
    if(speedBeater.isTouching(killer5)){
      deathCounter = deathCounter + 1;
      checkPoint1();
    }
    if(speedBeater.isTouching(killer6)){
      deathCounter = deathCounter + 1;
      checkPoint1();
    }
    if(speedBeater.isTouching(teleport1)){
      checkPoint2();
    }
    if(speedBeater.isTouching(killer7)){
      deathCounter = deathCounter + 1;
      checkPoint2();
      door1.x = 320;
      door1.y = 84;
      door2.y = 84;
      door2.x = 220;
      door3.x = 140;
      door3.y = 84;
      door4.y = 84;
      door4.x = 50;
    }
    if(speedBeater.isTouching(killer8)){
      deathCounter = deathCounter + 1;
      checkPoint2();
      door1.x = 320;
      door1.y = 84;
      door2.y = 84;
      door2.x = 220;
      door3.x = 140;
      door3.y = 84;
      door4.y = 84;
      door4.x = 50;
    }
      if(speedBeater.isTouching(killer9)){
      deathCounter = deathCounter + 1;
      checkPoint2();
      door1.x = 320;
      door1.y = 84;
      door2.y = 84;
      door2.x = 220;
      door3.x = 140;
      door3.y = 84;
      door4.y = 84;
      door4.x = 50;
    }
    
    if(speedBeater.isTouching(button1)){
      door1.x = 888;
      door1.y = 888;
    }
    if(speedBeater.isTouching(button2)){
      door2.x = 888;
      door2.y = 888;
    }
    if(speedBeater.isTouching(button3)){
      door3.x = 888;
      door3.y = 888;
    }
    if(speedBeater.isTouching(button4)){
      door4.x = 888;
      door4.y = 888;
    }
    if(speedBeater.isTouching(crystal)){
      gameState = "end";
    }
    if(gameState === "end"){
      background("black");
      stroke("red");
      textSize(17);
      text("thanks for getting me out of there",14,140);
      text("next time you see my i will be a human",14,164);
      text("Thanks for playing.",14,188);
      text("I hope you liked the game",200,378);
      text("*I know there are so many Bug, sorry about that*",8,13);
      text("*I am working on fixing those bugs.*",8,27);
    }
    
    
    
  }
  function checkPoint1(){
    speedBeater.x = 40;
    speedBeater.y = 222;
  }
  function checkPoint2(){
    speedBeater.x = 364;
    speedBeater.y = 84;
  }
  
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
