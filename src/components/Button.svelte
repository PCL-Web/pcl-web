<script>
    import { ApiUrl } from '../stores.js';
    export let data;
    export let id;
    export let sectionids;

    function handleScroll() {

        // scroll to the next section - get the next section id
         let nextSectionId = sectionids[sectionids.indexOf(id) + 1];
        if (!nextSectionId) {
            nextSectionId = sectionids[0];
        }
        const sections = document.querySelectorAll('id');
        
        let mySection = null;
        for (const section of sections) {

            if (parseInt(section.textContent.trim()) === nextSectionId) {
                console.log("found", section.textContent.trim(), nextSectionId);
                mySection = section.parentElement;
                console.log(mySection);
                break;
            }
        }
        
        console.log("element", mySection);

        // scroll using ease in
        mySection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    // show arrow or not
    let ShowArrow = false;
    let ArrowImage = `${ApiUrl}/Uploads/Path_58_ca3aba707a.png`;  // to do get this in globals
    if (data.ShowArrow === true || data.ShowArrow ==null) {
        ShowArrow = true;
    }
</script>

<button class={data.Style} on:click={handleScroll} >
    {#if ShowArrow}
        <div class="arrow"><img src={ArrowImage} alt="Click here"/></div>
    {/if}
    <!-- default -->
    <slot>Click here</slot>
</button>

<style>
button {
    color: white;
    padding: 10px 20px;
    margin-bottom:10px;
    min-height:10px;
    width:auto;
    
    border-radius: 30px;
    border: none;

    position: relative; /* Set the button's position to relative to make the absolute positioning of the div relative to the button */
    padding-left: 20px;
}

.primary {
    background-color: #ff9100;
    box-shadow: 0px 1px 0px 0px silver;
}
.primary:hover {
    background-color: #ff9100;
    box-shadow: 2px 2px 0px 0px gray;
}
.arrow {
    position: absolute;
    left: -20px; /* Move the div 10 pixels to the left of the button */
    top: 100%; /* Position the div vertically centered relative to the button */
    transform: translateY(-50%); /* Move the div up by half of its height to vertically center it */
    width: 40px;
    height: 40px;
}
.arrow img {
    width:80%;
    height:100%
}
</style>