<script>
import { ImageUrl } from '../stores';
import Button from '../components/Button.svelte';
export let data;
export let sectionids;

$: console.log("data id", data.id);

let backgroundCircleGradient = "backgroundCircleGradient";

// get position (left/right) of copy and image
let GetPostionOfContent = data.Style.CopyPosition.split(",").map(s => s.replace(/\s/g, "").trim().toLowerCase());
let CopyPosition; let ImagePosition;
if (GetPostionOfContent) {
  CopyPosition = GetPostionOfContent[0];
  ImagePosition = GetPostionOfContent[1];
}
// show gradient circle or not
let ShowGradientCircle = data.Style.ShowGradientCircle;
if (!ShowGradientCircle) {
  backgroundCircleGradient = "";
}
// get gradient direction of background (top to bottom, bottom to top)
let GetGradientDirection = data.Style.GradientDirection;
let GradientDirection = "toptobottom";
if (GetGradientDirection) {
  GetGradientDirection = GetGradientDirection.replace(/\s/g, "").trim().toLowerCase();
  GradientDirection = GetGradientDirection;
}
// get the backgroundcolour
let GetBackgroundColour = data.Style.BackgroundColour;
if (GetBackgroundColour) {
  GetBackgroundColour = GetBackgroundColour.replace(/\s/g, "").trim().toLowerCase();
  GradientDirection = GetBackgroundColour;
}



</script>

<section class={GradientDirection}>
  <id>{data.id}</id>

  <div class="container">

    <div class="footsteps"></div>

     <div class="copy {CopyPosition}">
        <h1>{@html data.Title}</h1>
        <div class="content">{@html data.Content}</div>
        <Button data={data.Button} id={data.id} sectionids={sectionids}>{data.Button.Name}</Button>
    </div>
    
    <div class="graphic {backgroundCircleGradient} {ImagePosition}">
        
        {#if data.Media.data}
                <img src="{ImageUrl}{data.Media.data.attributes.url}" 
                    alt="{data.Media.data.attributes.alternativeText}"/>
        {/if}
    </div> 

  </div> 

</section>

<style>
section {
  padding: 60px 0px 0px 0px;
  min-height:20vh;
  height:100vh;
  width:auto;
  overflow:visible;
  display: flex;
  flex-wrap: wrap;
}

section .content {
  padding: 20px 0px;
}

/* rgba(109, 187, 217, 0.5), 50% opacity version of #6DBBD9 
    rgba(223, 229, 237, 0.5) /* 50% opacity version of #DFE5ED */

.toptobottom{
  background: linear-gradient(#ffffff, #6DBBD9);
}
.bottomtotop{
  background: linear-gradient(#6DBBD9,rgba(223, 229, 237, 0.3));
}
.backgroundCircleGradient {
  background: radial-gradient(circle at 50% 50%, rgba(223, 229, 237, 0.8), rgba(109, 187, 217, 0.5));
  border-radius: 50%;
}
.container {
    overflow: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    min-width: 100%;
    overflow:visible;
    overflow-x: hidden;
    height: AUTO;
}

.copy.copyright {
  order:2 !important;
  min-width:45vw
}


.copy {
  margin: 5vw 0vw 5vw 10vw;
  width:50%;
  order: 1;
  align-self: flex-start;
}

.copy .content, .copy h1 {
max-width:75%
}

.graphic {
    width: 60%;
    height: 50vw;
    margin-right:-155px;
    justify-content: right; 
    align-self: flex-end;
    position:relative;
    overflow:visible;
    z-index:1;
    order: 2;
} 

.graphic.imageleft {
  order:1 !important;
  margin-left:5vw;
  margin-top:15vh;
}

.graphic img {
  position: absolute;
  z-index: 1;
  max-height: 100%;
  max-width: 30rem;
  object-fit: contain; 
  object-position: center;
  top: 10%;
}

</style>