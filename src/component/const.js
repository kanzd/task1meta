export var api_key="RgtRKBMeUFHU8XvArgL1BleDVfLGCiZ3TCLr9JvS";

export var API_ID=(id)=>{
    return "https://api.nasa.gov/neo/rest/v1/neo/"+id+"?api_key="+api_key;
}
export var newTest = ()=>{
    return "https://api.nasa.gov/neo/rest/v1/neo/3542519?api_key="+api_key;
}
export var FULL_API=()=>{
    return "https://api.nasa.gov/neo/rest/v1/neo/browse?api_key="+api_key;
}