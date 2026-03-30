const textLimitation = (text,maxLength) =>{
    if(!text) return;

    const splitWords = text.split(" ");

    const response = splitWords.length <= maxLength ? text : splitWords.slice(0,maxLength).join(" ") +"...";    
    
    return response
}

export {textLimitation}