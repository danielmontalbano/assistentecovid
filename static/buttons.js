const textElement = document.getElementById('text');
    const optionsButtons = document.getElementById('option-buttons');

    let state = {}



    function startGame(){
        state = {}
        showTextNode(1)
    }
    
    function showTextNode(textNodeIndex){
        const textNode = textNodes.find(textNode => textNode.id === textNodeIndex);
        textElement.innerText = textNode.text;
        while(optionsButtons.firstChild){
            optionsButtons.removeChild(optionsButtons.firstChild)
        }

        textNode.options.forEach(option =>{
            if(showOption(option)){
                const button = document.createElement('button')
                button.innerText = option.text
                //button.classList.add('btn')
                button.addEventListener('click',()=> selectOption(option))
                optionsButtons.appendChild(button)
            }
        }

        )
    }
    
    function showOption(option){
        return option.requiredState == null || option.requiredState(state)
    }
    function selectOption(option){
        const nextTextNodeId = option.nextText
        state = Object.assign(state,option.setState)
        showTextNode(nextTextNodeId)
    }

    const textNodes = [
        {
            id : 1,
            text : 'Sei positivo?',
            options : [
                {
                    text : 'si',
                    setState: {
                        blueGoo: true
                    },
                    nextText: 2
                },
                {
                    test : 'no',
                    nextText : 2
                }
            ]
        },
        {
            id: 2,
            text: 'Hai sintomi?',
            options:[
                {
                    text: 'si',
                    requiredState: (currentState) => currentState.blueGood,
                    setState: {
                        blueGoo: false
                    },
                }
            ]
        }
        
    ]

    startGame();