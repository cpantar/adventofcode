module.exports = (input) => {
    const directions = input.split('\n').map(x => x.split(" "));
    let horizontal = 0;
    let depth = 0;
    let aim = 0;

    directions.map( x=> {
        if(x[0] == "forward"){
            horizontal = horizontal + parseInt(x[1]);
            depth = depth + (aim * parseInt(x[1]));
        }
        else if(x[0] == "up"){
            aim = aim - parseInt(x[1]);
        }
        else if(x[0] == "down"){
            aim = aim + parseInt(x[1]);
        }
    });

   return horizontal * depth;
};