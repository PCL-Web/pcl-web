<script>
import {ApiUrl, ImageUrl} from '../stores.js';
import ActionButton from './ActionButton.svelte';
export let content;

if (!content) {
    throw new Error('Article component requires a content object');
}

    let positionOfCopy = "copyleft";
    let positionOfImage = "imageright";

    if (content.data.attributes.Position)  {
        let positionArray = content.data.attributes.Position.split(",");

        if (positionArray.length > 1) {
            positionArray[0] = positionArray[0].replace(/\s/g, "").trim().toLowerCase();
            positionArray[1] = positionArray[1].replace(/\s/g, "").trim().toLowerCase();
        } else {
            positionArray[0] = positionArray[0].replace(/\s/g, "").trim().toLowerCase();
            positionArray[1] = "imagecenter";
        }
         positionOfCopy = positionArray[0];
         positionOfImage = positionArray[1];
    }


let articleDetails;
let articleDetailsFetch;

$: articleDetailsFetch = updateArticle(content).then(data => {articleDetails = data;}) // will run whenever data updates

async function updateArticle(content) {
  try {
    const response = await fetch(`${ApiUrl}/api/articles/${content.data.id}?populate=*`);
    if (!response.ok) {
      throw new Error('Network response was not ok.');
    }
    return response.json();
    
  } catch (error) {
    console.error('There was a problem fetching the page data:', error);
  }
}

   


</script>


 <div class="articlecontainer">
    {#if content.data.attributes.ArticleTitle}
     <div class="articlecopy {positionOfCopy}">
        <h3 class="articletitle">{@html content.data.attributes.ArticleTitle}</h3>
        <div class="articletext">{@html content.data.attributes.ArticleText}</div>
        <ActionButton content={content.data.id} />
    </div>
        <div class="articleimage {positionOfImage}">
            
            {#if articleDetails}
                {#if articleDetails.data.attributes.Media.data}
                    <img src="{ImageUrl}{articleDetails.data.attributes.Media.data.attributes.formats.medium.url}" 
                        alt="{articleDetails.data.attributes.Media.data.attributes.alternativeText}"/>
                {/if}
            {/if}
        </div> 
    {/if}
</div> 


<style>
 .articlecontainer {
    background-color: #f1f1f1;
    padding: 10px;
    margin-bottom:10px;
    min-height:20vh;
    width:auto;
    overflow: auto;
}
.articletitle {
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 1.2;
    color: #212529;
    margin-bottom: 0.5rem;
}
.articletext {
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    margin-bottom: 0.5rem;
}
.articleimage {
    width: 100%;
    height: auto;
} 
.copyleft {
    float: left;
    width: 50%;
    padding: 10px;
}
.imageright {
    float: right;
    width: 50%;
    padding: 10px;
}
.imageright img {
    width: 100%;
    height: auto; 
    object-fit: contain 
}

.copyright {
    float: right;
    width: 50%;
    padding: 10px;
}
.imageleft {
    float: left;
    width: 50%;
    padding: 10px;
}
.imageleft img {
    width: 100%;
    height: auto; 
    object-fit: contain 
}
</style>