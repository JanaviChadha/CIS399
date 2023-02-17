// 1. COMPLETE VARIABLE AND FUNCTION DEFINITIONS

const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

// 2. RAW TEXT STRINGS

var storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day."

var insertX = ["Willy the Goblin" , "Big Daddy" , "Father Christmas"]

var insertY = ["the soup kitchen" , "Disneyland" , "the White House"]

var insertZ = ["spontaneously combusted" , "melted into a puddle on the sidewalk" , "turned into a slug and crawled away"]


// 3. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION

randomize.addEventListener('click', result);

function result() {

    var newStory = storyText; 

    var xItem = randomValueFromArray(insertX)
    var yItem = randomValueFromArray(insertY)
    var zItem = randomValueFromArray(insertZ)

    newStory = newStory.replace(":insertx:",xItem);
    newStory = newStory.replace(":inserty:",yItem);
    newStory = newStory.replace(":insertz:",zItem);
    newStory = newStory.replace(":insertx:",xItem);

    if(customName.value !== '') {
        var toReplace = 'Bob'
        const name = customName.value;
        newStory = newStory.replace(toReplace, name);

    }

    if(document.getElementById("uk").checked) {
        
    const weight = Math.round(300*0.0714286)+' stone';
    var weightToReplace = '300 pounds' 
    newStory = newStory.replace(weightToReplace, weight);
    const temperature =  Math.round((94 - 32) * (5/9))+ ' centigrade';
    var tempToReplace = '94 fahrenheit'
    newStory = newStory.replace(tempToReplace, temperature);


    }

    story.textContent = newStory;
    story.style.visibility = 'visible';
}
