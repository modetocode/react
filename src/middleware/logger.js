const loggerMv = store => next => action => {
    console.log(action.type + ' is executed');
}

export default loggerMv;