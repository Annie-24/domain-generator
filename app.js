let pronoun = ["I", "you", "she", "he", "we", "it"];
let adj = ["beautiful", "ugly", "dry", "fast", "hilarous", "long"];
let noun = ["cake", "Juan", "garden", "Brasil", "Germany", "Danmark"];
let domains = [".com", ".net", ".onion", ".io", ".us", ".org"];

for( let positionPronoun = 0 ; positionPronoun <= pronoun.length-1; positionPronoun++){
    for( let positionAdj = 0 ; positionAdj <= adj.length-1; positionAdj++){
    
    
    for( let positionNoun = 0 ; positionNoun <= noun.length-1; positionNoun++){
    
    for( let positionDomains = 0 ; positionDomains <= domains.length-1; positionDomains++){
        console.log(pronoun[positionPronoun]+adj[positionAdj]+noun[positionNoun]+domains[positionDomains]);
    }
}
    }   
    
}



    