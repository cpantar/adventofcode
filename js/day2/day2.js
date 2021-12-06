module.exports = (input) => {
    const directions = input.split('\n').map(x => x.split(" "));
    let horizontal = 0;
    let vertical = 0;

    directions.map(x=> {
        if(x[0] == "forward"){
            horizontal = horizontal + parseInt(x[1])
        }
        else if(x[0] == "up"){
            vertical = vertical - parseInt(x[1])
        }
        else if(x[0] == "down"){
            vertical = vertical + parseInt(x[1])
        }
    });

    
   return horizontal * vertical
};